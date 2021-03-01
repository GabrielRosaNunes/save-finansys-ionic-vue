<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="relatorio" href="/tabs/relatorio">
          <ion-icon :icon="analyticsOutline" />
          <ion-label>Relatório</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="ganhos" href="/tabs/ganhos">
          <ion-icon :icon="logoUsd" />
          <ion-label>Ganhos</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="despesas" href="/tabs/despesas">
          <ion-icon :icon="arrowDown" />
          <ion-label>Despesas</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { analyticsOutline,logoUsd,arrowDown } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      analyticsOutline,
      logoUsd,
      arrowDown
    }
  }
}
</script>