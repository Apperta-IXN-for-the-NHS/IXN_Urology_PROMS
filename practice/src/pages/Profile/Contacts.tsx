import React, { useState } from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonAvatar,
  IonIcon,
  IonButton,
  IonFab,
  IonModal,
  IonFabButton,
  IonToast

} from "@ionic/react";

import { addOutline } from "ionicons/icons";
import { IonList, IonItem, IonLabel,IonListHeader, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonFooter } from '@ionic/react';



interface Contacts {
  name: string;
  bio: string;
  email: string;
  phone: string;
  address: string;
}

interface ContactListProps {
  name: string;
  bio: string;
  email: string;
  phone: string;
  address: string;
}

interface AddContactProps {
  setModal(state: boolean): void;
  addContact(name: string, email: string, phone:string, address:string, bio:string): void;
}


const AddContact: React.FC<AddContactProps> = ({setModal, addContact}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");

  const handleConfirm = () => {
    addContact(name, email, phone, address, bio);
    setModal(false);
  };

  return (

    <IonHeader>
      <IonToolbar>
        <IonButtons>
        <IonButton onClick={()=> setModal(false)}> Close </IonButton>
        </IonButtons>
      </IonToolbar>
      <h1 className="ion-text-center"> Enter a new contact</h1>


      <IonItem>
        <IonLabel position="stacked">
          <h1>Name</h1>
        </IonLabel>
        <IonInput
          type="text"
          autofocus
          onIonChange={e => setName(e.detail.value as string)}>
        </IonInput>
        </IonItem>

        
        <IonItem>
        <IonLabel position="stacked">
          <h1>Email</h1>
        </IonLabel>
        <IonInput
          type="text"
          autofocus
          onIonChange={e => setEmail(e.detail.value as string)}>
        </IonInput>
      </IonItem>


      <IonItem>
        <IonLabel position="stacked">
          <h1>Phone Number</h1>
        </IonLabel>
        <IonInput
          type="text"
          autofocus
          onIonChange={e => setPhone(e.detail.value as string)}>
        </IonInput>
      </IonItem>


      <IonItem>
        <IonLabel position="stacked">
          <h1>Address</h1>
        </IonLabel>
        <IonInput
          type="text"
          autofocus
          onIonChange={e => setAddress(e.detail.value as string)}>
        </IonInput>
      </IonItem>


      <IonItem>
        <IonLabel position="stacked">
          <h1>Bio</h1>
        </IonLabel>
        <IonInput
          type="text"
          autofocus
          onIonChange={e => setBio(e.detail.value as string)}>
        </IonInput>
      </IonItem>


      <IonButton
        expand="block"
        //below migght need editing
        disabled={name === "" || address === ""}
        onClick={() => handleConfirm()}
      >
        Confirm
      </IonButton>

      
    </IonHeader>

  )

}



const ContactsList: React.FC<ContactListProps> = ({ name, bio, email, phone, address}) => {
  return (
    <IonList class="ion-padding">
        <IonItem>
          <IonAvatar slot="start">
          <IonIcon name="person-circle-outline"></IonIcon>
            </IonAvatar>
          <IonLabel>
          <h2>Name: {name}</h2>
          <h3>Email: {email}</h3>
          <h3>Phone: {phone}</h3>
          <h3>Address: {address}</h3>
          <p>{bio}</p>
          </IonLabel>
        </IonItem>
    </IonList>
  );
};




const Contacts: React.FC = () => {

  let initialContacts = [
    { Name: "Dr.Scott", Email: "Scott@gp.com", Phone: "018446 7463829", Address: "Christies Manchester", Bio:" Helpfull for referals "},
    { Name: "Dr.Scott", Email: "Scott@gp.com", Phone: "018446 7463829", Address: "Christies Manchester", Bio:" Helpfull for referals "},
    { Name: "Dr.Scott", Email: "Scott@gp.com", Phone: "018446 7463829", Address: "Christies Manchester", Bio:" Helpfull for referals "},
    { Name: "Dr.Scott", Email: "Scott@gp.com", Phone: "018446 7463829", Address: "Christies Manchester", Bio:" Helpfull for referals "},
  ];

  const [showModal, setModal] = useState(false);
  const [contacts, setContacts] = useState<Contacts[]>([]);
  const [showToast, setToast] = useState(false);

  const addContact = (newName:string, newEmail:string, newAddress:string, newPhone:string, newBio:string) => {
    setContacts([
      ...contacts,
      {
        name: newName,
        email: newEmail,
        address: newAddress,
        phone: newPhone,
        bio: newBio,
      }
    ]);
    setToast(true);
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
            </IonButtons>
            <IonTitle>Contacts</IonTitle>
            </IonToolbar> 
          </IonHeader>
        <IonContent>
        <IonFab
          vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => setModal(true)}>
              <IonIcon icon={addOutline}/>
            </IonFabButton>
        </IonFab>

        <IonModal isOpen={showModal}>
          <AddContact setModal={setModal} addContact={addContact}></AddContact>
        </IonModal>
        <IonList>
        <IonListHeader>
        Your Contacts
        </IonListHeader>
        </IonList>

        {contacts.length === 0 ? (
          <p className="ion-padding">
            You haven't entered any contacts yet. You can add your first contact using the button at the bottom of the screen.
          </p>
        ) : null}
        {contacts.map((s, idx) => (
          <ContactsList key={idx} name={s.name} bio={s.bio} email={s.email} phone={s.phone} address={s.address} />
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


export default Contacts;