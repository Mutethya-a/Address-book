const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

function renderContactList() {
  contactList.innerHTML = '';
  contacts.forEach((contact, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${contact.name}</strong>
      <span>📞 ${contact.phone}</span>
      <span>✉️ ${contact.email}</span>
      <button class="edit" data-index="${index}">Edit</button>
      <button class="delete" data-index="${index}">Delete</button>
    `;
    contactList.appendChild(li);
  });
}

let contacts = [];

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && phone && email) {
    const newContact = new Contact(name, phone, email);
    contacts.push(newContact);
    renderContactList();
    contactForm.reset(); 
  }
});


contactList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    const index = e.target.getAttribute('data-index');
    contacts.splice(index, 1);
    renderContactList();
  } else if (e.target.classList.contains('edit')) {
    const index = e.target.getAttribute('data-index');
    const contact = contacts[index];
    
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;

    contacts.splice(index, 1);
    renderContactList();
  }
});
