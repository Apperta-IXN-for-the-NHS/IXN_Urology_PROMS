import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { informationCircleOutline, peopleCircleOutline, heartCircleOutline, settings } from 'ionicons/icons';
import KnowledgeBank from './pages/KnowledgeBank/KnowledgeBank';
import DocPatient from './pages/DocPatient/DocPatient';
import Support from './pages/Support/Support';
import Profile from './pages/Profile/Profile';
import InfoPage from './pages/KnowledgeBank/InfoPage';
import Letters from './pages/DocPatient/Letters';
import Questionaire from './pages/DocPatient/Questionaire';
import Symptoms from './pages/DocPatient/Symptoms';
import Calendar from './pages/DocPatient/Calendar';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './global.css';
import DateTimeExample from './pages/DocPatient/Dates';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={KnowledgeBank} exact={true} />
          <Route path="/tab2" component={DocPatient} exact={true} />
          <Route path="/tab3" component={Support} />
          <Route path="/tab4" component={Profile} />
          <Route path="/temp" component={InfoPage} />
          <Route path="/letters" component={Letters} />
          <Route path="/quest" component={Questionaire} />
          <Route path="/symptoms" component={Symptoms} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/dates" component={DateTimeExample} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
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
            <IonIcon icon={settings} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
