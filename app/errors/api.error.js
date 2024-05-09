export default class ApiError extends Error {
  constructor(message, info) {
    super(message);
    this.name = "ApiError";
    this.httpStatus = info.httpStatus || 500;
  }
}
