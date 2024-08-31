# fyp



`` just creating a seperate component for the core of the system ``

# To Install
````
npm install react-modal
````
import these to use the popup requirements
``` 
import React, { useState } from 'react';
import Modal from 'react-modal';

// Set the app element for accessibility (important for screen readers)
Modal.setAppElement('#root');
 ```


# Install tailwind

````  
npm install -D tailwindcss postcss autoprefixer

````
````
npx tailwindcss init -p

````

Configure tailwind.config.js
Edit tailwind.config.js to include paths to your React components. This setup will enable Tailwind to remove unused styles in production:


```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind Directives to Your CSS
In the src folder, find or create a file named index.css and include the following Tailwind directives:
```
@tailwind base;
@tailwind components;
@tailwind utilities;

```