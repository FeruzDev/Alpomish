import MainPage from "./components/MainPage";
import React from "react";
import About from "./components/pages/About";
import Bascet from "./components/pages/Bascet";
import Contacts from "./components/pages/Contacts";
import Events from "./components/pages/Events";
import Galery from "./components/pages/Galery";
import Information from "./components/pages/Information";
import Login from "./components/pages/Login";
import News from "./components/pages/News";
import NewsDetail from "./components/pages/NewsDetail";
import Payback from "./components/pages/Payback";
import PersonalInfo from "./components/pages/PersonalInfo";
import Politics from "./components/pages/Politics";
import Rules from "./components/pages/Rules";
import Sections from "./components/pages/Sections";
import Security from "./components/pages/Security";
import Sms from "./components/pages/Sms";
import Stadion from "./components/pages/Stadion";
import Support from "./components/pages/Support";
import View from "./components/pages/View";
import Work from "./components/pages/Work";
import {BrowserRouter, Switch ,Route} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import MainFooter from "./components/MainFooter";
import Stadion2 from "./components/pages/Stadion2";
import Seal from "./components/pages/Seal";
function App() {
  return (
        <BrowserRouter>

            <MyNavbar />
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/sms" component={Sms}/>
                <Route exact path="/contacts" component={Contacts}/>
                <Route exact path="/about-us" component={About}/>
                <Route exact path="/information" component={Information}/>
                <Route exact path="/help" component={Support}/>
                <Route exact path="/rules" component={Rules}/>
                <Route exact path="/galery" component={Galery}/>
                <Route exact path="/work" component={Work}/>
                <Route exact path="/payback" component={Payback}/>
                <Route exact path="/stadion" component={Stadion}/>
                <Route exact path="/model" component={Stadion2}/>
                <Route exact path="/politics" component={Politics}/>
                <Route exact path="/work" component={Work}/>
                <Route exact path="/sections" component={Sections}/>
                <Route exact path="/bascet" component={Bascet}/>
                <Route exact path="/events/detail/:id" component={View}/>
                <Route exact path="/events/detail/:id/seal" component={Seal}/>
                <Route exact path="/events" component={Events}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/news/detail/:id" component={NewsDetail}/>
            </Switch>
            <MainFooter/>
        </BrowserRouter>

  );
}

export default App;
