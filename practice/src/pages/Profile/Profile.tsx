import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonGrid, IonRow, IonCol} from '@ionic/react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonList, IonListHeader,  IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { IonTextarea } from '@ionic/react';
import './Profile.css';

interface Links {
  history: any;
}


const Profile: React.FC<Links> = ({
  history
})  => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>

          <IonRow className="display">
            <IonCol>
            <IonCard className="display">
              <IonCardHeader>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <IonCardTitle>Card Title</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>

              </IonCardContent>
            </IonCard>
            </IonCol>
          </IonRow>

              <IonRow className="bio">
              <IonCol>
                <IonList>
                  <IonListHeader>
                    Bio
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>
                      Name:
                    </IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonLabel>
                      Age:
                    </IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonLabel>
                      Bloody type:
                    </IonLabel>
                  </IonItem>

                </IonList>
                </IonCol>
              </IonRow>


          <IonRow className="options">
            <IonCol justify-content-center align-items-center>
            <IonCard 
            className="options"         
            onClick={e => {
            e.preventDefault();
            history.push("history");
            }}>
              <IonCardHeader>
                <IonCardTitle class="ion-text-center">History</IonCardTitle>
              </IonCardHeader>
            </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="options">
            <IonCol>
            <IonCard 
            className="options" button
            onClick={e => {
              e.preventDefault();
              history.push("contacts");
              }}>
              <IonCardHeader>
                <IonCardTitle class="ion-text-center">My Contacts</IonCardTitle>
              </IonCardHeader>

            </IonCard>
            </IonCol>
          </IonRow>


          <IonRow className="options">
            <IonCol>
            <IonCard 
            className="options"
            onClick={e => {
              e.preventDefault();
              history.push("settings");
              }}>
              <IonCardHeader>
                <IonCardTitle class="ion-text-center">Settings</IonCardTitle>
              </IonCardHeader>
            </IonCard>
            </IonCol>
          </IonRow>

        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Profile;
