const DEFAULT_WIDTH = '35';
const DEFAULT_HEIGHT = '35';

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
  comments.forEach(
    (comment) =>
      list.append(
        createCommentItem(comment.avatar, comment.name, comment.message)
      )
  );
};

export { renderCorrectComments };
