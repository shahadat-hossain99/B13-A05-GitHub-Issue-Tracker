# 🌟 Welcome To (সহজ সরল সিম্পল) Assignment - 5

---

- ## Answer:

---

- 1️⃣ What is the difference between var, let, and const?

==ans:== In js, var is function scoped , it get hoisted and we can redeclare it. On the other hand, let and const are block scoped .we can not access them before declaration. let can be redeclared but const never. However, we can change value inside an array or object which are declared with const

---

- 2️⃣ What is the spread operator (...)?

==ans:== Spread operator `...` is used to spread out all the elements or Properties of an array or object.it makes easy to copy or marge elements and it can generate new array or object without change the main array or object

---

- 3️⃣ What is the difference between map(), filter(), and forEach()?

==ans:==

1. `Map()` is a method of array which returns an new array by changing each elements of the original array using given condition or call-back function. It didn't change anything on the original array.
2. `Filter()` is also a method of array which returns a new array with the elements which matches the given condition.It didn't change anything on the original array.
3. `forEach()` doesn't return anything but you can perform actions to each elements of the array.

---

- 4️⃣ What is an arrow function?

==ans:== **Arrow Function** is a shorter and simpler way to write a function in JavaScript.  
It was introduced in ES6
(2015).

---

- 5️⃣ What are template literals?

==ans:==
Template Literals are a feature in JavaScript (ES6) which is used to create strings using backticks . We can add or change value dynamically in it using `${ }`

---

## **API Endpoints:** All needed api links

### **All Issues:**

- https://phi-lab-server.vercel.app/api/v1/lab/issues

### **Single Issue:**

- https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

- Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33

### **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

- Example: https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications

---
