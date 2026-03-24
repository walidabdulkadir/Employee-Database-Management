# Employee Database Management System

A simple web application that allows users to manage employee information through a clean and interactive interface. The system displays a list of employees, shows detailed information for each employee, and allows users to add or remove employees from the list.

## Project Overview

This project is a front-end employee management interface built using **HTML, CSS, and JavaScript**. It simulates a small employee database where users can view employee profiles, add new employees, and delete existing ones.

The application reads employee data from a JSON file and dynamically updates the interface using JavaScript.

## Features

* Display a list of employees
* View detailed information for a selected employee
* Add a new employee through a form
* Delete employees from the list
* Dynamically update the interface without reloading the page
* Simple and responsive layout

## Technologies Used

* **HTML** – page structure and layout
* **CSS** – styling and page layout (Flexbox)
* **JavaScript** – application logic and interactivity
* **JSON** – storing employee data

## Project Structure

```
employee-database-project
│
├── index.html       # Main application page
├── style.css        # Styling and layout
├── script.js        # Application logic
├── data.json        # Employee data
└── images/          # Employee profile images
```

## How It Works

1. When the page loads, JavaScript fetches employee data from the JSON file.
2. The application displays the employee names in a list.
3. When a user clicks an employee name, the system shows detailed information on the right panel.
4. The **Add Employee** button opens a form where users can enter new employee information.
5. The **Delete button (❌)** removes an employee from the list.

## Learning Purpose

This project demonstrates key front-end development concepts including:

* DOM manipulation
* Dynamic content rendering
* Working with JSON data
* Event handling in JavaScript
* Building simple interactive interfaces

## Future Improvements

* Store employee data in a real database
* Add search and filtering
* Add employee editing functionality
* Improve UI design and responsiveness
* Add backend support (Node.js or API)

## Author

Developed as a practice project for learning front-end web development and basic database interface design.
