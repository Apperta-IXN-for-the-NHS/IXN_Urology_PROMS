import React from "react";
import {
  IonCardContent,
  IonPage,
  IonHeader,
  IonContent,
  IonTitle,
  IonItem,
  IonLabel,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

import LineGraph from "../../components/common/Graph";

interface ResultsDataProps {
  title: string;
}
const ResultsData: React.FC<ResultsDataProps> = ({ title }) => {
  const dot = {
    height: "10px",
    width: "10px",
    backgroundColor: "#003087",
    borderRadius: "50%",
    display: "inline-block",
  }
  const labelStyle = {
      marginLeft: "15px"
  }
  const padLeft = {
      paddingLeft: "15px"
  }
  const data = [
    {
      t: new Date("2020-04-25"),
      y: 24,
    },
    {
      t: new Date("2020-04-29"),
      y: 28,
    },
    {
      t: new Date("2020-05-6"),
      y: 22,
    },
    {
      t: new Date("2020-05-10"),
      y: 30,
    },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 style={padLeft}>{title} Results</h1>
        <LineGraph label={title} data={data} />
        <br/>
        <h2 style={padLeft}>History</h2>
        {data.map((d, i) => (
            <IonItem key={i} lines="full">
                <span style={dot} />
                <IonLabel style={labelStyle}>
                    <h2>{`${title} Score: ${d.y}`}</h2>
                    {d.t.toDateString()}
                </IonLabel>
            </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default ResultsData;