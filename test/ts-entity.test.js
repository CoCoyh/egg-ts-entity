'use strict';

const mock = require('egg-mock');

describe('test/ts-entity.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/ts-entity-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, tsEntity')
      .expect(200);
  });
});
