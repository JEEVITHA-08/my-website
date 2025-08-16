// 1️⃣ Welcome alert
window.addEventListener("load", () => {
    alert("Welcome to the Skills Test!");
    updateStudentCount();
});

// 2️⃣ Form validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
        form.reset();
    }
});

// 3️⃣ Theme toggle button
const themeButton = document.createElement("button");
themeButton.textContent = "Change Theme";
themeButton.style.display = "block";
themeButton.style.margin = "10px auto";
themeButton.style.padding = "5px 10px";
document.body.insertBefore(themeButton, document.body.firstChild);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// 4️⃣ Student counter
function updateStudentCount() {
    const totalStudents = document.querySelectorAll("table tbody tr").length;
        document.getElementById("student-counter").textContent = `Total Students: ${totalStudents}`;
    }
