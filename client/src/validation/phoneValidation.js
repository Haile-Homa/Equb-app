// src/validation/phoneValidation.js

const phoneRegex = /^9\d{8}$/;

export const isValidPhone = (value) => phoneRegex.test(value);
