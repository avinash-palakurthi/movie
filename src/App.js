import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
                <Pagination />
              </>
            }
          ></Route>

          <Route path="/fav" element={<Favourites />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
