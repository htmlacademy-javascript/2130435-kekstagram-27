const DEFAULT_WIDTH = '35';
const DEFAULT_HEIGHT = '35';

const COMMENTS_LOADING_MAX = 5;

const commentsLoader = document.querySelector('.comments-loader');
const socialCommentCount = document.querySelector('.social__comment-count');
const fullscreenPhoto = document.querySelector('.big-picture');


const createCommentItem = (avatar, name, message) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.style.width = DEFAULT_WIDTH;
  img.style.height = DEFAULT_HEIGHT;
  img.src = avatar;
  img.alt = name;

  const comment = document.createElement('p');
  comment.classList.add('social__text');
  comment.textContent = message;

  li.append(img);
  li.append(comment);

  return li;
};

const renderCorrectComments = (comments, list) => {
  const commentList = comments.map(
    (comment) =>
      createCommentItem(comment.avatar, comment.name, comment.message)
  );

  let startElement = 0;
  let endElement = 5;


  const renderSegmentComments = () => {
    const commentFragment = document.createDocumentFragment();
    const loadingListComment = commentList.slice(startElement, endElement);
    loadingListComment.forEach((item) => commentFragment.append(item));
    list.append(commentFragment);
    const lengthView = list.querySelectorAll('p');
    socialCommentCount.textContent = `${lengthView.length} из ${commentList.length} комментариев`;

    if (lengthView.length === commentList.length) {
      commentsLoader.classList.add('hidden');
    } else {
      commentsLoader.classList.remove('hidden');
    }

    startElement += COMMENTS_LOADING_MAX;
    endElement += COMMENTS_LOADING_MAX;

  };


  if (fullscreenPhoto.classList.contains('hidden')) {
    commentsLoader.removeEventListener('click', renderSegmentComments);
  }

  commentsLoader.addEventListener('click', renderSegmentComments);
  renderSegmentComments();
};

export { renderCorrectComments };
