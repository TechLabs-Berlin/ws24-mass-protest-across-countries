import ProtestPage from "./ProtestPage";
import BannerCarousel from "../components/BannerCarousel";
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
