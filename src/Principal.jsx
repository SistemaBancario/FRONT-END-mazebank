import MAZEBANK from "../src/assets/IMG/MazeBankLogo.webp"
import MAZEBANK2 from "../src/assets/IMG/MAZEBANKEDIFICIO.jpg"
import MAZEBANK3 from "../src/assets/IMG/MAZEbankedi.jpg"
import MAZEBANK4 from "../src/assets/IMG/EDIFICIO2.webp"
import "./assets/styles.css";

function Principal() {
  return (
    <>
      <div>
        <header>

          <nav id="navBar" class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img id="IMG-NAVBAR" src={MAZEBANK} alt="Bootstrap" width="30" height="24" />
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <button id="BotonL" class="btn" className="BotonesLyS" type="submit">Login</button>
                <button  class="btn" className="BotonesLyS" type="submit">Sing Up</button>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div >
        <h1 id="titulo"> <strong> MAZE BANK </strong> </h1>

        <div class="d-flex justify-content-center">
          <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img id="slider1" src={MAZEBANK2} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img id="slider2" src={MAZEBANK4} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  
                </div>
              </div>
              <div class="carousel-item">
                <img id="slider3" src={MAZEBANK3} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div>
        <div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
        </div>
      </div>

    </>
  )
}

export default Principal
