const BaseException = require('./baseException');

class EmptyFieldException extends BaseException {
  constructor(message) {
    super(message, 400);
  }
}

module.exports = EmptyFieldException;
