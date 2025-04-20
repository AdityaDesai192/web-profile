function toggleSection(id, anchor) {
  const allSections = document.querySelectorAll('.mini-section');
  const section = document.getElementById(id);

  // Close all other sections
  allSections.forEach(sec => {
    if (sec.id !== id) {
      sec.style.display = 'none';
    }
  });

  // Toggle the clicked one
  section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

// Highlight nav links
const navLinks = document.querySelectorAll('.left-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});