import {USER_DATA} from "../pages/testData";
import NewStudentForm from "../pages/pagePracticeForm.js";
const addNewStudent = new NewStudentForm;

export function createNewStudent() {
    addNewStudent.firstNameInput().type(USER_DATA.name);
    addNewStudent.lastNameInput().type(USER_DATA.lastName);
    addNewStudent.emailInput().type(USER_DATA.email);
    addNewStudent.genderOption().check({force: true});
    addNewStudent.mobileInput().type(USER_DATA.phoneNumber);
    selectDate();
    addNewStudent.subjectsInput().type(USER_DATA.subject);
    addNewStudent.hobbiesOption().check({force: true});
    loadPhoto();
    addNewStudent.currentAddressInput().type(USER_DATA.currentAddress);
}

export function selectDate() {
    addNewStudent.dateOfBirthInput().click();
    addNewStudent.monthInput().select(USER_DATA.month);
    addNewStudent.dayInput().contains(USER_DATA.day).eq(0).click();
}

export function loadPhoto() {
    cy.fixture("images/image401203947.png").then(fileContent => {
        cy.get("input[type='file']").attachFile({
            fileContent: fileContent.toString(),
            fileName: "image401203947.png",
            mimeType: "image/png"
        });
    });
}