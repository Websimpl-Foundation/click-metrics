/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Template from "./components/navbar/template";
import Theme from "./components/pages/theme";
import {
  Home,
  Links,
  QrCodes,
  LinkInBio,
  Analytics,
  Campaigns,
  CustomLinks,
  Settings,
  Help,
  NotFoundPage,
  Signin,
  Signup,
} from "./components/pages/index";
import Loader from "./components/ui/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/qr" element={<QrCodes/>} />
          <Route path="/link/in/bio" element={<LinkInBio />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/custom/links" element={<CustomLinks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
