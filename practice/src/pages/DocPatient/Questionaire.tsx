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
import { Cards } from "./QuestionnaireInfo";

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

interface Content {
  title: string;
  questions: string[];
  answers: string[][];
}

interface QuestionnairePageProps {
  // title: string;
  contentArray: Content[];
}

export const QuestionairePage: React.FC<QuestionnairePageProps> = ({
  contentArray
}) => {
  // const qstns = [
  //   "How badly are you suffering from X",
  //   "How badly are you suffering from Y",
  //   "How badly are you suffering from Z"
  // ];
  // const answers = [
  //   "Not at all",
  //   "Less than 1 time in 5",
  //   "More than half the time",
  //   "Less than half the time",
  //   "Almost always"
  // ];
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
        <h2 className="ion-text-center">Hi</h2>
        <IonSlides pager={false} ref={r => r?.slideNext}>
          {contentArray.map((info, index) => (
            <IonSlide>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{info.questions}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonRadioGroup>
                    {info.answers.map((val, index) => (
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
        {Cards.map((cardInfo, index) => (
          <TitleCard
            history={history}
            title={cardInfo.cardTitle}
            desc={cardInfo.cardDesc}
            link={cardInfo.link}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Questionaire;
