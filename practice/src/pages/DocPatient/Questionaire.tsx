import React, { useState, useContext, useCallback } from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToast,
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
  IonSlide,
  IonCardSubtitle,
  IonText,
  IonFooter,
  NavContext,
} from "@ionic/react";
import { arrowForwardCircleSharp } from "ionicons/icons";
import { Cards } from "./QuestionnaireInfo";
import { ReactComponent } from "*.svg";
import { Redirect } from "react-router";

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
  history,
}) => {
  const style = {
    borderRadius: 0,
  };
  return (
    <IonCard color="primary" style={style}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <br/>
        <IonCardSubtitle>Previous Completion: </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        {desc}
        <br />
        <br />
        <IonButton
          size="small"
          fill="outline"
          color="secondary"
          onClick={(e) => {
            e.preventDefault();
            history.push(link);
          }}
        >
          Take Questionaire
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

interface Content {
  title: string;
  questions: { heading: string; question: string }[];
  answers: string[][];
}

interface QuestionnairePageProps {
  contentArray: Content[];
}

interface QuestionProps {
  info: Content;
  question: { heading: string; question: string };
  index: number;
  answers: number[];
  setAnswers(answers: number[]): void;
}

const Question: React.FC<QuestionProps> = ({
  info,
  question,
  index,
  answers,
  setAnswers,
}) => {
  const numQuestions = info.questions.length;
  const [selected, setSelected] = useState<number>();
  const updateScore = (index: number, detailValue: number) => {
    console.log(detailValue);
    answers[index] = detailValue;
    setSelected(detailValue);
    setAnswers(answers);
  };
  return (
    <React.Fragment>
      <IonSlide>
        <IonCard color="primary">
          <IonCardHeader>
            <IonCardTitle>{question.heading}</IonCardTitle>
            <IonCardTitle>{<h3>{question.question}</h3>}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonRadioGroup
              value={selected}
              onIonChange={(e) => updateScore(index, e.detail.value)}
            >
              {info.answers[index].map((ans, index) => (
                <IonItem>
                  <IonLabel>{ans}</IonLabel>
                  <IonRadio value={index} />
                </IonItem>
              ))}
            </IonRadioGroup>
          </IonCardContent>
        </IonCard>
        {/* {/* {`Selected: ${selected}`} */}
        <br />
        {/* {`Current Index ${index}`} */}
        {/* {`Current answers ${answers}`} */}
      </IonSlide>
      {/* {index === numQuestions - 1 ? "final question" : "still got left"} */}
    </React.Fragment>
  );
};

export const QuestionairePage: React.FC<QuestionnairePageProps> = ({
  contentArray,
}) => {
  const buttonStyle = {
    fontSize: "large",
    paddingLeft: "14px",
    paddingRight: "14px",
  };
  const initialAnswers = contentArray[0].questions.map(() => 0);
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>(initialAnswers);
  const [final, setFinal] = useState(false);
  const [showToast, setToast] = useState(false);
  const { navigate } = useContext(NavContext);
  const redirect = useCallback(() => navigate("/quest", "back"), [
    navigate,
  ]);
  const handleComplete = () => {
    setToast(true);
    redirect();
  };
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
      {contentArray.map((info, index) => (
        <IonContent>
          <h2 className="ion-text-center">{info.title}</h2>
          <IonSlides
            pager={false}
            onIonSlideReachEnd={() => setFinal(true)}
            onClick={() => console.log(answers)}
          >
            {info.questions.map((question, index) => (
              <React.Fragment>
                <Question
                  question={question}
                  info={info}
                  index={index}
                  setAnswers={setAnswers}
                  answers={answers}
                />
              </React.Fragment>
            ))}
          </IonSlides>
          <IonButton
            style={buttonStyle}
            color="tertiary"
            onClick={() => setToast(true)}
            expand="full"
            disabled={!final}
          >
            Submit
          </IonButton>
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => redirect()}
            color="medium"
            position="middle"
            message="Questionnaire Completed Successfully"
            duration={500}
          />
        </IonContent>
      ))}
      {/* {console.log(answers)} */}
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
