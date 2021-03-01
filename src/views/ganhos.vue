<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ganhos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="something in [1,2,3,4,5,6,7,8,9]" :key="something">
          <ion-label>
            <ion-text>
              <h1>Teste</h1>
            </ion-text>
            <ion-text>
              <h2>Teste</h2>
            </ion-text>
          </ion-label>
          <ion-label>
            <h1 style="float:right">R$ <b>Teste 2</b></h1>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList,
  IonItem,
  IonLabel,
  IonText
} from '@ionic/vue';

export default  {
  name: 'ganhos',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, 
    IonList,
    IonItem,
    IonLabel,
    IonText
  }
}
</script>