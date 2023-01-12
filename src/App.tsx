import Home from "./views/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="page/:number" element={<Home />} />
            <Route path="id/:id" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
