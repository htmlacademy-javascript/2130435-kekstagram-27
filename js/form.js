import { isEscapeKey } from './utils/utils.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const form = document.querySelector('.img-upload__form');

const miniPhotosEffects = document.querySelectorAll('.effects__preview');

const formPhotoDownload = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const buttonCancel = formPhotoDownload.querySelector('#upload-cancel');

const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const onFileInputChange = (evt) => openFormModal(evt);


const preview = document.querySelector('.img-upload__preview img');

const changePhotoPreview = (file) => {
  preview.src = URL.createObjectURL(file);
  miniPhotosEffects.forEach((photo) => {
    photo.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
  });
};


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


function openFormModal () {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    formPhotoDownload.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
    buttonCancel.addEventListener('click', onButtonCancelClick);
    changePhotoPreview(file);
  }
}

function closeFormModal () {
  form.reset();

  formPhotoDownload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadFile.addEventListener('change', onFileInputChange);

export { form, hashtagField, descriptionField, closeFormModal };
