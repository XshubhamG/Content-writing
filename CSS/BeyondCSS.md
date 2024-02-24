# CSS Protips

## CSS Resets

```css
/* Resets the Spacing and box-sizing */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

/* html box-sizing */
html {
  box-sizing: border-box;
}

/* acessible line-height and improved text rendering  */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* improve media defaults  */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/*  Remove built-in form typography styles */
input,
button,
textarea,
select {
  font: inherit;
}

/* Avoid text overflow */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* sr-only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* list style reset */
li {
  list-style: none;
}

/* button style reset */
button {
  background: none;
  cursor: pointer;
}
```

## Use `unset`

```css
/*
- When resetting an element properties, You can specify all of the properties using all shorthand.
- setting the value changes an element properties to their initial values.
*/
.element {
  all: unset;
}
```

## Used `:not()` to Apply/Unapply Borders on Navigation

```css
.nav li:not(:last-child) {
  border-right: 1px solid red;
}
```

- This above properties will be not be applied to the last li `child` element of the `.nav`.

## Install Font locally

```css
@font-face {
  font-family: 'Dank mono';
  src: url(../assets/fonts/dank-mono.ttf);
}
```

## Set `:focus` for Form elements

```css
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
  box-shadow: none;
  outline: #000 dotted 2px;
  outline-offset: 0.05em;
}
```

## Vertically-Center anything

```css
body {
  display: flex;
  align-items: center;
  min-height: 100vh;
}
```

## Use of grid to make responsive card container

```css
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```
