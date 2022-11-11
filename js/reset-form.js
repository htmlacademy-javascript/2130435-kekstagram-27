import { setDefaultFilter } from './filter-slider.js';
import { form } from './form.js';
import { scaleImage } from './scale-photo.js';

export const resetForm = () => {
  form.reset();
  setDefaultFilter();
  scaleImage();
};
