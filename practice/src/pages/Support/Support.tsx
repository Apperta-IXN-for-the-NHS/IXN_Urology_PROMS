import React, { useState }  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonFabList, IonFab, IonIcon} from '@ionic/react';
import './Support.css';
import CardList, { Info } from "../../components/common/CardList";
import { SupportInfo } from "./Info";
import { settings } from 'ionicons/icons';



const Support: React.FC = () => {
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">
            <h2>Support</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CardList infoArray={SupportInfo} />
      </IonContent>
    </IonPage>
  );
};

export default Support;
