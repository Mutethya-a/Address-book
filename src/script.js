const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

// Constructor to create contact objects
class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

// Function to render contact list
function renderContactList() {
  contactList.innerHTML = ''; // Clear the list before re-rendering
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

// Array to hold contacts
let contacts = [];

// Handle form submit to add contact
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && phone && email) {
    const newContact = new Contact(name, phone, email);
    contacts.push(newContact); // Add new contact to array
    renderContactList(); // Re-render the contact list
    contactForm.reset(); // Reset form inputs
  }
});

// Handle delete and edit button clicks
contactList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    const index = e.target.getAttribute('data-index');
    contacts.splice(index, 1); // Remove the contact from the array
    renderContactList(); // Re-render the contact list
  } else if (e.target.classList.contains('edit')) {
    const index = e.target.getAttribute('data-index');
    const contact = contacts[index];
    
    // Fill the form with the contact details for editing
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;

    // Remove the contact and allow editing
    contacts.splice(index, 1);
    renderContactList();
  }
});
