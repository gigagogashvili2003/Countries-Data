import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from "./components/Countries";
import "./app.css";

function App() {
  return (
    <Container className="app">
      <Countries />
    </Container>
  );
}

export default App;
