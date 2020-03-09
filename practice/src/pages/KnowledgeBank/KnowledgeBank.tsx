import  React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonIcon,
  IonSearchbar
} from "@ionic/react";
import "./KnowledgeBank.css";
import Tab from "./Tab";
import CardList, { Info } from "../../components/common/CardList";
import { analytics, fitness , eyedrop, reader} from "ionicons/icons";
import { PathwayInfo, ManagementInfo, DiseaseInfo, TreatmentInfo } from "./Info";
import { informationCircleOutline } from 'ionicons/icons';


const KnowledgeBank: React.FC = () => {
  const icons = [analytics, eyedrop, fitness, reader];
  const tabs = ['Pathway', 'Disease', 'Treatement', 'Management'];
  const [tab, setTab] = useState<"Pathway" | "Disease" | "Treatment" | "Management">("Pathway")
  const tabToInfo = (tabName: string): Info[] => {
    if (tabName === "Pathway") return PathwayInfo
    if (tabName === "Disease") return DiseaseInfo
    if (tabName === "Treatement") return TreatmentInfo
    if (tabName === "Management") return ManagementInfo
    return PathwayInfo;
  }

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
        <IonTitle class="ion-text-center">
            <IonIcon className="header" color="nhsblue" icon={informationCircleOutline} />
        </IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSegment color="nhsblue" value={tab} onIonChange={e => setTab(e.detail.value as any)}>
            {tabs.map((val, idx) => <Tab key={idx} label={val} icon={icons[idx]}/>)}
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonHeader>
      <IonToolbar>
          <IonTitle class="ion-text-center">
            <h1>{tab}</h1>
          </IonTitle>
        </IonToolbar>

        <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
      </IonHeader>
      <IonContent>
        <CardList infoArray={tabToInfo(tab)} />
      </IonContent>
    </IonPage>
  );
};

export default KnowledgeBank;
