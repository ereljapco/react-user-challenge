# React User Challenge

[![Netlify Status](https://api.netlify.com/api/v1/badges/10cfb886-f8c8-434b-b3a9-3714bb83b3c2/deploy-status)](https://app.netlify.com/sites/react-user-challenge-erj/deploys)

This is a solution to John Smilga's User Challenge from his [React 18 Tutorial and Projects Course (2023)](https://www.udemy.com/course/react-tutorial-and-projects-course/).

## Table of contents

- [React User Challenge](#react-user-challenge)
	- [Table of contents](#table-of-contents)
	- [Overview](#overview)
		- [The challenge](#the-challenge)
		- [Screenshot](#screenshot)
		- [Links](#links)
	- [My process](#my-process)
		- [Built with](#built-with)
		- [What I learned](#what-i-learned)
		- [Useful resources](#useful-resources)
	- [Author](#author)
	- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Display the users from the data array
- Add new person to the list when the user submits the form
- Remove the person on the list when the user click on the delete button

### Screenshot

### Links

- Solution URL: [https://github.com/ereljapco/react-user-challenge](https://github.com/ereljapco/react-user-challenge)
- Live Site URL: [https://react-user-challenge-erj.netlify.app/](https://react-user-challenge-erj.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - Vite plugin to transform SVGs into React components.
- [uuid](https://github.com/uuidjs/uuid) - For the creation of RFC4122 UUIDs

### What I learned

- Creating a folder for each component made it easier for me to navigate and arrange my thoughts since everything for that component is in just one location

- Use of controlled inputs instead of targetting an element's value

```js
const [name, setName] = useState('');

function handleNameChange(e) {
  setName(e.target.value);
}
// more code here

return (
  <section className="add-user">
    <h1 className="add-user__title">Add User</h1>
    <Form name={name} handleNameChange={handleNameChange} onSubmit={onSubmit} />
    <List users={users} deleteUser={deleteUser} />
  </section>
);
```

### Useful resources

- [Rosé Pine](https://rosepinetheme.com/palette) - palette used for the project

## Author

- Frontend Mentor - [@ereljapco](https://www.frontendmentor.io/profile/ereljapco)
- LinkedIn - [/in/ereljapco](https://www.linkedin.com/in/ereljapco/)

## Acknowledgments
