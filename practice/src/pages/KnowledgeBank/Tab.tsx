import React from "react";
import { IonSegmentButton, IonLabel, IonIcon } from "@ionic/react";
interface TabProps {
  label: string;
  icon: any;
}

const Tab: React.FC<TabProps> = ({ label, icon }) => {
  return (
    <IonSegmentButton value={label} color="pimary">
      <IonIcon icon={icon} />
      {/* <IonLabel>{props.label}</IonLabel> */}
    </IonSegmentButton>
  );
};

export default Tab;
