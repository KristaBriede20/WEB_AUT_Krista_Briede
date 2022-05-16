import BasePage from "./BasePage";

class TestPage extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }

    static get exampleElement() {
        return cy.get("exampleSelector");
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get user_email() {
        return cy.get("#userEmail");
    }

    static get check_gender() {
        return cy.get("#gender-radio-3");
    }

    static get user_number() {
        return cy.get("#userNumber");
    }

    static get date_bday() {
        return cy.get("#dateOfBirthInput");
    }

    static get month_pick() {
        return cy.get(".react-datepicker__month-select");
    }

    static get year_pick() {
        return cy.get(".react-datepicker__year-select");
    }

    static get day_pick() {
        return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
    }

    static get sub_input() {
        return cy.get("#subjectsContainer");
    }

    static get ekonomic_pick() {
        return cy.get("#react-select-2-option-0");
    }

    static get hobby_check() {
        return cy.get("#hobbies-checkbox-3");
    }

    static get upload_pic() {
        return cy.get('input[type=file]');
    }

    static get current_address() {
        return cy.get("#currentAddress");
    }

    static get state_drop() {
        return cy.get("#state");
    }

    static get state_pick() {
        return cy.get("#react-select-3-option-0");
    }

    static get city_drop() {
        return cy.get("#city");
    }

    static get city_pick() {
        return cy.get("#react-select-4-option-0");
    }

    static get form_sub() {
        return cy.get("#submit");
    }

    static get table_row() {
        return cy.get("tr");
    }
}

export default TestPage;