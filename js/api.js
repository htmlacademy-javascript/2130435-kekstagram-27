import { createErrorMessage } from './create-error-message.js';
import { fillTemplate } from './render-mini-photo.js';
import { showResponseMessage } from './utils/response-message.js';

const Url = {
  GET: 'https://27.javascript.pages.academy/kekstagram/data',
  POST: 'https://27.javascript.pages.academy/kekstagram'
};

const filterField = document.querySelector('.img-filters');

const getDataServer = async (onSuccess, onFail) => {
  try {
    const response = await fetch(Url.GET);
    if (response.ok) {
      const data = await response.json();
      onSuccess(data);
      filterField.classList.remove('img-filters--inactive');
      return data;
    }
    throw new Error('Ошибка загрузки с сервера!');
  }
  catch (err) {
    return `${onFail(err.message)}`;
  }
};

const sendFormOnServer = async(onSuccess, body) => {
  try {
    const response = await fetch(Url.POST, {
      method: 'POST',
      body
    });
    if (response.ok) {
      return onSuccess();
    }
    throw new Error('Данные не отправились на сервер!');
  }
  catch (err) {
    showResponseMessage('error');
  }
};

const dataServer = getDataServer(fillTemplate, createErrorMessage);

export { dataServer, sendFormOnServer };

