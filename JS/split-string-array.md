# Few ways to split srting into array
https://dev.to/sanchithasr/6-ways-to-convert-a-string-to-an-array-in-javascript-1cjg
article adds 2 more  `Object.assign([], str)` and `Array.prototype.slice.call(‘string’)`

## Array.split('')

## Array.from('abcdef')

## For loop
```js
const str = 'abcdef'
const arr = []
for ( char of arr) {
  arr.push(char)
}
arr // ['a',b','c','d','e','f']
```

## Spread operator 
```
const str = 'abcdef'
const arr = [...str]
```
