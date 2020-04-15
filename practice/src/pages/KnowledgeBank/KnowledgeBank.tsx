import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonIcon,
  IonSearchbar,
} from "@ionic/react";
import "./KnowledgeBank.css";
// import Tab from "./Tab";
import Tab from "./TabNew";
import CardList, { Info, InfoList } from "../../components/common/CardList";
import {
  analytics,
  fitness,
  eyedrop,
  reader,
  personCircle,
  person,
} from "ionicons/icons";
import {
  ForYou,
  PathwayInfo,
  ManagementInfo,
  DiseaseInfo,
  TreatmentInfo,
  exampleSearch,
} from "./Info";
import { informationCircleOutline } from "ionicons/icons";

const KnowledgeBank: React.FC = () => {
  const icons = [personCircle, analytics, eyedrop, reader, fitness];
  const tabs = ["For You", "Pathway", "Disease", "Management", "Treatment"];
  const [tab, setTab] = useState<"For You" | "Pathway" | "Disease" | "Treatment" | "Management">("For You");
  const tabToInt = (tabName: string): number => {
    if (tabName === "For You") return 0
    if (tabName === "Pathway") return 1;
    if (tabName === "Disease") return 2;
    if (tabName === "Management") return 3;
    if (tabName === "Treatment") return 4;
    return 0;
  }
  const tabToInfo = (tabName: string): Info[] => {
    if (tabName === "For You") return ForYou
    if (tabName === "Pathway") return PathwayInfo;
    if (tabName === "Disease") return DiseaseInfo;
    if (tabName === "Treatment") return TreatmentInfo;
    if (tabName === "Management") return ManagementInfo;
    return ForYou;
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <br/>
          <IonSearchbar
            animated
            placeholder="Search Info Bank"
            showCancelButton="focus"
            onIonChange={(e) => console.log(e.detail.value)}
          ></IonSearchbar>
        </IonToolbar>
        <IonToolbar class="ion-text-center">
          {tabs.map((val, idx) => (
            <Tab key={idx} label={val} icon={icons[idx]} color="primary" tab={tab} setTab={setTab}/>
          ))}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <InfoList infoArray={tabToInfo(tab)} selected={tab} />
        {/* <InfoList infoArray={exampleSearch} selected={tab} /> */}
      </IonContent>
    </IonPage>
  );
};

export default KnowledgeBank;
