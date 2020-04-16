import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonItem,
  IonList,
  IonLabel,
  IonCard,
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
  }
  return (
      <div style={cardStyle}>
      <IonList>
        {infoArray.map((info, index) => (
          <IonItem color="primary" key={index}>
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
    borderRadius: "50%"
  }
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
      </IonContent>
    </IonPage>
  );
};

export default Profile;
