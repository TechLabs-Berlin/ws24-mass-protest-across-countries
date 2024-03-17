import ProtestPage from "../pages/ProtestPage";
import BannerCarousel from "../components/BannerCarousel";
import NavBar from "../components/NavBar";
export default function LandingPage() {
  return (
    <div>
      <main>
        <div id="banner">
          <BannerCarousel />
        </div>
        <br />
        <div>
          <ProtestPage />
        </div>
        
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
