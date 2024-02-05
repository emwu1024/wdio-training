describe('webdriveruniversity - contact us page', () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });

  it('valid submission - submit all information', async () => {
    await browser.url('https://webdriver.io');
    //first name
    //last name
    //email address
    //message
    //submit button
  });

  it('invalid submission - dont submit all information', () => {
    //first name
    //last name
    //message
    //submit button
  });
});
