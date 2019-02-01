const addButton = document.getElementById('addButton');

let phoneDirectory = [];

const deleteRow = async (id) => {
  const response = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
  await response.text();

  fetchRows();
};

const renderRows = () => {
  const tbody = document.getElementById('tbody');

  tbody.innerHTML = '';

  const rows = phoneDirectory.map(({
    id, name, phone, email,
  }) => {
    const row = document.createElement('tr');

    const nameField = document.createElement('td');
    nameField.innerText = name;
    row.appendChild(nameField);
    const phoneField = document.createElement('td');
    phoneField.innerText = phone;
    row.appendChild(phoneField);
    const emailField = document.createElement('td');
    emailField.innerText = email;
    row.appendChild(emailField);
    const buttonField = document.createElement('td');
    const button = document.createElement('button');
    button.innerText = 'Removxyz';
    button.onclick = () => deleteRow(id);
    buttonField.appendChild(button);
    row.appendChild(buttonField);

    return row;
  });

  rows.forEach((row) => {
    tbody.appendChild(row);
  });
};

const fetchRows = async () => {
  const response = await fetch('/api/contacts');
  const phoneDirectoryArray = await response.json();

  phoneDirectory = [];
  phoneDirectory = phoneDirectoryArray;

  renderRows();
};

const addNewContact = async ({ name, phone, email }) => {
  const response = await fetch('/api/contact', {
    method: 'PUT',
    body: JSON.stringify({ name, phone, email }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const newContact = await response.json();

  phoneDirectory.push(newContact);

  renderRows();
};

addButton.onclick = () => {
  const iName = document.getElementById('iName');
  const iPhone = document.getElementById('iPhone');
  const iEmail = document.getElementById('iEmail');

  const name = iName.value;
  const phone = iPhone.value;
  const email = iEmail.value;

  iName.value = '';
  iPhone.value = '';
  iEmail.value = '';

  addNewContact({ name, phone, email });
};

fetchRows();
