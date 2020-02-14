import React from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

import './DocPatient.css';

const DocPatient: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DoctorPatient</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonGrid>
      <IonRow>
        <IonCol size="6">        
          <IonCard color="primary" type="button">
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            ExampleText
          </IonCardContent>
        </IonCard>
        </IonCol>


        <IonCol>        
          <IonCard color="primary" type="button">
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              ExampleText
            </IonCardContent>
          </IonCard>
        </IonCol>
      
      
      </IonRow>

      <IonRow>
        <IonCol>
          <IonCard color="primary" type="button">
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              ExampleText
            </IonCardContent>
          </IonCard>
        </IonCol>


        <IonCol>
          <IonCard color="primary" type="button">
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              ExampleText
            </IonCardContent>
          </IonCard>
        </IonCol>


      </IonRow>
      </IonGrid>




      </IonContent>
    </IonPage>
  );
};

export default DocPatient;
