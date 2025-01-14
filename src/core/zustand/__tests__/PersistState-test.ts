import { PersistStateArray } from '../PersistState';

describe('PersistStateArray', () => {
  it('contains the correct state keys', () => {
    expect(PersistStateArray).toEqual(['isAuth', 'userData', 'isAppLoader']);
  });

  it('has the correct length', () => {
    expect(PersistStateArray).toHaveLength(3);
  });

  it('includes "isAuth"', () => {
    expect(PersistStateArray).toContain('isAuth');
  });

  it('includes "userData"', () => {
    expect(PersistStateArray).toContain('userData');
  });

  it('includes "isAppLoader"', () => {
    expect(PersistStateArray).toContain('isAppLoader');
  });
});
