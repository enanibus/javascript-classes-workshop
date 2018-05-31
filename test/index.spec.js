const index = require('../index');

describe('Unit test For logs', () => {
  test('Object must be created', (done) => {
    expect(index).toBeDefined();
    expect(index.helloWorld).toBeDefined();
    done();
  });
});
