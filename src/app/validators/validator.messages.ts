export const ValidationMessages = {
  username: [
    { type: 'required', message: 'Username is required.' },
    { type: 'minlength', message: 'Username must be at least 5 characters long.' },
    { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
    { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
    { type: 'validUsername', message: 'Your username has already been taken.' }
  ],
  full_name: [
    { type: 'required', message: 'Name is required.' },
    { type: 'pattern', message: 'Please enter a valid name.' }
  ],
  last_name: [
    { type: 'required', message: 'Last name is required.' }
  ],
  middle_name: [
    { type: 'required', message: 'Last name is required.' }
  ],
  first_name: [
    { type: 'required', message: 'First name is required.' }
  ],
  email: [
    { type: 'required', message: 'Email is required.' },
    { type: 'pattern', message: 'Please enter a valid email.' }
  ],
  date_of_birth: [
    { type: 'required', message: 'Date of birth is required.' },
    { type: 'to_young', message: 'Kindly check back when you are up to 14 years.' }
  ],
  gender: [
    { type: 'required', message: 'Select your gender.' }
  ],
  phone_number: [
    { type: 'required', message: 'Phone is required.' },
    { type: 'pattern', message: 'Phone number must be valid for selected country.' }
  ],
  password: [
    { type: 'required', message: 'Password is required.' },
    { type: 'minlength', message: 'Password must be at least 6 characters long.' },
    { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
  ],
  confirm_password: [
    { type: 'required', message: 'Confirm password is required.' }
  ],
  matching_passwords: [
    { type: 'areEqual', message: 'Password mismatch.' }
  ],
  terms: [
    { type: 'pattern', message: 'You must accept terms and conditions.' }
  ],
};
