import { defineStore } from 'pinia'

import { ref } from 'vue'

export const useMyFilterStore = defineStore('myFilterStore', {
  
  state: () => ({ 

      coursePrinciples: ref([

        {
          filter: 'Student Agency', 
          status: false
        }, 
        {
          filter: 'Inclusive Learning',
          status: false 
        }, 
        {
          filter: 'Valid Assessment',
          status: false
        }, 
        {
          filter: 'Effective Teaching and Feedback', 
          status: false
        },
        {
          filter: 'Course Identity',
          status: false
        }, 
        {
          filter: 'Course Coherence', 
          status: false
        }
      ])
   
   }),
  actions: {}
})
