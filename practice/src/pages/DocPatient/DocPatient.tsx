import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonIcon
} from "@ionic/react";

import "./DocPatient.css";
import calImg from "../../assets/images/calendar.png";
import letterImg from "../../assets/images/mail.png";
import quesImg from "../../assets/images/ques.png";
import sympImg from "../../assets/images/symptoms.png";

import { peopleCircleOutline } from 'ionicons/icons';

interface QuadProps {
  title: string;
  image: any;
  link: string;
  history: any;
}

const QuadCard: React.FC<QuadProps> = ({
  title,
  image,
  history,
  link
}) => {
  return (
    <IonCol size="6">
      <IonCard
        className="doc"
        onClick={e => {
          e.preventDefault();
          history.push(link);
        }}
      >
        <IonCardHeader>
          <br/>
          <br/>
          <img src={image} alt={title} />
          <IonCardTitle color="nhswhite" className="ion-text-center">{<h4>{title}</h4>}</IonCardTitle>
        </IonCardHeader>
      </IonCard>
    </IonCol>
  );
};

interface DocPatientProps {
  history: any;
}

const DocPatient: React.FC<DocPatientProps> = ({ history }) => {
  let cardContent = [
    [
      {
        title: "Letters",
        image: letterImg,
        description:
          "Letters, documents and forms you have received regarding your treatment and diagnosis.",
        link: "/letters"
      },
      {
        title: "Questionaires",
        image: quesImg,
        description:
          "Important Questionnaires to help assist your medical treatement.",
        link: "/quest"
      }
    ],
    [
      {
        title: "Symptom Logs",
        image: sympImg,
        description:
          "Log information about your recent symptoms to give doctors more information about your wellbeing.",
        link: "/symptoms"
      },
      {
        title: "Calendar",
        image: calImg,
        description: "Input and organise all of your upcoming appointments",
        link: "/calendar"
      }
    ]
  ];
  return (
    <IonPage>
      <IonContent>
          <IonHeader class="ion-no-border" collapse="condense" translucent>
            <IonToolbar>
            <IonTitle class="ion-text-center">
            <IonIcon className="header" color="nhsblue" icon={peopleCircleOutline} />
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          {cardContent.map((content, idx) => (
            <IonRow key={idx}>
              {content.map((c, idx) => (
                <QuadCard
                  key={idx}
                  title={c.title}
                  image={c.image}
                  link={c.link}
                  history={history}
                />
              ))}
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DocPatient;
