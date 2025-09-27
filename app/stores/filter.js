import { defineStore } from 'pinia'


export const useMyFilterStore = defineStore('myFilterStore', {
  
  state: () => ({ 

      resources: [],
      coursePrinciples: [

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
      ],
      topics: [
        {
          filter: 'Assessment',
          status: false
        },
        {
          filter: 'Peer observation', 
          status: false
        },
        {
          filter: 'Active learning', 
          status: false
        },
        {
          filter: 'Teams', 
          status: false
        }
      ],
      levels: [
        {
          filter: 'Beginner', 
          status: false
        }, 
        {
          filter: 'Intermediate', 
          status: false
        }, 
        {
          filter: 'Advanced',
          status: false
        }
      ],
      contentType: [
        {
          filter: 'Workshop', 
          status: false
        }, 
        {
          filter: 'Video', 
          status: false
        }, 
        {
          filter: 'Written', 
          status: false
        }
      ]
   }),
  actions: {
    async fetchResources() {
      this.resources  = await $fetch(`/api/resources`)
      return this.resources
    }, 
    uncheckAllFilters() {
      this.coursePrinciples.forEach((element, index) => {
      element.status = false
    });
      this.topics.forEach((element, index) => {
      element.status = false
    });
    this.levels.forEach((element, index) => {
      element.status = false
    });
    }
  }
})
