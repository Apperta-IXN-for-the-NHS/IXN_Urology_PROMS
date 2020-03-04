import React from "react";
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";

interface InfoCardProps {
  history: any;
  title: string;
  link: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ history, title, link }) => {
  return (
    <IonCard
      onClick={e => {
        e.preventDefault();
        history.push(link);
      }}
    >
      <IonCardHeader>
        <IonCardTitle class="ion-text-center">
          <h2>{title}</h2>
        </IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export interface Info {
  title: string;
  link: string;
}

interface CardListProps {
  infoArray: Info[];
  history: any;
}

const CardList: React.FC<CardListProps> = ({ infoArray, history }) => {
  return (
    <React.Fragment>
      {infoArray.map((info, index) => (
        <InfoCard
          key={index}
          history={history}
          title={info.title}
          link={info.link}
        ></InfoCard>
      ))}
    </React.Fragment>
  );
};

export default CardList;
