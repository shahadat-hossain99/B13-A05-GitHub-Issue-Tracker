# 🐛 GitHub Issue Tracker

![React](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)

A clean and responsive GitHub Issues Tracker web app that lets users browse, filter, search, and view detailed information about issues — with login authentication and a smooth UI.

🔗 **[View Live Site](#)** &nbsp;|&nbsp; 💻 **[Source Code](https://github.com/shahadat-hossain99/B13-A05-GitHub-Issue-Tracker)**

---

## ✨ Features

| Feature             | Description                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| Login Page          | Credential-based login with demo username & password                          |
| Issue Listing       | Load and display all issues from REST API                                     |
| Tab Filtering       | Filter issues by All, Open, and Closed tabs                                   |
| Issue Cards         | Each card shows title, description, status, author, priority, label, and date |
| Detail Modal        | Click any card to open a full detail modal                                    |
| Search              | Search issues by keyword in real time                                         |
| Color-coded Borders | Green border for open issues, purple for closed                               |
| Loading Spinner     | Shown while fetching data from API                                            |
| Responsive Design   | Works on mobile and desktop                                                   |

---

## 🛠️ Tech Stack

**Frontend:** `HTML` `CSS` `JavaScript (Vanilla)` `Tailwind CSS` `DaisyUI`

**API:** `phi-lab-server.vercel.app`

---

## 🔑 Demo Credentials

Username: admin
Password: admin123

---

## 🌐 API Endpoints

All Issues: GET https://phi-lab-server.vercel.app/api/v1/lab/issues
Single Issue: GET https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}
Search: GET https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

---

## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/shahadat-hossain99/B13-A05-GitHub-Issue-Tracker.git

# 2. Navigate into the project
cd B13-A05-GitHub-Issue-Tracker

# 3. Open index.html in your browser
# No build step needed — pure HTML/CSS/JS
```

---

## 💡 JavaScript Concepts Used

### 1️⃣ What is the difference between `var`, `let`, and `const`?

- `var` is function-scoped and can be re-declared and updated. It is hoisted to the top of its scope but initialized as `undefined`.
- `let` is block-scoped, can be updated but not re-declared in the same scope. Safer than `var` for most use cases.
- `const` is also block-scoped but cannot be updated or re-declared. Use it when the value should never change.

```js
var name = "Shahadat"; // function-scoped, can redeclare
let age = 22; // block-scoped, can update
const country = "BD"; // block-scoped, cannot update
```

---

### 2️⃣ What is the spread operator (`...`)?

The spread operator expands an array or object into individual elements. It is useful for copying, merging, or passing values without mutation.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { name: "Shahadat" };
const obj2 = { ...obj1, age: 22 }; // { name: "Shahadat", age: 22 }
```

---

### 3️⃣ What is the difference between `map()`, `filter()`, and `forEach()`?

- `map()` — transforms each element and returns a **new array** of the same length.
- `filter()` — returns a **new array** with only elements that pass a condition.
- `forEach()` — loops through each element but **returns nothing** (used for side effects).

```js
const nums = [1, 2, 3, 4, 5];

nums.map((n) => n * 2); // [2, 4, 6, 8, 10]
nums.filter((n) => n % 2 === 0); // [2, 4]
nums.forEach((n) => console.log(n)); // logs each, returns undefined
```

---

### 4️⃣ What is an arrow function?

An arrow function is a shorter syntax for writing functions introduced in ES6. It does not have its own `this`, which makes it useful inside callbacks and event handlers.

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

---

### 5️⃣ What are template literals?

Template literals are strings wrapped in backticks (`` ` ``) instead of quotes. They allow embedding variables and expressions directly inside strings using `${}`, and support multi-line strings easily.

```js
const name = "Shahadat";
const age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
// My name is Shahadat and I am 22 years old.
```

---

## 📁 Project Structure

B13-A05-GitHub-Issue-Tracker/
├── assets/
│ └── (images, icons)
├── index.html
├── login.html
├── style.css
└── script.js

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

**Made with ❤️ by [Md. Shahadat Hossain](https://github.com/shahadat-hossain99)**

- GitHub: [@shahadat-hossain99](https://github.com/shahadat-hossain99)
- LinkedIn: [md-shahadat-hossain-coder](https://www.linkedin.com/in/md-shahadat-hossain-coder)

<p align="center">⭐ If you found this helpful, please give it a star!</p>
