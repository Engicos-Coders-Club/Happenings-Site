import { useEffect } from "react";
import { loadSeller } from "./actions/user";
import { useDispatch, useSelector } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Home from "./components/Home/Home";
import { Typography } from "@mui/material";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSeller());
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={
                <Typography variant="h1">Opps! 404 Not Found!</Typography>
              }
            />
          </Route>
        </Routes>
      </StyledEngineProvider>
    </>
  );
}

export default App;
