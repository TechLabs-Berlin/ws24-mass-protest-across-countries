// import SearchBar from "./SearchBar";
export default function LandingPage() {
  return (
    <div>
      <hr />
      <main>
        <div id="banner">
          <br />
          <br />
          <br />
          BANNER/Carrousel?
          <br />
          <br />
          <br />
        </div>
        <hr />
        <div>
          {/* <SearchBar /> */}
        </div>
        <div id="search-buttons">
          <div id="inner-navigation">
            <label>
              <select>
                <option value="">Location</option>
                <option value="">Charlottenburg-Wilmersdorf</option>
                <option value="">Friedrichshain-Kreuzberg</option>
                <option value="">Lichtenberg-Hohenschönhausen</option>
                <option value="">Marzahn-Hellersdorf</option>
                <option value="">Mitte</option>
                <option value="">Neukölln</option>
                <option value="">Pankow</option>
                <option value="">Reinickendorf</option>
                <option value="">Spandau</option>
                <option value="">Steglitz-Zehlendorf</option>
                <option value="">Tempelhof-Schöneberg</option>
                <option value="">Treptow-Köpenick</option>
              </select>
            </label>
            <label>
              <select>
                <option value="">Categories</option>
                <option value="">Politics</option>
                <option value="">Environment</option>
                <option value="">Education</option>
                <option value="">Human Rights</option>
                <option value="">Women's Rights</option>
                <option value="">(Finance/Economy)</option>
              </select>
            </label>
          </div>
          <hr />
          <br />
          <div id="protest-filters">
            <form action="/protests" method="GET">
              <button>Upcoming protests</button>
            </form>

            <form action="/past-protests" method="GET">
              <button>Past protests</button>
            </form>
          </div>
          <hr />
          <br />
          <div id="protest-cards">
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>Protest info cards area</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <hr />
        <footer>
          <br />
          <p>footer</p>
          <br />
          <p>
            &copy; <i>FindMyProtest</i>
          </p>
        </footer>
      </main>
    </div>
  );
}
