import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { getThemeColors } from '~core/actions/AppAction';

import type { IThemeFonts } from './types';

const Colors = getThemeColors();

export const getDimensions = {
  height: hp('100%'),
};

export const FontSize = {
  font: hp('2.5'), // 16
  h1: hp('2.6'), // 22
  h2: hp('5.7'), // 48
  h3: hp('2.3'), // 18
  h4: hp('4.6'), // 36
  h5: hp('2.6'), // 22
  sh1: hp('2.35'), // 20
  sh2: hp('2.3'), // 18
  sh3: hp('2.4'), // 20
  sh4: hp('2.2'), // 20
  st1: hp('1.65'), // 14
  st1_2: hp('1.85'), // 16
  st2: hp('1.9'), // 16
  st3: hp('1.65'), // 14
  st4: hp('2.3'), // 18
  numberPoints: hp('5'),
  body0: hp('1.6'), // 14
  body1: hp('1.75'), // 14
  body2: hp('1.75'), // 14
  body2Plus: hp('1.73'),
  body3: hp('1.43'), // 12
  body4: hp('1.9'), // 16
  body5: hp('1.65'), // 12
  body5_1: hp('1.55'), // 12
  btn1: hp('1.9'), // 16
  btn2: hp('1.65'), // 14
  btn3: hp('1.65'), // 14
  textLink1: hp('1.6'), // 14
  textLink2: hp('2.6'), // 22
  nav: hp('1.9'), // 14
  num1: hp('3.0'),
  num2: hp('2.0'),
  num3: hp('1.0'),
  text1: hp('1.43'), // 12
  text2: hp('2'), // 18
  text3: hp('4.15'), // 18
  text4: hp('1.33'), // 14
  textXs: hp('1.15'), // 12
  textBase: hp('1.5'), // base 16
  textLg: hp('1.72'), // base 18
  textXl: hp('1.90'), // xl 20
  text21: hp('2'),
  text22: hp('2.10'),
  text2Xl: hp('2.30'), // 2xl 24
  text3Xl: hp('2.75'), // 3xl 30
  text4Xl: hp('3.26'), // 4xl 36
  text16_5: hp('1.55'),
  text17: hp('1.65'),
  text17_2: hp('1.67'),
  text19: hp('1.78'),
  text19_2: hp('1.80'),
  text28: hp('2.40'),
  text31: hp('2.85'),
  text32: hp('3'),
  text38: hp('3.60'),
  text40: hp('4'),
  fieldError: hp('1.6'),

  text14: hp('1.35'), // used in text14
  text15: hp('1.45'),
};

