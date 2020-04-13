import React, { useState } from 'react';
import { IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList,
    IonInput,
    IonButton,
    IonCard,
    IonBackButton,
    IonButtons,
    IonTextarea,
    IonCardTitle,
    IonListHeader


} from '@ionic/react';


interface Links {
    history: any;
  }

const FeedbackForm: React.FC<Links> = ({
    history
 })  => {
  const [text, setText] = useState<string>();
    
  return (
    <IonPage>
        <IonHeader class="ion-no-border" collapse="condense" translucent>
          <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
            <IonTitle class="ion-text-center">
                Open Feedback
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        <IonList>
        <IonListHeader>
          <h2 >Tell us what you think of our app!</h2>
        </IonListHeader>
        </IonList>

        <IonCard className="feedback">
        <IonList className="feedback" lines="none">


          <IonItem>
                <IonTextarea rows={23} value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonButton expand="block" slot="end"
          color="nhsblue"
          className="highlight" 
          onClick={e => {
          e.preventDefault();
          history.push("/quest");
          }}>Submit</IonButton>

      </IonList>
      </IonCard>
        </IonContent>
    </IonPage>
  );
};

export default FeedbackForm;
