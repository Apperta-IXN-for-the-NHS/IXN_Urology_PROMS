import React, { useState } from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonFab,
  IonFabButton,
  IonIcon,
  IonCardContent,
  IonModal
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import "./Symptoms.css";
import CardList from "../KnowledgeBank/CardList";

interface Symptom {
  title: string;
  day: string;
  date: string;
}

interface SymptomCardProps {
  day: string;
  date: string;
  title: string;
}

interface AddSymptomProps {
  setModal(state: boolean): any;
  symptoms: Symptom[];
}

const AddSymptom: React.FC<AddSymptomProps> = ({ setModal, symptoms }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Log a new Symptom</IonTitle>
      </IonToolbar>
      <IonButtons>
        <IonButton onClick={() => setModal(false)}>Close</IonButton>
      </IonButtons>
    </IonHeader>
  );
};

const SymptomCard: React.FC<SymptomCardProps> = ({ day, date, title }) => {
  return (
    <IonCard>
      <IonCardHeader className="ion-text-center">
        <div className="symptoms">
          {day}
          <br />
          {date}
        </div>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

const Symptoms: React.FC = () => {
  const [showModal, setModal] = useState(false);
  let symptoms = [
    { title: "Fatigue", day: "Monday", date: "27/02/20" },
    { title: "Bladder Pain", day: "Wednesday", date: "15/02/20" },
    { title: "Nausea", day: "Friday", date: "10/02/20" },
    { title: "Muscle Pain", day: "Thursday", date: "17/01/20" },
    { title: "Vomitting", day: "Monday", date: "09/01/20" }
  ];
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
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setModal(true)}>
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
        <IonModal isOpen={showModal}>
          <AddSymptom setModal={setModal} symptoms={symptoms} />
        </IonModal>
        <h2 className="ion-text-center">My Symptom Logs</h2>
        {symptoms.map((s, idx) => (
          <SymptomCard key={idx} day={s.day} date={s.date} title={s.title} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Symptoms;
