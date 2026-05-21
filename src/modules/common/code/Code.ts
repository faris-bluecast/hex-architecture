export type CodeDescription = {
  code: number;
  message: string;
};

export const Code = {
  // Common

  SUCCESS: {
    code: 200,
    message: "Success.",
  },

  BAD_REQUEST_ERROR: {
    code: 400,
    message: "Bad request.",
  },

  UNAUTHORIZED_ERROR: {
    code: 401,
    message: "Unauthorized error.",
  },

  WRONG_CREDENTIALS_ERROR: {
    code: 402,
    message: "Wrong Credentials.",
  },

  ACCESS_DENIED_ERROR: {
    code: 403,
    message: "Access denied.",
  },

  INTERNAL_ERROR: {
    code: 500,
    message: "Internal error.",
  },

  ENTITY_NOT_FOUND_ERROR: {
    code: 1000,
    message: "Entity not found.",
  },

  ENTITY_VALIDATION_ERROR: {
    code: 1001,
    message: "Entity validation error.",
  },

  USE_CASE_PORT_VALIDATION_ERROR: {
    code: 1002,
    message: "Use-case port validation error.",
  },

  VALUE_OBJECT_VALIDATION_ERROR: {
    code: 1003,
    message: "Value object validation error.",
  },

  ENTITY_ALREADY_EXISTS_ERROR: {
    code: 1004,
    message: "Entity already exists.",
  },
};
