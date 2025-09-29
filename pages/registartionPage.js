const BasePage = require('./basePage');

class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
        this.firstName = '#firstName';
        this.lastName = '#lastName';
        this.email = '#userEmail';
        this.male='input[value="Male"]';
        this.female='input[value="Female"]';
        this.other='input[value="Other"]';
        this.mobileNumber = '#userNumber';
        this.dob = '#dateOfBirthInput';
        this.subjects = '#subjectsInput';
        this.hobbiesSports = 'label[for="hobbies-checkbox-1"]';
        this.hobbiesReading = 'label[for="hobbies-checkbox-2"]';
        this.hobbiesMusic = 'label[for="hobbies-checkbox-3"]';
        this.pictureUpload = '#uploadPicture';
        this.currentAddress = '#currentAddress';
        this.state = '#state';
        this.city = '#city';
        this.submitButton = '#submit';
    }
    async register(firstName, lastName, email, mobileNumber, dob, subjects, currentAddress, state, city) {
        await this.type(this.firstName, firstName);
        await this.type(this.lastName, lastName);
        await this.type(this.email, email);
        await this.type(this.mobileNumber, mobileNumber);
        await this.click(this.dob);
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.type(dob);
        await this.page.keyboard.press('Enter');
        await this.type(this.subjects, subjects);
        await this.page.keyboard.press('Enter');
        await this.click(this.hobbiesSports);
        await this.type(this.currentAddress, currentAddress);
        await this.click(this.state);
        await this.page.keyboard.type(state);
        await this.page.keyboard.press('Enter');
        await this.click(this.city);
        await this.page.keyboard.type(city);
        await this.page.keyboard.press('Enter');
        await this.click(this.submitButton);
    }
}

module.exports = RegistrationPage;
