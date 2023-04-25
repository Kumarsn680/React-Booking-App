class customError extends Error {
  constructor(status, message) {
    super();
    this.statusCode = status;
    this.message = message;
  }
}

const createCustomError = (errorStatus, errorMessage) => {
  return new customError(errorStatus,errorMessage);
};

const errorCatcher = (err, req, res, next) => {
  const errorStatus = err.statusCode || 500;
  const errorMessage = err.message || "Something Went Wrong";
  return {
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  };
};

export { createCustomError, errorCatcher };
