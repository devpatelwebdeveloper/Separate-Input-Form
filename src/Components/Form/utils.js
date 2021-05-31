export const fieldValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (fieldValue.trim().length < 4) {
    return `${fieldName} needs to be at least four characters`;
  }
  return null;
};
export const provinceValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 2) {
    return `${fieldName} needs to be at least four characters`;
  }
  return null;
};

export const emailValidation = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "Email is required";
  }
  return "Please enter a valid email";
};

export const phonenumberValidation = (phone) => {
  if (
    phone.trim() === "" ||
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone)
  ) {
    return null;
  }
  // if (phone.trim() === "") {
  //   return "Phone is required";
  // }
  return "Please enter a valid phone";
};
export const postalvalidation = (postal) => {
  if (
    /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/.test(
      postal
    )
  ) {
    return null;
  }
  if (postal.trim() === "") {
    return "Postal is required";
  }
  return "Please enter a valid postal (A2A 2A2)";
};

// export const validate = {
//   firstName: (name) => fieldValidation("First Name", name),
//   lastName: (name) => fieldValidation("Last Name", name),
//   merchBusinessName: (name) => fieldValidation("Merchant business name", name),
//   quickbooksCompanyId: (name) => fieldValidation("Quickbooks CompanyId", name),
//   merchStreetAddress: (name) =>
//     fieldValidation("Merchant Street Address", name),
//   city: (name) => fieldValidation("City", name),
//   province: (name) => provinceValidation("Province", name),
//   postal: postalvalidation,
//   phone: phonenumberValidation,
//   email: emailValidation,
//   complaintDetails: (name) => fieldValidation("Complaint Details", name)
// };
