import React, { useEffect, useState } from "react";
import axios from "../../axios";
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
  };
  const labelStyle = {
    marginLeft: "15px",
  };
  const padLeft = {
    paddingLeft: "15px",
  };
  const [graphData, setGraphData] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/results/${title}`);
        const data = response.data.data;
        const formattedData = data.map((item: any) => ({
          t: new Date(item.date.split("T")[0]),
          y: item.score,
        }));
        setGraphData(formattedData);
      } catch {
        return;
      }
    };
    getData();
  }, []);
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
        <LineGraph label={title} />
        <br />
        <h2 style={padLeft}>History</h2>
        {graphData.map((d, i) => (
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
