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
  IonButton,
} from "@ionic/react";

interface OwnProps {
  title: string;
  description: string;
  imageSrc: string;
  setModal(state: boolean): void;
}

const ArticlePage: React.FC<OwnProps> = ({
  title,
  description,
  setModal,
  imageSrc,
}) => {
  const textStyle = {
    padding: "15px",
    fontSize: "large",
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
        <img src={imageSrc} alt="" />
        <div style={textStyle}>
          <IonText>
            <h1>{title}</h1>
            <p>{description}</p>
          </IonText>
        </div>
      </IonContent>
    </React.Fragment>
  );
};

export default ArticlePage;
