import React, { useState } from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonBackButton,
  IonContent
} from "@ionic/react";

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
      </IonContent>
    </IonPage>
  );
};

export default Letters;
