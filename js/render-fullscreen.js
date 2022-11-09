import { renderCorrectComments } from './comments.js';
import { mocks } from './data.js';
import { isEscapeKey } from './utils/utils.js';

const blockPictures = document.querySelector('.pictures');
const fullscreenPhoto = document.querySelector('.big-picture');
const bigImage = fullscreenPhoto.querySelector('.big-picture__img img');
const likeCounter = fullscreenPhoto.querySelector('.likes-count');
const commentCounter = fullscreenPhoto.querySelector('.comments-count');
const commentsList = fullscreenPhoto.querySelector('.social__comments');
const descriptionText = fullscreenPhoto.querySelector('.social__caption');

const buttonCancel = fullscreenPhoto.querySelector('.big-picture__cancel');


const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

const onButtonCancelClick = () => {
  closePhotoModal();
  buttonCancel.removeEventListener('click', onButtonCancelClick);
};

const getCorrectContent = (evt) => {
  const correctItem = mocks.find(
    (item) =>
      item.url
        .includes(
          evt.target.getAttribute('src')
        )
  );
  const { comments, likes, description, url } = correctItem;

  bigImage.src = url;
  likeCounter.textContent = likes;
  commentCounter.textContent = comments.length;
  descriptionText.textContent = description;


  commentsList.innerHTML = '';
  renderCorrectComments(comments, commentsList);


};

function openPhotoModal (evt) {
  getCorrectContent(evt);

  fullscreenPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);

  buttonCancel.addEventListener('click', onButtonCancelClick);
}

function closePhotoModal () {
  fullscreenPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);

}


blockPictures.addEventListener('click', (evt) => {
  if (evt.target.matches('.picture__img')) {
    openPhotoModal(evt);
  }
});
