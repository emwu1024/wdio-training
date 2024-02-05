describe('Description of test suite', () => {
  // For code that runs before every single individual test use 'beforeEach' instead
  before(() => {
    console.log('This code will run once before the first test in this block');
  });

  // For code that runs after every single individual test use 'afterEach' instead
  after(() => {
    console.log(
      '...and this code runs once after the last test in this block!'
    );
  });

  it('Individual test 1', () => {
    console.log('Executing Test 1: ');
  });

  it('Individual test 2', () => {
    console.log('Executing Test 2: ');
  });
});
