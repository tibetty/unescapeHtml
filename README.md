unescapehtmltext
==========

A utility function to unescape a string containing legally-html-escaped entities to the plain text

## Installation

```
npm i unescapehtmltext
```

## Usage
```javascript
const uht = require('unescapehtmltext');
console.log(uht('&Omicron; &#169; &#99999; &amp; &lt;Hello, World!&gt;'));
