let assert = {
  toEqual: function(assertionToEqual) {
    if (!assertionToEqual) {
      throw new Error (`Assertion failed: ${assertionToEqual} does not match!`);
    } else {
      console.log("Koala bear!")
    }
  }
};