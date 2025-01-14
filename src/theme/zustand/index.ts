import { create } from 'zustand';

import { Colors } from '~theme/styles/Colors';

type ThemeType = 'light' | 'dark';

interface ThemeState {
  colors: (typeof Colors)['light'] | (typeof Colors)['dark'];
  themeType: ThemeType;
  setColors: (newColors: Partial<ThemeState['colors']>) => void;
  switchTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<ThemeState>(set => ({
  themeType: 'light',
  colors: Colors.light,
  setColors: newColors =>
    set(state => ({
      colors: { ...state.colors, ...newColors },
    })),
  switchTheme: (theme: ThemeType) =>
    set(() => ({
      themeType: theme,
      colors: theme === 'light' ? Colors.light : Colors.dark,
    })),
}));
