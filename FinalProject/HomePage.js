function HomePage(){
    let PageContent =document.getElementById("PageContent");
    PageContent.className = "container-fluid";
    PageContent.innerHTML = `
        <div class="row">
            <div class="col-4 border-right">
                <div class="container d-flex justify-content-center align-items-center" style="height: 80vh;">
                    <div class="text-center">
                        <div class="jumbotron jumbotron-fluid">
                            <div class="container">
                                <h1 class="display-4">Amiibo Showcase</h1>
                                <p class="lead">Enjoy Nintendo's Game Collectible here!</p>
                                <img src="./marioWalking.gif" alt="Pixel Mario Walking" width="20%">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-8">
                <div class="container-fluid" style="height: 65vh">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./Amiibo_main.jpg" class="d-block w-100" alt="Amiibo Main">
                            </div>
                            <div class="carousel-item">
                                <img src="./Smash.jpg" class="d-block w-100" alt="Smash">
                            </div>
                            <div class="carousel-item">
                                <img src="./Zelda.jpg" class="d-block w-100" alt="Zelda">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: black"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: black"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-4 text-center">
                            <a href="https://www.nintendo.com/en-gb/Hardware/amiibo-/About-amiibo/About-amiibo-932316.html">
                                <img src="QuestionBlock.jpg" class="rounded" width="50%">
                                <br>
                                <h4>What are Amiibo?</h4>
                            </a>
                        </div>

                        <div class="col-4 text-center">
                            <a href="https://www.nintendo.com/us/store/hardware/amiibo/">
                                <img src="AmiiboLogo.jpg" class="rounded" width="100%">
                                <br>
                                <h4>Amiibo Official Store</h4>
                            </a>
                        </div>

                        <div class="col-4 text-center">
                            <a href="https://www.nintendo.com/us/">
                                <img src="Nintendo.png" class="rounded" width="50%">
                                <br>
                                <h4>Nintendo</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    let relatedCharacter = document.getElementById("relatedCharacter");
    relatedCharacter.innerHTML = "";

    let relatedGame = document.getElementById("relatedGame");
    relatedGame.innerHTML = "";
}
