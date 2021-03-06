import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonButton,
  IonCardContent,
  IonCardTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import LineGraph from "../../components/common/Graph";
interface ResultsProps {
  history: any;
}

const Results: React.FC<ResultsProps> = ({ history }) => {
  const cards = [
    {
      graph: true,
      title: "IPSS",
      link: "/ipss-results",
    },
    {
      graph: true,
      title: "PSA",
      link: "/psa-results",
    },
    {
      graph: true,
      title: "IIEF",
      link: "/iief-results",
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
        {cards.map((info, index) => (
          <GraphCard
            title={info.title}
            graph={info.graph}
            link={info.link}
            history={history}
            key={index}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

interface GraphCardProps {
  graph: boolean;
  title: string;
  link: string;
  history: any;
}
const GraphCard: React.FC<GraphCardProps> = ({
  graph,
  title,
  history,
  link,
}) => {
  const headerStyle = {
    paddingTop: "5px",
    paddingBottom: "5px",
  };
  const buttonStyle = {
    margin: 0,
  };
  const contentStyle = {
    padding: 0,
  };
  return (
    <React.Fragment>
      <IonCard>
        <IonCardHeader style={headerStyle}>
          <IonCardTitle color="secondary">
            <h3>{title} Results</h3>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent style={contentStyle}>
          {graph ? <LineGraph label={title} /> : null}
        </IonCardContent>
        <IonButton
          expand="full"
          color="secondary"
          style={buttonStyle}
          onClick={(e) => {
            e.preventDefault();
            history.push(link);
          }}
        >
          view
          <IonIcon slot="end" icon={chevronForwardOutline} />
        </IonButton>
      </IonCard>
    </React.Fragment>
  );
};

export default Results;
