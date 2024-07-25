function composeEmail() {
    var email = 'vikramadhanvi_paduchuri@srmap.edu.in';
    var message = document.getElementById('message').value;
    var subject = "Interested in your resume";
    var name = document.getElementById('name').value;
    var encodedMessage = encodeURIComponent(message);
    var encodedSubject = encodeURIComponent(subject);
  
    var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + encodedSubject + "&body=" + encodedMessage;
  
    window.open(gmailUrl, '_blank');
  }

// Add animations on scroll
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.animate__animated').forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
