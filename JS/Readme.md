## what async keyword does
The async keyword is used to define an asynchronous function, which returns a AsyncFunction object. The await keyword is used to pause async function execution until a Promise is fulfilled, that is resolved or rejected, and to resume execution of the async function after fulfillment.


### difference between imports with and without {} braces
  
https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import  


## Understanding Promises 

> .. a promise is just a state machine  
> https://www.promisejs.org/implementing/

```js
var states = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2
}

function Promise() {
// store state which can be PENDING, FULFILLED or REJECTED
  var state = states.PENDING;
// store value or error once FULFILLED or REJECTED  
  var value = null;
// store sucess & failure handlers attached by calling .then or .done
  var handlers = [];  
}
```
