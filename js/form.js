import { isEscapeKey } from './utils/utils.js';

const form = document.querySelector('.img-upload__form');

const formPhotoDownload = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const buttonCancel = formPhotoDownload.querySelector('#upload-cancel');

const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const onFileInputChange = (evt) => openFormModal(evt);

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === descriptionField;

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeFormModal();
  }
};

const onButtonCancelClick = () => {
  closeFormModal();
  buttonCancel.removeEventListener('click', onButtonCancelClick);
};


function openFormModal (evt) {
  evt.preventDefault();
  formPhotoDownload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  buttonCancel.addEventListener('click', onButtonCancelClick);
}

function closeFormModal () {
  form.reset();

  formPhotoDownload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadFile.addEventListener('click', onFileInputChange);

export { form, hashtagField, descriptionField };
