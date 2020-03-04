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
  IonToast,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonFab,
  IonFabButton,
  IonIcon,
  IonDatetime,
  IonItem,
  IonLabel,
  IonInput,
  IonCardContent,
  IonModal,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonText
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
  cardID: number;
  remove(key: number): any;
}

interface AddSymptomProps {
  setModal(state: boolean): void;
  addSymptom(title: string, day: string, date: string): void;
}

const AddSymptom: React.FC<AddSymptomProps> = ({ setModal, addSymptom }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  const dateToDay = (dateString: string): string => {
    enum weekDays {
      "Sunday" = 0,
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    }
    const date = new Date(dateString);
    const dayNum = date.getDay();
    return weekDays[dayNum];
  };

  const handleDateChange = (date: string): void => {
    setDate(date);
    setDay(dateToDay(date));
  };

  const handleConfirm = () => {
    addSymptom(title, day, date);
    setModal(false);
  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons>
          <IonButton onClick={() => setModal(false)}>Close</IonButton>
        </IonButtons>
      </IonToolbar>
      <h1 className="ion-text-center">Log a new Symptom</h1>
      <IonItem>
        <IonLabel position="stacked">
          <h1>Symptom Title</h1>
        </IonLabel>
        <IonInput
          type="text"
          autofocus
          onIonChange={e => setTitle(e.detail.value as string)}
        ></IonInput>
      </IonItem>
      <br />
      <IonItem>
        <IonLabel position="stacked">
          <h1>Date Symptom Occurred</h1>
        </IonLabel>
        <IonInput
          type="date"
          onIonChange={e => handleDateChange(e.detail.value as string)}
        ></IonInput>
      </IonItem>
      <br />
      <IonButton
        expand="block"
        disabled={date === "" || title === ""}
        onClick={() => handleConfirm()}
      >
        Confirm
      </IonButton>
    </IonHeader>
  );
};

const SymptomCard: React.FC<SymptomCardProps> = ({
  day,
  date,
  title,
  cardID,
  remove
}) => {
  return (
    <IonItemSliding>
      <IonItemOptions side="end">
        <IonItemOption color="danger" expandable onClick={() => remove(cardID)}>
          delete
        </IonItemOption>
      </IonItemOptions>
      <IonItem>
        <IonLabel>
          <h1>
            <b>{title}</b>
          </h1>
          <h2>
            {day} {date}
          </h2>
        </IonLabel>
      </IonItem>
    </IonItemSliding>
  );
};

const Symptoms: React.FC = () => {
  // let initialSymptoms = [
  //   {
  //     title: "Headache",
  //     day: "Monday",
  //     date: "22/03/20"
  //   },
  //   {
  //     title: "Chest Pain",
  //     day: "Monday",
  //     date: "22/03/20"
  //   },
  //   {
  //     title: "Sore Throat",
  //     day: "Thursday",
  //     date: "22/03/20"
  //   },
  //   {
  //     title: "Muscle Pain",
  //     day: "Friday",
  //     date: "22/03/20"
  //   }
  // ];
  const [showModal, setModal] = useState(false);
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [showToast, setToast] = useState(false);

  const addSymptom = (newTitle: string, newDay: string, newDate: string) => {
    setSymptoms([
      ...symptoms,
      {
        title: newTitle,
        day: newDay,
        date: newDate
      }
    ]);
    setToast(true);
  };

  const removeSymptom = (rIdx: number) => {
    const newSymptoms = symptoms.filter((_, index) => index !== rIdx);
    setSymptoms(newSymptoms);
  };
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
          <AddSymptom setModal={setModal} addSymptom={addSymptom} />
        </IonModal>
        <h2 className="ion-text-center">My Symptom Logs</h2>
        {symptoms.length === 0 ? (
          <p className="ion-text-center">
            You haven't logged any symptoms yet, press the button below to add a
            new symptom
          </p>
        ) : null}
        {symptoms.map((s, idx) => (
          <SymptomCard
            key={idx}
            cardID={idx}
            day={s.day}
            date={s.date}
            title={s.title}
            remove={removeSymptom}
          />
        ))}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setToast(false)}
          message="New symptom added"
          color="primary"
          duration={400}
        />
      </IonContent>
    </IonPage>
  );
};

export default Symptoms;
