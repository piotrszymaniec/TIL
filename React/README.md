### Table of Contents  
[1. Courses](#courses)  
[2. Articles](#articles)  
[3. Designing Componenets](#components)  
[4. Talks](#talks)  
[5. Styling](#styling)  
[6. Starting Project](#starting)  
  - React.js in [browser](#react-in-browser)  


...snip...    


<a name="courses"></a>
### 1. Courses
#### Free
- https://egghead.io/courses/the-beginner-s-guide-to-react
- https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d
- [Modern Guide to React Net Ninja](./net-ninja-course-outline.md)
- [kent-dodds-beginners-guide-to-react](./kent-dodds-beginners-guide-to-react-outline.md)
#### Paid
- https://ui.dev/react-query
<a name="articles"></a>
### 2. Articles
- https://kentcdodds.com/blog/when-to-break-up-a-component-into-multiple-components ?
- tests https://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/
- Debugging React apps with ReactDevTools https://blog.logrocket.com/debug-react-applications-with-the-new-react-devtools/
<a name="components"></a>  
### 3. Designing Components
#### Rules of designing easy to maintain components 

> The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names.  
> 
> React documentation

https://dev.to/victorocna/my-secret-trick-for-writing-great-react-components-fb8
<a name="talks"></a>
### 4. Talks
https://github.com/kjendrzyca/awesome-react-talks
<a name="styling"></a>
### 5. Styling
https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f
what is https://bit.dev/ ?

<a name="starting"></a>
### 6. Starting Project
<a name="react-in-browser"></a>
### React.js in [browser](#react-in-browser)
To include react.js in browser we to import external libraries:  
add in header:  
```html
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Don't use this in production: -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

  - 
