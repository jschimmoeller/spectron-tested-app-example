const Application = require('spectron').Application;
const path = require('path');


var electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');

if (process.platform === 'win32') {
    electronPath += '.cmd';
}

var appPath = path.join(__dirname, '..');

var app = new Application({
            path: electronPath,
            args: [appPath]
        });
//console.log('The APP: ', app);

describe('Test Example', function () {
  beforeEach(function () {
      return app.start();
  });

  afterEach(function () {
      return app.stop();
  });

  it('opens a window', function () {
    expect.assertions(1);
    return app.client.getWindowCount().then(function (count) {
      console.log('cccc', count)
          expect(count).toEqual(2);
    })
  });

  it('tests the title', function () {
    expect.assertions(1);
    //console.log(app, app.client)
    return app.client.browserWindow.getTitle().then(function (t) {
      console.log('tttttttt', t)
          expect(t).toEqual('Hello World!');
    })
  });
});
