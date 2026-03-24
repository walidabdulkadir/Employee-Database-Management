let employees = [];

// DOM Elements
const employeeList = document.getElementById("employee-list");
const employeeDetails = document.getElementById("employee-details");
const addEmployeeBtn = document.getElementById("add-employee-btn");
const modal = document.getElementById("add-employee-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const cancelModalBtn = document.getElementById("cancel-modal-btn");
const addEmployeeForm = document.getElementById("add-employee-form");

// Initialization: Fetch Data
async function init() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Failed to fetch employee data");
    const data = await response.json();
    employees = data;
    renderEmployees();
  } catch (error) {
    console.error("Error:", error);
    employeeList.innerHTML =
      '<li style="padding: 16px; color: red;">Failed to load data.</li>';
  }
}

// 6. Show employee list on the page
function renderEmployees() {
  employeeList.innerHTML = "";

  if (employees.length === 0) {
    employeeList.innerHTML =
      '<li style="padding: 16px; text-align: center; color: var(--text-muted);">No employees found</li>';
    return;
  }

  employees.forEach((emp) => {
    const li = document.createElement("li");
    li.className = "employee-item";
    li.dataset.id = emp.id;

    // Create the info container that's clickable
    const infoDiv = document.createElement("div");
    infoDiv.className = "emp-info-short";
    infoDiv.onclick = () => displayEmployee(emp.id);
    infoDiv.innerHTML = `
      <img src="${emp.image}" alt="${emp.firstName}" class="emp-avatar-small">
      <span class="emp-name-short">${emp.firstName} ${emp.lastName}</span>
    `;

    // Create the delete button separately
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "❌";
    deleteBtn.title = "Delete Employee";
    deleteBtn.onclick = (e) => {
      e.stopPropagation(); // prevent clicking the row when deleting
      deleteEmployee(emp.id);
    };

    li.appendChild(infoDiv);
    li.appendChild(deleteBtn);
    employeeList.appendChild(li);
  });
}

// 7. Show employee details when clicked
window.displayEmployee = function (id) {
  const emp = employees.find((e) => e.id === id);
  if (!emp) return;

  // Active state styling
  document.querySelectorAll(".employee-item").forEach((item) => {
    if (item.dataset.id == id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  employeeDetails.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <img src="${emp.image}" alt="${emp.firstName}" class="detail-avatar">
      </div>
      <div class="detail-body">
        <h2 class="detail-name">${emp.firstName} ${emp.lastName}</h2>
        <div class="detail-grid">
          <div class="detail-item">
            <span class="detail-label">Email</span>
            <span class="detail-value">${emp.email}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Phone</span>
            <span class="detail-value">${emp.phone}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Date of Birth</span>
            <span class="detail-value">${emp.dob}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Salary</span>
            <span class="detail-value">$${emp.salary}</span>
          </div>
        </div>
      </div>
    </div>
  `;
};

// 9. Delete employee
window.deleteEmployee = function (id) {
  employees = employees.filter((emp) => emp.id !== id);
  renderEmployees();

  // Clear the details panel if we just deleted the viewed employee
  // For simplicity, we just clear it back to the empty state every time a deletion happens.
  employeeDetails.innerHTML = `
    <div class="empty-state">
      <p>Select an employee from the list to view their details</p>
    </div>
  `;
};

// Modal Functions
addEmployeeBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

function closeModal() {
  modal.classList.add("hidden");
  addEmployeeForm.reset();
}

closeModalBtn.addEventListener("click", closeModal);
cancelModalBtn.addEventListener("click", closeModal);
modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);

// 8. Add new employee
addEmployeeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newEmployee = {
    id: Date.now(), // Generate a unique ID using timestamp
    firstName: document.getElementById("emp-first-name").value,
    lastName: document.getElementById("emp-last-name").value,
    email: document.getElementById("emp-email").value,
    phone: document.getElementById("emp-phone").value,
    salary: document.getElementById("emp-salary").value,
    dob: document.getElementById("emp-dob").value,
    image: document.getElementById("emp-image").value,
  };

  employees.push(newEmployee);
  renderEmployees();
  closeModal();

  // Optionally display the new employee immediately
  displayEmployee(newEmployee.id);
});

// Start the app
init();
