import Container from "components/Container";
import Navbar from "components/Navbar";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useCallback, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { privateRoutes } from "routes";
import { putCountries } from "store/reducer/AuthSlice";
import { fetchCountries } from "utils";

import { publicRoutes } from "./routes";

function App() {
  const { token, countries } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const checkAndPutCountries = useCallback(async () => {
    if (countries?.length === 0) {
      const fetchedCountries = await fetchCountries();
      dispatch(putCountries(fetchedCountries.data));
    }
  }, [countries, dispatch]);

  useEffect(() => {
    checkAndPutCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (token) {
    return (
      <>
        <ToastContainer />
        <Navbar />

        <Container>
          <Routes>
            {privateRoutes.map((route) => (
              <Route
                element={route.component}
                path={route.path}
                key={route.key}
              />
            ))}
          </Routes>
        </Container>
      </>
    );
  }
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        {publicRoutes.map((route) => (
          <Route element={route.component} path={route.path} key={route.key} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
