import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonImg,
} from "@ionic/react";
import "./Support.css";
import { SupportCardList } from "../../components/common/CardList";
import { SupportInfo } from "./Info";
import ProstateUK from "../../assets/images/ProstateUK.jpeg";
import tackle from "../../assets/images/tackleProstateCancer.jpeg";
import macmillan from "../../assets/images/macmillan.jpg";

interface SupportLinkProps {
  imgSrc: string;
  link: string;
  title: string;
  description: string;
}

const SupportLink: React.FC<SupportLinkProps> = ({
  imgSrc,
  link,
  title,
  description,
}) => {
  return (
    <IonItem detail>
      <IonThumbnail slot="start">
        <IonImg src={imgSrc}></IonImg>
      </IonThumbnail>
      <IonLabel>
        <a href={link} style={{ textDecoration: "none" }}>
          <h1>{title}</h1>
        </a>
        <p>{description}</p>
      </IonLabel>
    </IonItem>
  );
};

const Support: React.FC = () => {
  const supportLinks = [
    {
      link: "https://prostatecanceruk.org/get-support/support-groups",
      title: "Prostate UK",
      imgSrc: ProstateUK,
      description:
        "We want to stop prostate cancer being a killer. We fund groundbreaking research, drive improvements in treatment, and fight injustice in care.",
    },
    {
      link: "https://www.tackleprostate.org/",
      title: "Tackle Prostate Cancer",
      imgSrc: tackle,
      description:
        "Tackle Prostate Cancer is a leading charity tackling the real issues people face when they are diagnosed with prostate cancer, and helping people to cope with.",
    },
    {
      link: "https://www.macmillan.org.uk/",
      title: "MacMillan",
      imgSrc: macmillan,
      description:
        "Whatever cancer throws your way, we're right there with you. We provide physical, emotional and financial support to help you live life as fully as you can.",
    },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Support</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 className="title">Key Topics</h1>
        <SupportCardList infoArray={SupportInfo} />
        <h1 className="title">Support Group Links</h1>
        <IonList>
          {supportLinks.map((info, index) => (
            <SupportLink
              key={index}
              title={info.title}
              imgSrc={info.imgSrc}
              link={info.link}
              description={info.description}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Support;
