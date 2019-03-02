const addButton = document.getElementById('addButton');

let phoneDirectory = [];



const updateRow = async (id) => {

 const response = await fetch(`/api/contact/${id}`, { method: 'post' });
 var data = await response.json();

 document.getElementById(data.id).contentEditable = "true";

document.getElementById(data.id).addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
     const id =data.id;
  const address =this.innerHTML;
      updateContact({ id, address});
    e.preventDefault()
    }
});

};



const deleteRow = async (id) => {
  const response = await fetch(`/api/contact/${id}`, { method: 'delete' });
  await response.text();

  fetchRows();
};

const renderRows = () => {
  const tbody = document.getElementById('tbody');

  tbody.innerHTML = '';

  const rows = phoneDirectory.map(({
    id, name, phone, email, address,
  }) => {
    const row = document.createElement('tr');

    const nameField = document.createElement('td');

    //const input = nameField.appendChild(document.createElement('input') );
    //input.readOnly = true
    nameField.innerHTML = name;
    row.appendChild(nameField);

    const phoneField = document.createElement('td');
   // const phone_input = phoneField.appendChild(document.createElement('input') );
    //phone_input.readOnly = true
    phoneField.innerHTML = phone;
    row.appendChild(phoneField);

    const emailField = document.createElement('td');
    //const email_input = emailField.appendChild(document.createElement('input') );
  //  email_input.readOnly = true
    emailField.innerHTML = email;
    row.appendChild(emailField);

    const addressField = document.createElement('td');
  // const address_input = addressField.appendChild(document.createElement('input') );
   // address_input.readOnly = true
    addressField.innerHTML = address;
      addressField.id = id;
    row.appendChild(addressField);


    const buttonField = document.createElement('td');
    const button = document.createElement('button');
    button.innerText = 'Remove';
    button.onclick = () => deleteRow(id);
    buttonField.appendChild(button);
    row.appendChild(buttonField);

    row.ondblclick = () => updateRow(id);

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

const addNewContact = async ({ name, phone, email,address }) => {
  const response = await fetch('/api/contact', {
    method: 'PUT',
    body: JSON.stringify({ name, phone, email, address }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const newContact = await response.json();

  phoneDirectory.push(newContact);

  renderRows();
};


//update
//
//
//
//
const updateContact = async (data) => {

  const id= data.id; 
    const address= data.address; 
  const response = await fetch(`/api/contact/${id}`, { 

    method: 'post' ,
            body: JSON.stringify({ address }),
        headers: {
      'Content-Type': 'application/json',
    },

  });

   const newContact = await response.text();
//console.log(  newContact )
  fetchRows();
};




addButton.onclick = () => {
  const iName = document.getElementById('iName');
  const iPhone = document.getElementById('iPhone');
  const iEmail = document.getElementById('iEmail');
    const iaddress = document.getElementById('address');

  const name = iName.value;
  const phone = iPhone.value;
  const email = iEmail.value;
const address = iaddress.value;
//console.log(address);
if (
name  ==''||
phone ==''||
email ==''||
address ==''
) {
 alert('introduzca los campos requeridos')
return false;
}else{
    iName.value = '';
  iPhone.value = '';
  iEmail.value = '';
  iaddress.value = '';

  addNewContact({ name, phone, email , address});
}




};

fetchRows();
