import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/Routes";
import { Home, Signin, Signup, Browse } from "./pages";
import { PrivateRoute, ProtectedRoute } from "./helpers/Routes";
import UseAuthListener from "./hooks/Authuser";
import "./App.css";

function App() {
  const { user } = UseAuthListener();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />

        <Route element={<PrivateRoute user={user} />}>
          <Route path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        </Route>

        <Route element={<ProtectedRoute user={user} />}>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
