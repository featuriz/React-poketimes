# REACT ROUTING

## 1. INIT

npm install react-router-dom

import { BrowserRouter, Routes, Route } from 'react-router-dom';

Route prevents page reloading!

Create one Navbar

- functional
- Import this to App

### App.js

- Add these two
  - <Routes> <Route />
- pass files to route as props
- cover this jsx with <BrowserRouter>

Created 3 UI components files for each page

- Home
- About
- Contact
  These pages return jsx

Import these 3 UI components to App.js

## 2. NavLink and Link

Navbar.js
import { Link, NavLink } from 'react-router-dom';

```html
<li><NavLink to="/about">About</NavLink></li>
```

### Link

Just creates a link

### NavLink

Creates link, same as Link. Along with that it adds class="active" aria-current="page"

**only this two difference**

## 3. Redirect

- Route attach extra information (props) to the file

  - Failed!
  - Tutoria use v5 . So this dosen't work here. So I used v6 doc

- My goal is to readire to contact from home.

```javascript
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// https://reactrouter.com/docs/en/v6/getting-started/concepts#navigate-function
// Only inside function
let navigate = useNavigate();
useEffect(() => {
  setTimeout(() => {
    navigate("/contact");
  }, 2000);
});
```

- This worked for me.
  - If used in other files, it get looped. "you got it!".

## 4. Higher Order Component

- Adding a component above the required one.
- Here I'm adding hoc/Rainbow.js to About.js

Rainbow.js

- Create a div with random class

About.js

- import Rainbow.js
- export default Rainbow(About);
- END! "got it?"

## 5. using Axios

[axios](https://axios-http.com/docs/intro)

Only can be used in class based components

Home.js

- convert home to class

### INFO

useNavigate cannot be used in class based components.

- Moving to about page.

### Then

[npmjs](https://www.npmjs.com/package/axios)
[axios-http](https://axios-http.com/docs/intro)
[jsonplaceholder](https://jsonplaceholder.typicode.com/guide/)

- npm install axios
  Home.js
- import axios
- convert to class
- set state
- componentDidMount() :: axios get rest api
- slice and set to state
- create 'const postList' and arrange the ui
- pass this 'postList' to ui output
- end!
