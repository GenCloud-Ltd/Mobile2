<template>
  <q-layout view="hHh lpR lFr">

    <q-header elevated class="bg-secondary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="/img/BizzioLogo.svg">
          </q-avatar>
          Bizzio Mobile
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" mini-to-overlay :mini="miniState" :breakpoint="500" bordered class="bg-grey-3" @mouseover="miniState = false" @mouseout="miniState = true">  
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-expansion-item expand-separator icon="articles" label="Номенклатури" caption="Артикули, Х-ки и др.">
            <q-expansion-item :header-inset-level="1"  icon="inventory_2" label="Артикулни групи"   hide-expand-icon/>
            <q-expansion-item :header-inset-level="1"  icon="hdr_strong"  label="Артикули"          hide-expand-icon/>
            <q-expansion-item :header-inset-level="1"  icon="people_alt"  label="Партньори">
              <q-expansion-item :header-inset-level="2" icon="person"          label="Клиенти"    hide-expand-icon />
              <q-expansion-item :header-inset-level="2" icon="person_4"        label="Служители"  hide-expand-icon />
              <q-expansion-item :header-inset-level="2" icon="sentiment_satisfied"     label="Агенти"     hide-expand-icon />
              <q-expansion-item :header-inset-level="2" icon="delivery_dining" label="Доставчици" hide-expand-icon />              
            </q-expansion-item>
          </q-expansion-item>

          <q-expansion-item expand-separator icon="shopping_basket" label="Търговия" caption="Продажби, Оферти и др.">
            <q-expansion-item :header-inset-level="1"  icon="local_mall"  label="Продажби"       hide-expand-icon/>
            <q-expansion-item :header-inset-level="1"  icon="sell"        label="Оферти от нас"  hide-expand-icon/>
            <q-expansion-item :header-inset-level="1"  icon="assignment"  label="Фактури от нас" hide-expand-icon/>
          </q-expansion-item>


          <q-item clickable v-ripple>
            <q-item-section avatar><q-icon name="event" /></q-item-section>
            <q-item-section>Органайзър</q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="isEcommerce = !isEcommerce">
            <q-item-section avatar><q-icon name="storefront" /></q-item-section>
            <q-item-section>E-commerce</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar><q-icon name="settings_suggest" /></q-item-section>
            <q-item-section>Администриране</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer v-if="curRow" v-model="rightDrawerOpen" side="right" bordered class="bg-grey-2" overlay>
      <EcommerceDetails :row="curRow"/>
    </q-drawer>

    <q-page-container>
      <Ecommerce v-if="isEcommerce" @onRowClick="OnRowClick($event)"/>
    </q-page-container>

  </q-layout>
</template>


<script setup>
  import { ref }          from 'vue';
  import Ecommerce        from './components/E-commerce.vue';
  import EcommerceDetails from './components/E-coomerce-details.vue';

  const leftDrawerOpen  = ref(true);
  const rightDrawerOpen = ref(false);
  const miniState       = ref(true);
  const isEcommerce     = ref(true);
  const curRow          = ref(null);
  

  function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }

  function toggleRightDrawer() {
    rightDrawerOpen.value = !rightDrawerOpen.value;
  }

  function OnRowClick(row) {
    rightDrawerOpen.value = true;      
    curRow.value = row; 
  }
  
</script>

<style scoped>

</style>
