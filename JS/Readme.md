## Contents
### 1. [Converting JS project to Typescript](convert-js-proj-to-ts.md)
### 2. [Few ways to split string to array](split-string-array.md)
### 3. Useful built-in objects
+ [Intl](build-in-js-objects.md) - calculating time from seconds to HH:MM:SS format
### 4. Scope visibility

## What async keyword does
The async keyword is used to define an asynchronous function, which returns a AsyncFunction object. The await keyword is used to pause async function execution until a Promise is fulfilled, that is resolved or rejected, and to resume execution of the async function after fulfillment.


### Difference between imports with and without {} braces  
https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import  

### Understanding Promises 
> .. a promise is just a state machine  
> https://www.promisejs.org/implementing/

```js
const states = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2
}

function Promise() {
  // store state which can be PENDING, FULFILLED or REJECTED
  const state = states.PENDING;
  // store value or error once FULFILLED or REJECTED  
  const value = null;
  // store sucess & failure handlers attached by calling .then or .done
  const handlers = [];  
}
```
