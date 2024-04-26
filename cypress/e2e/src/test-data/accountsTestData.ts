import { BaseTestData } from './baseTestData';

export class AccountsTestData extends BaseTestData {
    getAccountData() {
        return {
            maleGender: 'M',
            femaleGender: 'F',
            firstName: this.getRandomString(10, 'alphabetic', 'lowercase'),
            lastName: this.getRandomString(10, 'alphabetic', 'lowercase'),
            email: `${this.getRandomString(30, 'alphabetic', 'lowercase')}@test.com`,
            password: this.getRandomString(10, 'alphabetic', 'lowercase'),
        };
    }
}
