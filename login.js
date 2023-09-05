
let loginDiv = document.getElementById('loginDiv');
let loginDiv2 = document.getElementById('loginLink')
const iframeContainer = document.getElementById('iframeContainer');

loginDiv.addEventListener('click', (event) => {
  event.stopPropagation(); // Etkinliğin yayılmasını engelleyerek iframe'ın kapanmasını önler

  const newDiv = document.createElement('div');
  newDiv.classList.add('new-div');

  const closeButton = document.createElement('button');
  closeButton.textContent = '';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', () => {
    newDiv.remove();
  });

  const iframe = document.createElement('iframe');
  iframe.src = 'http://localhost:3000/';
  iframe.style.width = '800px';
  iframe.style.height = '600px';

  newDiv.appendChild(closeButton);
  newDiv.appendChild(iframe);

  iframeContainer.innerHTML = '';
  iframeContainer.appendChild(newDiv);

  // Boş alana tıklandığında iframe'ı kapat
  document.addEventListener('click', (event) => {
    if (!newDiv.contains(event.target)) {
      newDiv.remove();
    }
  });
});

