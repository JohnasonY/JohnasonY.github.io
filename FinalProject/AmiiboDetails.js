async function AmiiboDetails(amiiboID){

    let AmiiboURL = `https://www.amiiboapi.com/api/amiibo/?id=${amiiboID}`;

    const options = {
        method: 'GET',
    };

    const response = await fetch(AmiiboURL, options);
    const result = await response.text();

    const wholeObject = JSON.parse(result);

    const Amiibo = wholeObject.amiibo;

    let PageContent = document.getElementById("PageContent");

    PageContent.className = "container d-flex justify-content-center align-items-center";

    PageContent.innerHTML = `
        <div class="card h-100" style="background-color: bisque">
            <img src="${Amiibo.image}" class="card-img-top" alt="${Amiibo.name}">
            <div class="card-body">
                <h5 class="card-title text-center">${Amiibo.name}</h5>
                <p class="card-text"><b>Game Series</b>: ${Amiibo.gameSeries}</p>
                <p class="card-text"><b>Character</b>: ${Amiibo.character}</p>
                <p class="card-text"><b>Type</b>: ${Amiibo.type}</p>
                <p class="card-text"><b>Realease Date</b>: <br>
                    Australia: ${Amiibo.release.au}<br>
                    Europe: ${Amiibo.release.eu}<br>
                    Japan: ${Amiibo.release.jp}<br>
                    North America: ${Amiibo.release.na}<br>
                </p>
            </div>
        </div>
    `;

}