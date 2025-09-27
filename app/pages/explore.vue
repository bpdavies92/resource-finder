<template>
  <v-container>
    <v-text-field
      placeholder="Label"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      rounded="rounded pill"
    ></v-text-field>

    <v-btn @click="filters.uncheckAllFilters">
      Uncheck all filters
    </v-btn>

    <v-row>
      <v-col cols="12" md="3">
        <!---------------------------------------->
        <!-- Course Principles filters -->
        <!---------------------------------------->
        <v-sheet  class="position-sticky top-0" height="min-content">
            <v-expansion-panels
            v-model="menuOpenClose[0]"
            multiple
            height="min-content" 
            class="mb-6"
            >
                <v-expansion-panel
                    class="rounded-xl"
                    min-height="3.5rem"
                
                >
                 <v-expansion-panel-title  bg-color="brightBlue"  color="brightBlue" expand-icon="mdi-menu-down">
                Course Principles
                </v-expansion-panel-title >
                <v-expansion-panel-text>
                    <v-list class="ma-0 pa-0">
                    <v-list-item
                        class="ma-0 pa-0"
                        v-for="(f, i) in filters.coursePrinciples"
                        :index="i"
                        color="#303030"
                    >
                        <v-list-title>
                        <v-checkbox
                            v-model="f.status"
                            color="red"
                            :label="f.filter"
                            hide-details
                        ></v-checkbox>
                        </v-list-title>
                    </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
   

        <!---------------------------------------->
        <!-- Topics filters -->
        <!---------------------------------------->

            <v-expansion-panels
            v-model="menuOpenClose[1]"
            multiple
            class="position-sticky top-0" height="min-content" 
            
            >

                <v-expansion-panel
                    class="rounded-xl"
                    min-height="3.5rem"
                
                >
                 <v-expansion-panel-title  bg-color="brightBlue"  color="brightBlue" expand-icon="mdi-menu-down">
                Topics
                </v-expansion-panel-title >
                <v-expansion-panel-text>
                    <v-list class="ma-0 pa-0">
                    <v-list-item
                        class="ma-0 pa-0"
                        v-for="(f, i) in filters.topics"
                        :index="i"
                        color="#303030"
                    >
                        <v-list-title>
                        <v-checkbox
                            v-model="f.status"
                            color="red"
                            :label="f.filter"
                            hide-details
                        ></v-checkbox>
                        </v-list-title>
                    </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="9">
        <v-row>
          <!-- {{ tag.principles[0] }} -->
          <v-col
            cols="12"
            sm="6"
            v-for="(value, index) in filters.resources"
          >
            <v-sheet>
              <Card>
                <template v-slot:title>
                  {{ value.title }}
                </template>

                <template v-slot:description>
                  {{ value.description }}
                </template>
              </Card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const menuOpenClose = ref([false, false])
const filters = useMyFilterStore()

// filters.fetchResources()
// await callOnce('resouces', () => filters.fetchResources())
// console.log('filters', filters.coursePrinciples)
// const tag = ref('?filter[principles]=course%20identity')
// console.log('ALL DATA', resources)
</script>


<style lang="scss" scoped>
  .v-expansion-panel-title,  .v-expansion-panel-text {
    transition: none !important;
  }
  .v-expansion-panel-text__wrapper {
    padding: 0 !important; 
  }
</style>