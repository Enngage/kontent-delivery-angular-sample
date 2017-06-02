import { KenticoCloudSampleAngularAppPage } from './app.po';

describe('kentico-cloud-sample-angular-app App', () => {
  let page: KenticoCloudSampleAngularAppPage;

  beforeEach(() => {
    page = new KenticoCloudSampleAngularAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
