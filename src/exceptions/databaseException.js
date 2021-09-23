const BaseException = require('./baseException');

class DatabaseException extends BaseException {
  constructor(message) {
    super(message, 500);
  }
}

module.exports = DatabaseException;
