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
<<<<<<< HEAD
=======
import { Popup } from "./components/Popup/Popup.jsx";
import { Editor } from '@tinymce/tinymce-react';
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
import "./App.css";
function App() {
  return (
    <div className="App">
      <LoginPage/>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<CForm />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="RegisterInd" element={<RegisterIndPage />} />
          <Route path="RegisterComp" element={<RegisterCompPage />} />
          <Route path="RegisterPub" element={<RegisterPubPage />} />
          <Route path="Type" element={<PageType />} />
          <Route path="Forgot" element={<Forgotpassword />} />
          <Route path="Reset" element={<ResetPassword />} />
          <Route path="/test" element={<Startup />} />
=======
          <Route exact path="/" element={< CForm/>} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="RegisterInd" element={<RegisterIndPage/>} />
          <Route path="RegisterComp" element={<RegisterCompPage/>} />
          <Route path="RegisterPub" element={<RegisterPubPage/>} />
          <Route path="Type" element={<PageType/>} />
          <Route path="Forgot" element={<Forgotpassword/>} />
          <Route path="Reset" element={<ResetPassword/>} />
          <Route path="/test" element={<Startup/>} />
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
