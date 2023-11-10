import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import MapboxComponent from "../components/map";
import 'mapbox-gl/dist/mapbox-gl.css';


const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"><MapboxComponent/></IonContent>
    </IonPage>
  );
};

export default Menu;
