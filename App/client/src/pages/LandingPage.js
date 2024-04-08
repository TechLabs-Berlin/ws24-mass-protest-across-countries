import { Container } from "react-bootstrap/Container";
import ProtestPage from "./ProtestPage";
import Banner from "../components/Banner";

export default function LandingPage() {
  return (
      <Container className="px-4" fluid>
          <Banner />
          <ProtestPage />
      </Container>
  );
}