const fontConfig: IThemeFonts = {
  h1: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.h1,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  h1Bold: {
    fontFamily: 'manropebold',
    fontSize: FontSize.h1,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  h2: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.h2,
    fontWeight: '400',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  h3: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.h3,
    fontWeight: '300',
    color: Colors.black,
    letterSpacing: 0.3,
  },
  h4: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.h4,
    fontWeight: '400',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  h5: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.h1,
    color: Colors.white,
    letterSpacing: 0.3,
  },
  h5_1: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.sh4,
    color: Colors.white,
    letterSpacing: 0.3,
  },
  sh1: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.sh1,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  sh1Light: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.sh1,
    color: Colors.primaryDarkBlue,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  sh2: {
    fontFamily: 'manropebold',
    fontSize: FontSize.sh2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  sh2Light: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.sh2,
    fontWeight: '400',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  st2Ext: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.sh2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  sh5: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.sh3,
    color: Colors.primaryDarkBlue,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  sh2light: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.sh2,
    fontWeight: '300',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  sh4light: {
    fontFamily: 'manropelight',
    fontSize: FontSize.sh2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  sh6: {
    fontFamily: 'manropelight',
    fontSize: FontSize.sh3,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  st1: {
    fontFamily: 'manropebold',
    fontSize: FontSize.st1,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  st1_2: {
    fontFamily: 'manropebold',
    fontSize: FontSize.st2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  st1_3: {
    fontFamily: 'manropebold',
    fontSize: FontSize.st1_2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  st2: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.st2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  st3: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.st3,
    color: Colors.grayText,
    letterSpacing: 0.3,
  },
  st4: {
    fontFamily: 'manropebold',
    fontSize: FontSize.btn3,
    fontWeight: '600',
    color: Colors.grayText,
    letterSpacing: 0.3,
  },
  st5: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.st4,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  st2Med: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.st2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  numberPoints: {
    fontFamily: 'manropebold',
    fontSize: FontSize.numberPoints,
    color: Colors.grayText,
    letterSpacing: 0.2,
  },
  body1Medium: {
    fontFamily: 'manroperegular',
    fontSize: FontSize.body1,
    fontWeight: '500',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  body0: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.body0,
    // fontWeight: '400',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  body0_0: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.body0,
    // fontWeight: '400',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0,
  },
  body1: {
    fontFamily: 'manroperegular',
    fontSize: FontSize.body1,
    fontWeight: '400',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  body2: {
    fontFamily: 'manropemedium',
    fontWeight: 'normal',
    fontSize: FontSize.body2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  body2Plus: {
    fontFamily: 'manropemedium',
    fontWeight: 'normal',
    fontSize: FontSize.body2Plus,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  body2Medium: {
    fontFamily: 'manropemedium',
    fontWeight: '600',
    fontSize: FontSize.body2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  body6: {
    fontFamily: 'manropemedium',
    fontWeight: 'bold',
    fontSize: FontSize.body1,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  body6_1: {
    fontFamily: 'manropebold',
    fontSize: FontSize.body3,
    color: Colors.grayText,
    letterSpacing: 0.2,
  },
  body6_2: {
    fontFamily: 'manropebold',
    fontSize: FontSize.body0,
    color: Colors.grayText,
    letterSpacing: 0.2,
  },
  body3Medium: {
    fontFamily: 'manropemedium',
    fontWeight: '600',
    fontSize: FontSize.st2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.6,
  },
  body2Light: {
    fontFamily: 'manropemedium',
    fontWeight: '400',
    fontSize: FontSize.body2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.4,
  },
  body3: {
    fontFamily: 'manropemedium',
    fontWeight: '600',
    fontSize: FontSize.body5,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.4,
  },
  body4: {
    fontFamily: 'manroperegular',
    fontSize: FontSize.body4,
    fontWeight: '400',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  num1: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.num1,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.4,
  },
  num2: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.num2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  num3: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.num3,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  btn1: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.btn1,
    color: Colors.grayText,
    letterSpacing: 0.3,
  },
  btn2: {
    fontFamily: 'manropebold',
    fontSize: FontSize.btn2,
    fontWeight: '400',
    color: Colors.grayText,
    letterSpacing: 0.3,
  },
  btn3: {
    fontFamily: 'manropebold',
    fontSize: FontSize.btn3,
    fontWeight: '400',
    color: Colors.grayText,
    letterSpacing: 0.3,
  },
  btn4: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.btn2,
    color: Colors.grayText,
    letterSpacing: 0.3,
  },
  nav: {
    fontFamily: 'manroperegular',
    fontSize: FontSize.nav,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  textLink: {
    fontFamily: 'manropebold',
    fontSize: FontSize.nav,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  textLink1: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.textLink1,
    fontWeight: 'bold',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  iconText: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.textLink1,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  textLink2: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.textLink2,
    fontWeight: '900',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.3,
  },
  text1: {
    fontFamily: 'manropebold',
    fontSize: FontSize.text4,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  text2: {
    fontSize: FontSize.text2,
  },
  text3: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.text2,
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  text4: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.text2,
    // fontWeight: '600',
    color: Colors.grayText,
    letterSpacing: 0.3,
  },
  // Font Sizes according tailwind
  text12: {
    fontSize: FontSize.textXs, // equilvant to text-xs tailwind
  },
  text14: {
    fontSize: FontSize.text14, // equilvant to text-sm tailwind
  },
  text15: {
    fontSize: FontSize.text15,
  },
  text16: {
    fontSize: FontSize.textBase, // equilvant to text-base tailwind
  },
  text16_5: {
    fontSize: FontSize.text16_5, // equilvant to text-base tailwind
  },
  text17: {
    fontSize: FontSize.text17,
  },
  text17_2: {
    fontSize: FontSize.text17_2,
  },
  text18: {
    fontSize: FontSize.textLg, // equilvant to text-lg tailwind
  },
  text19: {
    fontSize: FontSize.text19,
  },
  text19_2: {
    fontSize: FontSize.text19_2,
  },
  text20: {
    fontSize: FontSize.textXl, // equilvant to text-xl tailwind
  },
  text21: {
    fontSize: FontSize.text21,
  },
  text22: {
    fontSize: FontSize.text22,
  },
  text24: {
    fontSize: FontSize.text2Xl, // equilvant to text-2xl tailwind
  },
  text28: {
    fontSize: FontSize.text28,
  },
  text30: {
    fontSize: FontSize.text3Xl, // equilvant to text-3xl tailwind
  },
  text31: {
    fontSize: FontSize.text31,
  },
  text32: {
    fontSize: FontSize.text32,
  },

  text36: {
    fontSize: FontSize.text4Xl, // equilvant to text-4xl tailwind
  },
  text38: {
    fontSize: FontSize.text38,
  },
  text40: {
    fontSize: FontSize.text40,
  },
  text36NormalLeading: {
    fontSize: FontSize.text4Xl, // equilvant to text-4xl tailwind
    lineHeight: FontSize.text4Xl * 1.5,
  },

  // Font Family and Weight
  fontLight: {
    fontFamily: 'manropelight',
  },
  fontRegular: {
    fontFamily: 'manroperegular',
  },
  fontMedium: {
    fontFamily: 'manropemedium',
  },
  fontSemiBold: {
    fontFamily: 'manropesemibold',
  },
  fontBold: {
    fontFamily: 'manropebold',
  },
  fontExtraBold: {
    fontFamily: 'manropeextrabold',
  },

  // line height
  lineHeight14: {
    lineHeight: 14, // equilvant to leading-4 tailwind
  },
  lineHeight16: {
    lineHeight: 16,
  },
  lineHeight17: {
    lineHeight: 17,
  },
  lineHeight20: {
    lineHeight: 20, // equilvant to leading-5 tailwind
  },
  lineHeight21: {
    lineHeight: 21,
  },
  lineHeight22: {
    lineHeight: 22,
  },
  lineHeight23: {
    lineHeight: 23,
  },
  lineHeight24: {
    lineHeight: 24, // equilvant to leading-6 tailwind
  },
  lineHeight24_5: {
    lineHeight: 24.5,
  },
  lineHeight25: {
    lineHeight: 25,
  },
  lineHeight26: {
    lineHeight: 26,
  },
  lineHeight28: {
    lineHeight: 28, // equilvant to leading-7 tailwind
  },
  lineHeight31: {
    lineHeight: 31,
  },
  lineHeight32: {
    lineHeight: 32, // equilvant to leading-8 tailwind
  },
  lineHeight36: {
    lineHeight: 36, // equilvant to leading-9 tailwind
  },

  // letter spacing
  trackingWideText: {
    letterSpacing: 0.2,
  },

  textWhite: {
    color: Colors.white,
  },
  ralewayMedium: {
    fontFamily: 'manropemedium',
    fontSize: FontSize.body1,
    fontWeight: '500',
    color: Colors.primaryDarkBlue,
    letterSpacing: 0.2,
  },
  fieldError: {
    fontFamily: 'manropeextrabold',
    fontSize: FontSize.fieldError,
    color: Colors.error,
    letterSpacing: 0.2,
  },
  rewardH3: {
    fontFamily: 'manropebold',
    fontSize: FontSize.body4,
    color: Colors.black,
    letterSpacing: 0.3,
  },
};

export default fontConfig;
