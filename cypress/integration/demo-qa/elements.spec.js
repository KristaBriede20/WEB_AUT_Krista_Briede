import TestPage from "../../pageObjects/TestPage";

context("Practice Form", () => {
    context("Filling out the test form page", () => {
        beforeEach(() => {
            TestPage.visit();
        });

        it("Filling in fields", () => {
            cy.fixture("formData").then((data) => {
                // Identify and fill out first and last name fields
                TestPage.f_Name.type(data.name);
                TestPage.l_Name.type(data.l_Name);
                // Identify and fill Email and phone number fields
                TestPage.user_email.type(data.email);
                TestPage.check_gender.click({ force: true });
                TestPage.user_number.type(data.phone);

                // Pick birth date - 28.02.1930.
                TestPage.dateOfBirth.click();
                TestPage.month_set.select(1);
                TestPage.year_set.select(data.year);
                TestPage.day_pick.click();

                // Pick economics subject
                TestPage.subjects_input.click().type(data.subject);
                TestPage.economics_pick.click();
                // Set music in hobbies
                TestPage.hobbies_checkBox.click({ force: true });

                // Upload a picture from folder
                TestPage.upload_picture.selectFile(data.filePath);

                // Type into the address field
                TestPage.current_address.type(data.address);
            });

            // Select state as NCR
            TestPage.state_dropdown.click();
            TestPage.state_pick.click();
            // Select city as Delhi
            TestPage.city_dropdown.click();
            TestPage.city_pick.click();
            // Submit the whole form
            TestPage.form_submit.click();

            cy.fixture("formData").then((data) => {
                TestPage.table_row.eq(1).contains(data.name).contains(data.l_Name);
                TestPage.table_row.eq(2).contains(data.email);
                TestPage.table_row.eq(3).contains(data.gender);
                TestPage.table_row.eq(4).contains(data.phone);
                TestPage.table_row.eq(5).contains(data.dob);
                TestPage.table_row.eq(6).contains(data.subject);
                TestPage.table_row.eq(7).contains(data.hobbies);
                TestPage.table_row.eq(8).contains(data.picture);
                TestPage.table_row.eq(9).contains(data.address);
                TestPage.table_row.eq(10).contains(data.stateAndCity);
            });
        });
    });

});