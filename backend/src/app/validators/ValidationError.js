class ValidationError extends Error {
  constructor(message, code = 500) {
    super(message);
    this.code = code;
  }
}
global.ValidationError = ValidationError;
export default ValidationError;
