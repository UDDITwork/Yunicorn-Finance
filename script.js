// Function to handle navigation content display
function displayContent(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Fetching Courses from Udemy
document.addEventListener('DOMContentLoaded', function() {
    const udemyUrl = 'https://www.udemy.com/courses/finance-and-accounting/';

    fetch(udemyUrl)
        .then((response) => response.text())
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const courses = doc.querySelectorAll('.course-card--main-content--3xEIw');
            const courseList = document.getElementById('course-list');

            courses.forEach((course) => {
                const courseName = course.querySelector('.course-card--course-title--2f7tE').innerText;
                const courseLink = course.querySelector('a').href;
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="${courseLink}" target="_blank">${courseName}</a>`;
                courseList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error('Error fetching Udemy courses:', error);
        });
});
