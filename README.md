# CSS Flexbox

Flex box layout will be used to design the responsive layout structure without using float or positioning.

Flex box gives ability to alter the item's width/height to fill in the available space or shrinks them to prevent overflow.

Deployed this website on [Netlify](https://static-css-flexbox.netlify.app/).

Built this website by following [The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG) youtube playlist.

## CSS Properties covered in this example

* `display: flex` - defines a container to be in inline or block depending on the given value.
    ```javascript
    .container {
        display: flex;
    }
    ```

* `flex-direction` - defines the direction to the followed by the items.
    ```javascript
    .container {
        flex-direction: row; // arrange in horizontal direction
        flex-direction: column; // arrange in vertical direction
    }
    ```

* `justify-content` - defines the alignment of the items.
    * if the flex-direction is row then justify-content will align the items in horizontal direction.
    * if the flex-direction is column then justify-content will align the items in vertical direction.
    ```javascript
    .container {
        justify-content: flex-start; // align to left
        justify-content: flex-end; //align to right
        justify-content: center; // align in center
        justify-content: space-between; // creates the space only between the items
        justify-content: space-around; // creates the space all around the items
        justify-content: space-evenly; // creates the space to the edges
    }
    ```

* `align-items` - defines the alignment of the items.
    * if the flex-direction is row then align-items will align the items in vertical direction.
    * if the flex-direction is column then align-items will align the items in horizontal direction.
    ```javascript
    .container {
        align-items: flex-start; // align to top
        align-items: flex-end; // align to bottom 
        align-items: center; // align in center
        align-items: stretch; // adjust the items to the screen
        align-items: baseline; // align in a line fashion
    }
    ```

* `flex-wrap` - items will be wrapped to next line when width of all items cannot fit within the page.
    ```javascript
    .container {
        flex-wrap: no-wrap; // items will be filled in same line 
        flex-wrap: wrap; // items will wrap based on the width from top to bottom
        flex-wrap: wrap-reverse; // items will wrap based on the width from bottom to top
    }
    ```

* `flex-flow` - shorthand for the `flex-direction` & `flex-wrap`.
    ```javascript
    .container {
        flex-flow: column wrap;
    }
    ```
* `flex-grow` - occupies the whole space of width based on the value.
    ```javascript
    .item {
        flex-grow: 4;
    }
    ```

* `flex-shrink` - items to shrink based on the value. 
    ```javascript
    .item {
        flex-shrink: 3;
    }
    ```

* `flex-basis` - define default size of the items.
    ```javascript
    .item {
        flex-basis: 200px;
    }
    ```

* `flex` - shorthand for `flex-grow`, `flex-shrink` and `flex-basis`.
    ```javascript
    .item {
        flex: 1 1 200px;
    }
    ```

* `gap` - applies the spacing between items.
    ```javascript
    .container {
        gap: 10px; // applies 10px of gap to the row and column 
        gap: 10px 20px; // applies 10px of gap to the row and 20px to the column 
        row-gap: 10px; // applies 10px of gap only to the row
        column-gap: 10px; // applies 10px of gap only to the column
    }
    ```

* `order` - arrange the items in specific order.
    ```javascript
    .item {
        order: 5; // smaller number would be arranged first
    }
    ```