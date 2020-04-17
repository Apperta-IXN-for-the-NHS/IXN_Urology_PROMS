import React from "react";
import { Redirect, Route } from "react-router-dom";
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
import Profile from "./pages/Profile/Profile";
import ResultsData from "./pages/DocPatient/ResultsData";
import ProfileNew from "./pages/Profile/ProfileNew";
import InputExamples from "./components/Demo";
import Letters from "./pages/DocPatient/Letters";
import Questionaire, {
  QuestionairePage,
} from "./pages/DocPatient/Questionaire";
import { IPSS, IIEF, Feedback } from "./pages/DocPatient/QuestionnaireInfo";
import Symptoms from "./pages/DocPatient/Symptoms";
import Results from "./pages/DocPatient/Results";
import History from "./pages/Profile/History";
import Contacts from "./pages/Profile/Contacts";
import Settings from "./pages/Profile/Settings";
import Login from "./pages/Login/Login";
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
import { ItemSlidingExample } from "./pages/DocPatient/Dates";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={KnowledgeBank} exact={true} />
          <Route path="/tab2" component={DocPatient} exact={true} />
          <Route path="/tab3" component={Support} />
          <Route path="/tab4" component={ProfileNew} />
          <Route path="/letters" component={Letters} />
          <Route path="/quest" component={Questionaire} />
          <Route path="/symptoms" component={Symptoms} />
          <Route path="/results" component={Results} />
          <Route path="/history" component={History} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/settings" component={Settings} />
          <Route path="/dates" component={ItemSlidingExample} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/demo" component={InputExamples} />
          <Route
            path="/ipss-results"
            render={() => <ResultsData title="IPSS" />}
          />
          <Route
            path="/psa-results"
            render={() => <ResultsData title="PSA" />}
          />
          <Route
            path="/ipss"
            render={() => <QuestionairePage contentArray={IPSS} />}
          />
          <Route
            path="/iief"
            render={() => <QuestionairePage contentArray={IIEF} />}
          />
          <Route
            path="/feedback"
            render={() => <QuestionairePage contentArray={Feedback} />}
          />
          <Route
            path="/"
            render={() => <Redirect to="/login" />}
            exact={true}
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
    </IonReactRouter>
  </IonApp>
);

export default App;