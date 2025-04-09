2#JavaScript Practice 2024
Html

The title attribute defines some extra information about an element.
The value of the title attribute will be displayed as a tooltip when you mouse over the element:

<p title="this will be displayed when the mouse is on the paragraph">Hello</p>

<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
The target attribute can have one of the following values:
\_self - Default. Opens the document in the same window/tab as it was clicked
\_blank - Opens the document in a new window or tab
\_parent - Opens the document in the parent frame
\_top - Opens the document in the full body of the window

HTML Link Colors
By default, a link will appear like this (in all browsers):

An unvisited link is underlined and blue
A visited link is underlined and purple
An active link is underlined and red

<style>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>

Cascading Style Sheets (CSS)
CSS can be added to HTML documents in 3 ways:

Inline - by using the style attribute inside HTML elements
Internal - by using a <style> element in the <head> section
External - by using a <link> element to link to an external CSS file