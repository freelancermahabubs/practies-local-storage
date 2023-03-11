function getInputFieldValueById(inputFieldId){
  const inputField = document. getElementById(inputFieldId);
  const inputFiledText = inputField.value;
  // inputField.value = '';
  return inputFiledText;
  };

// delete Name 
document.getElementById('delete-name-btn').addEventListener('click', () =>{
    localStorage.removeItem('Name');
  });
  // set Name
document.getElementById('send-name-btn').addEventListener('click', () =>{
  const nameValue = getInputFieldValueById('name_filed');
  localStorage.setItem('Name', nameValue);
});

// delete Email 
document.getElementById('delete-email-btn').addEventListener('click', () =>{
    localStorage.removeItem('Email');
  });
  // set Email 
document.getElementById('send-email-btn').addEventListener('click', () =>{
  const emailValue = getInputFieldValueById('email_field');
  localStorage.setItem('Email', emailValue);
});

// delete message 
document.getElementById('delete-message-btn').addEventListener('click', () =>{
    localStorage.removeItem('Message')
  });

  // set message 
document.getElementById('send-message-btn').addEventListener('click', () =>{
  const messageValue = getInputFieldValueById('message-field');
  localStorage.setItem('Message', messageValue);
});


document.getElementById("reset-btn").addEventListener("click", () =>{
  localStorage.clear();
});

document.getElementById('send-btn').addEventListener('click', () =>{
  let data = {
    Name: getInputFieldValueById("name_filed"),
    Email: getInputFieldValueById("email_field"),
    Message: getInputFieldValueById("message-field"),
  };
  localStorage.setItem("data", JSON.stringify(data));
});

const loadData = () =>{
  const data = localStorage.getItem('data');
  if(data){
    const nameField = document.getElementById('name_filed');
    const emailField = document.getElementById('email_field');
    const messageField = document.getElementById('message-field');
    
    const {Name, Email, Message} = JSON.parse(data);
    nameField.value = Name;
    emailField.value = Email;
    messageField.value = Message;
  };

}
loadData();
