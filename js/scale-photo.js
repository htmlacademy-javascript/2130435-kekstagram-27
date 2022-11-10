const DEFAULT_SIZE = 100;
const MIN_SCALE_CHANGE = 25;
const MAX_SCALE_CHANGE = 100;
const SCALE_STEP = 25;

const fieldsetScale = document.querySelector('.img-upload__scale');
const buttonSmallerControl = fieldsetScale.querySelector('.scale__control--smaller');
const buttonBiggerControl = fieldsetScale.querySelector('.scale__control--bigger');
const scaleViewer = fieldsetScale.querySelector('.scale__control--value');

const image = document.querySelector('.img-upload__preview img');

const scaleImage = (value = DEFAULT_SIZE) => {
  const percent = value * 0.01;
  image.style.transform = `scale(${percent})`;
  scaleViewer.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  let correctValue = parseInt(scaleViewer.value, 10);
  switch (true) {
    case correctValue <= MIN_SCALE_CHANGE:
      break;
    default:
      correctValue -= SCALE_STEP;
      scaleImage(correctValue);
  }
};

const onBiggerButtonClick = () => {
  let correctValue = parseInt(scaleViewer.value, 10);
  switch (true) {
    case correctValue >= MAX_SCALE_CHANGE:
      break;
    default:
      correctValue += SCALE_STEP;
      scaleImage(correctValue);
  }
};

buttonSmallerControl.addEventListener('click', onSmallerButtonClick);
buttonBiggerControl.addEventListener('click', onBiggerButtonClick);
