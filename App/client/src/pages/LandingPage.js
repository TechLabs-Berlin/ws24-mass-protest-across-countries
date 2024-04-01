import ProtestPage from "./ProtestPage";
import BannerCarousel from "../components/BannerCarousel";
import NavBar from "../components/NavBar";
export default function LandingPage() {
  return (
    <div>
      <main>
        <div>
          <BannerCarousel />
        </div>

        <div>
          <ProtestPage />
        </div>
        
        <footer>
          <p>footer</p>
          <p>
            &copy; <i>FindMyProtest</i>
          </p>
        </footer>
      </main>
    </div>
  );
}
