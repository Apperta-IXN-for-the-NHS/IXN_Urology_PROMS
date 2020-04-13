import React from "react";
import { IonChip, IonIcon, IonLabel, IonSlides } from "@ionic/react";

interface TabProps {
  label: string;
  icon: string;
  color: string;
  setTab(name: any): void;
}

const Tab: React.FC<TabProps> = ({ label, icon, color, setTab }) => {
  const [outline, setOutline] = React.useState(true);
  const handleOutline = () => setOutline(!outline);
  return (
    <IonChip color={color} outline={outline} onClick={() => setTab(label)} onSelect={handleOutline}>
      <IonLabel>{label}</IonLabel>
      <IonIcon icon={icon} />
    </IonChip>
  );
};

export default Tab;