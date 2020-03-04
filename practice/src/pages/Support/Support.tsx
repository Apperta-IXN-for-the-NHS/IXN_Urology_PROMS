import React, { useState }  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Support.css';
import CardList, { Info } from "./CardList_support";
import { SupportInfo } from "./Info_support";

interface OwnProps {
  history: any;
}

const Support: React.FC<OwnProps> = ({ history }) => {
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
        <IonToolbar>
          <IonTitle class="ion-text-center">
            <h2>Support</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CardList infoArray={SupportInfo} history={history} />
      </IonContent>
    </IonPage>
  );
};

export default Support;
