import { test, expect } from './antonio.fixture.ts';

test.describe.configure({ mode: 'parallel' });


test.describe('Antonio Web App Tests', () => {
    test.beforeEach(async ({ indexPage }) => {
        await indexPage.navigateToHome;
    });

    test('Verify user is on Index Page', async ({ indexPage }) => {

        await indexPage.verifyUserIsOnIndexPage();

    });

    test('Verify user can navigate to Login Page', async ({ indexPage, loginPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();

    });

    test('Verify user can login with valid credentials', async ({ indexPage, loginPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();

    });

    test('Verify user cannot login with invalid credentials', async ({ indexPage, loginPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password123');
        await loginPage.verifyErrorMessageDisplayed('Invalid credentials, please try again.');
    });

    test('Verify user can navigate to Profile Page', async ({ indexPage, loginPage, profilePage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.clickProfileIcon();
        await profilePage.verifyUserIsOnProfilePage();

    })
    test('Verify Whether user can logout successfully', async ({ indexPage, loginPage, profilePage }) => {
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

    test('Verify user can navigate to Blog Page', async ({ indexPage, loginPage, blogPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.navigateToBlogPage();
        await blogPage.verifyUserIsOnBlogPage();

    });

    test('Verify user can navigate to the full content of a blog post', async ({ indexPage, loginPage, blogPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.navigateToBlogPage();
        await blogPage.verifyUserIsOnBlogPage();
        await blogPage.userClicksOnReadMoreBtn();
        await blogPage.verifyFullContentOfBlogPostDisplayed();
    });

    test('Verify Popular topics is visible in blog page', async ({ indexPage, loginPage, blogPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.navigateToBlogPage();
        await blogPage.verifyUserIsOnBlogPage();
        await blogPage.verifyPopularTopicsIsVisible();
    });

    test('Verify user can Subscribe to Updates in Blog Page', async ({ indexPage, loginPage, blogPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.navigateToBlogPage();
        await blogPage.verifyUserIsOnBlogPage();
        await blogPage.verifyUserSubscribeToUpdates('abdenfernan@gmail.com');
        await blogPage.verifyUserIsOnBlogPage();
    });

    test('Verify user can navigate to Home Stay Page', async ({ indexPage, loginPage, homeStayPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.userClickonHomeStay();
        await homeStayPage.verifyUserIsOnHomeStayPage();

    });
    test('Verify user can view review of home stay page', async ({ indexPage, loginPage, homeStayPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.userClickonHomeStay();
        await homeStayPage.verifyUserIsOnHomeStayPage();
        await homeStayPage.userCanViewReview();
    })
    test('Verify user can hide reviews of home stay page', async ({ indexPage, loginPage, homeStayPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.userClickonHomeStay();
        await homeStayPage.verifyUserIsOnHomeStayPage();
        await homeStayPage.userCanHideReview();
    })

    test('Verify user can add a review for home stay page', async ({ indexPage, loginPage, homeStayPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.userClickonHomeStay();
        await homeStayPage.verifyUserIsOnHomeStayPage();
        await homeStayPage.userCanAddReview('This is a test review.');
        await homeStayPage.verifyReviewisAddedSuccessfully('This is a test review.');
    })

    test('Verify user can navigate to About Page', async ({ indexPage, loginPage, aboutPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.clickAboutIcon();
        await aboutPage.verifyUserIsOnAboutPage();

    })

    test('Verify user can navigate to Contact Page', async ({ indexPage, loginPage, contactPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.userClickOnContact();
        await contactPage.verifyUserIsOnContactPage();

    });

    test('Verify user can use the contact form', async ({ indexPage, loginPage, homeStayPage, contactPage }) => {
        await indexPage.verifyUserIsOnIndexPage();
        await indexPage.navigateToLogin();
        await loginPage.verifyUserIsOnLoginPage();
        await loginPage.login('admin', 'password');
        await indexPage.verifyUserIsLoggedInSuccessfully();
        await indexPage.userClickOnContact();
        await contactPage.verifyUserIsOnContactPage();
        await contactPage.userSendContactDetails('Abden', 'abdenfernan@gmail.com', 'This is a test message.');
        await contactPage.verifyContactMessageSentSuccessfully('Thank you! Your message has been sent.');
    })


});