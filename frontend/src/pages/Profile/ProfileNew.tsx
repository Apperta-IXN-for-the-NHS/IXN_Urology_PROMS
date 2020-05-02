import React, { useState, useEffect, useContext } from "react";
import UserContext, { logOut } from "../../utils/store";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonCard,
  IonToolbar,
  IonItem,
  IonList,
  IonLabel,
  IonButton,
  IonCardContent,
} from "@ionic/react";

import NHSlogo from "../../assets/images/NHS.png";
import elonImage from "../../assets/images/elon.jpg";
import "./ProfileNew.css";

interface InfoListProps {
  infoArray: { title: string; value: string }[];
  infoTitle: string;
}

const InfoList: React.FC<InfoListProps> = ({ infoArray, infoTitle }) => {
  const padLeft = {
    paddingLeft: "15px",
  };
  return (
    <IonCard color="primary">
      <IonItem lines="full">
        <h5>{infoTitle}</h5>
      </IonItem>
      <IonCardContent>
        {infoArray.map((info, index) => (
          <IonLabel>
            <b>{info.title}</b> : {info.value} <br />
          </IonLabel>
        ))}
      </IonCardContent>
    </IonCard>
  );
};

const Profile: React.FC<{ history: any }> = ({ history }) => {
  const [userInfo, setUserInfo] = useContext(UserContext as any);
  const fullName = userInfo.firstName + ' ' + userInfo.lastName
  // const fullAddress = userInfo.address.maps((info, index) => {info})
  const contactDetails = [
    { title: "email", value: userInfo.email },
    { title: "Phone Number", value: userInfo.phone },
    { title: "Address Line One", value: userInfo.address ? userInfo.address.addressOne : "not available" },
    { title: "Address Line Two", value: userInfo.address ? userInfo.address.addressTwo : "not available" },
    { title: "City", value: userInfo.address ? userInfo.address.city : "not available" },
    { title: "County", value: userInfo.address ? userInfo.address.county : "not available" },
    { title: "Postcode", value: userInfo.address ? userInfo.address.postcode : "not available" },
  ];
  const nameDetials = [{ title: "Name", value: fullName }];
  const medicalDetials = [
    { title: "Hospital", value: userInfo.hospital ?? "Hopsital not registered" },
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
          <img src={NHSlogo} />
        </div>
        <h3 className="ion-text-center">{fullName}</h3>
        <InfoList infoArray={nameDetials} infoTitle={"Name"} />
        <InfoList infoArray={contactDetails} infoTitle={"Contact Details"} />
        <InfoList infoArray={medicalDetials} infoTitle={"Medical Detials"} />
        <div style={cardStyle}>
          <IonButton
            expand="full"
            color="medium"
            onClick={(e) => {
              e.preventDefault();
              history.push("/feedback");
            }}
          >
            Give Feedback
          </IonButton>
          <br />
          <IonButton
            expand="full"
            color="tertiary"
            href="/login"
            onClick={() => logOut()}
          >
            Logout
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
