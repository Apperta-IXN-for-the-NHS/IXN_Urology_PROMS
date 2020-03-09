import React, { useState } from "react";
import { IonCard, IonCardHeader, IonCardTitle, IonModal } from "@ionic/react";
import InfoPage from "./InfoPage";

interface InfoCardProps {
  title: string;
  description: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  const [showModal, setModal] = useState(false);
  return (
    <React.Fragment>
      <IonCard className="infocards" onClick={() => setModal(true)}>
        <IonCardHeader>
          <IonCardTitle color="nhswhite" class="ion-text-center">
            <h3>{title}</h3>
          </IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonModal isOpen={showModal}>
        <InfoPage title={title} description={description} setModal={setModal} />
      </IonModal>
    </React.Fragment>
  );
};

export interface Info {
  title: string;
  description: string;
}

interface CardListProps {
  infoArray: Info[];
}

const CardList: React.FC<CardListProps> = ({ infoArray }) => {
  return (
    <React.Fragment>
      {infoArray.map((info, index) => (
        <InfoCard
          key={index}
          title={info.title}
          description={info.description}
        ></InfoCard>
      ))}
    </React.Fragment>
  );
};

export default CardList;
