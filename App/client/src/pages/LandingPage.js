import ProtestPage from "./ProtestPage";
import BannerCarousel from "../components/BannerCarousel";
import Footer from "../components/Footer";
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

        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
