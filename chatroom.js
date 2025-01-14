//Use the const to pull the varibles from HTML
const ChatInput = document.getElementById('ChatInput');
const messageInput = document.getElementById('messageInput');
const ChatContainer = document.getElementById('ChatContainer');

const UserNameForm = document.getElementById('UserNameForm');

let storedUserName = ''; //sets the default username to User


UserNameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    storedUserName = document.getElementById('usernameInput').value;
    
});


//Event listener for the chat input - allows the user to submit a message
ChatInput.addEventListener('submit', function(event) {
    //Variables that Pulls the current date and time and 
    //const now is needed to pull the current date and time using its respective functions
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeStamp = `[${hours}:${minutes}:${seconds}]`; //sets the time stamp to the current time

    event.preventDefault(); //prevents the screen from refreshing
    const message = messageInput.value; //pulls the value from the input field
    if (!message) return; //if the message is empty, it will not submit

    
    const messageElement = document.createElement('p'); //creates a new paragraph element
    messageElement.innerHTML = `${timeStamp} <u><em><strong>${storedUserName}</em></strong></u> ${message}`;//sets the text content of the paragraph element to the message
    ChatContainer.appendChild(messageElement);//appends the message to the chat container

    messageInput.value = ''; //clears the input field
    messageInput.focus();//focuses on the input field (clicked in state)
    });
