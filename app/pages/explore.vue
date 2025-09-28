<template>
  <v-container>
    <v-text-field
      placeholder="Label"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      rounded="rounded pill"
    ></v-text-field>

    {{filters.filterQuery}}

    {{ params }}



    <v-row>
      <v-col cols="12" md="3">
        <!---------------------------------------->
        <!-- Course Principles filters -->
        <!---------------------------------------->
        <v-sheet class="position-sticky top-0" height="min-content">
          <v-expansion-panels
            v-model="menuOpenClose[0]"
            multiple
            height="min-content"
            class="mb-6"
          >
            <v-expansion-panel class="rounded-xl" min-height="3.5rem" elevation="0">
              <v-expansion-panel-title
                bg-color="brightBlue"
                color="brightBlue"
                expand-icon="mdi-menu-down"
                class="text-h6"
              >
                Course Principles
              </v-expansion-panel-title>

              <v-expansion-panel-text class="border border-lg border-solid border-brightBlue border-opacity-100 rounded-b-xl" >
                <v-list class="ma-0 pa-0">
                  <v-list-item
                    class="ma-0 pa-0"
                    v-for="(f, i) in filters.coursePrinciples"
                    :index="i"
                    color="#303030"
                  >
                      <v-checkbox
                        v-model="f.status"
                        color="brightBlue"
                        :label="f.filter"
                        hide-details
                        @change="buildQueryString('principles', f.filter, f.status)"
                      ></v-checkbox>

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
            class="position-sticky top-0 mb-6"
            height="min-content"
          >
            <v-expansion-panel class="rounded-xl" min-height="3.5rem" elevation="0">
              <v-expansion-panel-title
                bg-color="brightBlue"
                color="brightBlue"
                expand-icon="mdi-menu-down"
                class="text-h6"
              >
                Topics
              </v-expansion-panel-title>

              <v-expansion-panel-text class="border border-lg border-solid border-brightBlue border-opacity-100 rounded-b-xl" >
                <v-list class="ma-0 pa-0">
                  <v-list-item
                    class="ma-0 pa-0"
                    v-for="(f, i) in filters.topics"
                    :index="i"
                    color="#303030"
                  >
                 
                      <v-checkbox
                        v-model="f.status"
                        color="brightBlue"
                        :label="f.filter"
                        hide-details
                        @change="buildQueryString('topics', f.filter, f.status)"
                      ></v-checkbox>
                  
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <!---------------------------------------->
          <!-- Level -->
          <!---------------------------------------->
          <v-expansion-panels
            v-model="menuOpenClose[2]"
            multiple
            class="position-sticky top-0"
            height="min-content"
          >
            <v-expansion-panel class="rounded-xl" min-height="3.5rem" elevation="0">
              <v-expansion-panel-title
                bg-color="brightBlue"
                color="brightBlue"
                expand-icon="mdi-menu-down"
                class="text-h6"
              
              >
                Level
              </v-expansion-panel-title>

              <v-expansion-panel-text class="border border-lg border-solid border-brightBlue border-opacity-100 rounded-b-xl" >
                <v-list class="ma-0 pa-0">
                  <v-list-item
                    class="ma-0 pa-0"
                    v-for="(f, i) in filters.levels"
                    :index="i"
                    color="#303030"
                  >
                   
                      <v-checkbox
                        v-model="f.status"
                        color="brightBlue"
                        :label="f.filter"
                        hide-details
                        @change="buildQueryString('levels', f.filter, f.status)"
                      ></v-checkbox>
                  
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-sheet>

        
      </v-col>

      <v-col cols="12" md="9">
        <v-btn variant="text" @click="filters.uncheckAllFilters">
          Clear filters
        </v-btn>
        <v-row>
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
import { GoToSymbol } from 'vuetify/lib/composables/goto.mjs'



const route = useRoute()
const router = useRouter()
const routeQuery = route.query

const params = new URLSearchParams()


const menuOpenClose = ref([false, false, false])
const filters = useMyFilterStore()

// await callOnce('resouces', () => filters.fetchResources())

const buildQueryString = (tagName, filter, status) => {

    const filterObj = filters.filterQuery

    let queryStringPrinciples = ''
    let queryStringTopics = ''
    let queryStringLevels = ''
    let finalURL = ''

    let index = filterObj[tagName].indexOf(filter)

    /// Check if the filter checkbox is ticked
    if(!filters.filterQuery[tagName].includes(filter)) {
        filterObj[tagName].push(filter)
    } else {
        if(index === -1) return
        /// Remove from array if tag name is present, using index
        filterObj[tagName].splice(index, 1)
    }
    
  // Build query object instead of string
  const query = {};

  if (filterObj['principles'].length > 0) {
    query.principles = filterObj['principles'].join('+');
  }
  if (filterObj['levels'].length > 0) {
    query.levels = filterObj['levels'].join('+');
  }
  if (filterObj['topics'].length > 0) {
    query.topics = filterObj['topics'].join('+');
  }

  // Push query object directly
  router.push({ query });

  console.log(query);

}



</script>

<style lang="scss" scoped>
.v-expansion-panel-title,
.v-expansion-panel-text {
  transition: none !important;
}

.v-expansion-panel-text__wrapper {
  padding: 0 !important;
}
</style>
