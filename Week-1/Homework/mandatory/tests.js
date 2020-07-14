/* ======= TESTS - DO NOT MODIFY =====
This code is for running the tests, please ignore this */

const log = console.log, // Clone console.log
  logged = []; // List of what the student has logged using console.log

function test(testName, expr, expected, actual) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  log(`\n${testName}: ${status}
    Expected: ${expected}
    Actual: ${actual}`);
}

/* Amends console.log to also keep a log of what the student has logged.
  When the homework involves using console.log, this module should be required
  on the first line of the homework file to override how console.log
  works. */
console.log = function () {
  logged.push(arguments[0]);
  log(...arguments);
};

module.exports = {
  log,
  logged,
  test,
};
