// import { useThemeStore } from '~/src/theme/zustand';
// export const useTheme = () => {
//   const { colors, setColors } = useThemeStore();
//   const updateColor = (key: keyof typeof colors, value: string) => {
//     setColors({ [key]: value });
//   };
//   return {
//     colors,
//     updateColor,
//   };
// };
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { getThemeColors } from '~core/actions/AppAction';

import Typography from './styles/Typography';
import { useThemeStore } from './zustand';

const ThemeContext = React.createContext({
  fonts: Typography,
  colors: getThemeColors(),
});

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const systemColorScheme = useColorScheme();
  const { colors, switchTheme } = useThemeStore();

  useEffect(() => {
    if (systemColorScheme) {
      switchTheme(systemColorScheme ?? 'light');
    }
  }, [systemColorScheme, switchTheme]);

  const themeData = React.useMemo(() => {
    const theme = { fonts: Typography, colors };
    return theme;
  }, [colors]);

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
