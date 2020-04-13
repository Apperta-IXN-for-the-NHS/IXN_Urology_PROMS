import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonButton,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";

import counsellingImg from "../../assets/images/counselling.png";
interface ResultsProps {
  history: any;
}

const Results: React.FC<ResultsProps> = ({ history }) => {
  const cards = [
    {
      graphImg: "",
      title: "MRI Results",
      link: "/mri-results",
    },
    {
      graphImg: "",
      title: "Biopsy Results",
      link: "/biopsy-results",
    },
    {
      graphImg: counsellingImg,
      title: "IPSS Results",
      link: "/ipss-results",
    },
    {
      graphImg: counsellingImg,
      title: "PSA Results",
      link: "/psa-results",
    },
  ];
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
      <IonContent>
        {cards.map((info, index) =>
          info.graphImg === "" ? (
            <GraphCard title={info.title} link={info.link} history={history} key={index}/>
          ) : (
            <GraphCard
              title={info.title}
              graphImg={counsellingImg}
              link={info.link}
              history={history}
              key={index}
            />
          )
        )}
      </IonContent>
    </IonPage>
  );
};

interface GraphCardProps {
  graphImg?: string;
  title: string;
  link: string;
  history: any;
}
const GraphCard: React.FC<GraphCardProps> = ({
  graphImg,
  title,
  history,
  link,
}) => {
  const headerStyle = {
    paddingTop: "5px",
    paddingBottom: "5px",
  };
  const buttonStyle = {
    margin: 0
  }
  return (
    <React.Fragment>
      <IonCard
        onClick={(e) => {
          e.preventDefault();
          history.push(link);
        }}
      >
        <IonCardHeader style={headerStyle}>
          <IonCardTitle color="secondary">
            <h3>{title}</h3>
          </IonCardTitle>
        </IonCardHeader>
        <img src={graphImg} alt="" />
        <IonButton expand="full" color="secondary" style={buttonStyle}>
          view
          <IonIcon slot="end" icon={chevronForwardOutline} />
        </IonButton>
      </IonCard>
    </React.Fragment>
  );
};

export default Results;
