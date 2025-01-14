import { useThemeStore } from '~theme/zustand';

export const getThemeColors = () => {
  const store = useThemeStore.getState();
  return store?.colors;
};
