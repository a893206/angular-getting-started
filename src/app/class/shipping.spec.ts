import { Shipping } from './shipping';

describe('Shipping', () => {
  it('should create an instance', () => {
    expect(new Shipping('', 0)).toBeTruthy();
  });
});
