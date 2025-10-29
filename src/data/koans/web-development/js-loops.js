export const jsLoopsKoans = [
  {
    id: "js-koan-1",
    title: "For Loop Basics",
    description: "Learn how to use a simple for loop to repeat actions in JavaScript.",
    difficulty: "easy",
    task: "Print numbers 1 to 5 in the console.",
    hint: "Use a for loop and console.log.",
    initialCode: `// Write your loop here

`,
    solution: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
  },
  {
    id: "js-koan-2",
    title: "Loop Through Array",
    description: "Practice iterating through an array to access each element individually.",
    difficulty: "easy",
    task: "Print each fruit in the array below.",
    hint: "Use a for loop to access each element.",
    initialCode: `const fruits = ["apple", "banana", "mango"];

// Write your loop here
`,
    solution: `const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`,
  },
  {
    id: "js-koan-3",
    title: "Sum of Numbers",
    description: "Use loops to perform arithmetic operations — here, you’ll sum up all numbers in an array.",
    difficulty: "medium",
    task: "Find the total sum of the numbers in the array.",
    hint: "Use a loop and a variable to store the total.",
    initialCode: `const numbers = [1, 2, 3, 4, 5];

// Your code here
`,
    solution: `const numbers = [1, 2, 3, 4, 5];
let total = 0;

for (const num of numbers) {
  total += num;
}

console.log("Total:", total);`,
  },
];
