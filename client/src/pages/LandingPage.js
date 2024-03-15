import ProtestPage from "./ProtestPage";

export default function LandingPage() {
    return (
      <div>
          <h1>Homepage</h1>
        <main>
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
          <div id="banner">
            BANNER/Carrousel?
          </div>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>
          <div>
          <br></br>
          <form id="SearchBar">
            <input type="text" id="search-bar" />
            <button>Search</button>
          </form>
          <br></br> 
          </div>
          <div id="search-buttons">
            <ProtestPage />
          </div>
          <hr></hr>
          <footer>
            <p><b>FOOTER</b></p>
            <br></br>
            <p>&copy; <i>FindMyProtest</i></p>
          </footer>
        </main>
      </div>
        )
  }