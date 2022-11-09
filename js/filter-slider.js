const form = document.querySelector('.img-upload__effects');

const sliderElement = document.querySelector('.effect-level__slider');
const image = document.querySelector('.img-upload__preview img');
const sliderArea = document.querySelector('.img-upload__effect-level');

const FILTER_EFFECTS = {
  none: {
    nameEffect: 'origin',
  },
  chrome: {
    range: {
      min: 1,
      max: 0,
    },
    step: 0.1,
    nameEffect: 'grayscale',
  },
  sepia: {
    range: {
      min: 1,
      max: 0,
    },
    step: 0.1,
    nameEffect: 'sepia',
  },
  marvin: {
    range: {
      min: 1,
      max: 0,
    },
    step: 0.1,
    nameEffect: 'invert',
  },
  phobos: {
    range: {
      min: 1,
      max: 0,
    },
    step: 0.1,
    nameEffect: 'blur',
  },
  heat: {
    range: {
      min: 1,
      max: 0,
    },
    step: 0.1,
    nameEffect: 'brightness',
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 20,
  step: 10,
  connect: 'lower'
});

const getPointerValue = (filter) => {
  let pointer;
  switch (filter) {
    case 'blur':
      pointer = 'px';
      break;
    case 'invert':
      pointer = '%';
      break;
    default:
      pointer = '';
      break;
  }
  return pointer;
};

const addPhotoFilter = (evt) => {
  const correctFilter = FILTER_EFFECTS[evt.target.value].nameEffect;
  const pointer = getPointerValue(correctFilter);

  if (correctFilter === 'origin') {
    image.style.filter = null;
    sliderArea.style.display = 'none';
  } else {
    sliderArea.style.display = 'block';
    image.style.filter = `${correctFilter}(1${pointer})`;
  }
};

const onFormFilterChange = (evt) => {
  addPhotoFilter(evt);
};

form.addEventListener('change', onFormFilterChange);

/* <fieldset class="img-upload__effects  effects">
  <ul class="effects__list">
    <li class="effects__item">
      <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-none" value="none" checked>
        <label for="effect-none" class="effects__label">
          <span class="effects__preview  effects__preview--none">Превью фото без эффекта</span>
          Оригинал
        </label>
    </li>
    <li class="effects__item">
      <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-chrome" value="chrome">
        <label for="effect-chrome" class="effects__label">
          <span class="effects__preview  effects__preview--chrome">Превью эффекта Хром</span>
          Хром
        </label>
    </li>
    <li class="effects__item">
      <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-sepia" value="sepia">
        <label for="effect-sepia" class="effects__label">
          <span class="effects__preview  effects__preview--sepia">Превью эффекта Сепия</span>
          Сепия
        </label>
    </li>
    <li class="effects__item">
      <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-marvin" value="marvin">
        <label for="effect-marvin" class="effects__label">
          <span class="effects__preview  effects__preview--marvin">Превью эффекта Марвин</span>
          Марвин
        </label>
    </li>
    <li class="effects__item">
      <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-phobos" value="phobos">
        <label for="effect-phobos" class="effects__label">
          <span class="effects__preview  effects__preview--phobos">Превью эффекта Фобос</span>
          Фобос
        </label>
    </li>
    <li class="effects__item">
      <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-heat" value="heat">
        <label for="effect-heat" class="effects__label">
          <span class="effects__preview  effects__preview--heat">Превью эффекта Зной</span>
          Зной
        </label>
    </li>
  </ul>
</fieldset> */


// <fieldset class="img-upload__effect-level  effect-level">
//   <input class="effect-level__value" type="number" step="any" name="effect-level" value="">
//     <div class="effect-level__slider"></div>
// </fieldset>
