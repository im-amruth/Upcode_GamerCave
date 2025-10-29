export const cssSelectorsKoans = [
  {
    id: "css-koan-1",
    title: "Select by Element",
    description: "Learn how to style elements directly using their tag name.",
    difficulty: "easy",
    task: "Make all paragraphs blue.",
    hint: "Use the p selector and color property.",
    initialCode: `<p>Hello!</p>
<p>Welcome to CSS selectors.</p>

<style>
/* Your CSS here */
</style>`,
    solution: `<p>Hello!</p>
<p>Welcome to CSS selectors.</p>

<style>
p {
  color: blue;
}
</style>`,
  },
  {
    id: "css-koan-2",
    title: "Select by Class",
    description: "Understand how to apply styles to elements using class selectors.",
    difficulty: "easy",
    task: "Make the elements with class 'highlight' have a yellow background.",
    hint: "Use .highlight in your CSS.",
    initialCode: `<p class="highlight">Important!</p>
<p>Normal text</p>

<style>
/* Write your CSS */
</style>`,
    solution: `<p class="highlight">Important!</p>
<p>Normal text</p>

<style>
.highlight {
  background-color: yellow;
}
</style>`,
  },
  {
    id: "css-koan-3",
    title: "Select by ID",
    description: "Use ID selectors to target specific elements with unique identifiers.",
    difficulty: "medium",
    task: "Change the color of the element with id 'main' to green.",
    hint: "Use #main selector.",
    initialCode: `<h1 id="main">Welcome</h1>

<style>
/* Fix the selector */
</style>`,
    solution: `<h1 id="main">Welcome</h1>

<style>
#main {
  color: green;
}
</style>`,
  },
];
