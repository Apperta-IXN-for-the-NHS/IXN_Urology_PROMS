import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonTitle,
  IonToolbar,
  IonSearchbar
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import { InfoCard } from "../KnowledgeBank/CardList";
import "./Support.css";

interface SupportProps {
  history: any;
}

interface SupportCardProps {
  title: string;
}

const SupportCard: React.FC<SupportCardProps> = ({ title }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

const Support: React.FC<SupportProps> = ({ history }) => {
  const cardInfo = [
    { title: "Community" },
    { title: "Counseling" },
    { title: "Charities" },
    { title: "Diet & Exercise" }
  ];
  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="ion-text-center">
              <h2>Support</h2>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar />
        {cardInfo.map((card, index) => (<SupportCard key={index} title={card.title}/>))}
      </IonContent>
    </IonPage>
  );
};

export default Support;
