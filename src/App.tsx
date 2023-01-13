import Home from "./views/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import MyModal from "./components/modal/MyModal";
import { MainContainer } from "./App.styled";

function App() {
  return (
    <MainContainer>
      <MyModal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="page/:number" element={<Home />} />
            <Route path="id/:id" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
