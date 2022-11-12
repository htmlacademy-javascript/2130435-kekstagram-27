const buttonSubmit = document.querySelector('.img-upload__submit');

const blockButtonSubmit = () => {
  buttonSubmit.disabled = true;
  buttonSubmit.textContent = 'Отправляю...';
};

const unblockButtonSubmit = () => {
  buttonSubmit.disabled = false;
  buttonSubmit.textContent = 'Опубликовать';
};

export { blockButtonSubmit, unblockButtonSubmit };
