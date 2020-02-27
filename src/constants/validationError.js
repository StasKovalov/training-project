export const getRequiredError = fieldName => `${fieldName} is required!`;

export const getMinError = (fieldName, minLength) =>
  `${fieldName} should be more then ${minLength} characters`;
