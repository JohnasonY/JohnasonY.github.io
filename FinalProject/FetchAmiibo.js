async function FetchAmiibo(url, heading){

    const options = {
        method: 'GET',
    };

    const response = await fetch(url, options);
    const result = await response.text();

    const wholeObject = JSON.parse(result);

    const amiiboArray = wholeObject.amiibo;

    let PageContent = document.getElementById("PageContent");

    PageContent.className = "container text-center";
    PageContent.innerHTML = `<br>
        <h2>${heading}</h2>
        <br>
    `;

    let newRow;

    for(let i = 0; i < amiiboArray.length; i++)
    {
        if(i % 4 === 0)
        {
            newRow = document.createElement("div");
            newRow.className = "row";
            PageContent.appendChild(newRow);

            newBreakLine = document.createElement("br");
            PageContent.appendChild(newBreakLine);
        }
        let amiiboImage = amiiboArray[i].image;
        let amiiboName = amiiboArray[i].name;

        let amiiboID = amiiboArray[i].head + amiiboArray[i].tail;
        newRow.insertAdjacentHTML("beforeend", `
                    <div class="col-3">
                        <a href="#" onclick="AmiiboDetails('${amiiboID}')">
                            <div class="img-thumbnail text-center h-100" style="background-color: beige">
                                <img src="${amiiboImage}" alt="${amiiboName}" height="200px" ">
                                <hr>
                                <h3>${amiiboName}</h3>
                            </div>
                        </a>
                    </div>
                `);
    }
}