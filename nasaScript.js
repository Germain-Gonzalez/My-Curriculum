function fetchNASAImages() {
    const searchQuery = document.getElementById("searchQuery").value;
    const imageCount = document.getElementById("imageCount").value;
    const apiKey = 'key nasa';
    const apiUrl = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const nasaImagesContainer = document.getElementById('nasaImages');
        nasaImagesContainer.innerHTML = '';
  
        data.collection.items.slice(0, imageCount).forEach(item => {
          const imageUrl = item.links && item.links.find(link => link.rel === 'preview');
          if (imageUrl && imageUrl.href) {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl.href;
            nasaImagesContainer.appendChild(imageElement);
          }
        });
      })
      .catch(error => {
        console.error('Error al obtener imágenes de la NASA:', error);
      });
  }
  