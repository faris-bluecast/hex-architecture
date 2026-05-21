export const CoreAssert = {
  isTrue: (expression: boolean, exception: Error): void => {
    if (!expression) {
      throw exception;
    }
  },

  isFalse: (expression: boolean, exception: Error): void => {
    if (expression) {
      throw exception;
    }
  },

  notEmpty: <T>(value: T | null | undefined, exception: Error): T => {
    if (value === null || value === undefined) {
      throw exception;
    }
    return value;
  },
};
