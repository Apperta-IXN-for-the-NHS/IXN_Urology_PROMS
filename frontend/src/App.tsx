import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UserContext from "./utils/store";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  informationCircleOutline,
  peopleCircleOutline,
  heartCircleOutline,
  person,
} from "ionicons/icons";
import KnowledgeBank from "./pages/KnowledgeBank/KnowledgeBank";
import DocPatient from "./pages/DocPatient/DocPatient";
import Support from "./pages/Support/Support";
import ResultsData from "./pages/DocPatient/ResultsData";
import ProfileNew from "./pages/Profile/ProfileNew";
import Letters from "./pages/DocPatient/Letters";
import Questionaire, {
  QuestionairePage,
} from "./pages/DocPatient/Questionaire";
import { IPSS, IIEF } from "./pages/DocPatient/QuestionnaireInfo";
import Symptoms from "./pages/DocPatient/Medications";
import Results from "./pages/DocPatient/Results";
import Feedback from "./pages/Profile/Feedback";
import Login from "./pages/Login/LoginNew";
import Auth from "./pages/Login/Auth";
import Register from "./pages/Login/Register";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Global CSS */
import "./global.css";

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tab1" component={KnowledgeBank} />
        <Route exact path="/tab2" component={DocPatient} />
        <Route path="/tab3" component={Support} />
        <Route path="/tab4" component={ProfileNew} />
        <Route path="/letters" component={Letters} />
        <Route path="/quest" component={Questionaire} />
        <Route path="/symptoms" component={Symptoms} />
        <Route path="/results" component={Results} />
        <Route path="/feedback" component={Feedback} />
        <Route
          path="/ipss-results"
          render={() => <ResultsData title="IPSS" />}
        />
        <Route path="/psa-results" render={() => <ResultsData title="PSA" />} />
        <Route
          path="/iief-results"
          render={() => <ResultsData title="IIEF" />}
        />
        <Route
          path="/ipss"
          render={() => <QuestionairePage contentArray={IPSS} />}
        />
        <Route
          path="/iief"
          render={() => <QuestionairePage contentArray={IIEF} />}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
          <IonIcon icon={informationCircleOutline} />
          <IonLabel>Info Bank</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={peopleCircleOutline} />
          <IonLabel>Doc & Patient</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={heartCircleOutline} />
          <IonLabel>Support</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/tab4">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState({ loggedIn: false });
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <IonApp>
        <IonReactRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/auth" component={Auth} />
            <Route exact path="/" render={() => <Redirect to="/auth" />} />
            <Route component={Tabs} />
          </Switch>
        </IonReactRouter>
      </IonApp>
    </UserContext.Provider>
  );
};
export default App;
