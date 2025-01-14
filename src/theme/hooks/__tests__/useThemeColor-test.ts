import { renderHook } from '@testing-library/react-hooks';

import { Colors } from '~/src/theme/Colors';

import { useThemeColor } from '../useThemeColor';

describe('useThemeColor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns the color from props if provided in light mode', () => {
    jest
      .spyOn(require('react-native'), 'useColorScheme')
      .mockReturnValue('light');

    const { result } = renderHook(() =>
      useThemeColor({ light: 'lightcolor', dark: 'darkcolor' }, 'background'),
    );

    expect(result.current).toBe('lightcolor');
  });

  it('returns the color from props if provided in dark mode', () => {
    jest
      .spyOn(require('react-native'), 'useColorScheme')
      .mockReturnValue('dark');

    const { result } = renderHook(() =>
      useThemeColor({ light: 'lightcolor', dark: 'darkcolor' }, 'background'),
    );

    expect(result.current).toBe('darkcolor');
  });

  it('returns the default color from Colors in light mode when no prop color is provided', () => {
    jest
      .spyOn(require('react-native'), 'useColorScheme')
      .mockReturnValue('light');

    const { result } = renderHook(() => useThemeColor({}, 'background'));

    expect(result.current).toBe(Colors.light.background);
  });

  it('returns the default color from Colors in dark mode when no prop color is provided', () => {
    jest
      .spyOn(require('react-native'), 'useColorScheme')
      .mockReturnValue('dark');

    const { result } = renderHook(() => useThemeColor({}, 'background'));

    expect(result.current).toBe(Colors.dark.background);
  });

  it('defaults to light mode if useColorScheme returns null', () => {
    jest.spyOn(require('react-native'), 'useColorScheme').mockReturnValue(null);

    const { result } = renderHook(() =>
      useThemeColor({ light: 'lightcolor', dark: 'darkcolor' }, 'background'),
    );

    expect(result.current).toBe('lightcolor');
  });

  it('returns the default color from Colors in light mode if useColorScheme returns null', () => {
    jest.spyOn(require('react-native'), 'useColorScheme').mockReturnValue(null);

    const { result } = renderHook(() => useThemeColor({}, 'background'));

    expect(result.current).toBe(Colors.light.background);
  });
});
