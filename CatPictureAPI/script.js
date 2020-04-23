function getCatPicture() {
  fetch('https://api.thecatapi.com/v1/images/search', {
    method: 'GET',
    headers: {
      'x-api-key': 'fd3df051-6c0a-4a8a-a3ff-7c37cb6244dc',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const catImg = data[0].url;
      document.querySelector('.picture').innerHTML = `<img src="${catImg}" />`;
    });
}

document.querySelector('.next').addEventListener('click', getCatPicture);

getCatPicture();
