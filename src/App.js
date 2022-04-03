import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from "./components/Countries";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
function App() {
  return (
    <Container className="app">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:countryName" element={<CountryDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
