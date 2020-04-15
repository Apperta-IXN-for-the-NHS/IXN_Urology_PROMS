import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonModal,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText,
} from "@ionic/react";
import InfoPage from "./InfoPage";
import SupportCard from "../../pages/Support/SupportCard";
import doctor from "../../assets/images/doctor.png";

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
            <div>
              <h4>{title}</h4>
            </div>
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
  icon: string;
  title: string;
  description: string;
}

export interface SupportInfo {
  title: string;
  description: string;
  preview: string;
  image: string;
}

interface InfoItemProps {
  icon: string;
  title: string;
  description: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({
  icon,
  title,
  description,
}) => {
  const [showModal, setModal] = useState(false);
  return (
    <React.Fragment>
      <IonItem
        color="primary"
        detail
        lines="full"
        button
        onClick={() => setModal(true)}
      >
        <IonIcon slot="start" icon={icon} />
        <IonLabel>
          <h2>{title}</h2>
          <p>{description}</p>
        </IonLabel>
      </IonItem>
      <IonModal isOpen={showModal}>
        <InfoPage title={title} description={description} setModal={setModal} />
      </IonModal>
    </React.Fragment>
  );
};

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

interface SupportCardListProps {
  infoArray: SupportInfo[];
}

export const SupportCardList: React.FC<SupportCardListProps> = ({
  infoArray,
}) => {
  return (
    <React.Fragment>
      {infoArray.map((info, index) => (
        <SupportCard
          key={index}
          title={info.title}
          description={info.description}
          preview={info.preview}
          imageSrc={info.image}
        ></SupportCard>
      ))}
    </React.Fragment>
  );
};

interface InfoListProps {
  infoArray: Info[];
  selected: string;
  searchText: string;
}

export const InfoList: React.FC<InfoListProps> = ({
  infoArray,
  selected,
  searchText,
}) => {
  if (infoArray.length === 0 && searchText === "") {
    return (
      <React.Fragment>
        <br />
        <img src={doctor} width="50%" />
        <br />
        <p className="ion-text-center">
          Your doctor will add some recommended cards to read here in this
          section based on your current circumstances
        </p>
      </React.Fragment>
    );
  }
  return (
    <IonList>
      <IonListHeader>
        {searchText === "" ? (
          <h2>{selected}</h2>
        ) : (
          <h2>
            Search Results for: <i>{searchText}</i>
          </h2>
        )}
      </IonListHeader>
      {infoArray.length === 0 ? (
        <p className="ion-text-center">
          There doesn't seem to be any items matching your search query
        </p>
      ) : (
        infoArray.map((info, index) => (
          <InfoItem
            key={index}
            icon={info.icon}
            title={info.title}
            description={info.description}
          />
        ))
      )}
    </IonList>
  );
};

export default CardList;
