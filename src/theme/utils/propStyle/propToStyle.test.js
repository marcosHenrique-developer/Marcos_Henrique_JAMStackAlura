import propToStyle from './index';

describe('propToStyle()', () => {
  describe('when it receives a single argument', () => {
    describe('it should return a style object', () => {
      test('if the argument is a string', () => {
        const componentProps = { textAlign: 'flex' };

        const resultingFunction = propToStyle(componentProps);
        const resultingStyle = resultingFunction(resultingFunction);
        expect(resultingStyle).toEqual(componentProps);
      });
    });
  });
});
