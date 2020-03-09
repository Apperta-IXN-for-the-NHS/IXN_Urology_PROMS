import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFab, IonTabButton, IonTabBar,IonFabButton, IonFabList } from '@ionic/react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonList, IonListHeader,  IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { IonTextarea } from '@ionic/react';
import './Profile.css';
import { settings } from 'ionicons/icons';

interface Links {
  history: any;
}


const Profile: React.FC<Links> = ({
  history
})  => {
  return (
    <IonPage>
        <IonHeader class="new" collapse="condense" translucent>

          <IonToolbar>
            <IonTitle class="new" size="large">
              Profile
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>


        <IonFab horizontal="end" vertical="top" slot="fixed" edge>
      <IonFabButton>
      <IonIcon size= "large"icon={settings}></IonIcon>
      </IonFabButton>
      <IonFabList>
          <IonFabButton color="light">
            <IonIcon name="logo-facebook"></IonIcon>
          </IonFabButton>
          <IonFabButton color="light">
            <IonIcon name="logo-twitter"></IonIcon>
          </IonFabButton>
        </IonFabList>
    </IonFab>


        <IonGrid class="stdgrid">

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
