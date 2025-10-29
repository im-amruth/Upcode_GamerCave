export const htmlBasicsKoans = [
  {
    id: "html-koan-1",
    title: "The Page Structure",
    description: "Learn the basic structure of an HTML document, including doctype, head, and body elements.",
    difficulty: "easy",
    task: "Fix the missing HTML elements so this document is valid.",
    hint: "A valid page must include <html>, <head>, and <body> tags.",
    initialCode: `<!-- Complete the missing structure -->
<h1>Hello World</h1>
<p>Welcome to HTML basics!</p>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Welcome to HTML basics!</p>
  </body>
</html>`,
  },
  {
    id: "html-koan-2",
    title: "Add an Image",
    description: "Understand how to use the <img> tag to display images with proper accessibility attributes.",
    difficulty: "easy",
    task: "Add an image tag that displays the logo.png file.",
    hint: "Use the <img> tag with a src and alt attribute.",
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <h1>My Portfolio</h1>
    <!-- Add image here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <h1>My Portfolio</h1>
    <img src="logo.png" alt="Portfolio Logo">
  </body>
</html>`,
  },
  {
    id: "html-koan-3",
    title: "Create a Link",
    description: "Learn how to create hyperlinks using the <a> tag to connect web pages.",
    difficulty: "easy",
    task: "Create a link that goes to https://insiders.workshop.",
    hint: "Use the <a> tag with an href attribute.",
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <p>Visit our website:</p>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <p>Visit our website: <a href="https://insiders.workshop">Insiders Workshop</a></p>
  </body>
</html>`,
  },
];
