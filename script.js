const keys = document.querySelectorAll('.key');
const output = document.querySelector('.output');

let isShiftPressed = false;
let isCapsLockOn = false;

keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.textContent;

    if (value === 'Backspace') {
      output.value = output.value.slice(0, -1);
    } else if (value === 'Enter') {
      output.value += '\n';
    } else if (value === 'Caps') {
      isCapsLockOn = !isCapsLockOn;
      key.classList.toggle('active');
      updateKeyboardState();
    } else if (value === 'Shift') {
      isShiftPressed = !isShiftPressed;
      updateKeyboardState();
    } else if (value === 'Space') {
      output.value += ' ';
    } else {
      output.value += isShiftPressed || isCapsLockOn ? value.toUpperCase() : value.toLowerCase();
      isShiftPressed = false;
      updateKeyboardState();
    }
  });
});

function updateKeyboardState() {
  keys.forEach(key => {
    if (key.classList.contains('shift')) {
      key.classList.toggle('active', isShiftPressed);
    } else if (key.classList.contains('caps')) {
      key.classList.toggle('active', isCapsLockOn);
    }
  });
}