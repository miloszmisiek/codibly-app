import Home from "./views/Home";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import MyModal from "./components/modal/MyModal";
import { MainContainer } from "./App.styled";
import NotFoundPage from "./views/NotFoundPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import MyAlert from "./components/alert/MyAlert";

function App() {
  const totalPages = useSelector(
    (state: RootState) => state.products.options.totalPages
  );
  const show = useSelector((state: RootState) => state.alert.show);
  return (
    <MainContainer>
      {show && <MyAlert />}
      <MyModal />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home totalPages={totalPages} />} />
            <Route
              path="page/:number"
              element={<Home totalPages={totalPages} />}
            />
            <Route path="id/:id" element={<Home totalPages={totalPages} />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
