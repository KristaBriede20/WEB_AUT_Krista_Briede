import TestPage from "../../pageObjects/TestPage";

context("Practice Form", () => {
    context("Filling out the test form page", () => {
        beforeEach(() => {
            TestPage.visit();
        });

        it("Filling in fields", () => {
            cy.fixture("formData").then((data) => {
                // Identify and fill out First and Last Name fields
                TestPage.firstName.type(data.name);
                TestPage.lastName.type(data.lastName);
                // Identify and fill Email and phone number Fields
                TestPage.user_email.type(data.email);
                TestPage.check_gender.click({ force: true });
                TestPage.user_number.type(data.phone);

                // Pick birth date - 28.02.1930.
                TestPage.date_bday.click();
                TestPage.month_pick.select(1);
                TestPage.year_pick.select(data.year);
                TestPage.day_pick.click();

                // Pick economics subject
                TestPage.sub_input.click().type(data.subject);
                TestPage.ekonomic_pick.click();
                // Set music in hobbies
                TestPage.hobby_check.click({ force: true });

                // Upload a picture from folder
                TestPage.upload_pic.selectFile(data.filePath);

                // Type into the address field
                TestPage.current_address.type(data.address);
            });

            // Select state as NCR
            TestPage.state_drop.click();
            TestPage.state_pick.click();
            // Select city as Delhi
            TestPage.city_drop.click();
            TestPage.city_pick.click();
            // Submit the whole form
            TestPage.form_sub.click();

            cy.fixture("formData").then((data) => {
                TestPage.table_row.eq(1).contains(data.name).contains(data.lastName);
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