/* eslint-disable max-lines-per-function */
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { getThemeColors } from '~core/actions/AppAction';

import Spacing from './Spacing';

const screenSize = wp('100%') + hp('100%');

const Colors = getThemeColors();

// eslint-disable-next-line consistent-return
function handleMargins(margin: number | Array<number>) {
  if (typeof margin === 'number') {
    return {
      marginTop: margin,
      marginRight: margin,
      marginBottom: margin,
      marginLeft: margin,
    };
  }

  if (typeof margin === 'object') {
    const marginSize = Object.keys(margin).length;
    switch (marginSize) {
      case 1:
        return {
          marginTop: margin[0],
          marginRight: margin[0],
          marginBottom: margin[0],
          marginLeft: margin[0],
        };
      case 2:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[0],
          marginLeft: margin[1],
        };
      case 3:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[2],
          marginLeft: margin[1],
        };
      default:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[2],
          marginLeft: margin[3],
        };
    }
  }
}

// eslint-disable-next-line consistent-return
function handlePaddings(padding: number | Array<number>) {
  if (typeof padding === 'number') {
    return {
      paddingTop: padding,
      paddingRight: padding,
      paddingBottom: padding,
      paddingLeft: padding,
    };
  }

  if (typeof padding === 'object') {
    const paddingSize = Object.keys(padding).length;
    switch (paddingSize) {
      case 1:
        return {
          paddingTop: padding[0],
          paddingRight: padding[0],
          paddingBottom: padding[0],
          paddingLeft: padding[0],
        };
      case 2:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[0],
          paddingLeft: padding[1],
        };
      case 3:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[2],
          paddingLeft: padding[1],
        };
      default:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[2],
          paddingLeft: padding[3],
        };
    }
  }
}

