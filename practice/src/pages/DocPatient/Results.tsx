import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
} from "@ionic/react";

const Results: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Results</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

interface GraphCardProps {
  graphImg: string;
  title: string;
  description: string;
  link: string;
  history: any;
}
const GraphCard: React.FC<GraphCardProps> = ({
  graphImg,
  title,
  description,
  history,
  link,
}) => {
  return (
    <React.Fragment>
      <IonCard
        onClick={(e) => {
          e.preventDefault();
          history.push(link);
        }}
      >
      <img src={graphImg} alt=""/>
      <IonCardHeader>
        <IonCardTitle color="secondaryz`sd"><h2>{title}</h2></IonCardTitle>
      </IonCardHeader>
      </IonCard>
    </React.Fragment>
  );
};

export default Results;
