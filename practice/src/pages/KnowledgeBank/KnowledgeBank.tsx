import  React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment
} from "@ionic/react";
import "./KnowledgeBank.css";
import Tab from "./Tab";
import CardList, { Info } from "../../components/common/CardList";
import { analytics, fitness , eyedrop, reader} from "ionicons/icons";
import { PathwayInfo, ManagementInfo, DiseaseInfo, TreatmentInfo } from "./Info";


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
      <IonHeader>
        <IonToolbar>
          <IonSegment color="primary" value={tab} onIonChange={e => setTab(e.detail.value as any)}>
            {tabs.map((val, idx) => <Tab key={idx} label={val} icon={icons[idx]}/>)}
          </IonSegment>
        </IonToolbar>
        <IonToolbar>
          <IonTitle class="ion-text-center">
            <h2>{tab}</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CardList infoArray={tabToInfo(tab)} />
      </IonContent>
    </IonPage>
  );
};

export default KnowledgeBank;
