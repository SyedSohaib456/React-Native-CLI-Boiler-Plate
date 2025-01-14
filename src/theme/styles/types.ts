import type { PickByValue } from '~core/utils/types';

import type { Colors } from './Colors';

export interface IFontType {
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  letterSpacing?: number;
}

export interface IThemeFonts {
  h1: IFontType;
  h1Bold: IFontType;
  h2: IFontType;
  h3: IFontType;
  h4: IFontType;
  h5: IFontType;
  sh1: IFontType;
  sh1Light: IFontType;
  sh2: IFontType;
  sh2Light: IFontType;
  sh4?: IFontType;
  sh5: IFontType;
  sh6: IFontType;
  sh2light: IFontType;
  sh4light: IFontType;
  st1: IFontType;
  st1_2: IFontType;
  st1_3: IFontType;
  st2: IFontType;
  st3: IFontType;
  st4: IFontType;
  rewardH3: IFontType;
  st5: IFontType;
  st2Ext: IFontType;
  ralewayMedium: IFontType;
  st2Med: IFontType;
  textLink: IFontType;
  textLink1: IFontType;
  textLink2: IFontType;
  numberPoints: IFontType;
  body0: IFontType;
  body0_0: IFontType;
  body1: IFontType;
  body1Medium: IFontType;
  body2: IFontType;
  body2Plus: IFontType;
  body2Medium: IFontType;
  body3Medium: IFontType;
  body2Light: IFontType;
  body3: IFontType;
  body4: IFontType;
  body5?: IFontType;
  body8?: IFontType;
  num1: IFontType;
  num2: IFontType;
  num3: IFontType;
  btn1: IFontType;
  btn2: IFontType;
  btn3: IFontType;
  btn4: IFontType;
  nav: IFontType;
  fieldError: IFontType;
  text1: IFontType;
  text2: IFontType;
  text3: IFontType;
  text4: IFontType;
  text12: IFontType;
  text14: IFontType;
  text15: IFontType;
  text16: IFontType;
  text16_5: IFontType;
  text17: IFontType;
  text17_2: IFontType;
  text18: IFontType;
  text19: IFontType;
  text19_2: IFontType;
  text20: IFontType;
  text21: IFontType;
  text22: IFontType;
  text24: IFontType;
  text28: IFontType;
  text30: IFontType;
  text31: IFontType;
  text32: IFontType;
  text36: IFontType;
  text38: IFontType;
  text40: IFontType;
  text36NormalLeading: IFontType;
  fontMedium: IFontType;
  fontLight: IFontType;
  fontRegular: IFontType;
  fontSemiBold: IFontType;
  fontBold: IFontType;
  fontExtraBold: IFontType;
  lineHeight14: IFontType;
  lineHeight16: IFontType;
  lineHeight17: IFontType;
  lineHeight20: IFontType;
  lineHeight21: IFontType;
  lineHeight22: IFontType;
  lineHeight23: IFontType;
  lineHeight24: IFontType;
  lineHeight24_5: IFontType;
  lineHeight25: IFontType;
  lineHeight26: IFontType;
  lineHeight28: IFontType;
  lineHeight31: IFontType;
  lineHeight32: IFontType;
  lineHeight36: IFontType;
  trackingWideText: IFontType;
  textWhite: IFontType;
  iconText: IFontType;
  body6: IFontType;
  body6_1: IFontType;
  body6_2: IFontType;
  h5_1: IFontType;
}

export type ColorType = keyof PickByValue<typeof Colors, string>;
