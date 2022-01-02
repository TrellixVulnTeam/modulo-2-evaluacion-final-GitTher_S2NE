function getAnime(event) {
    event.preventDefault()
    const animeInput = document.querySelector('.js-input').value;
    fetch(`https://api.jikan.moe/v3/search/anime?q=${animeInput}`)
        .then(response => response.json())
        .then(animeData => {
            resultElements = animeData.results;
            renderResultList(resultElements);
        });
}

function renderResultList(resultElements) {
    resultList.innerHTML = '';
    for (let i = 0; i < resultElements.length; i++) {
        if (resultElements[i].image_url === 'https://cdn.myanimelist.net/images/qm_50.gif?s=e1ff92a46db617cb83bfc1e205aff620') {
            const resultCard = document.createElement('li');
            const resultCardImg = document.createElement('img');
            const resultCardTitle = document.createElement('h3');
            const resultCardTitleContent = document.createTextNode(resultElements[i].title);

            resultCard.appendChild(resultCardImg);
            resultCard.appendChild(resultCardTitle);
            resultCard.classList.add('results__card', 'js-card');

            resultCardImg.src = `https://via.placeholder.com/210x295/000000/ffffff/?text=${resultElements[i].title}`;
            resultCardImg.alt = resultElements[i].title;
            resultCardImg.classList.add('results__card--img');

            resultCardTitle.appendChild(resultCardTitleContent);
            resultCardTitle.classList.add('results__card--title', 'js-cardTitle');

            resultList.appendChild(resultCard);

        } else {
            const resultCard = document.createElement('li');
            const resultCardImg = document.createElement('img');
            const resultCardTitle = document.createElement('h3');
            const resultCardTitleContent = document.createTextNode(resultElements[i].title);

            resultCard.appendChild(resultCardImg);
            resultCard.appendChild(resultCardTitle);
            resultCard.classList.add('results__card', 'js-card');

            resultCardImg.src = resultElements[i].image_url;
            resultCardImg.alt = resultElements[i].title;
            resultCardImg.classList.add('results__card--img');

            resultCardTitle.appendChild(resultCardTitleContent);
            resultCardTitle.classList.add('results__card--title', 'js-cardTitle');

            resultList.appendChild(resultCard);

        }
        const animeCard = document.querySelectorAll('.js-card');
        for (const eachCard of animeCard) {
            eachCard.addEventListener('click', addFavourite);
        }
        compareLists();

    }
}
submitBtn.addEventListener('click', getAnime); 