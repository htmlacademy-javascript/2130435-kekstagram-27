import { getRandomElement, getRandomPositiveInteger } from './utils/utils.js';

const ID_LIST_SIZE = 25;
const URL_LIST_SIZE = 25;

const NUMBER_OF_POSTS = 25;

const LIKES_MIN = 15;
const LIKES_MAX = 200;

const COMMENTS_ID_MIN = 1;
const COMMENTS_ID_MAX = 200;

const AVATAR_NUMBER_MIN = 1;
const AVATAR_NUMBER_MAX = 6;

const COMMENTS_MIN = 0;
const COMMENTS_MAX = 7;


const USERS_NAMES = [
  'Артём',
  'Андрей',
  'Мария',
  'Гена',
  'Саша',
  'Аня',
  'Марина',
  'Вика'
];

const COMMENTS_TEXTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS_TEXTS = [
  'Однозначно, некоторые особенности внутренней политики лишь добавляют фракционных разногласий и своевременно верифицированы. А также интерактивные прототипы призывают нас к новым свершениям, которые, в свою очередь, должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.',
  'В целом, конечно, постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки первоочередных требований. Прежде всего, существующая теория предопределяет высокую востребованность как самодостаточных, так и внешне зависимых концептуальных решений.',
  'Однозначно, сделанные на базе интернет-аналитики выводы представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть разоблачены. Безусловно, глубокий уровень погружения предполагает независимые способы реализации существующих финансовых и административных условий.',
  'Являясь всего лишь частью общей картины, многие известные личности набирают популярность среди определенных слоев населения, а значит, должны быть преданы социально-демократической анафеме. Внезапно, акционеры крупнейших компаний неоднозначны и будут описаны максимально подробно.',
  'Разнообразный и богатый опыт говорит нам, что реализация намеченных плановых заданий требует анализа новых принципов формирования материально-технической и кадровой базы. Вот вам яркий пример современных тенденций — современная методология разработки влечет за собой процесс внедрения и модернизации поставленных обществом задач.'
];

const generateListUniqueValues = (size) => {
  const listItems = Array.from( { length: size }, (_, item) => ++item);

  return () => {
    try {
      const uniqueValue = listItems.shift();
      if (uniqueValue === undefined) {
        throw new Error('Список неиспользованных элементов пуст');
      }
      return uniqueValue;
    }
    catch(err) {
      return `${err.message}`;
    }
  };
};

const generateIdComments = (min, max) => {
  const listBusyIds = [];

  return () => {
    try {
      if (listBusyIds.length > max - min) {
        throw new Error('Все ID заняты');
      }
      let newId = getRandomPositiveInteger(min, max);
      while (listBusyIds.includes(newId)) {
        newId = getRandomPositiveInteger(min, max);
      }
      listBusyIds.push(newId);
      return newId;
    }
    catch (err) {
      return `${err.message}`;
    }
  };
};

const getId = generateListUniqueValues(ID_LIST_SIZE);
const getUrl = generateListUniqueValues(URL_LIST_SIZE);
const getCommentId = generateIdComments(COMMENTS_ID_MIN, COMMENTS_ID_MAX);
const getAvatar = () => `img/avatar-${getRandomPositiveInteger(AVATAR_NUMBER_MIN, AVATAR_NUMBER_MAX)}.svg`;


const createCommentByPost = () => ({
  id: getCommentId(),
  avatar: getAvatar(),
  message: getRandomElement(COMMENTS_TEXTS_MESSAGES),
  name: getRandomElement(USERS_NAMES)
});

const getComments = () => Array.from(
  { length: getRandomPositiveInteger(COMMENTS_MIN,COMMENTS_MAX) },
  createCommentByPost);


const createPhotoPost = () => (
  {
    id: getId(),
    url: `photos/${getUrl()}.jpg`,
    description: getRandomElement(DESCRIPTIONS_TEXTS),
    likes: getRandomPositiveInteger(LIKES_MIN, LIKES_MAX),
    comments: getComments(),
  }
);

const generateMocksObject = (numberPots) => Array.from( { length: numberPots }, createPhotoPost);

const mocks = generateMocksObject(NUMBER_OF_POSTS);

export { mocks };
