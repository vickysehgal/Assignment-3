const inputBox = document.getElementById('input-box');
const output = document.getElementById('output');

inputBox.addEventListener('keypress', (event) => {
	output.innerHTML += `<br> Keypress event triggered: Key = ${event.key}`;
});

inputBox.addEventListener('keydown', (event) => {
	output.innerHTML += `<br> Keydown event triggered: Key = ${event.key}`;
});

inputBox.addEventListener('keyup', (event) => {
	output.innerHTML += `<br> Keyup event triggered: Key = ${event.key}`;
});
