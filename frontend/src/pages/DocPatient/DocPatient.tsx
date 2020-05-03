import React, { useContext } from "react";
import UserContext from "../../utils/store";
import {
  IonHeader,
  IonPage,
  IonToolbar,
  IonItem,
  IonList,
  IonCard,
  IonContent,
  IonIcon,
  IonCardContent,
} from "@ionic/react";
import { mail, flask, barChart, reader } from "ionicons/icons";

import "./DocPatient.css";

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
        <h2 className="ion-text-center">{title}</h2>
        <IonIcon slot="end" icon={image} color="white" />
      </IonItem>
      <IonCardContent>
        <p>{description}</p>
      </IonCardContent>
    </IonCard>
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
          <IonList key={index}>
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
      </IonContent>
    </IonPage>
  );
};

export default DocPatient;
