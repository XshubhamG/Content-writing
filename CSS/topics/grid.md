# CSS grid

[https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Grid system

### Grid container properties

- display: `grid`

- `grid-template-columns` -> Define grid columns

- `grid-template-rows` -> Define grid rows

- `grid-template-areas` -> Define grid areas

- `gap` -> Gap between grid items

- `justify-items` -> Align the items along the row axis
- `align-items` -> Align the items along the column axis

- `place-items` -> Align the items along the row and column axis

- `justify-content` -> Align the content along the row axis
- `align-content` -> Align the content along the column axis

### Grid item properties

- `grid-column` -> Define grid column
- `grid-row` -> Define grid row
- `grid-area` -> Define grid area
- `align-self` -> Align the item along the row axis
- `justify-self` -> Align the item along the column axis

```css
.grid-container {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  grid-template-rows: repeat(3, 200px);

  grid-template-areas:
    'a a b'
    'a a c'
    'd e c';

  gap: 20px;

  justify-items: center;
}

.grid-item {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```
