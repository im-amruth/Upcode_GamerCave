export const gameDevKoans = [
  {
    id: "game-koan-1",
    title: "Player Movement",
    description: "Learn how to move a player object using keyboard inputs.",
    difficulty: "easy",
    task: "Move a player box with arrow keys.",
    hint: "Use 'keydown' event and modify player position.",
    initialCode: `<div id="player"></div>

<style>
  #player {
    width: 50px;
    height: 50px;
    background: lime;
    position: absolute;
    top: 100px;
    left: 100px;
  }
</style>

<script>
// Your code here
</script>`,
    solution: `<div id="player"></div>

<style>
  #player {
    width: 50px;
    height: 50px;
    background: lime;
    position: absolute;
    top: 100px;
    left: 100px;
  }
</style>

<script>
let player = document.getElementById("player");
let x = 100, y = 100;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") y -= 10;
  if (e.key === "ArrowDown") y += 10;
  if (e.key === "ArrowLeft") x -= 10;
  if (e.key === "ArrowRight") x += 10;
  player.style.top = y + "px";
  player.style.left = x + "px";
});
</script>`,
  },
  {
    id: "game-koan-2",
    title: "Collision Detection",
    description: "Understand how to detect when two objects collide on screen.",
    difficulty: "hard",
    task: "Detect when two squares collide and log a message.",
    hint: "Compare their bounding rectangles using getBoundingClientRect().",
    initialCode: `<div id="player"></div>
<div id="enemy"></div>

<style>
  #player, #enemy {
    width: 50px;
    height: 50px;
    position: absolute;
  }
  #player { background: blue; top: 100px; left: 100px; }
  #enemy { background: red; top: 100px; left: 300px; }
</style>

<script>
// Your code here
</script>`,
    solution: `<div id="player"></div>
<div id="enemy"></div>

<style>
  #player, #enemy {
    width: 50px;
    height: 50px;
    position: absolute;
  }
  #player { background: blue; top: 100px; left: 100px; }
  #enemy { background: red; top: 100px; left: 300px; }
</style>

<script>
let player = document.getElementById("player");
let enemy = document.getElementById("enemy");

function checkCollision() {
  let a = player.getBoundingClientRect();
  let b = enemy.getBoundingClientRect();

  if (
    a.left < b.right &&
    a.right > b.left &&
    a.top < b.bottom &&
    a.bottom > b.top
  ) {
    console.log("Collision detected!");
  }
}

setInterval(checkCollision, 100);
</script>`,
  },
  {
    id: "game-koan-3",
    title: "Score Counter",
    description: "Learn how to implement a basic score system that updates over time.",
    difficulty: "medium",
    task: "Create a score that increases every second.",
    hint: "Use setInterval and update innerText.",
    initialCode: `<h2 id="score">Score: 0</h2>

<script>
// Your code here
</script>`,
    solution: `<h2 id="score">Score: 0</h2>

<script>
let score = 0;
setInterval(() => {
  score++;
  document.getElementById("score").innerText = "Score: " + score;
}, 1000);
</script>`,
  },
];
