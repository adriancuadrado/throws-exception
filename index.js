exports.throwsException = function(f) {
  try {
    f();
  } catch(e) {
    return false;
  }
  return true;
}