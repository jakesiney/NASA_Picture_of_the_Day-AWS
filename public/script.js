fetch('/apod')
  .then(response => response.json())
  .then(data => {
    if (data.media_type === 'image') {
      const imageContainer = document.getElementById('image-container');
      const imageElement = document.createElement('img');
      imageElement.src = data.url;
      imageContainer.appendChild(imageElement);
    } else {
      console.warn("Today's media is not an image.");
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });