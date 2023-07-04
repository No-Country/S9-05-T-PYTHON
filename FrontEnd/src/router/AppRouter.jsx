import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import {Home} from '../pages'

export const AppRouter = () => {
  return (
    <>
      <Routes>
          <>
            <Route path="/auth/*" element={<Login />} />
            <Route path="/*" element={<Navigate to="auth/login" />} />
          </>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
      </Routes>
    </>
  )
}
