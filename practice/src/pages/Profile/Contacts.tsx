import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonAvatar,
  IonIcon
} from "@ionic/react";

import { IonList, IonItem, IonLabel,IonListHeader, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';



interface ContactListProps {
  name: string;
  bio: string;
  email: string;
  phone: string;
  address: string;

}

const ContactsList: React.FC<ContactListProps> = ({ name, bio, email, phone, address}) => {
  return (
    <IonList>
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

  let contacts = [
    { Name: "Dr.Scott", Email: "Scott@gp.com", Phone: "018446 7463829", Address: "Christies Manchester", Bio:" Helpfull for referals "},
    { Name: "Dr.Scott", Email: "Scott@gp.com", Phone: "018446 7463829", Address: "Christies Manchester", Bio:" Helpfull for referals "},
    { Name: "Dr.Scott", Email: "Scott@gp.com", Phone: "018446 7463829", Address: "Christies Manchester", Bio:" Helpfull for referals "},
    { Name: "Dr.Scott", Email: "Scott@gp.com", Phone: "018446 7463829", Address: "Christies Manchester", Bio:" Helpfull for referals "},
  ];

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
        <IonList>
        <IonListHeader>
        Your Contacts
        </IonListHeader>
        </IonList>
        {contacts.map((s, idx) => (
          <ContactsList key={idx} name={s.Name} bio={s.Bio} email={s.Email} phone={s.Phone} address={s.Address} />
        ))}
      </IonContent>
    </IonPage>
  );
};


export default Contacts;