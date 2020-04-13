import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFabButton,
  IonFabList,
  IonFab,
  IonIcon,
  IonList,
  IonListHeader,
  IonItem,
  IonThumbnail,
  IonText,
  IonLabel,
  IonImg,
} from "@ionic/react";
import "./Support.css";
import { SupportCardList } from "../../components/common/CardList";
import CardList, { Info } from "../../components/common/CardList";
import SupportCard from "./SupportCard";
import { SupportInfo } from "./Info";
import { heartCircleOutline, people } from "ionicons/icons";
import ProstateUK from "../../assets/images/ProstateUK.jpeg";
import tackle from "../../assets/images/tackleProstateCancer.jpeg";
import macmillan from "../../assets/images/macmillan.jpg";

const Support: React.FC = () => {
  const imageArray = []
  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonListHeader>
            <h1>Support Group Links</h1>
          </IonListHeader>
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={ProstateUK}></IonImg>
            </IonThumbnail>
            <IonLabel>
              <a href="https://prostatecanceruk.org/get-support/support-groups">
                <h1>Prostate UK</h1>
              </a>
              <p>
                We want to stop prostate cancer being a killer. We fund
                groundbreaking research, drive improvements in treatment, and
                fight injustice in care.
              </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={tackle}></IonImg>
            </IonThumbnail>
            <IonLabel>
              <a href="https://www.tackleprostate.org/">
                <h1>Tackle Prostate Cancer</h1>
              </a>
              <p>
                Tackle Prostate Cancer is a leading charity tackling the real
                issues people face when they are diagnosed with prostate cancer,
                and helping people to cope with .
              </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={macmillan}></IonImg>
            </IonThumbnail>
            <IonLabel>
              <a href="https://www.macmillan.org.uk/">
                <h1>MacMillan</h1>
              </a>
              <p>
                Whatever cancer throws your way, we're right there with you. We
                provide physical, emotional and financial support to help you
                live life as fully as you can.
              </p>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonList>
          <IonListHeader>
            <h1>Key Topics</h1>
          </IonListHeader>
        </IonList>
        <SupportCardList infoArray={SupportInfo} />
      </IonContent>
    </IonPage>
  );
};

export default Support;
