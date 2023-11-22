document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Show section titles on scroll
    const sections = document.querySelectorAll('.section');

    function handleScroll() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Initial check when the page loads
    handleScroll();

    // Check on scroll
    window.addEventListener('scroll', handleScroll);
});

//Expand Tables
var currentlyOpenTable = null;

function expandTable(tableId) {
    var table = document.getElementById(tableId);

    if (currentlyOpenTable !== null && currentlyOpenTable !== table) {
        currentlyOpenTable.style.display = "none";
    }

    if (table.style.display === "none") {
        table.style.display = "table";
        currentlyOpenTable = table;
    } else {
        table.style.display = "none";
        currentlyOpenTable = null;
    }
}







// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    var aboutContent = document.getElementById('aboutContent');

    if (isElementInViewport(aboutContent)) {
        aboutContent.classList.add('visible');
    }
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
handleScroll();



// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    var aboutContent = document.getElementById('aboutContent');

    if (isElementInViewport(aboutContent)) {
        aboutContent.classList.add('visible');
    }
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
handleScroll();
