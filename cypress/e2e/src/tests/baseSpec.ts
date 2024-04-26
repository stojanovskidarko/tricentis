import * as pages from '../page-objects/index';
import * as testData from '../test-data/index';

export class BaseSpec {
    // creating page objects
    registerPage = new pages.RegisterPage();
    loginPage = new pages.LoginPage();
    homePage = new pages.HomePage();
    shoppingCartPage = new pages.ShoppingCartPage();
    productDetailsPage = new pages.ProductDetailsPage();

    // creating test data objects
    accountsTestData = new testData.AccountsTestData();
}
