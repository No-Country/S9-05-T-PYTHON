import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Login } from "../auth";
import MainLayout from "../layout/MainLayout";
import { Home } from "../pages";
import PetProfile from "../pages/PetProfile/PetProfile";
import Register from "../pages/Register/Register";
import { Error404 } from "../layout/Error404";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <>
        <Route path="/auth/*" element={<Login />} />
        <Route path="/*" element={<Navigate to="auth/login" />} />
        <Route path="/auth/register" element={<Register />} />
      </>
      <>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/petprofile" element={<PetProfile />} />
      </>
      <Route path="/404" element={<Error404 />} />{" "}
    </Route>
  )
);
