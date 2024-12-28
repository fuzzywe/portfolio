document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed header
                behavior: "smooth"
            });
        });
    });

    // Animate skill progress bars
    const skillProgress = document.querySelectorAll(".skill-progress");
    skillProgress.forEach(skill => {
        const skillLevel = skill.dataset.skillLevel || 75; // Default skill level to 75%
        skill.style.width = skillLevel + "%";
    });

    // Dynamic greeting message based on time of day
    const heroSection = document.querySelector(".hero h2");
    const currentTime = new Date().getHours();
    let greetingMessage;

    if (currentTime >= 5 && currentTime < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentTime >= 12 && currentTime < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    heroSection.textContent = `${greetingMessage} I'm [Your Name], DevOps Engineer & Cloud Specialist.`;

    // Scroll-based animations for project items
    const projectItems = document.querySelectorAll(".project-item");
    const observerOptions = {
        threshold: 0.5 // Trigger animation when 50% of the element is in view
    };

    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-project");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projectItems.forEach(item => {
        projectObserver.observe(item);
    });

    // Modal functionality for project demos
    const projectLinks = document.querySelectorAll(".project-item a");
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    const closeModal = document.createElement("span");

    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    closeModal.classList.add("close-modal");

    closeModal.innerHTML = "&times;";
    modalContent.appendChild(closeModal);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    projectLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const demoUrl = link.getAttribute("href");

            // Embed project demo inside the modal
            modalContent.innerHTML = `<iframe src="${demoUrl}" frameborder="0" allowfullscreen></iframe>`;
            modalContent.appendChild(closeModal);
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
    

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

function viewCV() {
    var iframe = document.getElementById("cvViewer");

    // Change the source of the iframe to the CV file stored in the "assets" folder
    iframe.src = "D:\INTERVIEW\projects\protfolio\assets\cv.pdf";  // Update this path accordingly

    // Display the iframe
    iframe.style.display = "block";
}

  