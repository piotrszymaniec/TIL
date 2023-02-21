# Javascript Built-in objects - available with ```this.``` or ```window.```
 ```Intl``` 
- allows sorting comparison for language local characters
- conversion of date to local format 
- with ```Date.UTC(year, monthIndex, day, hour, minute, second, millisecond)```
- you get ```new Intl.DateTimeFormat(new Date(Date.UTC(2023, 1, 21, 3, 23, 16, 738))).format()``` 
- calculate time from seconds to format HH:MM:SS 
```
new Intl.DateTimeFormat("pl",{
   hour: "numeric",
   minute: "numeric",
   second: "numeric"
}).format(new Date(Date.UTC(1970,0,0,0,0,-3600)))
//'00:00:00'
```
