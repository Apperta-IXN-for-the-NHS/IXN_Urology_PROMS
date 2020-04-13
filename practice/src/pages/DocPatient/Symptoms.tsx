import React, { useState } from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
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
  IonText,
} from "@ionic/react";
import { addOutline, pencil } from "ionicons/icons";
import "./Symptoms.css";
import CardList from "../../components/common/CardList";

interface Symptom {
  title: string;
  dosage: string;
  day: string;
  date: string;
}

interface SymptomItemProps {
  day: string;
  dosage: string;
  date: string;
  title: string;
  cardID: number;
  remove(key: number): any;
  addSymptom(title: string, dosage: string, day: string, date: string): void;
  editSymptom(idx: number, title: string, dosage: string, day: string, date: string): void;
}

interface AddSymptomProps {
  setModal(state: boolean): void;
  addSymptom(title: string, dosage: string, day: string, date: string): void;
  editSymptom(idx: number, title: string, dosage: string, day: string, date: string): void;
  modify?: boolean;
  cardID?: number;
  currentTitle?: string;
  currentDosage?: string;
  currentDate?: string;
}

const AddSymptom: React.FC<AddSymptomProps> = ({
  setModal,
  addSymptom,
  editSymptom,
  modify,
  cardID,
  currentTitle,
  currentDosage,
  currentDate,
}) => {
  const initialTitle = modify ? currentTitle! : "";
  const initialDosage = modify ? currentDosage! : "";
  const initialDate = modify ? currentDate! : "";
  const [title, setTitle] = useState(initialTitle);
  const [dosage, setDosage] = useState(initialDosage);
  const [date, setDate] = useState(initialDate);
  const [day, setDay] = useState("");

  const dateToDay = (dateString: string): string => {
    enum weekDays {
      "Sunday" = 0,
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
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
    if (modify) {
      editSymptom(cardID!, title, dosage, day, date);
    } else {
      addSymptom(title, dosage, day, date);
    }
    setModal(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton onClick={() => setModal(false)}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          <h1 className="medication">Add New Medication</h1>
          <IonItem className="medication" color="primary">
            <IonLabel position="stacked">
              <h1>Medication</h1>
            </IonLabel>
            <p>The name of the medication you are taking</p>
            <IonInput
              type="text"
              placeholder="Medication Name"
              autofocus
              onIonChange={(e) => setTitle(e.detail.value as string)}
              value={title}
            ></IonInput>
          </IonItem>
          <IonItem className="medication" color="primary">
            <IonLabel position="stacked">
              <h1>Dosage</h1>
            </IonLabel>
            <p>Frequency or dose of the medicine</p>
            <IonInput
              type="text"
              placeholder="Dosage"
              onIonChange={(e) => setDosage(e.detail.value as string)}
              value={dosage}
            ></IonInput>
          </IonItem>
          <IonItem className="medication" color="primary">
            <IonLabel position="stacked">
              <h1>Date</h1>
            </IonLabel>
            <p>The date you started taking this medication</p>
            <IonInput
              type="date"
              onIonChange={(e) => handleDateChange(e.detail.value as string)}
              value={date}
            ></IonInput>
          </IonItem>
        </IonList>
        <br />
        <IonButton
          className="medication"
          color="tertiary"
          expand="full"
          disabled={date === "" || title === "" || dosage === ""}
          onClick={() => handleConfirm()}
        >
          Confirm
        </IonButton>
      </IonContent>
      {console.log(date)}
    </IonPage>
  );
};

const SymptomItem: React.FC<SymptomItemProps> = ({
  day,
  date,
  dosage,
  addSymptom,
  editSymptom,
  title,
  cardID,
  remove,
}) => {
  const [showModal, setModal] = useState(false);
  return (
    <React.Fragment>
      <IonItemSliding>
        <IonItemOptions side="end">
          <IonItemOption
            color="danger"
            expandable
            onClick={() => remove(cardID)}
          >
            delete
          </IonItemOption>
        </IonItemOptions>
        <IonItem
          color="primary"
          lines="full"
          detail
          onClick={() => setModal(true)}
        >
          <IonLabel>
            <h1>{title}</h1>
            <h2>{dosage}</h2>
            <h2>
              {day} {date}
            </h2>
          </IonLabel>
        </IonItem>
      </IonItemSliding>
      <IonModal isOpen={showModal}>
        <AddSymptom
          setModal={setModal}
          addSymptom={addSymptom}
          editSymptom={editSymptom}
          currentTitle={title}
          currentDosage={dosage}
          currentDate={date}
          modify
          cardID={cardID}
        />
      </IonModal>
    </React.Fragment>
  );
};

const Symptoms: React.FC = () => {
  let initialSymptoms = [
    {
      title: "Ibuprofen",
      day: "Monday",
      date: "2020-04-17",
      dosage: "100mg a day",
    },
    {
      title: "Paracetamol",
      day: "Monday",
      date: "2020-04-17",
      dosage: "100mg a day",
    },
    {
      title: "Xanax",
      day: "Thursday",
      date: "2020-04-17",
      dosage: "100mg a day",
    },
  ];
  const [showModal, setModal] = useState(false);
  const [symptoms, setSymptoms] = useState<Symptom[]>(initialSymptoms);
  const [showToast, setToast] = useState(false);
  const textStyle = {
    paddingLeft: "18px",
  };
  const addSymptom = (
    newTitle: string,
    newDosage: string,
    newDay: string,
    newDate: string
  ) => {
    setSymptoms([
      ...symptoms,
      {
        title: newTitle,
        dosage: newDosage,
        day: newDay,
        date: newDate,
      },
    ]);
    setToast(true);
  };
  const editSymptom = (
    idx: number,
    newTitle: string,
    newDosage: string,
    newDay: string,
    newDate: string
  ) => {
    let newSymptoms = [...symptoms]
    newSymptoms[idx] = {
      title: newTitle,
      dosage: newDosage,
      day: newDay,
      date: newDate,
    }
    setSymptoms(newSymptoms)
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
          <AddSymptom setModal={setModal} addSymptom={addSymptom} editSymptom={editSymptom}/>
        </IonModal>
        <h2 style={textStyle}>Current Medication</h2>
        {symptoms.map((s, idx) => (
          <SymptomItem
            key={idx}
            cardID={idx}
            day={s.day}
            date={s.date}
            title={s.title}
            dosage={s.dosage}
            addSymptom={addSymptom}
            editSymptom={editSymptom}
            remove={removeSymptom}
          />
        ))}
        {symptoms.length === 0 ? (
          <p className="ion-text-center">
            You haven't logged any symptoms yet, press the button below to add a
            new symptom
          </p>
        ) : (
          <p className="ion-text-center">
            Swipe left on an entry to delete it.
            <br />
            Tap on an entry to modify it.
          </p>
        )}
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
