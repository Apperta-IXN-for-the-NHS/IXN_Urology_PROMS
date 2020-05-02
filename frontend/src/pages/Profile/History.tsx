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
import "../DocPatient/Medications.css";
import CardList from "../../components/common/CardList";

interface History {
  title: string;
  day: string;
  date: string;
  content:string;
}

interface HistoryCardPromps {
  day: string;
  date: string;
  title: string;
  content: string;
  cardID: number;
  remove(key: number): any;
}

interface AddHistoryProps {
  setModal(state: boolean): void;
  addHistory(title: string, day: string, date: string, content: string): void;
}

const AddHistory: React.FC<AddHistoryProps> = ({ setModal, addHistory }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [content, setContent] = useState("")

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
    addHistory(title, day, date, content);
    setModal(false);
  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons>
          <IonButton onClick={() => setModal(false)}>Close</IonButton>
        </IonButtons>
      </IonToolbar>
      <h1 className="ion-text-center">Add Medical History</h1>
      <IonItem>
        <IonLabel position="stacked">
          <h1>Title</h1>
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
          <h1>Date of occurrence </h1>
        </IonLabel>
        <IonInput
          type="date"
          onIonChange={e => handleDateChange(e.detail.value as string)}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">
          <h1>Details of occurance</h1>
        </IonLabel>
        <IonInput
          type="text"
          autofocus
          onIonChange={e => setContent(e.detail.value as string)}
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

const HistoryCard: React.FC<HistoryCardPromps> = ({
  day,
  date,
  title,
  cardID,
  content,
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
          <h2>
           {content}
          </h2>
        </IonLabel>
      </IonItem>
    </IonItemSliding>
  );
};

const History: React.FC = () => {
  const [showModal, setModal] = useState(false);
  const [history, setHistory] = useState<History[]>([]);
  const [showToast, setToast] = useState(false);

  const addHistory = (newTitle: string, newDay: string, newDate: string, newContent: string) => {
    setHistory([
      ...history,
      {
        title: newTitle,
        day: newDay,
        date: newDate,
        content: newContent
      }
    ]);
    setToast(true);
  };


  const removeHistory = (rIdx: number) => {
    const newSymptoms = history.filter((_, index) => index !== rIdx);
    setHistory(newSymptoms);
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
          <AddHistory setModal={setModal} addHistory={addHistory} />
        </IonModal>
        <h2 className="ion-text-center">My Medical History</h2>
        {history.length === 0 ? (
          <p className="ion-padding" >
            You haven't logged any medical history yet. You can add your history using the button at the bottom of the screen.
          </p>
        ) : null}
        {history.map((s, idx) => (
          <HistoryCard
            key={idx}
            cardID={idx}
            day={s.day}
            date={s.date}
            title={s.title}
            content={s.content}
            remove={removeHistory}
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

export default History;
