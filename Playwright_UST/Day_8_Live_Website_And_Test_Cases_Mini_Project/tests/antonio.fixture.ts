import { test as base, expect, BrowserContext, Page } from '@playwright/test';
import { AboutPage } from './AboutPage';
import { BlogPage } from './BlogPage';
import { ContactPage } from './ContactPage';
import { HomeStayPage } from './HomeStayPage';
import { LoginPage } from './LoginPage';
import { IndexPage } from './IndexPage';
import { ProfilePage } from './ProfilePage';


type AntonioFixtures = {
    aboutPage: AboutPage;
    blogPage: BlogPage;
    contactPage: ContactPage;
    homeStayPage: HomeStayPage;
    loginPage: LoginPage;
    indexPage: IndexPage;
    profilePage: ProfilePage
;
};

export const test = base.extend<AntonioFixtures>({
    indexPage: async ({ page }, use) => {
        const indexPage = new IndexPage(page);
        await indexPage.navigateToHome();
        await use(indexPage);
    },

    loginPage: async ({ page }, use ) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    aboutPage: async ({ page }, use ) => {
        const aboutPage = new AboutPage(page);
        await use(aboutPage);
    },
    blogPage: async ({ page }, use ) => {
        const blogPage = new BlogPage(page);
        await use(blogPage);
    },
    profilePage: async ({ page }, use ) => {
        const profilePage = new ProfilePage(page);
        await use(profilePage);
    },
    contactPage: async ({ page }, use ) => {
        const contactPage = new ContactPage(page);
        await use(contactPage);
    },
    homeStayPage: async ({ page }, use ) => {
        const homeStayPage = new HomeStayPage(page);
        await use(homeStayPage)
    }
})

export { expect } from '@playwright/test';