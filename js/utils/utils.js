const IS_POSITIVE = 0;
const FIRST_ITEM = 0;

const TIME_DELAY = 500;

const getRandomPositiveInteger = (from, to) => {
  if (from < IS_POSITIVE || to < IS_POSITIVE) {
    return NaN;
  }

  const upper = Math.floor(Math.max(from, to));
  const lower = Math.ceil(Math.min(from, to));
  return Math.round(Math.random() * (upper - lower) + lower);
};

const getRandomElement = (array) => array[getRandomPositiveInteger(FIRST_ITEM, array.length - 1)];

const validateMaxLengthStroke = (stroke, maxLength) => stroke.length <= maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const debounce = (callback, timeoutDelay = TIME_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomPositiveInteger, getRandomElement, validateMaxLengthStroke, isEscapeKey, isEnterKey, debounce };

