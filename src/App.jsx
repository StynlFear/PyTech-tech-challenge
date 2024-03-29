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
import { Pageuser } from "./components/page user/pageuser.jsx";
import Cerere from "./containers/Form/Cerere.jsx";
import Generate from "./containers/generateurl/generate.jsx";
import Addform from "./containers/ADD FORM/addform.jsx";
import Delsecpop from "./components/delete_section/delsecpop.jsx";
import Odihna from "./containers/odihna_cerere/odihna.jsx";
import Masina from "./containers/Masina/masina.jsx";
import Deldyn from "./components/modal del dinam fields/modal.jsx";
import "./App.css";
import Scanner from "./containers/Form/Scan/Scan.jsx";
import Generateurl from "./components/generate_url/generateurl.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Startup/>} />
          <Route path="/del" element={<Deldyn/>} />
          <Route path="/masina" element={<Masina/>} />
          <Route path="/odihna" element={<Odihna/>} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="Forms" element={<FormList />} />
          <Route path="RegisterInd" element={<RegisterIndPage />} />
          <Route path="CreateForm" element={<CForm />} />
          <Route path="RegisterComp" element={<RegisterCompPage />} />
          <Route path="RegisterPub" element={<RegisterPubPage />} />
          <Route path="Type" element={<PageType />} />
          <Route path="Forgot" element={<Forgotpassword />} />
          <Route path="Reset" element={<ResetPassword />} />
          <Route path="/qr" element={<GenerateQRCode/>}/>
          <Route path="/home" element={<Pageuser/>}/>
          <Route path="/cerere" element={<Cerere/>}/>
          <Route   path="/generate" element={<Generate/>} />
          <Route  path="/addforms" element={<Addform/>} />
          <Route  path="/url" element={<Generateurl/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