function commonUtils() {
  return StyleSheet.create({
    /* Column Layouts */
    column: {
      flexDirection: 'column',
    },
    columnReverse: {
      flexDirection: 'column-reverse',
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colVCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    /* Row Layouts */
    row: {
      flexDirection: 'row',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    rowHCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    /* Default Layouts */
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    alignItemsEnd: {
      alignItems: 'flex-end',
    },
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentEvenly: {
      justifyContent: 'space-evenly',
    },
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    justifyContentEnd: {
      justifyContent: 'flex-end',
    },
    justifyContentStart: {
      justifyContent: 'flex-start',
    },
    selfStretch: {
      alignSelf: 'stretch',
    },
    alignSelfStart: {
      alignSelf: 'flex-start',
    },
    alignSelfEnd: {
      alignSelf: 'flex-end',
    },
    alignSelfCenter: {
      alignSelf: 'center',
    },
    /* Sizes Layouts */
    noFlex: {
      flex: 0,
    },
    flexWrap: {
      flexWrap: 'wrap',
    },
    fill: {
      flex: 1,
    },
    flex1: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '0%',
    },
    flex1_2: {
      flex: 1.2,
    },
    flex2: {
      flex: 2,
    },
    flex3: {
      flex: 3,
    },
    flex4: {
      flex: 4,
    },
    flex5: {
      flex: 5,
    },
    noShrink: {
      flexShrink: 0,
    },
    flexGrow1: {
      flexGrow: 1,
    },
    flexGrow2: {
      flexGrow: 2,
    },
    flexGrow3: {
      flexGrow: 3,
    },
    flexGrow4: {
      flexGrow: 4,
    },
    flexGrow5: {
      flexGrow: 5,
    },
    noGrow: {
      flexGrow: 0,
    },
    fullSize: {
      height: '100%',
      width: '100%',
    },
    widthAuto: {
      width: 'auto',
    },
    fullWidth: {
      width: '100%',
    },
    width75: {
      width: '75%',
    },
    width77: {
      width: '77%',
    },
    width80: {
      width: '80%',
    },
    width85: {
      width: '85%',
    },
    width87: {
      width: '88%',
    },
    width90: {
      width: '90%',
    },
    width91_6: {
      width: '91.666667%',
    },
    width95: {
      width: '95%',
    },
    width96: {
      width: '96%',
    },
    width97: {
      width: '97%',
    },
    width98: {
      width: '98%',
    },
    width99: {
      width: '99%',
    },
    halfWidth: {
      width: '50%',
    },
    quaterWidth: {
      width: '30%',
    },
    quaterWidthplus: {
      width: '40%',
    },
    width3: {
      width: 3,
    },
    width4: {
      width: 4,
    },
    width5: {
      width: 5,
    },
    width6: {
      width: 6,
    },
    width8: {
      width: 8,
    },
    height1: {
      height: 1,
    },
    height1_2: {
      height: 1.2,
    },
    height1_3: {
      height: 1.3,
    },
    height1_4: {
      height: 1.4,
    },
    height1_5: {
      height: 1.5,
    },
    height2: {
      height: 2,
    },
    height3: {
      height: 3,
    },
    height4: {
      height: 4,
    },
    height5: {
      height: 5,
    },
    fullHeight: {
      height: '100%',
    },
    halfHeight: {
      height: '50%',
    },
    /* Operation Layout */

    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textCapital: {
      textTransform: 'capitalize',
    },
    textUpper: {
      textTransform: 'uppercase',
    },
    negativeZindex: {
      zIndex: -1,
    },
    positiveZindex: {
      zIndex: 1,
    },
    positionAbsolute: {
      position: 'absolute',
    },
    positionRelative: {
      position: 'relative',
    },
    insetX0: {
      left: 0,
      right: 0,
    },
    overflowHidden: {
      overflow: 'hidden',
    },
    overflowScroll: {
      overflow: 'scroll',
    },
    overflowVisible: {
      overflow: 'visible',
    },
    borderSolid: {
      borderStyle: 'solid',
    },
    borderW0: {
      borderWidth: 0,
    },
    borderW1: {
      borderWidth: 1,
    },
    borderTopW1: {
      borderTopWidth: 1,
    },
    borderBottomW1: {
      borderBottomWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
    },
    borderBottomW2: {
      borderBottomWidth: 2,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
    },
    border: {
      borderWidth: 2,
      borderColor: '#000',
    },
    lightWhiteBorder: {
      borderWidth: 2,
      borderColor: Colors.lightWhiteBorder,
    },
    lightWhiteBlackBorder: {
      borderWidth: 0.7,
      borderColor: Colors.lightWhiteBlackBorder,
    },
    borderRadius1: {
      borderRadius: wp('1%'),
    },
    borderRadius1_5: {
      borderRadius: wp('1.5%'),
    },
    borderRadius2: {
      borderRadius: wp('2%'),
    },
    borderLeftRadius2: {
      borderTopLeftRadius: wp('2%'),
      borderBottomLeftRadius: wp('2%'),
    },
    borderRightRadius2: {
      borderTopRightRadius: wp('2%'),
      borderBottomRightRadius: wp('2%'),
    },
    borderRadius3: {
      borderRadius: wp('3%'),
    },
    borderRadius4: {
      borderRadius: wp('4%'),
    },
    borderRadius5: {
      borderRadius: wp('5%'),
    },
    borderTopRadius4: {
      borderTopRightRadius: wp('4%'),
      borderTopLeftRadius: wp('4%'),
    },
    borderTopRadius5: {
      borderTopRightRadius: wp('5%'),
      borderTopLeftRadius: wp('5%'),
    },
    borderBottomRadius5: {
      borderBottomRightRadius: wp('5%'),
      borderBottomLeftRadius: wp('5%'),
    },
    borderTopRadius6: {
      borderTopRightRadius: wp('6%'),
      borderTopLeftRadius: wp('6%'),
    },
    borderRadius6: {
      borderRadius: wp('6%'),
    },
    borderRadius7: {
      borderRadius: wp('7%'),
    },
    borderRadius8: {
      borderRadius: wp('8%'),
    },
    borderTopRadius8: {
      borderTopLeftRadius: wp('8%'),
      borderTopRightRadius: wp('8%'),
    },
    borderRadius9: {
      borderRadius: wp('9%'),
    },
    borderRadius10: {
      borderRadius: wp('10%'),
    },
    borderRadius11: {
      borderRadius: wp('11%'),
    },
    borderRadius12: {
      borderRadius: wp('12%'),
    },
    borderRadius13: {
      borderRadius: wp('13%'),
    },
    borderRadius14: {
      borderRadius: wp('14%'),
    },
    borderRadius15: {
      borderRadius: wp('15%'),
    },
    borderRadius16: {
      borderRadius: wp('16%'),
    },
    borderRadius50: {
      borderRadius: wp('50%'),
    },
    borderImage: {
      borderWidth: 3.5,
      padding: 2,
      // borderColor: Colors.primaryMediumBlue,
    },
    top0: {
      top: 0,
    },
    top0_5: {
      top: Spacing.V0_5,
    },
    top: {
      top: Spacing.V1,
    },
    top1_1: {
      top: Spacing.V1_1,
    },
    top1_3: {
      top: Spacing.V1_3,
    },
    top2: {
      top: Spacing.V2,
    },
    top2_5: {
      top: Spacing.V2_5,
    },
    top2_6: {
      top: Spacing.V2_6,
    },
    top3: {
      top: Spacing.V3,
    },
    top4: {
      top: Spacing.V4,
    },
    top5: {
      top: Spacing.V5,
    },
    top6: {
      top: Spacing.V6,
    },
    top7: {
      top: Spacing.V7,
    },
    top8: {
      top: Spacing.V8,
    },
    topN8: {
      top: -Spacing.V6_8,
    },
    top9: {
      top: Spacing.V9,
    },
    top10_3: {
      top: Spacing.V10_3,
    },
    top11: {
      top: Spacing.V11,
    },
    top12: {
      top: Spacing.V12,
    },
    top13: {
      top: Spacing.V13,
    },
    top14: {
      top: Spacing.V14,
    },
    right0: {
      right: 0,
    },
    right: {
      right: Spacing.H2,
    },
    right2: {
      right: Spacing.H8_5,
    },
    bottom0: {
      bottom: 0,
    },
    bottom: {
      bottom: Spacing.V1,
    },
    bottom0_3: {
      bottom: Spacing.V0_3,
    },
    bottom0_5: {
      bottom: Spacing.V0_5,
    },
    bottom2: {
      bottom: Spacing.V2,
    },
    bottomV2_2: {
      bottom: Spacing.V2_2,
    },
    bottom1: {
      bottom: 4,
    },
    bottom2_3: {
      bottom: Spacing.V2_3,
    },
    bottom2_5: {
      bottom: Spacing.V2_5,
    },
    bottom3: {
      bottom: Spacing.V3,
    },
    bottom3_9: {
      bottom: Spacing.V3_9,
    },
    bottom4: {
      bottom: Spacing.V4,
    },
    bottom4_1: {
      bottom: Spacing.V4_1,
    },
    bottom4_2: {
      bottom: Spacing.V4_2,
    },
    bottom4_5: {
      bottom: Spacing.V4_5,
    },
    bottom1_41_neg: {
      bottom: Spacing.V1_41_neg,
    },
    bottom2_6_neg: {
      bottom: Spacing.V2_6_neg,
    },
    bottom5: {
      bottom: Spacing.V5,
    },
    bottom6: {
      bottom: Spacing.V6,
    },
    bottom7: {
      bottom: Spacing.V7,
    },
    bottom8: {
      bottom: Spacing.V8,
    },
    bottom9: {
      bottom: Spacing.V9,
    },
    bottom10: {
      bottom: Spacing.V10,
    },
    bottom10_5: {
      bottom: Spacing.V10_5,
    },
    bottom11: {
      bottom: Spacing.V11,
    },
    bottom12: {
      bottom: Spacing.V12,
    },
    bottom13: {
      bottom: Spacing.V13,
    },
    bottom14: {
      bottom: Spacing.V14,
    },
    bottom15: {
      bottom: Spacing.V15,
    },
    bottom16: {
      bottom: Spacing.V16,
    },
    bottom18: {
      bottom: Spacing.V18,
    },
    bottom19: {
      bottom: Spacing.V19,
    },
    bottom20: {
      bottom: Spacing.V20,
    },
    bottom20_5: {
      bottom: Spacing.V20_5,
    },
    bottom21: {
      bottom: Spacing.V21,
    },
    bottom21_5: {
      bottom: Spacing.V21_5,
    },
    bottom28: {
      bottom: Spacing.V28,
    },
    bottom30: {
      bottom: Spacing.V22,
    },
    bottom60: {
      bottom: 40,
    },
    bottom40: {
      bottom: 40,
    },
    left0: {
      left: 0,
    },
    left: {
      left: Spacing.H2,
    },
    left2_5: {
      left: Spacing.H2_5,
    },
    left3_5: {
      left: Spacing.H3_5,
    },
    left8: {
      left: Spacing.H7,
    },
    left12: {
      left: Spacing.H12,
    },

    size20: {
      width: wp('20%'),
      height: hp('9%'),
    },
    width10: {
      width: '10%',
    },
    width11: {
      width: '11%',
    },
    width13: {
      width: '13%',
    },
    width15: {
      width: '15%',
    },
    width17: {
      width: '17%',
    },
    width20: {
      width: '20%',
    },
    width23: {
      width: '23%',
    },
    width24: {
      width: '24%',
    },
    width25: {
      width: '25%',
    },
    width30: {
      width: '30%',
    },
    width32: {
      width: '32%',
    },
    width35: {
      width: '35%',
    },
    width40: {
      width: '40%',
    },
    width42: {
      width: '42%',
    },
    width45: {
      width: '45%',
    },
    width50: {
      width: '50%',
    },
    width56: {
      width: '56%',
    },
    width60: {
      width: '60%',
    },
    width65: {
      width: '65%',
    },
    width67: {
      width: '67%',
    },
    width70: {
      width: '70%',
    },

    fullHeight77: {
      height: '77%',
    },
    height30: {
      height: '30%',
    },
    height70: {
      height: '70%',
    },
    height_20: {
      height: 20,
    },
    quaterHeight: {
      height: '30%',
    },
    gap1: {
      gap: 4,
    },
    gap1_5: {
      gap: 6,
    },
    gap2: {
      gap: 8,
    },
    gap2_5: {
      gap: 10,
    },
    gap3: {
      gap: 12,
    },
    gap3_5: {
      gap: 15,
    },
    gap4: {
      gap: 16,
    },
    gap6: {
      gap: 22,
    },
    gap10: {
      gap: 37,
    },
    gap16: {
      gap: 64,
    },

    mx1: { marginHorizontal: Spacing.H0_8 }, // equal to mx-4px
    mx5_9: { marginHorizontal: Spacing.H5_9 },
    mx6: { marginHorizontal: Spacing.H5 }, // equal to mx-24px
    mx7: { marginHorizontal: Spacing.H6 }, // equal to mx-32px
    my12: { marginVertical: Spacing.V5_1 }, // equal to my-48px
    my24: { marginVertical: Spacing.V10_3 }, // equal to my-96px
    m0: { margin: 0 },
    m1: { margin: Spacing.H1 },
    m1_1: { margin: Spacing.H1_1 },
    mh1: { marginHorizontal: Spacing.H1_3 },
    m2: { margin: Spacing.H2 },
    m3: { margin: Spacing.H3 },
    m4: { margin: Spacing.H4 },
    m5: { margin: Spacing.H5 },
    mxAuto: { marginHorizontal: 'auto' },
    ml0: { marginLeft: 0 },
    ml0_8: { marginLeft: Spacing.H0_8 },
    ml1: { marginLeft: Spacing.H1 },
    ml2: { marginLeft: Spacing.H2 },
    ml2_5: { marginLeft: Spacing.H2_5 }, // equal to ml-12px
    ml3: { marginLeft: Spacing.H3 },
    ml4: { marginLeft: Spacing.H4 },
    ml5: { marginLeft: Spacing.H5 },
    ml5_9: { marginLeft: Spacing.H5_9 },
    ml6: { marginLeft: Spacing.H6 },
    ml16: { marginLeft: Spacing.H16 },
    ml6_1: { marginLeft: Spacing.H6_1 },
    ml7: { marginLeft: Spacing.H7 },
    ml8: { marginLeft: Spacing.H8 },
    ml10: { marginLeft: Spacing.H10 },
    mr0: { marginRight: 0 },
    mr1: { marginRight: Spacing.H1 },
    mr2: { marginRight: Spacing.H2 },
    mr3: { marginRight: Spacing.H3 }, // equal to mr-24px
    mr3_3: { marginRight: Spacing.H3_3 }, // equal to mr-24px
    mr4: { marginRight: Spacing.H4 },
    mr5: { marginRight: Spacing.H5 },
    mr5_9: { marginRight: Spacing.H5_9 },
    mr7: { marginRight: Spacing.H7 },
    mtAuto: { marginTop: 'auto' },
    mt0: { marginTop: 0 },
    mt0_1: { marginTop: Spacing.V0_1 },
    mt0_2: { marginTop: Spacing.V0_2 },
    mt0_3: { marginTop: Spacing.V0_3 },
    mt0_4: { marginTop: Spacing.V0_4 }, // equal to mt-4px
    mt0_5: { marginTop: Spacing.V0_5 },
    mt0_7: { marginTop: Spacing.V0_7 },
    mt0_8: { marginTop: Spacing.V0_8 }, // equal to mt-8px
    mt0_9: { marginTop: Spacing.V0_9 },
    mt1: { marginTop: Spacing.V1 },
    mt1_1: { marginTop: Spacing.V1_1 }, // equal to mt-12px
    mt1_2: { marginTop: Spacing.V1_2 }, // equal to mt-12px
    mt1_30: { marginTop: Spacing.V1_30 },
    mt1_3: { marginTop: Spacing.V1_3 },
    mt1_6: { marginTop: Spacing.V1_6 },
    mt1_7: { marginTop: Spacing.V1_7 },
    mt1_8: { marginTop: Spacing.V1_8 },
    mt1_9: { marginTop: Spacing.V1_9 },
    mt2: { marginTop: Spacing.V2 }, // mt-20px
    mt2_1: { marginTop: Spacing.V2_1 },
    mt2_2: { marginTop: Spacing.V2_2 },
    mt2_4: { marginTop: Spacing.V2_4 }, // mt-24px
    mt2_5: { marginTop: Spacing.V2_5 },
    mt2_6: { marginTop: Spacing.V2_6 },
    mt2_7: { marginTop: Spacing.V2_7 },
    mt2_9: { marginTop: Spacing.V2_9 }, // near to  mt-28px
    mt3: { marginTop: Spacing.V3 }, // near to  mt-32px
    mt3_2: { marginTop: Spacing.V3_2 },
    mt3_3: { marginTop: Spacing.V3_3 },
    mt3_4: { marginTop: Spacing.V3_4 },
    mt3_5: { marginTop: Spacing.V3_5 },
    mt3_7: { marginTop: Spacing.V3_7 }, // equal to mt-40px
    mt3_8: { marginTop: Spacing.V3_8 },
    mt4: { marginTop: Spacing.V4 },
    mt4_3: { marginTop: Spacing.V4_3 },
    mt4_5: { marginTop: Spacing.V4_5 },
    mt5: { marginTop: Spacing.V5 },
    mt5_3: { marginTop: Spacing.V5_3 },
    mt6: { marginTop: Spacing.V6 },
    mt6_8: { marginTop: Spacing.V6_8 },
    mt6_7: { marginTop: Spacing.V6_7 },
    mt6_74: { marginTop: Spacing.V6_74 },
    mt6_6: { marginTop: Spacing.V6_6 }, // equal to mt-60px
    mt6_5: { marginTop: Spacing.V6_5 }, // equal to mt-60px
    mt6_4: { marginTop: Spacing.V6_4 },
    mt7: { marginTop: Spacing.V7 },
    mt10: { marginTop: Spacing.V10 },
    mt14_5: { marginTop: Spacing.V14_5 },
    mt15: { marginTop: Spacing.V15 },
    mt17: { marginTop: Spacing.V17 },
    mt18: { marginTop: Spacing.V18 },
    mt20: { marginTop: Spacing.V20 },
    mb0: { marginBottom: 0 },
    mb0_4: { marginBottom: Spacing.V0_4 }, // equal to mb-4px
    mb0_5: { marginBottom: Spacing.V0_5 },
    mb0_8: { marginBottom: Spacing.V0_8 }, // equal to mb-8px
    mb1: { marginBottom: Spacing.V1 },
    mb1_2: { marginBottom: Spacing.V1_2 },
    mb1_3: { marginBottom: Spacing.V1_3 },
    mb1_6: { marginBottom: Spacing.V1_6 },
    mb1_7: { marginBottom: Spacing.V1_7 },
    mb2: { marginBottom: Spacing.V2 },
    mb2_1: { marginBottom: Spacing.V2_1 },
    mb2_2: { marginBottom: Spacing.V2_2 },
    mb2_4: { marginBottom: Spacing.V2_4 },
    mb2_5: { marginBottom: Spacing.V2_5 },
    mb2_7: { marginBottom: Spacing.V2_7 },
    mb2_8: { marginBottom: Spacing.V2_8 },
    mb3: { marginBottom: Spacing.V3 }, // equal to mb-32px
    mb3_2: { marginBottom: Spacing.V3_2 },
    mb3_6: { marginBottom: Spacing.V3_6 },
    mb4: { marginBottom: Spacing.V4 },
    mb5: { marginBottom: Spacing.V5 },
    mb6: { marginBottom: Spacing.V6 },
    mb7: { marginBottom: Spacing.V7 },
    mb8: { marginBottom: Spacing.V8 },
    mb10: { marginBottom: Spacing.V12 },
    mb16: { marginBottom: Spacing.V16 },

    mainPadding: {
      paddingHorizontal: Spacing.H5,
    },
    primaryHorizontalPadding: {
      paddingHorizontal: Spacing.H4,
    },
    bottomButtonPadding: {
      paddingHorizontal: Spacing.H5,
    },
    py0_3: { paddingVertical: Spacing.V0_3 },
    py0_4: { paddingVertical: Spacing.V0_4 },
    py0_5: { paddingVertical: Spacing.V0_6 },
    py0_7: { paddingVertical: Spacing.V0_7 },
    py0_8: { paddingVertical: Spacing.V0_8 },
    py0_9: { paddingVertical: Spacing.V0_9 },
    py2: { paddingVertical: Spacing.V1 },
    py2_1: { paddingVertical: Spacing.V1_1 },
    py3: { paddingVertical: Spacing.V1_2 },
    py4: { paddingVertical: Spacing.V1_3 },
    py4_4: { paddingVertical: Spacing.V1_4 },
    py4_6: { paddingVertical: Spacing.V1_6 },
    py4_7: { paddingVertical: Spacing.V1_7 },
    py4_8: { paddingVertical: Spacing.V1_8 },
    py4_9: { paddingVertical: Spacing.V1_9 },
    py5: { paddingVertical: Spacing.V2 }, // equal to py-16px
    py5_1: { paddingVertical: Spacing.V2_1 },
    py5_5: { paddingVertical: Spacing.V2_2 },
    py6: { paddingVertical: Spacing.V2_3 }, // equal to py-26px
    py6_4: { paddingVertical: Spacing.V2_5 },
    py6_46: { paddingVertical: Spacing.V2_6 },
    py6_5: { paddingVertical: Spacing.V3_3 }, // equal to py-30px
    py6_6: { paddingVertical: Spacing.V3_5 },
    py6_8: { paddingVertical: Spacing.V3_8 },
    py7: { paddingVertical: Spacing.V4_5 },
    py8: { paddingVertical: Spacing.V4_8 },
    py9: { paddingVertical: Spacing.V9 },
    px0_8: { paddingHorizontal: Spacing.H0_8 },
    px1: { paddingHorizontal: Spacing.H1 },
    px2: { paddingHorizontal: Spacing.H2 }, // equal to px-8px
    px3: { paddingHorizontal: Spacing.H2_5 },
    px3_2: { paddingHorizontal: Spacing.H3_2 },
    px3_3: { paddingHorizontal: Spacing.H3_3 },
    px4: { paddingHorizontal: Spacing.H4 },
    px4_2: { paddingHorizontal: Spacing.H4_2 },
    px4_9: { paddingHorizontal: Spacing.H4_9 }, // equal to px-20px
    px5: { paddingHorizontal: Spacing.H5 },
    px5_1: { paddingHorizontal: Spacing.H5_1 },
    px5_2: { paddingHorizontal: Spacing.H5_3 },
    px5_8: { paddingHorizontal: Spacing.H5_8 },
    px5_9: { paddingHorizontal: Spacing.H5_9 },
    px5_10: { paddingHorizontal: Spacing.H6 },
    px6_1: { paddingHorizontal: Spacing.H6_1 },
    px6: { paddingHorizontal: Spacing.H5 },
    px7: { paddingHorizontal: Spacing.H5 }, // equal to px-24px

    px7_5: { paddingHorizontal: Spacing.H7 },
    px8: { paddingHorizontal: Spacing.H8_1 },
    px9: { paddingHorizontal: Spacing.H9 },
    px11_4: { paddingHorizontal: Spacing.H11_4 }, // equal to px-56px
    px11_6: { paddingHorizontal: Spacing.H11_6 },
    px12: { paddingHorizontal: Spacing.H12 },
    px12_5: { paddingHorizontal: Spacing.H12_5 },
    px15: { paddingHorizontal: Spacing.H15 },
    px30: { paddingHorizontal: Spacing.H30 },
    px32: { paddingHorizontal: Spacing.H32 },
    p0: { padding: 0 },
    p1: { padding: Spacing.H1 },
    p2: { padding: Spacing.H2 },
    p2_8: { padding: Spacing.H2_8 },
    p3: { padding: Spacing.H3 },
    p3_3: { padding: Spacing.H3_3 }, // equal to p-16px
    p3_8: { padding: Spacing.H3_8 },
    p4: { padding: Spacing.H4 }, // equal to p-20px
    p4_2: { padding: Spacing.H4_2 },
    p4_4: { padding: Spacing.H4_4 },
    p4_6: { padding: Spacing.H4_6 },
    p5: { padding: Spacing.H5 },
    p5_5: { padding: Spacing.H5_5 }, // equal to p-24px
    p8_1: { padding: Spacing.H8_1 },
    pl0: { paddingLeft: 0 },
    pl0_4: { paddingLeft: Spacing.H0_4 },
    pl1: { paddingLeft: Spacing.H1 },
    pl2: { paddingLeft: Spacing.H2 },
    pl2_5: { paddingLeft: Spacing.H2_2 },
    pl3: { paddingLeft: Spacing.H3 },
    pl3_5: { paddingLeft: Spacing.H3_5 },
    pl4: { paddingLeft: Spacing.H4 },
    pl5: { paddingLeft: Spacing.H5 },
    pl6: { paddingLeft: Spacing.H6 },
    pl6_5: { paddingLeft: Spacing.H6_1 }, // equal to pl-32px
    pl7: { paddingLeft: Spacing.H7 },
    pl10: { paddingLeft: Spacing.H10 },
    pr0: { paddingRight: 0 },
    pr1: { paddingRight: Spacing.H1 },
    pr2: { paddingRight: Spacing.H2 },
    pr3: { paddingRight: Spacing.H3 },
    pr4: { paddingRight: Spacing.H4 },
    pr5_5: { paddingRight: Spacing.H5_5 },
    pr5_9: { paddingRight: Spacing.H5_9 },
    pr5: { paddingRight: Spacing.H5 },
    pr6: { paddingRight: Spacing.H6 },
    pr6_1: { paddingRight: Spacing.H6_1 }, // equal to pr-32px
    pr7: { paddingRight: Spacing.H7 },
    pr7_7: { paddingRight: Spacing.H7_7 },
    pt0: { paddingTop: 0 },

    pt0_2: { paddingTop: Spacing.V0_2 },
    pt0_3: { paddingTop: Spacing.V0_3 },
    pt0_4: { paddingTop: Spacing.V0_4 },
    pt0_5: { paddingTop: Spacing.V0_5 },
    pt0_6: { paddingTop: Spacing.V0_6 },
    pt0_8: { paddingTop: Spacing.V0_8 }, // equal to pt-8px
    pt0_9: { paddingTop: Spacing.V0_9 },
    pt1: { paddingTop: Spacing.V1 },
    pt1_1: { paddingTop: Spacing.V1_1 },
    pt1_2: { paddingTop: Spacing.V1_2 }, // equal to pt-14px
    pt1_3: { paddingTop: Spacing.V1_3 }, // equal to pt-14px
    pt1_6: { paddingTop: Spacing.V1_6 },
    pt1_7: { paddingTop: Spacing.V1_7 },
    pt1_8: { paddingTop: Spacing.V1_8 },
    pt1_9: { paddingTop: Spacing.V1_9 },
    pt2: { paddingTop: Spacing.V2 }, // equal to aprox pt-18px
    pt2_2: { paddingTop: Spacing.V2_2 }, // equal to pt-20px
    pt2_3: { paddingTop: Spacing.V2_3 },
    pt2_4: { paddingTop: Spacing.V2_4 },
    pt2_5: { paddingTop: Spacing.V2_5 },
    pt2_6: { paddingTop: Spacing.V2_6 },
    pt2_7: { paddingTop: Spacing.V2_7 },
    pt2_8: { paddingTop: Spacing.V2_8 },
    pt2_9: { paddingTop: Spacing.V2_9 },
    pt3: { paddingTop: Spacing.V3 }, // equal to pt-32px
    pt3_2: { paddingTop: Spacing.V3_2 },
    pt3_3: { paddingTop: Spacing.V3_3 },
    pt3_4: { paddingTop: Spacing.V3_4 },
    pt3_5: { paddingTop: Spacing.V3_5 },
    pt3_7: { paddingTop: Spacing.V3_7 },
    pt3_8: { paddingTop: Spacing.V3_8 },
    pt4: { paddingTop: Spacing.V4 },
    pt4_1: { paddingTop: Spacing.V4_1 },
    pt4_2: { paddingTop: Spacing.V4_2 },
    pt4_4: { paddingTop: Spacing.V4_4 },
    pt5: { paddingTop: Spacing.V5 },
    pt5_5: { paddingTop: Spacing.V5_5 },
    pt6: { paddingTop: Spacing.V6 },
    pt6_5: { paddingTop: Spacing.V6_5 },
    pt7: { paddingTop: Spacing.V7 },
    pt7_7: { paddingTop: Spacing.V7_7 },
    pt15: { paddingTop: Spacing.V15 },
    pb0: { paddingBottom: 0 },
    pb0_2: { paddingBottom: Spacing.V0_2 },
    pb0_3: { paddingBottom: Spacing.V0_3 },
    pb0_4: { paddingBottom: Spacing.V0_4 },
    pb0_5: { paddingBottom: Spacing.V0_5 },
    pb0_6: { paddingBottom: Spacing.V0_6 },
    pb0_7: { paddingBottom: Spacing.V0_7 },
    pb0_8: { paddingBottom: Spacing.V0_8 },
    pb0_9: { paddingBottom: Spacing.V0_9 },
    pb1: { paddingBottom: Spacing.V1 },
    pb1_1: { paddingBottom: Spacing.V1_1 },
    pb1_2: { paddingBottom: Spacing.V1_2 },
    pb1_3: { paddingBottom: Spacing.V1_3 }, // equal to pb-16px
    pb1_6: { paddingBottom: Spacing.V1_6 }, // equal to pb-16px
    pb1_7: { paddingBottom: Spacing.V1_7 },
    pb1_8: { paddingBottom: Spacing.V1_8 },
    pb1_9: { paddingBottom: Spacing.V1_9 },
    pb2: { paddingBottom: Spacing.V2 },
    pb2_1: { paddingBottom: Spacing.V2_1 },
    pb2_2: { paddingBottom: Spacing.V2_2 },
    pb2_3: { paddingBottom: Spacing.V2_3 },
    pb2_5: { paddingBottom: Spacing.V2_5 },
    pb2_6: { paddingBottom: Spacing.V2_6 },
    pb2_7: { paddingBottom: Spacing.V2_7 },
    pb2_8: { paddingBottom: Spacing.V2_8 },
    pb2_9: { paddingBottom: Spacing.V2_9 },
    pb3: { paddingBottom: Spacing.V3 },
    pb3_1: { paddingBottom: Spacing.V3_1 },
    pb3_2: { paddingBottom: Spacing.V3_2 },
    pb3_4: { paddingBottom: Spacing.V3_4 },
    pb3_5: { paddingBottom: Spacing.V3_5 },
    pb3_6: { paddingBottom: Spacing.V3_6 },
    pb3_9: { paddingBottom: Spacing.V3_9 },
    pb4: { paddingBottom: Spacing.V4 },
    pb4_1: { paddingBottom: Spacing.V4_1 },
    pb4_2: { paddingBottom: Spacing.V4_2 },
    pb4_5: { paddingBottom: Spacing.V4_5 },
    pb4_6: { paddingBottom: Spacing.V4_6 },
    pb4_8: { paddingBottom: Spacing.V4_8 },
    pb5: { paddingBottom: Spacing.V5 },
    pb5_4: { paddingBottom: Spacing.V5_4 },
    pb5_5: { paddingBottom: Spacing.V5_5 },
    pb6: { paddingBottom: Spacing.V6 },
    pb6_5: { paddingBottom: Spacing.V6_5 },
    pb7_2: { paddingBottom: Spacing.V7_2 },
    pb7_5: { paddingBottom: Spacing.V7_5 }, // equal to aprox pb-66px
    pb8: { paddingBottom: Spacing.V8 },
    pb9_5: { paddingBottom: Spacing.V9_5 },
    pb10: { paddingBottom: Spacing.V10 },
    pb12: { paddingBottom: Spacing.V12 },
    pb14: { paddingBottom: Spacing.V14 },
    pb15: { paddingBottom: Spacing.V15 },
    pb18: { paddingBottom: Spacing.V18 },
    pb20: { paddingBottom: Spacing.V20 },
    pb21: { paddingBottom: Spacing.V21 },
    pb22: { paddingBottom: Spacing.V22 },

    translateY14: {
      transform: [{ translateY: -Spacing.V5 }],
    },
    translateY11: {
      transform: [{ translateY: -Spacing.V4_7 }],
    },
    translateY12: {
      transform: [{ translateY: -Spacing.V4_5 }],
    },

    tabNavShadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 20,
    },

    tabNavTopBottomShadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 16,
    },
    goldenShadow: {
      shadowColor: Colors.goldenBorder,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 20,
      backgroundColor: Colors.mediumGoldBackground,
    },
    opacity1: {
      opacity: 0.6,
    },
    opacity0_8: {
      opacity: 0.8,
    },

    // colors
    // colorPrimaryDarkGray: { color: Colors.primaryDarkGray },
    // colorPrimaryMediumBlue: { color: Colors.primaryMediumBlue },
    // colorPrimaryMediumGreen: { color: Colors.primaryMediumGreen },
    // colorSecondaryRed: { color: Colors.secondaryRed },
    // colorPrimaryBlue: { color: Colors.primaryBlue },
    // colorsecondaryBackGronnd: { color: Colors.secondaryBackGronnd },
    // colorOecondaryOrange: { color: Colors.secondaryOrange },
    // colorSecondaryMediumGray: { color: Colors.secondaryMediumGray },
    // colorSecondaryLightGray: { color: Colors.secondaryLightGray },
    // colorBorderMedGray: { color: Colors.shadowMedGray },
    // colorCalendarBorderFirst: { color: Colors.calendarBorderFirst },
    // colorCalendarBorderSecond: { color: Colors.calendarBorderSecond },
    // colorSecondaryLightBlue: { color: Colors.secondaryLightBlue },
    // colorSecondaryLightGreen: { color: Colors.secondaryLightGreen },

    underlinedText: {
      textDecorationLine: 'underline',
    },

    // Common Text Colors
    colorWhite: { color: Colors.white },
    colorDarkBlue: { color: Colors.DarkBlue },
    colorPastelBlue: { color: Colors.pastelblue },
    colorGrayText: { color: Colors.grayText },
    colorGreenText: { color: Colors.greenText },
    colorRedText: { color: Colors.redText },
    colorLightHeadingText: { color: Colors.lightHeading },
    colorError: { color: Colors.error },
    colorInfo: { color: Colors.pastelblue },
    colorDisabled: { color: Colors.disabledColor },
    colorUnFocused: { color: Colors.unFocusedBorder },
    colorBlack: { color: '#000000' },

    // common border colors
    blueBorder: {
      borderColor: Colors.blue,
    },
    darkBlueBorder: {
      borderColor: Colors.DarkBlue,
    },
    pastelBlueBorder: {
      borderColor: Colors.pastelblue,
    },
    lightGrayBlackBorder: {
      borderColor: Colors.lightGrayBlackBorder,
    },
    goldenBorder: {
      borderColor: Colors.goldenBorder,
    },
    lightBlackBorder: {
      borderColor: Colors.lightBlackBorder,
    },
    errorBorder: { borderColor: Colors.error },
    blackBorder: {
      borderColor: '#000',
    },
    unFocusedBorder: {
      borderColor: Colors.unFocusedBorder,
    },
    unSelectBorder: {
      borderColor: Colors.unSelectLightGray,
    },
    // backgrounnd

    bgBlack: { backgroundColor: Colors.black },
    lightHeadingBackGrounnd: {
      backgroundColor: Colors.lightHeading,
    },
    skyBlueBackGrounnd: {
      backgroundColor: Colors.skyBlueBackground,
    },
    skyBlueLightBackGrounnd: {
      backgroundColor: Colors.skyBlueLightBackground,
    },
    seaBlueBackground: {
      backgroundColor: Colors.seaBlue,
    },
    darkBlueBackGrounnd: {
      backgroundColor: Colors.DarkBlue,
    },
    pastelBlueBackGrounnd: {
      backgroundColor: Colors.pastelblue,
    },
    colorWhiteBackGrounnd: {
      backgroundColor: Colors.white,
    },
    colorDarkWhiteBackGrounnd: {
      backgroundColor: Colors.whiteDark,
    },
    colorLightBlackBackGrounnd: {
      backgroundColor: Colors.blackLight,
    },
    unfillBackground: {
      backgroundColor: Colors.unfillBackground,
    },
    disabledBackGround: {
      backgroundColor: Colors.disableBGColor,
    },
    bgWhite: {
      backgroundColor: '#fff',
    },
    bgYellowGradient: {
      backgroundColor: Colors.homeGradient[1],
    },
  });
}

