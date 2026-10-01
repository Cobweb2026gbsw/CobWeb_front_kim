import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordReset from "./pages/PasswordReset";
import OAuthCallBack from "./pages/OAuthCallBack";

import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(true);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header dark={dark} setDark={setDark} />
            <Main dark={dark} />
          </>
        }
      />

      <Route path="/login" element={<Login dark={dark} setDark={setDark} />} />
      <Route path="/signup" element={<Signup dark={dark} setDark={setDark} />} />
      <Route
        path="/password-reset"
        element={<PasswordReset dark={dark} setDark={setDark} />}
      />
      <Route
        path="/oauth/callback"
        element={<OAuthCallBack dark={dark} setDark={setDark} />}
      />
    </Routes>
  );
}

export default App;
