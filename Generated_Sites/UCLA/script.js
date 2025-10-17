const UNIQUE_ID = 'user6';

Papa.parse('../../data.csv', {
    download: true,
    header: true,
    complete: function(result) {
        const row = result.data.find(r => r.UniqueID === UNIQUE_ID);
        if (row) {
            const name = row.Name || 'Default Name';
            const title = row.Title || 'Default Title';
            const university = row.university || 'Default University';
            const address = row.address || 'Default Address';
            const contact = row.contact || 'Default Contact';
            const email = row.email || 'Default Email';
            
            document.getElementById('pageName').innerText = university;
            document.getElementById('pageTitle').innerText = title;
            document.title = title;
            
            // Update navigation
            document.getElementById('navUniversityName').innerText = university;
            document.getElementById('headerLogo').src = `${UNIQUE_ID}_logo.png`;
            document.getElementById('headerLogo').alt = `${university} Logo`;
            
            // Update footer
            document.getElementById('universityName').innerText = university;
            document.getElementById('universityAddress').innerText = address;
            document.getElementById('contactPhone').innerText = `Phone: ${contact}`;
            document.getElementById('contactEmail').innerText = `Email: ${email}`;
            document.getElementById('copyrightUniversity').innerText = university;
            
            document.getElementById('footerLogo').src = `${UNIQUE_ID}_logo.png`;
            document.getElementById('footerLogo').alt = `${university} Logo`;
        } else {
            console.error('No matching row for ID:', UNIQUE_ID);
            document.getElementById('pageName').innerText = 'Error: User Not Found';
            document.title = 'Error';
            document.getElementById('universityName').innerText = 'Error';
            document.getElementById('universityAddress').innerText = 'Error';
            document.getElementById('contactPhone').innerText = 'Error';
            document.getElementById('contactEmail').innerText = 'Error';
            document.getElementById('footerLogo').src = '../Logo/default_logo.png';
            document.getElementById('footerLogo').alt = 'Default Logo';
        }
    },
    error: function(error) {
        console.error('Error loading CSV:', error);
        document.getElementById('pageName').innerText = 'Error Loading Data';
        document.title = 'Error';
        document.getElementById('universityName').innerText = 'Error';
        document.getElementById('universityAddress').innerText = 'Error';
        document.getElementById('contactPhone').innerText = 'Error';
        document.getElementById('contactEmail').innerText = 'Error';
        document.getElementById('footerLogo').src = '../Logo/default_logo.png';
        document.getElementById('footerLogo').alt = 'Default Logo';
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        }
    });
});