import { dataServer } from './api.js';
import { fillTemplate } from './render-mini-photo.js';
import { debounce } from './utils/utils.js';

const MAX_RANDOM_POST = 10;

const formFilter = document.querySelector('.img-filters__form');
const buttonsFilters = formFilter.querySelectorAll('.img-filters__button');

const clearPosts = () => {
  document.querySelectorAll('.pictures.container a').forEach((a) => a.remove());
};

const isActiveSort = (evt) => evt.target.classList.contains('img-filters__button--active');

const sortPostsByFilterRandom = () => {
  dataServer.then((data) => {
    clearPosts();
    const randomPosts = data.slice().sort(() => Math.random() - 0.5).slice(0, MAX_RANDOM_POST);
    fillTemplate(randomPosts);
  });
};

const sortPostsByFilterDiscussed = () => {
  dataServer.then((data) => {
    clearPosts();
    const popularPosts = data.slice().sort((a, b) => b.comments.length - a.comments.length);
    fillTemplate(popularPosts);
  });
};

const sortPostsDefault = () => {
  dataServer.then((data) => {
    clearPosts();
    fillTemplate(data);
  });
};

const sortPosts = (evt) => {
  switch (evt.target.getAttribute('id')) {
    case 'filter-random':
      sortPostsByFilterRandom();
      break;
    case 'filter-discussed':
      sortPostsByFilterDiscussed();
      break;
    case 'filter-default':
      sortPostsDefault();
      break;
  }
};

const optimizationFilter = debounce(sortPosts);

const onButtonFilterClick = (evt) => {
  if (!isActiveSort(evt)) {
    optimizationFilter(evt);
  }
  if (evt.target.matches('.img-filters__button')) {
    buttonsFilters.forEach((button) => {
      button.classList.remove('img-filters__button--active');
    });
    evt.target.classList.add('img-filters__button--active');
  }
};

formFilter.addEventListener('click', onButtonFilterClick);
