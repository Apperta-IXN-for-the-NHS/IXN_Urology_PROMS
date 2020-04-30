import React, { useState, useContext } from "react";
import UserContext from "../../utils/store";
import { getCreds } from "../../utils/store";
import {
  IonHeader,
  IonPage,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonIcon,
  IonCardContent,
} from "@ionic/react";
import { mail, flask, barChart, reader } from "ionicons/icons";

import "./DocPatient.css";
import calImg from "../../assets/images/calendar.png";
import letterImg from "../../assets/images/mail.png";
import quesImg from "../../assets/images/ques.png";
import sympImg from "../../assets/images/symptoms.png";

import { peopleCircleOutline } from "ionicons/icons";

interface QuadProps {
  title: string;
  image: any;
  description: string;
  link: string;
  history: any;
}

const QuadCard: React.FC<QuadProps> = ({
  title,
  image,
  description,
  history,
  link,
}) => {
  return (
    <IonCard color="primary">
      <IonItem
        detail
        lines="full"
        button
        onClick={(e) => {
          e.preventDefault();
          history.push(link);
        }}
      >
        {/* <IonLabel className="ion-text-center">view</IonLabel> */}
        <h2 className='ion-text-center'>{title}</h2>
        <IonIcon slot="end" icon={image} color="white" />
      </IonItem>
      {/* <IonCardHeader>
        <IonCardTitle>
          {title}
        </IonCardTitle>
      </IonCardHeader> */}
      <IonCardContent>
        <p>{description}</p>
      </IonCardContent>
      {/* </IonItem> */}
    </IonCard>
    // <IonCol size="6">
    //   <IonCard
    //     className="doc"
    //     onClick={(e) => {
    //       e.preventDefault();
    //       history.push(link);
    //     }}
    //   >
    //     <IonCardHeader>
    //       <br />
    //       <br />
    //       <img src={image} alt={title} />
    //       <IonCardTitle color="nhswhite" className="ion-text-center">
    //         {<h4>{title}</h4>}
    //       </IonCardTitle>
    //     </IonCardHeader>
    //   </IonCard>
    // </IonCol>
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
        image: mail,
        description:
          "Letters, documents and forms you have received regarding your treatment and diagnosis.",
        link: "/letters",
      },
      {
        title: "Questionnaires",
        image: reader,
        description:
          "Important Questionnaires to help assist your medical treatment.",
        link: "/quest",
      },
      {
        title: "My Medication",
        image: flask,
        description:
          "Log information about your recent symptoms to give doctors more information about your wellbeing.",
        link: "/symptoms",
      },
      {
        title: "Results",
        image: barChart,
        description:
          "View and update results of medical tests you have undertaken ",
        link: "/results",
      },
    ],
  ];
  const padLeft = {
    paddingLeft: "20px",
  };
  const [userInfo, setUserInfo] = useContext(UserContext as any);
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent>
        <h2 style={padLeft}>
          Hello {userInfo.firstName}. <br /> How can we help?
        </h2>
        {cardContent.map((content, index) => (
          <IonList>
            {content.map((c, idx) => (
              <QuadCard
                key={idx}
                title={c.title}
                image={c.image}
                description={c.description}
                link={c.link}
                history={history}
              />
            ))}
          </IonList>
        ))}
        {/* <IonGrid>
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
        </IonGrid> */}
      </IonContent>
    </IonPage>
  );
};

export default DocPatient;
