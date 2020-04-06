import React from 'react';
import { IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList,
    IonInput,
    IonText,
    IonButton,
    IonCard

} from '@ionic/react';

interface Links {
    history: any;
  }

const Login: React.FC<Links> = ({
    history
 })  => {
    return (
    <IonPage>
        <IonHeader class="ion-no-border" collapse="condense" translucent>
          <IonToolbar>
            <IonTitle class="ion-text-center">
                Login
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        <IonCard className="login">
        <IonList lines="full" class="ion-no-margin ion-no-padding">
      <IonItem>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput required type="text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput required type="text"></IonInput>
      </IonItem>
      <br>
      </br>
      <IonButton expand="block"
      className="highlight" 
      onClick={e => {
      e.preventDefault();
      history.push("tab1");
      }}>Login</IonButton>

      <IonItem>
          <IonLabel position="stacked">No Account? Register <a href="/register">here</a></IonLabel>
      </IonItem>
      </IonList>
      </IonCard>
        </IonContent>
    </IonPage>
  );
};

export default Login;
