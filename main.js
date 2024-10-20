const darkModeButton = document.getElementById('DMB');

darkModeButton.addEventListener('click', () => {
	document.body.classList.toggle('DarkMode');
	
	if (document.body.classList.contains('DarkMode')) {
        darkModeButton.textContent = "You're good no need press this";
		darkModeButton.style.backgroundColor = "white"; 
        darkModeButton.style.color = "black";
    } else {
        darkModeButton.textContent = "Press For Dark Mode!!";
		darkModeButton.style.backgroundColor = "black"; 
        darkModeButton.style.color = "white"; //
    }
	
	});