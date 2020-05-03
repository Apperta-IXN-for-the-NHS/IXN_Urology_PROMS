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
  IonText,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButton,
  IonList,
  IonInput,
  IonToast,
} from "@ionic/react";
import { add } from "ionicons/icons";
import networkImage from "../../assets/images/network.png";
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
  const [errorMessage, setErrorMessage] = useState("");
  const [modal, showModal] = useState(false);
  const [toast, showToast] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [psaScore, setPsaScore] = useState<number>(0);
  const [psaDate, setPsaDate] = useState("");
  const submitPSA = async () => {
    try {
      const response = await axios.post(`/api/results/${title}`, {
        name: title,
        score: psaScore,
        date: psaDate,
        unit: "ng/mL",
      });
      const { date, score, unit } = response.data.data;
      const newDataPoint = {
        t: new Date(date.split("T")[0]),
        y: score,
        unit: unit,
      };
      // update state here
      const newData = [...graphData, newDataPoint as any];
      setGraphData(newData);
      setRefresh(true);
      // console.log("New graph data");
      // console.log(graphData);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    } finally {
      showModal(false);
      showToast(true);
      setPsaDate("");
      setPsaScore(0);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/results/${title}`);
        const data = response.data.data;
        const formattedData = data.map((item: any) => ({
          t: new Date(item.date.split("T")[0]),
          y: item.score,
          unit: item.unit ?? "",
        }));
        setGraphData(formattedData);
        setErrorMessage("");
      } catch (err) {
        if (err.response) {
          const response = err.response.data;
          setErrorMessage(response.message);
        } else if (err.request) {
          setErrorMessage(
            "No network connection, please make sure you are connected to wifi."
          );
        }
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
        {(() => {
          if (errorMessage) {
            return (
              <React.Fragment>
                <br />
                <img src={networkImage} width="75%" />
                <IonText color="danger">
                  <p className="ion-text-center">{errorMessage}</p>
                </IonText>
              </React.Fragment>
            );
          } else if (
            graphData.length === 0 &&
            (title === "IPSS" || title === "IIEF")
          ) {
            return (
              <p className="ion-padding">
                Once you have completed the {title} questionnaire at least once
                the results will appear here.
              </p>
            );
          } else {
            return (
              <React.Fragment>
                {graphData.map((d, i) => (
                  <IonItem key={i} lines="full">
                    <span style={dot} />
                    <IonLabel style={labelStyle}>
                      <h2>{`${title} Score: ${d.y} ${d.unit ?? ""}`}</h2>
                      {/* {d.t.toDateString()} */}
                    </IonLabel>
                  </IonItem>
                ))}
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                  <IonFabButton onClick={() => showModal(true)}>
                    <IonIcon icon={add} />
                  </IonFabButton>
                </IonFab>
                <IonModal isOpen={modal}>
                  <IonHeader>
                    <IonToolbar>
                      <IonButtons>
                        <IonButton onClick={() => showModal(false)}>
                          Close
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent>
                    <IonList lines="full">
                      <h1 className="medication">Add New PSA Result</h1>
                      <IonItem className="medication" color="primary">
                        <IonLabel position="stacked">
                          <h1>PSA Score</h1>
                        </IonLabel>
                        <p>
                          What was the result of the PSA score that you are
                          entering?
                        </p>
                        <IonInput
                          type="number"
                          placeholder="PSA Score"
                          onIonChange={(e) =>
                            setPsaScore(Number(e.detail.value))
                          }
                          value={psaScore}
                        ></IonInput>
                      </IonItem>
                      <IonItem className="medication" color="primary">
                        <IonLabel position="stacked">
                          <h1>Date</h1>
                        </IonLabel>
                        <p>What date did you recieve this result?</p>
                        <IonInput
                          type="date"
                          onIonChange={(e) =>
                            setPsaDate(e.detail.value as string)
                          }
                          value={psaDate}
                        ></IonInput>
                      </IonItem>
                    </IonList>
                    <br />
                    <IonButton
                      className="medication"
                      color="tertiary"
                      expand="full"
                      // disabled={psaScore === 0 || psaDate === ""}
                      onClick={() => submitPSA()}
                    >
                      Confirm
                    </IonButton>
                  </IonContent>
                </IonModal>
                <IonToast
                  isOpen={toast}
                  color="primary"
                  position="middle"
                  message="Successfully added new result"
                  duration={700}
                />
                ;
              </React.Fragment>
            );
          }
        })()}
        {/* {errorMessage ? (
          <React.Fragment>
            <br />
            <img src={networkImage} width="75%" />
            <IonText color="warning">
              <p className="ion-text-center">{errorMessage}</p>
            </IonText>
          </React.Fragment>
        ) : (
          graphData.map((d, i) => (
            <IonItem key={i} lines="full">
              <span style={dot} />
              <IonLabel style={labelStyle}>
                <h2>{`${title} Score: ${d.y}`}</h2>
                {d.t.toDateString()}
              </IonLabel>
            </IonItem>
          ))
        )} */}
      </IonContent>
    </IonPage>
  );
};

export default ResultsData;
