const FILTER_EFFECTS = {
  none: {
    nameEffect: 'origin',
  },
  chrome: {
    config:{
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    nameEffect: 'grayscale',
  },
  sepia: {
    config:{
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    nameEffect: 'sepia',
  },
  marvin: {
    config:{
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    nameEffect: 'invert',
  },
  phobos: {
    config:{
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    nameEffect: 'blur',
  },
  heat: {
    config:{
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    nameEffect: 'brightness',
  }
};

const form = document.querySelector('.img-upload__effects');

const sliderElement = document.querySelector('.effect-level__slider');
const image = document.querySelector('.img-upload__preview img');
const sliderArea = document.querySelector('.img-upload__effect-level');

const effectValue = document.querySelector('.effect-level__value');

const sliderConfigInit = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
};

noUiSlider.create(sliderElement, sliderConfigInit);

const setDefaultFilter = () => {
  image.style.filter = null;
  sliderArea.style.display = 'none';
};

const getUnitFilter = (filter) => {
  let unit;
  switch (filter) {
    case 'blur':
      unit = 'px';
      break;
    case 'invert':
      unit = '%';
      break;
    default:
      unit = '';
      break;
  }
  return unit;
};

const changeFilter = (filter, unit) => {
  sliderElement.value = sliderElement.noUiSlider.get();
  sliderArea.style.display = 'block';
  image.style.filter = `${filter}(${sliderElement.value}${unit})`;
};


const addPhotoFilter = (evt) => {
  effectValue.name = evt.target.value;
  const { nameEffect, config: filterConfig } = FILTER_EFFECTS[effectValue.name];

  if (nameEffect === 'origin') {
    setDefaultFilter();
  } else {
    sliderElement.noUiSlider.updateOptions(filterConfig);
  }
};

const onFormFilterChange = (evt) => {
  addPhotoFilter(evt);
};

const onSliderUpdate = () => {
  const { nameEffect } = FILTER_EFFECTS[effectValue.name];
  const unit = getUnitFilter(nameEffect);
  changeFilter(nameEffect, unit);
};

form.addEventListener('change', onFormFilterChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);
setDefaultFilter();

export { setDefaultFilter };
