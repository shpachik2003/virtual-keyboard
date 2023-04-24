const label = document.createElement('label');
label.setAttribute('for', 'input-text');
label.textContent = 'Для переключения языка используйте клавиши';

const inputText = document.createElement('input');
inputText.setAttribute('type', 'text');
inputText.setAttribute('id', 'input-text');

// Сначала добавляем inputText на страницу
document.body.appendChild(inputText);

// Затем добавляем label перед inputText
inputText.parentNode.insertBefore(label, inputText);

const virtualKeyboard = document.createElement('div');
virtualKeyboard.setAttribute('id', 'virtual-keyboard');
document.body.appendChild(virtualKeyboard);

const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

for (let i = 0; i < keys.length; i++) {
  const key = document.createElement('button');
  key.setAttribute('class', 'key');
  key.textContent = keys[i];
  virtualKeyboard.appendChild(key);
}

virtualKeyboard.addEventListener('click', (event) => {
  const key = event.target.textContent;
  inputText.value += key;
});