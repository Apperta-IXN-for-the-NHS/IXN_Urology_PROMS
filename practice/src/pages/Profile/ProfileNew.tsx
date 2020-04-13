import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
} from "@ionic/react";

import NHSlogo from "../../assets/images/NHS.png";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonAvatar title="Name">
            <img src={NHSlogo} width="150px" height="150px"/>
        </IonAvatar>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
