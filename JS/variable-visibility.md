### poluting global object
```
function a() {
  val = 'im in globalThis object now!'
}
window.val //'im in globalThis object now!'
```
### 
```
let val = 'im created!'
function a() {
  val = 'im changed in function!'
}
window.val //undefined
a() 
val // 'im changed in function!'
```

