# throws-exception

This npm package includes 2 functions to check whether a function throws an exception or not:
* throwsException
* doesntThrowException

Example usage:
```js
import { throwsException, doesntThrowException } from 'throws-exception';

if(throwsException(() => { throw 'ERROR!'; })) {
  console.log('An error occurred');
}

if(doesntThrowException(() => { throw 'ERROR!'; })) {
  console.log("This won't be printed");
}
```

The implementation of these functions is very simple:

```js
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
```