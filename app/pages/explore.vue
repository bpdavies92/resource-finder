<template>

    <v-container>
     
        <v-text-field
            placeholder="Label"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            rounded="rounded pill"
        ></v-text-field>

        <v-row>
            <v-col cols="12" md="3">
                
                <v-sheet class="position-sticky top-0" height="min-content">
                    <v-menu
                    :transition="false"
                    v-model="menuOpenClose"
                    :close-on-content-click="false"
                    close-delay="false"
                    open-on-click="true"
                    no-click-animation="false"
                    persistent
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn
                        :append-icon="menuOpenClose === false ? 'mdi-arrow-down' : 'mdi-arrow-up'"
                        active-color="#303030"
                        color="#303030"
                        v-bind="props"
                        class="rounded-xl justify-space-between"
                        :class="{'rounded-b-0': menuOpenClose}"
                        block
                        size="x-large"
                        >
                        Course Principles
                        </v-btn>
                    </template>
                        <v-list class="rounded-t-0"  border="primaryBlack opacity-100 lg">
                            <v-list-item v-for="(f, i) in filters.coursePrinciples" :index="i" color="#303030" >
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
                    </v-menu>
                
                </v-sheet>
                
            </v-col>
            <v-col cols="12" md="9">
                <v-row >
                    <!-- {{ tag.principles[0] }} -->
                    <v-col cols="12" sm="6" v-for="(value, index) in resources">
                        <v-sheet >
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

    const menuOpenClose = ref(false)

    const filters  = useMyFilterStore()

    console.log('filters', filters.coursePrinciples)


    const tag = ref('?filter[principles]=course%20identity')

    const { data: resources } = await useFetch(`/api/resources${tag}`)


</script>