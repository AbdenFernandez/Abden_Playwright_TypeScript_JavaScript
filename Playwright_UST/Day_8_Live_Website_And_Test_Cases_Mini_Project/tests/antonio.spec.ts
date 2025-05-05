import { test, expect } from './antonio.fixture.ts';

test.describe.configure({ mode: 'parallel' });


test.describe('Antonio Web App Tests', () => {
    test.beforeEach(async ({ indexPage }) => {
        await indexPage.navigateToHome;
    });

    test('Verify user is on Index Page', async ({indexPage})  => {

        await indexPage.verifyUserIsOnIndexPage();

    });

    test('Verify user can navigate to Login Page', async ({indexPage, loginPage}) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
    });

    test('Verify user can login with valid credentials', async ({indexPage, loginPage}) =>{
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();

    });

    test('Verify user cannot login with invalid credentials', async ({indexPage, loginPage}) =>{
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password123');
        await loginPage.verifyErrorMessageDisplayed('Invalid credentials, please try again.');
    });

    test('Verify user can navigate to Profile Page', async ({indexPage, loginPage, profilePage})=>{
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.clickProfileIcon();
        await profilePage.verifyUserIsOnProfilePage();

    })
    test('Verify Whether user can logout successfully', async ({indexPage, loginPage, profilePage}) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.clickProfileIcon();
        await profilePage.verifyUserIsOnProfilePage();
        await profilePage.clickOnProfileIcon();
        await profilePage.clickOnLogoutBtn();
        await loginPage.verifyUserIsOnLoginPage();
    })

    test ('Verify user can navigate to Blog Page', async ({indexPage, loginPage, blogPage}) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.navigateToBlogPage();
        await blogPage.verifyUserIsOnBlogPage();

    });

    test ('Verify user can navigate to the full content of a blog post', async ({indexPage, loginPage, blogPage}) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.navigateToBlogPage();
        await blogPage.verifyUserIsOnBlogPage();
    });


});