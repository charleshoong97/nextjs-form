import {
  validEmailRegex,
  validPhoneRegex,
  validPhoneLenRegex,
} from "../constants/regexConstant";

export const validateName = (data) => {
  if (data == null || data.trim() == "") {
    return "Full name is required";
  }

  return null;
};

export const validateEmail = (data) => {
  if (data == null || data.trim() == "") {
    return "Email address is required";
  }

  if (!data.trim().match(validEmailRegex)) {
    return "Invalid email address";
  }

  return null;
};

export const validatePhone = (data) => {
  if (data == null || data.trim() == "") {
    return "Contact number is required";
  }

  if (!data.trim().match(validPhoneRegex)) {
    return "Contact number must contain digit only";
  }

  if (!data.trim().match(validPhoneLenRegex)) {
    return "Invalid contact number";
  }

  return null;
};
