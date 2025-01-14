import { StyleSheet } from 'react-native';

// import {COLORS} from './Colors';

export const Elevation = StyleSheet.create({
  // Bottom
  bottom80: {
    // shadowColor: COLORS.TransparentBlack['80'],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 8,
  },
  bottom60: {
    // shadowColor: COLORS.TransparentBlack['64'],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 8,
  },
  bottom40: {
    // shadowColor: COLORS.TransparentBlack['48'],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 8,
  },
  bottom20: {
    // shadowColor: COLORS.TransparentBlack['24'],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
  },
  bottom8: {
    // shadowColor: COLORS.Base.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 7,
    elevation: 5,
  },

  // Top
  top80: {
    // shadowColor: COLORS.TransparentBlack['80'],
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 8,
  },
  top60: {
    // shadowColor: COLORS.TransparentBlack['64'],
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 8,
  },
  top40: {
    // shadowColor: COLORS.TransparentBlack['48'],
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 8,
  },
  top20: {
    // shadowColor: COLORS.TransparentBlack['24'],
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
  },
  top8: {
    // shadowColor: COLORS.TransparentBlack['08'],
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 2,
  },
  shadow: {
    elevation: 5,
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowColor: '#414042',
    shadowOffset: {
      height: 18,
      width: 0,
    },
  },
});
