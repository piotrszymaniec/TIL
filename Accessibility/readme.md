## Designing For Accessibility And Inclusion  
  
https://www.smashingmagazine.com/2018/04/designing-accessibility-inclusion/  
### Understanding Perspectives  
https://edpioneer.com/understanding-perspectives/  
  
### TODO
https://www.a11y-collective.com/product/web-accessibility-the-basics/

### Matt Henry Accesible course on pluralsight
Note:  
properly designing presentational non-standard widgets  
https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
https://www.w3.org/WAI/ARIA/apg/
voice of different approach (**Heydon Pickering**) :  
https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/

```css
.hidden { 
  display: none; 
}
.visually-hidden { 
  position: absolute; 
  clip: rect(0 0 0 0); 
  height: 1px; 
  width: 1px; 
  Margin: -1px; 
  padding: 0; 
  border: 0; 
  overflow: hidden;
}
```
```html
<main id="main"> 
  <section class="content-section menu" aria-labelledby="food-menu-label" id="food"> 
    <h1 class="visually-hidden">Menus</h1>| 
    <div class="menu-content"> 
      <h2 id="food-menu-label">Food</h2> 
      <h3>Starters</h3> 
      <p class="menu-item"> 
        <span class="name">Edamame</span> 
        <span class="price">3.5@</span> 
      </p> 
      <p class="menu-item"> 
        <span class="name">Gyoza</span> 
        <span class="price">5.5@</span> 
      </p> 
      <p class="menu-item"> 
        <span class="name">Veggie Tempura</span> 
        <span class="price">7.95</span> 
      </p>
...
```

<img height="200" src="https://i.imgur.com/Xh1HTnI.png">

## Verification Tools
https://wave.webaim.org/repor  very nice!


https://pl.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
https://www.w3.org/WAI/WCAG21/Understanding/
https://www.w3.org/WAI/WCAG21/quickref/
https://media.dequeuniversity.com/public/en/docs/deque_web_accessibility_checklist.pdf

### Free webinars about multitude of topics on web accessibility
- https://www.deque.com/resources/type/webinars/
- https://www.deque.com/resources/type/webinars/page/2/
- https://www.deque.com/resources/type/webinars/page/3/
- https://www.deque.com/resources/type/webinars/page/4/
- https://www.deque.com/resources/type/webinars/page/5/
- https://www.deque.com/resources/type/webinars/page/6/

#### Translating Design Wireframes into Accessible HTML/CSS
https://www.youtube.com/watch?v=0MMKkEZ3oAA
  
  
https://www.udemy.com/course/web-accessibility-training-course-wcag-21-compliance/

