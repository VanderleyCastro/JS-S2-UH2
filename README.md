# Data Management with Objects, Sets, and Maps in JavaScript

This project demonstrates the use of advanced data structures in JavaScript, including **Objects**, **Sets**, and **Maps**, to organize, store, and manipulate data efficiently.

## Project Objective

The goal of this project is to reinforce the understanding and implementation of:

- Object creation and manipulation
- Using `Set` to ensure unique values
- Using `Map` to store associative key-value data
- Iterating through data structures using:
  - `for...in`
  - `for...of`
  - `forEach()`
- Object methods:
  - `Object.keys()`
  - `Object.values()`
  - `Object.entries()`
- Basic data validation

---

## Features

### 1. Product Object Management
Each product contains the following properties:

- `id` → unique product identifier
- `name` → product name
- `price` → numeric value

Example:

```javascript
{
  id: 1,
  name: "Laptop",
  price: 2500
}
```

### 2. Set Usage
This project demonstrates how to:

- Create a `Set` with duplicate values
- Automatically remove duplicates
- Add new values using `.add()`
- Check if a value exists using `.has()`
- Remove values using `.delete()`
- Iterate through the Set using `for...of`

### 3. Map Usage
A `Map` is used to relate:

**Category (key)** → **Product Name (value)**

Example:

```javascript
"Tecnology" => "Laptop"
```

### 4. Data Iteration
The application demonstrates:

- `for...in` for object properties
- `for...of` for Set iteration
- `forEach()` for Map traversal

### 5. Data Validation
Basic validations ensure that every product has:

- A valid `id`
- A non-empty `name`
- A valid numeric `price`

---

## Technologies Used

- JavaScript (ES6+)
- Node.js
- Visual Studio Code

---

## Project Structure

```bash
JS S2 UH2/
│── gestion_datos.js
│── README.md
```

---

## Installation

Clone this repository:

```bash
https://github.com/VanderleyCastro/JS-S2-UH2.git
```

Go to the project folder:

```bash
cd your-repository
```

---

## Run the Project

Make sure Node.js is installed.

Run the following command in the terminal:

```bash
node gestion_datos.js
```

---

## Example Output

```bash
===== PRODUCT VALIDATION =====
Valid product: Laptop
Valid product: Mouse
Valid product: Keyboard

===== SET USAGE =====
Set without duplicates: Set(5) {1,2,3,4,5}

===== MAP CATEGORIES =====
Category: Technology -> Product: Laptop
```

---

## Learning Outcomes

By completing this project, the following concepts were reinforced:

- JavaScript Objects
- Set Data Structure
- Map Data Structure
- Data Validation
- Loops and Iteration
- ES6 Features

---


