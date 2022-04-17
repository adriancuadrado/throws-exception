exports.throwsException = function(f) {
  try {
    f();
  } catch(e) {
    return true;
  }
  return false;
}

exports.doesntThrowException = function(f) {
  try {
    f();
  } catch(e) {
    return false;
  }
  return true;
}