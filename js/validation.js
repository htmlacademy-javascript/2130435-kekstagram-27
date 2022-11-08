import { descriptionField, form, hashtagField } from './form.js';
import { validateMaxLengthStroke } from './utils/utils.js';

const MAX_LENGTH_STROKE = 140;
const MAX_HASHTAGS = 5;

const hashtagRegExp = /^#[a-zа-яё0-9]{1,19}$/i;

const pristineConfig = {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'error__wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'error__text'
};

const pristine = new Pristine(
  form,
  pristineConfig,
  true
);

const isUniqueHashtags = (hashtagList) => hashtagList.length === new Set(hashtagList).size;

const checkRegExp = (hashtagList) => {
  for (const hashtag of hashtagList) {
    if (!hashtagRegExp.test(hashtag)) {
      return false;
    }
  }
  return true;
};

const getListHashtag = () =>
  hashtagField.value
    .trim()
    .toLowerCase()
    .split(' ');

const validateHashtag = () => {
  const hashtagList = getListHashtag();
  return (isUniqueHashtags(hashtagList) && checkRegExp(hashtagList) && hashtagList.length <= MAX_HASHTAGS) || hashtagField.va;
};

const validateDescription = () => validateMaxLengthStroke(descriptionField.value, MAX_LENGTH_STROKE);

pristine.addValidator(hashtagField, validateHashtag, 'Форма заполнена неверно');
pristine.addValidator(descriptionField, validateDescription, `Длина комментария не может составлять больше ${MAX_LENGTH_STROKE} символов`);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

