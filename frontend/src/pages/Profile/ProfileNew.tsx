import React from "react";
import { logOut } from "../../utils/store";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonLabel,
  IonButton,
} from "@ionic/react";

import NHSlogo from "../../assets/images/NHS.png";
import elonImage from "../../assets/images/elon.jpg";
import "./ProfileNew.css";

interface InfoListProps {
  infoArray: { title: string; value: string }[];
}

const InfoList: React.FC<InfoListProps> = ({ infoArray }) => {
  const cardStyle = {
    paddingLeft: "15px",
    paddingRight: "15px",
  };
  return (
    <div style={cardStyle}>
      <IonList lines="none" className="rounded">  
        {infoArray.map((info, index) => (
          <IonItem key={index} lines="none">
            <IonLabel>
              <b>{info.title}</b> : {info.value}
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

const Profile: React.FC = () => {
  const contactDetails = [
    { title: "Address", value: "1 Milky Way, EJZ 2FA" },
    { title: "Phone Number", value: "+4477992384" },
    { title: "email", value: "elon@gmail.com" },
  ];
  const nameDetials = [{ title: "Name", value: "Elon Musk" }];
  const medicalDetials = [
    { title: "Hospital", value: "Royal Marsden Hosptial" },
    { title: "Medical History", value: "Diabetes, High Blood Pressure" },
    { title: "Current Status", value: "On surrveilance" },
  ];
  const padLeft = {
    paddingLeft: "17px",
  };
  const imageStyle = {
    borderRadius: "50%",
  };
  const cardStyle = {
    paddingLeft: "15px",
    paddingRight: "15px",
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-text-center ion-padding-top wrapper">
          <img src={elonImage} />
        </div>
        <h3 className="ion-text-center">Elon Musk</h3>
        <h2 style={padLeft}>Name</h2>
        <InfoList infoArray={nameDetials} />
        <h2 style={padLeft}>Contact Details</h2>
        <InfoList infoArray={contactDetails} />
        <h2 style={padLeft}>Medical Details</h2>
        <InfoList infoArray={medicalDetials} />
        <br/>
        <div style={cardStyle}>
          <IonButton expand="full" color="tertiary" href="/login" onClick={() => logOut()}>
            Logout
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
