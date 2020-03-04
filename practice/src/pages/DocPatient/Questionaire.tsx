import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonItem,
  IonRadioGroup,
  IonRadio,
  IonListHeader,
  IonList,
  IonLabel,
  IonIcon,
  IonContent,
  IonCardTitle,
  IonSlides,
  IonSlide
} from "@ionic/react";

import { arrowForwardCircleSharp } from "ionicons/icons";
import { queryHelpers } from "@testing-library/react";

interface TitleCardProps {
  title: string;
  desc: string;
  link: string;
  history: any;
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  desc,
  link,
  history
}) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {desc}
        <br />
        <br />
        <IonButton
          size="small"
          fill="outline"
          onClick={e => {
            e.preventDefault();
            history.push(link);
          }}
        >
          Take Questionaire
          {/* <IonIcon icon={arrowForwardCircleSharp}></IonIcon> */}
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

interface QuestionnairePageProps {
  questions: String[];
  title: string;
}

export const QuestionairePage: React.FC<QuestionnairePageProps> = ({
  questions,
  title
}) => {
  const qstns = [
    "How badly are you suffering from X",
    "How badly are you suffering from Y",
    "How badly are you suffering from Z"
  ];
  const options = [
    "Not at all",
    "Less than 1 time in 5",
    "More than half the time",
    "Less than half the time",
    "Almost always"
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Questionaires</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2 className="ion-text-center">IPSS Questionaire</h2>
        <IonSlides pager={true} ref={r => r?.slideNext}>
          {qstns.map((info, index) => (
            <IonSlide>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{info}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonRadioGroup>
                    {/* <IonListHeader>
                      <IonLabel>{info}</IonLabel>
                    </IonListHeader> */}
                    {options.map((val, index) => (
                      <IonItem>
                        <IonLabel>{val}</IonLabel>
                        <IonRadio value={val} />
                      </IonItem>
                    ))}
                  </IonRadioGroup>
                </IonCardContent>
              </IonCard>
            </IonSlide> 
          ))}
          {/* <IonButton onClick={(r) => {r.slideNext}}></IonButton>  */}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

interface QuestionaireProps {
  history: any;
}

const Questionaire: React.FC<QuestionaireProps> = ({ history }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Questionaires</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <TitleCard
          history={history}
          title="IPSS"
          desc="This questionnaire conatins important info regarding prostate cancer diagnosis"
          link="/ipss"
        ></TitleCard>
      </IonContent>
    </IonPage>
  );
};

export default Questionaire;
