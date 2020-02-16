import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonText,
  IonToolbar,
  IonButtons,
  IonCard,
  IonCardContent,
  IonBackButton
} from "@ionic/react";

interface OwnProps {
  title: string;
  description: string;
}

const InfoPage: React.FC<OwnProps> = ({ title, description }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText class="ion-text-center">
          <h1>What is the Prostate?</h1>
        </IonText>
        <IonCard>
          <IonCardContent>
            <IonText>
              The prostate is a small gland, which lies at the base of the bladder. It surrounds the first part of the urethra. This is the tube which carries urine from the bladder out of the body. The prostate gland produces a thick white fluid which mixes with sperm and is ejaculated during sex. The rectum (the lower part of the bowel) lies very close to the prostate. 
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default InfoPage;
