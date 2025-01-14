import { fontFamily } from '../TailwindTheme';

const defaultTheme = require('tailwindcss/defaultTheme');

describe('fontFamily configuration', () => {
  it('includes SpaceMono-Regular with default sans fallback', () => {
    expect(fontFamily.spacemono).toEqual(
      expect.arrayContaining([
        'SpaceMono-Regular.ttf',
        ...defaultTheme.fontFamily.sans,
      ]),
    );
  });

  it('includes Manrope-Bold.ttf', () => {
    expect(fontFamily.manropebold).toEqual(['Manrope-Bold.ttf']);
  });

  it('includes Manrope-ExtraBold.ttf', () => {
    expect(fontFamily.manropeextrabold).toEqual(['Manrope-ExtraBold.ttf']);
  });

  it('includes Manrope-ExtraLight.ttf', () => {
    expect(fontFamily.manropeextralight).toEqual(['Manrope-ExtraLight.ttf']);
  });

  it('includes Manrope-Light.ttf', () => {
    expect(fontFamily.manropelight).toEqual(['Manrope-Light.ttf']);
  });

  it('includes Manrope-Medium.ttf', () => {
    expect(fontFamily.manropemedium).toEqual(['Manrope-Medium.ttf']);
  });

  it('includes Manrope-Regular.ttf', () => {
    expect(fontFamily.manroperegular).toEqual(['Manrope-Regular.ttf']);
  });

  it('includes Manrope-SemiBold.ttf', () => {
    expect(fontFamily.manropesemibold).toEqual(['Manrope-SemiBold.ttf']);
  });
});
