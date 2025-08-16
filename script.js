// On load: welcome + setup
window.addEventListener("load", () => {
  alert("Welcome to the Skills Test!");
  updateStudentCount();
  loadSavedData();
  setupThemeButton();
  setupClearButton();
  setupAddStudentForm();
});

// Form validation + localStorage
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields!";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";

    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push({ name, email, message });
    localStorage.setItem("submissions", JSON.stringify(submissions));

    loadSavedData();
    form.reset();
  });
}

// Theme toggle button
function setupThemeButton() {
  const themeButton = document.createElement("button");
  themeButton.textContent = "Change Theme";
  themeButton.style.display = "block";
  themeButton.style.margin = "10px auto";
  themeButton.style.padding = "5px 10px";
  document.body.insertBefore(themeButton, document.body.firstChild);

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}

// Student counter
function updateStudentCount() {
  const totalStudents = document.querySelectorAll("#student-section table tbody tr").length;
  const el = document.getElementById("student-counter");
  if (el) el.textContent = "Total Students: " + totalStudents;
}

// Load saved data
function loadSavedData() {
  const dataList = document.getElementById("dataList");
  if (!dataList) return;

  dataList.innerHTML = "";
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

  submissions.forEach((sub, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${sub.name} (${sub.email}): ${sub.message}`;

    dataList.appendChild(li);
  });
}

// Clear submissions
function setupClearButton() {
  const clearBtn = document.getElementById("clearSubmissions");
  if (!clearBtn) return;

  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("submissions");
    loadSavedData();
    if (formMessage) {
      formMessage.textContent = "All submissions cleared.";
      formMessage.style.color = "green";
    }
  });
}

// Add student dynamically
function setupAddStudentForm() {
  const addForm = document.getElementById("addStudentForm");
  if (!addForm) return;

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("sname").value.trim();
    const age = document.getElementById("sage").value.trim();
    const skill = document.getElementById("sskill").value.trim();

    if (!name || !age || !skill) return;

    const tbody = document.querySelector("#student-section table tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${name}</td><td>${age}</td><td>${skill}</td>`;

    tbody.appendChild(tr);

    updateStudentCount();
    addForm.reset();
  });
}