const footer = (paddingBottom: number) => ({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  position: 'absolute',
  paddingBottom: CSS.DH(paddingBottom),
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1999,
});

const bgTransparent = () => ({
  backgroundColor: 'transparent',
});

const PressableOpacityStyle =
  (style: StyleProp<ViewStyle> = {}) =>
  ({ pressed }: { pressed: boolean }) =>
    [
      {
        opacity: pressed ? 0.5 : 1,
      },
      style,
    ];

const CSS = {
  screenSize,
  ...commonUtils(),
  Colors,
  footer,
  bgTransparent,
  PressableOpacityStyle,
  space: { ...Spacing },
  DM: handleMargins, // Dynamic margin
  DP: handlePaddings, // Dynamic Padding
  hp,
  wp,
  DH: (height: string | number) => hp(height), // Dynamic Height
  DW: (width: string | number) => wp(width), // Dynamic Width
  // Dynamic Max Min Width, Height
  DMinW: (maxWidth: string | number) => ({ maxWidth: wp(maxWidth) }),
  DMaxW: (minWidth: string | number) => ({ minWidth: wp(minWidth) }),
  DMinH: (maxHeight: string | number) => ({ maxHeight: hp(maxHeight) }),
  DMaxH: (minHeight: string | number) => ({ minHeight: hp(minHeight) }),
  zIndex: (zIndex: string | number) => ({ zIndex }),
};
export default CSS;
