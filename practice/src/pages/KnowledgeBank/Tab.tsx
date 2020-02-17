import React from "react";
import { IonSegmentButton, IonIcon } from "@ionic/react";
interface TabProps {
  label: string;
  icon: any;
}

const Tab: React.FC<TabProps> = ({ label, icon }) => {
  return (
    <IonSegmentButton value={label} color="pimary">
      <IonIcon icon={icon} />
    </IonSegmentButton>
  );
};

export default Tab;
