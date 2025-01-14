import isEqual from 'lodash.isequal';
import { useMemo, useRef } from 'react';
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

type StyleType = StyleProp<ViewStyle | TextStyle | ImageStyle>;

const useStyle = (stylesArray: StyleType[]): StyleType =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => stylesArray, []);

// Optionally, if you want to do deep comparison using Lodash
const useDeepStyle = (stylesArray: StyleType[]): StyleType => {
  const previousStylesRef = useRef<StyleType[]>(stylesArray);

  return useMemo(() => {
    if (!isEqual(previousStylesRef.current, stylesArray)) {
      previousStylesRef.current = stylesArray;
      return stylesArray;
    }
    return previousStylesRef.current;
  }, [stylesArray]);
};

export { useDeepStyle, useStyle };
