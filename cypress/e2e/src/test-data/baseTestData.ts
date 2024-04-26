import randomstring, { Capitalization, Charset } from 'randomstring';

export abstract class BaseTestData {

    getRandomString(length: number, charset: Charset, capitalization: Capitalization) {
        return randomstring.generate({ length: length, charset: charset, capitalization: capitalization });
    }

}