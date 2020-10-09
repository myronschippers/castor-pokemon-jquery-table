# Pokemon jQery Table

## Description

Creating a form that a user can enter in the Name, Hp, Att, Def, and Image for a Pokemon. When a user clicks the **Add** button the Pokemon should be added as a new row in the table.

---
**Pokemon Data:**

| Name | Hp | Att | Def | Images |
| --- | --- | :---: |
| Charizard | 78 | 84 | 78 | images/charizard.png |
| Pikachu | 45 | 80 | 50 | images/pikachu.png |
| Eevee | 55 | 55 | 50 | images/eevee.png |
| Snorlax | 160 | 110 | 65 | images/snorlax.png |
| Mewtwo | 106 | 110 | 90 | images/mewtwo.png |
| Celebi | 100 | 100 | 100 | images/celebi.png |
| Lucario | 70 | 110 | 70 | images/lucario.png |


## Table Structure

---
**Table Parts:**

1. `<table>` - has to wrap around all of the table content
1. `<thead>` - table header content goes in here, specifically the column heading
1. `<tbody>` - all of the table data for the different rows go in this section
1. `<tfoot>` - footer content must go inside of this wrapping tag
1. `<tr>` - table row tag that wraps all columns in a single row and has to be inside of either; `<thead>`, `<tbody>`, or `<tfoot>` tags
1. `<td>` - table cell content goes inside of this tag and it has to be inside of a `<tr>` tag
1. `colspan` - an attribute that can be placed only on a `<td>` tag in order to have the cell stretch across a certain number of cells/columns

---
**Full Table:**

```HTML
<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Hp</td>
      <td>Att</td>
      <td>Def</td>
      <td>Image</td>
      <td></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Charizard</td>
      <td>78</td>
      <td>84</td>
      <td>78</td>
      <td>
        <img src="images/charizard.png" alt="Charizard" />
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4"></td>
      <td colspan="2">Total Attack: 500</td>
    </tr>
  </tfoot>
</table>
```