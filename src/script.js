const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && phone && email) {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${name}</strong>
      <span>📞 ${phone}</span>
      <span>✉️ ${email}</span>
    `;
    contactList.appendChild(li);

    contactForm.reset();
  }
});
