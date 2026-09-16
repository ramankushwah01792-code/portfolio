// Show/Hide sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
        
        // Scroll to section
        selectedSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Typing effect for terminal
document.addEventListener('DOMContentLoaded', function() {
    const terminalContent = document.getElementById('terminal-content');
    
    // Add some interactivity
    terminalContent.addEventListener('click', function() {
        const randomMsg = [
            "Great choice! 🚀",
            "Nice! Keep exploring.",
            "You're doing great! 💻",
            "Keep clicking to explore more!"
        ];
        
        const msg = randomMsg[Math.floor(Math.random() * randomMsg.length)];
        console.log(msg);
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Alt + A = About
    if (event.altKey && event.key === 'a') {
        showSection('about');
    }
    // Alt + P = Projects
    if (event.altKey && event.key === 'p') {
        showSection('projects');
    }
    // Alt + S = Skills
    if (event.altKey && event.key === 's') {
        showSection('skills');
    }
    // Alt + C = Contact
    if (event.altKey && event.key === 'c') {
        showSection('contact');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Random console message on load
window.addEventListener('load', function() {
    console.log('%c Welcome to Raman\'s Portfolio! ', 'background: #00ff00; color: #0a0a0a; font-weight: bold; padding: 10px;');
    console.log('%c Full Stack Developer | Web Enthusiast ', 'color: #00ff00; font-size: 14px;');
    console.log('%c Use Alt+A, Alt+P, Alt+S, Alt+C for quick navigation ', 'color: #00ff00; font-size: 12px;');
    console.log('%c Connect with me: github.com/ramankushwah01792-code ', 'color: #00ff00; font-size: 12px;');
});