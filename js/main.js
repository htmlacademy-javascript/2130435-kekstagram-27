const IS_POSITIVE = 0;

const getRandomPositiveInteger = (from, to) => {
  if (from < IS_POSITIVE || to < IS_POSITIVE) {
    return NaN;
  }

  const upper = Math.floor(Math.max(from, to));
  const lower = Math.ceil(Math.min(from, to));
  return Math.round(Math.random() * (upper - lower) + lower);
};

const validateMaxLengthStroke = (stroke, maxLength) => stroke.length <= maxLength;

getRandomPositiveInteger(1,2);
validateMaxLengthStroke('3ds', 3);
