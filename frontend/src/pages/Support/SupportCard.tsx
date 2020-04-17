import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonModal,
} from "@ionic/react";

import ArticlePage from "../../components/common/ArticlePage";

interface SupportCardProps {
  title: string;
  preview: string;
  description: string;
  imageSrc: string;
}

const SupportCard: React.FC<SupportCardProps> = ({
  title,
  description,
  preview,
  imageSrc,
}) => {
  const [showModal, setModal] = useState(false);
  const cardContentStyle = {color: "white"}
  const headerStyle = {
    paddingTop: "5px",
    paddingBottom: "5px"
  }
  return (
    <React.Fragment>
      <IonCard onClick={() => setModal(true)}>
          <div className="container">
            <img src={imageSrc} alt="" />
          </div>
        <IonCardHeader style={headerStyle}>
          <IonCardTitle color="secondary">{<h2>{title}</h2>}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent style={cardContentStyle}>{preview}</IonCardContent>
      </IonCard>
      <IonModal isOpen={showModal}>
        <ArticlePage title={title} description={description} setModal={setModal} imageSrc={imageSrc} />
      </IonModal>
    </React.Fragment>
  );
};

export default SupportCard;
