# 6 ways to split array
https://dev.to/sanchithasr/6-ways-to-convert-a-string-to-an-array-in-javascript-1cjg

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

## spread operator 
```
const str = 'abcdef'
const arr = [...str]
```
