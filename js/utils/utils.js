const TIME_DELAY = 500;

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

export { validateMaxLengthStroke, isEscapeKey, isEnterKey, debounce };

