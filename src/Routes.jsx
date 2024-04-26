import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoute from "./privateRoutes/PrivateRoute";
import SignInPage from "./pages/SIgnInPage";
import AddArtPage from "./pages/AddArtPage";
import UpdateArtPage from "./pages/UpdateArtPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route
        path="add-art"
        element={
          <PrivateRoute>
            <AddArtPage />
          </PrivateRoute>
        }
      />
      <Route
        path="update-art"
        element={
          <PrivateRoute>
            <UpdateArtPage />
          </PrivateRoute>
        }
      />
    </Route>,
  ),
);
