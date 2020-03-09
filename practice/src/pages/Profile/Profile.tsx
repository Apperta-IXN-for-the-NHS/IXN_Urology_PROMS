import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFab, IonTabButton, IonTabBar,IonFabButton, IonFabList } from '@ionic/react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonList, IonListHeader,  IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { IonTextarea, IonImg} from '@ionic/react';
import './Profile.css';
import { person } from 'ionicons/icons';
import NHSlogo from "../../assets/images/NHS.png";



interface Links {
  history: any;
}


const Profile: React.FC<Links> = ({
  history
})  => {
  return (
    <IonPage>
        <IonHeader class="ion-no-border" collapse="condense" translucent>
          <IonToolbar>
            <IonTitle class="ion-text-center">
            <IonIcon color="nhsblue" size="large" icon={person} />
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonGrid class="stdgrid">
          <IonRow className="display">
            <IonCol>
            <IonCard className="display">
            <IonImg src={NHSlogo} />
            <br></br>
            <br></br>
              <IonCardHeader class="ion-padding-top">
                <IonCardSubtitle>Your Profile</IonCardSubtitle>
                <IonCardTitle>Frank Jones</IonCardTitle>
              </IonCardHeader>



              <IonCardHeader class="ion-padding-top">
                <IonCardSubtitle>Identification Number</IonCardSubtitle>
                <IonCardTitle>010483729</IonCardTitle>
              </IonCardHeader>


            </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="options">
            <IonCol justify-content-center align-items-center>
            <IonCard 
            className="options" button
            onClick={e => {
            e.preventDefault();
            history.push("history");
            }}>
              <IonCardHeader>
                <IonCardTitle color="nhswhite" class="ion-text-center">History</IonCardTitle>
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
              history.push("contacts");
              }}>
              <IonCardHeader>
                <IonCardTitle color="nhswhite" class="ion-text-center">My Contacts</IonCardTitle>
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
              history.push("settings");
              }}>
              <IonCardHeader>
                <IonCardTitle color="nhswhite" class="ion-text-center">Settings</IonCardTitle>
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
