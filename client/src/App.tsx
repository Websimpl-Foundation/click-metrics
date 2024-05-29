import { Route, Routes } from "react-router-dom"
import Template from "./components/navbar/template"
import { Home, Links, QrCodes, LinkInBio, Analytics, Campaigns, CustomLinks, Settings,Help } from "./components/pages/index"
import Profile from "./components/pages/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />} >
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/qr" element={<QrCodes url="www.google.com" />} /> 
          <Route path="/link/in/bio" element={<LinkInBio />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/custom/links" element={<CustomLinks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
