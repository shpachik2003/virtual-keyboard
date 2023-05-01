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

  static commandKeys = ['Backspace', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight'];

  static getKeyByCode(code) {
    
    const result = Key.arrayOfKeys.find((el) => el[0] === code);
    
    if (result) {
      return new Key(result);
    }

    return false;
  }

  
  getValue() {
    let value = '';
    if (this.value === 'Tab') return '\t';
    if (this.value === 'Enter') return '\n';
    if (this.value === 'Space') return ' ';

    if (Key.shift) {
      if (Key.lang === 'en') {
        value = this.shiftValue;
      } else {
        value = this.ruShiftValue;
      }
    } else if (!Key.shift) {
      if (Key.lang === 'en') {
        value = this.value;
      } else {
        value = this.ruValue;
      }
    }

    if ((Key.caps && !Key.shift) || (!Key.caps && Key.shift)) {
      return value.toUpperCase();
    }
    return value.toLowerCase();
  }

  isCommand() {
    return Key.commandKeys.includes(this.code);
  }
  
  constructor(keyArray) {
    [this.code, this.value, this.shiftValue, this.ruValue, this.ruShiftValue] = [...keyArray];
  }
}

const keysHtml = [];
const keysActive = new Set();

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

const sys = document.createElement('div');
sys.classList.add('syst');
sys.innerHTML = 'Клавиатура для операционной системы MacOS';

const sys2 = document.createElement('div');
sys2.classList.add('lan');
sys2.innerHTML = 'Комбинация переключения языка: левыe ctrl + alt';

mainContainer.appendChild(h1);
mainContainer.appendChild(textarea);
mainContainer.appendChild(keyBoardContainer);
mainContainer.appendChild(sys);
mainContainer.appendChild(sys2);

document.body.appendChild(mainContainer);

document.addEventListener('keydown', keyDownHandle);
document.addEventListener('keyup', keyUpHandle);
document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);



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


function keyDownHandle(e) {
  keysActive.add(e.code);

  const key = Key.getKeyByCode(e.code);
  if (key && key.code !== 'CapsLock') {
    e.preventDefault();
    addActive(key);
  }
  keyActionHandle(key);

  textarea.focus();
}

function keyActionHandle(key) {
  if (!key) return;

  if (key.isCommand()) {
    switch (key.code) {
      case 'Backspace':
        deleteChar();
        break;
      case 'CapsLock':
        capsToggle();
        if (Key.caps) addActive(key);
        else removeActive(key);
        keyboardCapsChange();
        break;
      case 'ShiftRight':
      case 'ShiftLeft':
        shiftPress();
        keyboardCapsChange();
        break;
      case 'ControlLeft':
      case 'AltLeft':
        if (keysActive.has('ControlLeft') && keysActive.has('AltLeft')) {
          langToggle();
          keyboardCapsChange();
        }
        break;
      default:
        break;
    }
  } else {
    insertKey(key);
  }
}

function addActive(key) {
  const target = keysHtml.find((el) => el.dataset.code === key.code);

  target.classList.add('active');
}

function insertKey(key) {
  if (key.isCommand()) return;
  const curPos = textarea.selectionStart;
  const str = textarea.value;
  const textPart1 = str.substring(0, curPos);
  const textPart2 = str.substring(curPos);
  const newStr = textPart1 + key.getValue() + textPart2;
  textarea.value = newStr;
  textarea.selectionStart = curPos + 1;
  textarea.selectionEnd = curPos + 1;
}

function keyUpHandle(e) {
  keysActive.delete(e.code);

  const key = Key.getKeyByCode(e.code);

  if (key && key.code !== 'CapsLock') {
    setTimeout(removeActive, 110, key);
  }

  keyUpAction(key);
}


function keyUpAction(key) {
  if (!key) return;
  switch (key.code) {
    case 'ShiftRight':
    case 'ShiftLeft':
      shiftRelease();
      keyboardCapsChange();
      break;
    default:
      break;
  }
}

function removeActive(key) {

  const target = keysHtml.find((el) => el.dataset.code === key.code);

  target.classList.remove('active');
}



function mouseDown(e) {

  const { code } = e.target.dataset;
  keysActive.add(code);

  if (code) {
    const key = Key.getKeyByCode(code);
    if (key && key.code !== 'CapsLock') {
      addActive(key);
    }
    keyActionHandle(key);
  }
}

function mouseUp(e) {
  
  const { code } = e.target.dataset;
  
  keysActive.delete(code);
  
  if (code) {
    const key = Key.getKeyByCode(code);
    if (key && key.code !== 'CapsLock') {
      setTimeout(removeActive, 200, key);
    }
    textarea.focus();
  }
}