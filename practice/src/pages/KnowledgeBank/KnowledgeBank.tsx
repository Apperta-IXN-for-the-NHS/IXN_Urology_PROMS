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
  search,
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
  const [searchText, setSearchText] = useState("");
  const [tab, setTab] = useState<
    "For You" | "Pathway" | "Disease" | "Treatment" | "Management"
  >("For You");
  const allInfo = [
    ...PathwayInfo,
    ...DiseaseInfo,
    ...TreatmentInfo,
    ...ManagementInfo,
  ];
  const tabToInfo = (tabName: string): Info[] => {
    if (tabName === "For You") return ForYou;
    if (tabName === "Pathway") return PathwayInfo;
    if (tabName === "Disease") return DiseaseInfo;
    if (tabName === "Treatment") return TreatmentInfo;
    if (tabName === "Management") return ManagementInfo;
    return ForYou;
  };
  const generateSearchArray = (query: string) => {
    query = query.toLowerCase();
    return allInfo.filter(
      (value) =>
        value.title.toLowerCase().includes(query) ||
        value.description.toLowerCase().includes(query)
    );
  };
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <br />
          <IonSearchbar
            animated
            placeholder="Search Info Bank"
            showCancelButton="focus"
            onIonChange={(e) => setSearchText(e.detail.value as string)}
            onIonCancel={() => setSearchText("")}
          ></IonSearchbar>
        </IonToolbar>
        <div className="ion-text-center">
          {tabs.map((val, idx) => (
            <Tab
              key={idx}
              label={val}
              icon={icons[idx]}
              color="primary"
              tab={tab}
              setTab={setTab}
            />
          ))}
        </div>
      </IonHeader>
      <IonContent>
        {searchText === "" ? (
          <InfoList infoArray={tabToInfo(tab)} selected={tab} searchText={searchText}/>
        ) : (
          <InfoList
            infoArray={generateSearchArray(searchText)}
            selected={tab}
            searchText={searchText}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default KnowledgeBank;
