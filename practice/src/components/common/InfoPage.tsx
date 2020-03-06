import React from "react";
import {
  IonContent,
  IonHeader,
  IonText,
  IonToolbar,
  IonButtons,
  IonCard,
  IonTitle,
  IonCardContent,
  IonButton
} from "@ionic/react";

interface OwnProps {
  title: string;
  description: string;
  setModal(state: boolean): void;
}

const InfoPage: React.FC<OwnProps> = ({ title, description, setModal }) => {
  const textStyle = {
    padding: "5px"
  };
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => setModal(false)}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={textStyle}>
          <IonText class="ion-text-center">
            <h1>{title}</h1>
          </IonText>
        </div>
        <IonCard>
          <IonCardContent>
            <IonText>{description}</IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </React.Fragment>
  );
};

export default InfoPage;
