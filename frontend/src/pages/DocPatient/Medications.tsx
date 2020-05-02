import React, { useState, useEffect } from "react";
import axios from "../../axios";
import {
  IonHeader,
  IonPage,
  IonToolbar,
  IonList,
  IonButtons,
  IonButton,
  IonBackButton,
  IonContent,
  IonToast,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonModal,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonText,
} from "@ionic/react";
import { addOutline, pencil, trophy } from "ionicons/icons";
import "./Medications.css";
import networkImage from "../../assets/images/network.png";

interface Medication {
  _id: string;
  title: string;
  dosage: string;
  date: string;
}

interface MedicationItemProps {
  dosage: string;
  date: string;
  title: string;
  cardID: number;
  _id: string;
  remove(key: number, _id: string): Promise<void>;
  addMedication(
    title: string,
    dosage: string,
    date: string,
    _id: string
  ): Promise<void>;
  editMedication(
    idx: number,
    _id: string,
    title: string,
    dosage: string,
    date: string
  ): void;
}

interface AddMedicationProps {
  setModal(state: boolean): void;
  addMedication(
    title: string,
    dosage: string,
    date: string,
    _id: string
  ): Promise<void>;
  editMedication(
    idx: number,
    _id: string,
    title: string,
    dosage: string,
    date: string
  ): void;
  modify?: boolean;
  cardID?: number;
  _id?: string;
  currentTitle?: string;
  currentDosage?: string;
  currentDate?: string;
}

const AddMedication: React.FC<AddMedicationProps> = ({
  setModal,
  addMedication,
  editMedication,
  modify,
  cardID,
  _id,
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
  console.log(_id);

  const handleDateChange = (date: string): void => {
    setDate(date);
  };

  const handleConfirm = async () => {
    if (modify) {
      editMedication(cardID!, _id!, title, dosage, date);
    } else {
      addMedication(title, dosage, date, _id!);
    }
    setModal(false);
  };

  return (
    // <IonPage>
    <React.Fragment>
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
              // autofocus
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
      {/* // {console.log(date)} */}
    </React.Fragment>
    // {/* // </IonPage> */}
  );
};

const MedicationItem: React.FC<MedicationItemProps> = ({
  date,
  dosage,
  addMedication,
  editMedication,
  title,
  cardID,
  _id,
  remove,
}) => {
  const [showModal, setModal] = useState(false);
  const trueDate = new Date(date);
  return (
    <React.Fragment>
      <IonItemSliding>
        <IonItemOptions side="end">
          <IonItemOption color="danger" onClick={() => remove(cardID, _id)}>
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
            <h2>
              <b>Dosage: </b>
              {dosage}
            </h2>
            <h2>
              <b>Started On: </b> {trueDate.toDateString()}
            </h2>
          </IonLabel>
        </IonItem>
      </IonItemSliding>
      <IonModal isOpen={showModal}>
        <AddMedication
          setModal={setModal}
          addMedication={addMedication}
          editMedication={editMedication}
          currentTitle={title}
          currentDosage={dosage}
          currentDate={date}
          modify
          cardID={cardID}
          _id={_id}
        />
      </IonModal>
    </React.Fragment>
  );
};

const Medications: React.FC = () => {
  // let initialMedications = [
  //   {
  //     _id: "1",
  //     title: "Ibuprofen",
  //     date: "2020-04-17",
  //     dosage: "100mg a day",
  //   },
  //   {
  //     _id: "2",
  //     title: "Paracetamol",
  //     date: "2020-04-17",
  //     dosage: "100mg a day",
  //   },
  //   {
  //     _id: "3",
  //     title: "Xanax",
  //     date: "2020-04-17",
  //     dosage: "100mg a day",
  //   },
  // ];
  const [showModal, setModal] = useState(false);
  const [medications, setMedications] = useState<Medication[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/medications");
        const data = response.data.data;
        setMedications(data);
        setErrorMessage("");
      } catch (err) {
        if (err.response) {
          const response = err.response.data;
          setErrorMessage(response.message);
        } else if (err.request) {
          setErrorMessage("Please make sure you are connected to Wifi");
        }
      }
    };
    getData();
  }, []);
  const [showToast, setToast] = useState(false);
  const textStyle = {
    paddingLeft: "18px",
  };
  const addMedication = async (
    newTitle: string,
    newDosage: string,
    newDate: string,
    _id: string
  ) => {
    setMedications([
      ...medications,
      {
        _id: _id,
        title: newTitle,
        dosage: newDosage,
        date: newDate,
      },
    ]);
    const medDetails = { title: newTitle, dosage: newDosage, date: newDate };
    await axios.post("/api/medications", medDetails);
    setToast(true);
  };
  const editMedication = async (
    idx: number,
    _id: string,
    newTitle: string,
    newDosage: string,
    newDate: string
  ) => {
    let newMedications = [...medications];
    newMedications[idx] = {
      _id: _id,
      title: newTitle,
      dosage: newDosage,
      date: newDate,
    };
    setMedications(newMedications);
    const medDetails = { title: newTitle, dosage: newDosage, date: newDate };
    await axios.put(`api/medications/${_id}`, medDetails);
  };
  const removeMedication = async (rIdx: number, _id: string) => {
    const newMedications = medications.filter((_, index) => index !== rIdx);
    setMedications(newMedications);
    await axios.delete(`api/medications/${_id}`);
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
          <AddMedication
            setModal={setModal}
            addMedication={addMedication}
            editMedication={editMedication}
          />
        </IonModal>
        <h2 style={textStyle}>Current Medication</h2>
        {medications.map((s, idx) => (
          <MedicationItem
            key={idx}
            cardID={idx}
            _id={s._id}
            date={s.date}
            title={s.title}
            dosage={s.dosage}
            addMedication={addMedication}
            editMedication={editMedication}
            remove={removeMedication}
          />
        ))}
        {(() => {
          if (medications.length === 0 && !errorMessage) {
            return (
              <p className="ion-text-center">
                You haven't logged any medications yet, press the button below
                to add a new medication
              </p>
            );
          } else if (errorMessage) {
            return (
              <React.Fragment>
                <br />
                <img src={networkImage} width="75%" />
                <IonText color="danger">
                  <p className="ion-text-center">{errorMessage}</p>
                </IonText>
              </React.Fragment>
            );
          } else {
            return (
              <p className="ion-text-center">
                Swipe left on an entry to delete it.
                <br />
                Tap on an entry to modify it.
              </p>
            );
          }
        })()}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setToast(false)}
          message="New medication added"
          color="medium"
          duration={500}
        />
      </IonContent>
    </IonPage>
  );
};

export default Medications;
