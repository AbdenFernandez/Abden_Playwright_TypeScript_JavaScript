import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  //await page.getByRole('link', { name: 'Get started1' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



// focus

test.only('focus on this test case', async ({page}) => {

})

// skip
test.skip('skipped test case', async ({page}) => {

})

// conditional skip [apiv1] [project == chrome]
test('meow', async ({page, browserName}) => { 
  test.skip(browserName === 'chromium', 'still working on it')

  // tests
})



test.beforeAll('login', async ({page}) => {
  
  const popup = await page.waitForEvent('popup');

  await popup.waitForFunction(() => {
    // click close btn
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      if(btn.innerText === 'close') {
        btn.click(); // popup will be closed
      }
    });
  })

  // alert(), confirm(), prompt()
  page.on('dialog', dialog => dialog.accept());

  // write the test case
});