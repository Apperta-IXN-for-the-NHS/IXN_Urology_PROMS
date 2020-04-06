import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,
    IonList,
    IonLabel,
    IonText,
    IonItem,
    IonInput,
    IonButtons,
    IonBackButton,
    IonButton
} from '@ionic/react';


export const Register: React.FC = () => {
    return (
    <IonPage>
        <IonHeader class="ion-no-border" collapse="condense" translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
            </IonButtons>
            <IonTitle>Register</IonTitle>
            </IonToolbar> 
        </IonHeader>
      <IonContent>
      <IonList lines="full" class="ion-no-margin ion-no-padding">
      <IonItem>
        <IonLabel position="stacked">First Name <IonText color="danger">*</IonText></IonLabel>
        <IonInput required type="text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Last Name <IonText color="danger">*</IonText></IonLabel>
        <IonInput required type="text"></IonInput>
      </IonItem>
      
      <IonItem>
        <IonLabel position="stacked">Email <IonText color="danger">*</IonText></IonLabel>
        <IonInput required type="text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Password <IonText color="danger">*</IonText></IonLabel>
        <IonInput required type="text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Address</IonLabel>
        <IonInput placeholder="Address Line 1"></IonInput>
        <IonInput placeholder="Address Line 2"></IonInput>
        <IonInput placeholder="City"></IonInput>
        <IonInput placeholder="State"></IonInput>
        <IonInput placeholder="Zip Code"></IonInput>
      </IonItem>
    </IonList>
        <br></br>
      <IonButton expand="block" type="submit" class="ion-no-margin">Create account</IonButton>

      </IonContent>
    </IonPage>
  );
};


export default Register;
