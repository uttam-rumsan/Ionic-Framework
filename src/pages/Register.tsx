import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonIcon,
  IonButtons,
  IonCol,
  IonBackButton,
  useIonRouter,
  IonRow,
  IonGrid,
} from "@ionic/react";

import React, { useState } from "react";
import { personCircleOutline } from "ionicons/icons";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
};

const Register: React.FC = () => {
  const router = useIonRouter();

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("====================================");
    console.log("register operation here");
    console.log(formData);
    console.log("====================================");
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Nepali Song chords</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <form onSubmit={handleFormSubmit}>
                    <IonInput
                      mode="md"
                      name="name"
                      fill="outline"
                      labelPlacement="floating"
                      label="Full Name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onIonChange={handleInputChange}
                    />
                    <IonInput
                      className="ion-margin-top"
                      mode="md"
                      name="email"
                      fill="outline"
                      labelPlacement="floating"
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onIonChange={handleInputChange}
                    />
                    <IonInput
                      mode="md"
                      name="phone"
                      className="ion-margin-top"
                      fill="outline"
                      labelPlacement="floating"
                      label="Phone Number"
                      type="tel"
                      placeholder="Enter your Phone"
                      value={formData.phone}
                      onIonChange={handleInputChange}
                    />
                    <IonButton
                      expand="block"
                      className="ion-margin-top"
                      color="secondary"
                      type="submit"
                    >
                      Register <IonIcon icon={personCircleOutline} slot="end" />
                    </IonButton>{" "}
                  </form>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
