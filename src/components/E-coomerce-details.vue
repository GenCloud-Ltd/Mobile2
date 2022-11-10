<template>
  <div class="row justify-center q-mt-sm">
    <b>{{ props.row.name }}</b>
  </div>

  <q-card class="row justify-center q-ma-md q-pa-md">
    <q-card-section class="q-pa-sm">
      <b>Група</b>
      <q-input v-model="articleGroup" label="Моя група" dense outlined>
        <template v-slot:append>
          <q-btn icon="inventory_2" color="blue-5" round size="sm"/>
        </template>
      </q-input>
      </q-card-section>
      <q-card-section  class="q-pa-sm">
        <b>Артикул</b>
      <q-input v-model="article" :label="props.row.name" dense outlined>
        <template v-slot:append>
          <q-btn icon="hdr_strong" color="blue-5" round size="sm"/>
        </template>
      </q-input>
    </q-card-section>
  </q-card>

  <q-separator spaced/>
  
  <q-card class="row justify-center q-ma-md q-pa-md">
    <i>Показване в Уеб</i>
    <q-card-section class="q-pa-sm">
      <b>Web име</b>
      <q-input v-model="webName" label="Дълго Web име" dense outlined />        
    </q-card-section>
    <q-card-section class="q-pa-sm">
      <b>Web описание</b>
      <q-input v-model="webDescr" type="textarea" dense outlined style="width:194px"/>
    </q-card-section>
  </q-card>

  <q-separator spaced/>

  <div class="q-ma-md q-pa-sm rounded-borders shadow-2">
    <q-option-group v-model="group" :options="options" type="checkbox"/>
  </div>

  <q-separator spaced/>

  Характеристики
</template>

<script setup>
  import { ref     } from 'vue';
  import { options } from './TableData';

  const props = defineProps(['row']);

  const articleGroup = ref('');
  const article      = ref('');
  const webName      = ref('');
  const webDescr     = ref('');
  const group        = ref(['isInWeb', 'isActive']);

  

</script>