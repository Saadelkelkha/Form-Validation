# Form-Validation

### Project Description:
The Form Validation project is a web-based application that demonstrates client-side form validation using JavaScript. It includes fields for name, email, telephone number, and password. Each field is validated upon losing focus (on blur), and the form as a whole is validated before submission. This ensures that the input meets specified criteria before it is accepted.

#### File: `index.php`

### Description:
This HTML file contains a form with fields for the user's name, email, telephone number, and password. Each field is validated using JavaScript functions to ensure correct and complete input. Validation feedback is provided in real-time, guiding the user to correct any mistakes.

#### Key Features:
- **Name Validation**: Ensures the name is at least 3 characters long.
- **Email Validation**: Checks if the email follows a standard email format.
- **Telephone Validation**: Ensures the telephone number is exactly 10 digits.
- **Password Validation**: Checks if the password is at least 6 characters long.
- **Form Submission Validation**: Alerts the user if the form is successfully submitted when all fields are valid.

#### JavaScript Functions:
- `validename()`: Validates the name field.
- `valideemail()`: Validates the email field.
- `validetel()`: Validates the telephone field.
- `validepassword()`: Validates the password field.
- `valide()`: Checks if all fields are valid before allowing form submission.

#### HTML Structure:
- **Form Elements**: 
  - Name
  - Email
  - Telephone
  - Password
- **Validation Messages**: Displayed next to each field in case of an error.
- **Submission Button**: Triggers overall form validation. 

### Usage:
1. **Name Field**: Enter at least 3 characters.
2. **Email Field**: Enter a valid email address.
3. **Telephone Field**: Enter a 10-digit number.
4. **Password Field**: Enter a password with a minimum of 6 characters.
5. **Submit Button**: Validates all fields; shows an alert if the form is valid.
