const label = document.createElement('label');
label.setAttribute('for', 'input-text');
label.textContent = 'Для переключения языка используйте клавиши';

const inputText = document.createElement('textarea');
inputText.setAttribute('type', 'text');
inputText.setAttribute('id', 'input-text');

document.body.appendChild(inputText);
inputText.parentNode.insertBefore(label, inputText);

const virtualKeyboard = document.createElement('div');
virtualKeyboard.setAttribute('id', 'virtual-keyboard');
document.body.appendChild(virtualKeyboard);

const keys = ['~`', '1', '2', '3', '4', '5', '6', '7', '*8', '9', '0', '-', '+=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
 'P', '[', ']', '\\', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER', 'Shift', '\\', 
 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'L', 'L', 'L', '🔼', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '🔙', '🔽', '🔜',];

for (let i = 0; i < keys.length; i++) {
  const key = document.createElement('button');
  key.setAttribute('class', 'key');
  key.textContent = keys[i];
  if (keys[i] === " ") {
    key.style.width = "400px";
  }
  virtualKeyboard.appendChild(key);
}

virtualKeyboard.addEventListener('click', (event) => {
  const key = event.target.textContent;
  inputText.value += key;
});

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  const keyButtons = document.querySelectorAll('.key');
  keyButtons.forEach(button => {
    if (button.textContent === keyPressed) {
      button.classList.add('active');
    }
  });
});

document.addEventListener('keyup', (event) => {
  const keyPressed = event.key;
  const keyButtons = document.querySelectorAll('.key');
  keyButtons.forEach(button => {
    if (button.textContent === keyPressed) {
      button.classList.remove('active');
    }
  });
});
