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
            <IonIcon className="header" color="nhsblue" icon={person} />
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
                <IonCardSubtitle color="nhsblue">Your Profile</IonCardSubtitle>
                <IonCardTitle color="nhsdarkgrey">Frank Jones</IonCardTitle>
              </IonCardHeader>
              <IonCardHeader class="ion-padding-top">
                <IonCardSubtitle color="nhsblue">Identification Number</IonCardSubtitle>
                <IonCardTitle color="nhsdarkgrey">010483729</IonCardTitle>
              </IonCardHeader>
              <IonCardHeader class="ion-padding-top">
                <IonCardSubtitle color="nhsblue">Hospital</IonCardSubtitle>
                <IonCardTitle color="nhsdarkgrey">Royal Marsden</IonCardTitle>
              </IonCardHeader>
            </IonCard>
            </IonCol>
          </IonRow>
          <IonItem className="highlight" 
            button             
            onClick={e => {
            e.preventDefault();
            history.push("history");
            }}>
            <IonLabel>
              <h1 className="options">History</h1>
            </IonLabel>
          </IonItem>
          <IonItem className="highlight" 
            button
            onClick={e => {
            e.preventDefault();
            history.push("contacts");
            }}>
            <IonLabel >
              <h1 className="options">My Contacts</h1>
            </IonLabel>
          </IonItem>
          <IonItem className="highlight" 
            button
            onClick={e => {
              e.preventDefault();
              history.push("settings");
              }}>
            <IonLabel>
              <h1 className="options">Setting</h1>
            </IonLabel>
          </IonItem>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
