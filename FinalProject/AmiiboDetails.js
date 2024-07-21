async function AmiiboDetails(amiiboID, amiiboCharacter, amiiboGameSeries){

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
        <div class="card" style="width: 18rem; background-color: bisque">
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

    RelatedCharacter(amiiboID, amiiboCharacter);
    RelatedGameSeries(amiiboID, amiiboGameSeries);
}

async function RelatedCharacter(amiiboID, amiiboCharacter, amiiboGameSeries){
    let CharacterURL = `https://www.amiiboapi.com/api/amiibo/?character=${amiiboCharacter}`;

    const options1 = {
        method: 'GET',
    };

    const response1 = await fetch(CharacterURL, options1);
    const result1 = await response1.text();

    const wholeObject1 = JSON.parse(result1);

    const amiiboArray = wholeObject1.amiibo;

    let relatedCharacter = document.getElementById("relatedCharacter");

    if(amiiboArray.length-1 > 0){
        relatedCharacter.innerHTML = `<br>
        <h2>Related Character</h2>
        <br>
    `;
    }
    else{
        relatedCharacter.innerHTML = "";
    }

    let newRow;


    let count = 0;

    for (let i = 0; i < amiiboArray.length; i++) {


        let amiiboCurrentID = amiiboArray[i].head + amiiboArray[i].tail;

        if (amiiboCurrentID === amiiboID)
            continue;

        if (count % 4 === 0) {
            newRow = document.createElement("div");
            newRow.className = "row";
            relatedCharacter.appendChild(newRow);

            newBreakLine = document.createElement("br");
            relatedCharacter.appendChild(newBreakLine);
        }

        let amiiboImage = amiiboArray[i].image;
        let amiiboName = amiiboArray[i].name;
        let amiiboCharacter = amiiboArray[i].character;
        let amiiboGameSeries = amiiboArray[i].gameSeries;

        newRow.insertAdjacentHTML("beforeend", `
                        <div class="col-3">
                            <a href="#" onclick="AmiiboDetails('${amiiboCurrentID}', '${amiiboCharacter}', '${amiiboGameSeries}')">
                                <div class="img-thumbnail text-center h-100" style="background-color: beige">
                                    <img src="${amiiboImage}" alt="${amiiboName}" height="200px" ">
                                    <hr>
                                    <h3>${amiiboName}</h3>
                                </div>
                            </a>
                        </div>
                    `);


        count++;
    }
}

async function RelatedGameSeries(amiiboID, amiiboGameSeries){
    let GameSeriesURL = `https://www.amiiboapi.com/api/amiibo/?gameseries=${amiiboGameSeries}`;

    const options1 = {
        method: 'GET',
    };

    const response1 = await fetch(GameSeriesURL, options1);
    const result1 = await response1.text();

    const wholeObject1 = JSON.parse(result1);

    const amiiboArray = wholeObject1.amiibo;

    let relatedGame = document.getElementById("relatedGame");

    if(amiiboArray.length-1 > 0){
        relatedGame.innerHTML = `<br>
        <h2>Related GameSeries</h2>
        <br>
    `;
    }
    else{
        relatedGame.innerHTML = "";
    }

    let newRow;


    let count = 0;

    for (let i = 0; i < amiiboArray.length; i++) {


        let amiiboCurrentID = amiiboArray[i].head + amiiboArray[i].tail;

        if (amiiboCurrentID === amiiboID)
            continue;

        if (count % 4 === 0) {
            newRow = document.createElement("div");
            newRow.className = "row";
            relatedGame.appendChild(newRow);

            newBreakLine = document.createElement("br");
            relatedGame.appendChild(newBreakLine);
        }

        let amiiboImage = amiiboArray[i].image;
        let amiiboName = amiiboArray[i].name;
        let amiiboCharacter = amiiboArray[i].character;
        let amiiboGameSeries = amiiboArray[i].gameSeries;

        newRow.insertAdjacentHTML("beforeend", `
                        <div class="col-3">
                            <a href="#" onclick="AmiiboDetails('${amiiboCurrentID}', '${amiiboCharacter}', '${amiiboGameSeries}')">
                                <div class="img-thumbnail text-center h-100" style="background-color: beige">
                                    <img src="${amiiboImage}" alt="${amiiboName}" height="200px" ">
                                    <hr>
                                    <h3>${amiiboName}</h3>
                                </div>
                            </a>
                        </div>
                    `);


        count++;
    }
}

