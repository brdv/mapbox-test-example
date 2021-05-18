// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-function

export const mockMapOn = jest.fn();
export const mockMapRemove = jest.fn();

jest.mock('mapbox-gl', () => ({
  Map() {
    this.on = mockMapOn;
    this.remove = mockMapRemove;
  }
}));

export default undefined;
