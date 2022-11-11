const createErrorMessage = (text) => {
  const message = document.createElement('div');

  message.style.position = 'fixed';
  message.style.position = 'fixed';
  message.style.top = '30px';

  message.style.display = 'flex';
  message.style.justifyContent = 'center';
  message.style.width = '100vw';


  message.style.color = '#ff4e4e';
  message.style.fontSize = '28px';

  message.textContent = text;

  document.body.append(message);
};

export { createErrorMessage };
