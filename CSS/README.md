### When it's worth to use em and rem

**rems** for font size  
**ems** for padding and margin of element - they reference to font-size of **this element**  

## Auto shrinking Images
#### no side scrolling, or overflowing
```css
img {
  max-width: 100%;
}
```
## Media Queries

```css
/*because we didnt include media-type, its targeting all types screen etc*/

/* minimum 600px or bigger*/
@media (min-width: 600px) {
  
}

/* maximum 600px or smaller*/
@media (max-width: 600px) {
  
}
/* or you can combine*/
/* and then it works only between those 2 mediasizes*/
@media (min-width: 600px) and (max-width: 900px) {
  
}
```
### Exapanding base css layouts
- when we go from styles described from desktop to mobile with mediaqueries we use:  
`max-width: Ypx;`  
  
- when we described our styles for mobile-first and then expand them through mediaqueries to desktop size we use:  
`min-width: Ypx;`


### replacing svg dynamicaly to be able to use css `fill:color` on thme
https://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement
