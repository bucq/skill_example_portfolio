// Smooth active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.work-card, .skill-category, .info-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const notice = document.getElementById('form-notice');
  notice.textContent = 'メッセージを送信しました。ありがとうございます！';
  e.target.reset();
  setTimeout(() => { notice.textContent = ''; }, 5000);
}
