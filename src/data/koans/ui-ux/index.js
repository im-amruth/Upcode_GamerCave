export const uiUxKoans = [
  {
    id: "uiux-koan-1",
    title: "Color Contrast",
    description: "Learn the importance of color contrast for readability and accessibility.",
    difficulty: "easy",
    task: "Adjust colors for better contrast between text and background.",
    hint: "Use light text on dark background or vice versa.",
    initialCode: `<div class="card">
  <p>This text is hard to read.</p>
</div>

<style>
.card {
  background: #222;
  color: #222;
  padding: 20px;
}
</style>`,
    solution: `<div class="card">
  <p>This text is easy to read now!</p>
</div>

<style>
.card {
  background: #222;
  color: #fff;
  padding: 20px;
}
</style>`,
  },
  {
    id: "uiux-koan-2",
    title: "Spacing & Alignment",
    description: "Understand how spacing and alignment improve visual hierarchy and balance.",
    difficulty: "medium",
    task: "Add spacing between elements and center them properly.",
    hint: "Use flexbox and padding/margin.",
    initialCode: `<div class="container">
  <button>OK</button><button>Cancel</button>
</div>

<style>
.container {
  background: #333;
}
</style>`,
    solution: `<div class="container">
  <button>OK</button><button>Cancel</button>
</div>

<style>
.container {
  background: #333;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
</style>`,
  },
  {
    id: "uiux-koan-3",
    title: "Hover Feedback",
    description: "Add interactive feedback to buttons to improve user experience and clarity.",
    difficulty: "easy",
    task: "Add hover feedback to a button for better user experience.",
    hint: "Use the :hover pseudo-class.",
    initialCode: `<button class="btn">Hover me</button>

<style>
.btn {
  background: #00ff87;
  border: none;
  padding: 10px 20px;
}
</style>`,
    solution: `<button class="btn">Hover me</button>

<style>
.btn {
  background: #00ff87;
  border: none;
  padding: 10px 20px;
  transition: 0.3s;
}
.btn:hover {
  background: #00cc6a;
}
</style>`,
  },
];
