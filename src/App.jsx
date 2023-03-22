import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./containers/Authentification/Login/Login.jsx";
import { RegisterIndPage } from "./containers/Authentification/Register/Register Individual/RegisterInd";
import { RegisterPubPage } from "./containers/Authentification/Register/Register Public/RegisterPublic.jsx";
import { RegisterCompPage } from "./containers/Authentification/Register/Register Company/RegisterCompany.jsx";
import { PageType } from "./containers/Authentification/Register/Choose/Choose.jsx";
import { Forgotpassword } from "./containers/Authentification/Forgot password/forgotpassword.jsx";
import { ResetPassword } from "./containers/Authentification/Reset password/resetpassword.jsx";
import { Startup } from "./components/start up/startup.jsx";
import CForm from "./containers/Create Form/CreateForm.jsx";
import GenerateQRCode from "./containers/GenerateQr/GenerateQr.jsx";
import FormList from "./containers/AllForms/FormsList.jsx";
import Cerere from "./containers/Form/Cerere.jsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Cerere/>} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="Forms" element={<FormList />} />
          <Route path="RegisterInd" element={<RegisterIndPage />} />
          <Route path="CreateForm" element={<CForm />} />
          <Route path="RegisterComp" element={<RegisterCompPage />} />
          <Route path="RegisterPub" element={<RegisterPubPage />} />
          <Route path="Type" element={<PageType />} />
          <Route path="Forgot" element={<Forgotpassword />} />
          <Route path="Reset" element={<ResetPassword />} />
          <Route path="/test" element={<Startup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
