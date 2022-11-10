<template>
   <q-table
      v-model:selected="selected"
      selection="single"
      :rows="rows"
      :columns="columns"
      :filter="filter"      
      :pagination="pagination"
      :rows-per-page-options="[0]"
      virtual-scroll
      :virtual-scroll-sticky-size-start="48"
      row-key="index"
      title="Treats"      
      :separator="separator"      
      bordered
      class="q-ma-sm"
      @row-click="(evt, row, index) => OnRowClick(evt, row, index)"
     >

     <template v-slot:top>  
      <q-btn label="Add row"    color="secondary" icon-right="add_circle"                                         @click="addRow"    />
      <q-btn label="Remove row" color="negative"  icon-right="delete" class="q-ml-sm" :disable="!selected.length" @click="removeRow" />
      <q-space />
      <q-input borderless dense debounce="300" color="primary" v-model="filter">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>

    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
  </q-table>
</template>


<script setup> 
  import { ref }  from 'vue';
  import { seed } from './TableData';
  
  const emit = defineEmits(['onRowClick'])

  const pagination = ref({ sortBy: 'desc', descending: false, page: 1, rowsPerPage: 10 });
  const filter     = ref('');
  const separator  = ref('vertical');
  const selected   = ref([]);
  
  const columns = [
    { name: 'index'   , label: '#'                     , field: 'index'                                                                                                   },
    { name: 'name'    , label: 'Dessert (100g serving)',                    sortable: true, align: 'left', field: row => row.name, format: val => `${val}`, required: true},
    { name: 'calories', label: 'Calories'              , field: 'calories', sortable: true, align: 'center',                                                              },
    { name: 'fat'     , label: 'Fat (g)'               , field: 'fat'     , sortable: true                                                                                },
    { name: 'carbs'   , label: 'Carbs (g)'             , field: 'carbs'                                                                                                   },
    { name: 'protein' , label: 'Protein (g)'           , field: 'protein'                                                                                                 },
    { name: 'sodium'  , label: 'Sodium (mg)'           , field: 'sodium'                                                                                                  },
    { name: 'calcium' , label: 'Calcium (%)'           , field: 'calcium' , sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)                             },
    { name: 'iron'    , label: 'Iron (%)'              , field: 'iron'    , sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)                             }
  ]

  // we generate lots of rows here
  let rows = [];
  for (let i = 0; i < 2; i++) {
    rows = rows.concat(seed.slice(0).map(r => ({ ...r })));
  }
  rows.forEach((row, index) => row.index = index);


  function OnRowClick(evt, row, idx) {
    emit('onRowClick', row);
  }

  function addRow() {
    alert("Row added!")
  }
  

  function removeRow() {
    alert("Row removed!")
  }
   
</script>

<style>
  tr:nth-child(even){
    background-color:rgb(240, 232, 232);
  }  
</style>