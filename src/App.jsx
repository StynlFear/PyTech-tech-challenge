import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./containers/Authentification/Login/Login.jsx";
import { RegisterIndPage } from "./containers/Authentification/Register/Register Individual/RegisterInd";
import { RegisterPubPage } from "./containers/Authentification/Register/Register Public/RegisterPublic.jsx";
import { RegisterCompPage } from "./containers/Authentification/Register/Register Company/RegisterCompany.jsx";
import { PageType } from "./containers/Authentification/Register/Choose/Choose.jsx";
import { Forgotpassword } from "./containers/Authentification/Forgot password/forgotpassword.jsx";
import { ResetPassword } from "./containers/Authentification/Reset password/resetpassword.jsx";
import { CreateForm } from "./components/create_form_page/create_from.jsx";
import { SideBar } from "./components/sidebar/sidebar.jsx";
import { Formpage } from "./containers/Authentification/Formpage/Formpage.jsx";
import Deloppop from "./components/delete option popup/deleteoptpop.jsx";
import Deldyn from "./components/modal del dinam fields/modal.jsx";
import Delsecpop from "./components/delete_section/delsecpop.jsx";
import Delformpop from "./components/delete_form_pop/delformpop.jsx";
import Attention from "./components/attention/attentionpop.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/123" element={< PageType/>} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="RegisterInd" element={<RegisterIndPage/>} />
          <Route path="RegisterComp" element={<RegisterCompPage/>} />
          <Route path="RegisterPub" element={<RegisterPubPage/>} />
          <Route path="Type" element={<PageType/>} />
          <Route path="Forgot" element={<Forgotpassword/>} />
          <Route path="Reset" element={<ResetPassword/>} />
          <Route path="/" element={<Formpage/>} />
          <Route path="/test" element={<Delformpop/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
