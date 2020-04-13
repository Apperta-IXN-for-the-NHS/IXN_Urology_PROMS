import React, { useState } from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";

import { pencil } from "ionicons/icons";
import { addOutline } from "ionicons/icons";

const Letters: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Letters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          animated
          placeholder="search letters"
          showCancelButton="focus"
        ></IonSearchbar>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Letters;
