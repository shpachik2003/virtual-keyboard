class Key {
  static arrayOfKeys = [
    ['Backquote', '`', '~', 'ё', 'Ë'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '@', '2', '"'],
    ['Digit3', '3', '#', '3', '№'],
    ['Digit4', '4', '$', '4', ';'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', '^', '6', ':'],
    ['Digit7', '7', '&', '7', '?'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],

    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'q', 'Q', 'й', 'Й'],
    ['KeyW', 'w', 'W', 'ц', 'Ц'],
    ['KeyE', 'e', 'E', 'у', 'У'],
    ['KeyR', 'r', 'R', 'к', 'К'],
    ['KeyT', 't', 'T', 'е', 'Е'],
    ['KeyY', 'y', 'Y', 'н', 'Н'],
    ['KeyU', 'u', 'U', 'г', 'Г'],
    ['KeyI', 'i', 'I', 'ш', 'Ш'],
    ['KeyO', 'o', 'O', 'щ', 'Щ'],
    ['KeyP', 'p', 'P', 'з', 'З'],
    ['BracketLeft', '[', '{', 'х', 'Х'],
    ['BracketRight', ']', '}', 'ъ', 'Ъ'],
    ['Backslash', '\\', '|', '\\', '/'],

    ['CapsLock', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock'],
    ['KeyA', 'a', 'A', 'ф', 'Ф'],
    ['KeyS', 's', 'S', 'ы', 'Ы'],
    ['KeyD', 'd', 'D', 'в', 'В'],
    ['KeyF', 'f', 'F', 'а', 'А'],
    ['KeyG', 'g', 'G', 'п', 'П'],
    ['KeyH', 'h', 'H', 'р', 'Р'],
    ['KeyJ', 'j', 'J', 'о', 'О'],
    ['KeyK', 'k', 'K', 'л', 'Л'],
    ['KeyL', 'l', 'L', 'д', 'Д'],
    ['Semicolon', ';', ':', 'ж', 'Ж'],
    ['Quote', '\'', '"', 'э', 'Э'],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],

    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'z', 'Z', 'я', 'Я'],
    ['KeyX', 'x', 'X', 'ч', 'Ч'],
    ['KeyC', 'c', 'C', 'с', 'С'],
    ['KeyV', 'v', 'V', 'м', 'М'],
    ['KeyB', 'b', 'B', 'и', 'И'],
    ['KeyN', 'n', 'N', 'т', 'Т'],
    ['KeyM', 'm', 'M', 'ь', 'Ь'],
    ['Comma', ',', '<', 'б', 'Б'],
    ['Period', '.', '>', 'ю', 'Ю'],
    ['Slash', '/', '?', '.', ','],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],

    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['AltLeft', 'Option', 'Option', 'Option', 'Option'],
    ['MetaLeft', 'Command', 'Command', 'Command', 'Command'],
    ['Space', 'Space', 'Space', 'Space', 'Space'],
    ['MetaRight', 'Command', 'Command', 'Command', 'Command'],
    ['AltRight', 'Option', 'Option', 'Option', 'Option'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►']
  ];

  constructor(keyArray) {
    [this.code, this.value, this.shiftValue, this.ruValue, this.ruShiftValue] = [...keyArray];
  }
}

const keysHtml = [];

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
const h1 = document.createElement('h1');
h1.innerText = 'My virtual keyboard';
const textarea = document.createElement('textarea');
const keyBoardContainer = document.createElement('div');
keyBoardContainer.classList.add('keyboard-container');

for (let i = 1; i <= 5; i += 1) {
  const keyBoardLine = document.createElement('div');
  keyBoardLine.classList.add('keyboard-line');
  getKeysForLine(i).forEach((key) => {
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    keyDiv.innerText = key.value;
    keyDiv.dataset.code = key.code;
    keyBoardLine.appendChild(keyDiv);
    keysHtml.push(keyDiv);
  });
  keyBoardContainer.appendChild(keyBoardLine);
}

const d1 = document.createElement('div');
d1.classList.add('system');
d1.innerHTML = 'Клавиатура создана в операционной системе MacOs';

const d2 = document.createElement('div');
d2.classList.add('lang');
d2.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';

mainContainer.appendChild(h1);
mainContainer.appendChild(textarea);
mainContainer.appendChild(keyBoardContainer);
mainContainer.appendChild(d1);
mainContainer.appendChild(d2);

document.body.appendChild(mainContainer);



function getKeysForLine(num=1) {
    const rez = [];
    let end = 0;
    let start = 0;
    switch (num) {
      case 1:
        start = 0;
        end = 13;
        break;
      case 2:
        start = 14;
        end = 27;
        break;
      case 3:
        start = 28;
        end = 40;
        break;
      case 4:
        start = 41;
        end = 53;
        break;
      case 5:
        start = 54;
        end = 62;
        break;
      default:
        break;
    }
    console.log(num, start,end);
    for (let i = start; i <= end; i ++) {
      let key = new Key(Key.arrayOfKeys[i]);
      rez.push(key);
    }

    return rez;
    
}
