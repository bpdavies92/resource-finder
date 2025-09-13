<template>
    <v-container>
        <v-text-field
        placeholder="Label"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        rounded="rounded pill"
        
        ></v-text-field>
        <v-row>
            <v-col cols="12" md="4">
                <v-sheet class="position-sticky top-0" height="min-content">
                    <v-menu
                    transition="fade-transition"
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
                        class="rounded-xl"
                        :class="{'rounded-b-0': menuOpenClose}"
                        block
                        size="x-large"
                        >
                        Menu
                        </v-btn>
                    </template>
                        <v-list class="rounded-xl" :class="{'rounded-t-0': menuOpenClose}" border="primaryBlack opacity-100 lg">
                            <v-list-item color="#303030" v-for="(a, index) in testArry" :key="index">
                                    <v-list-title>{{ a }}</v-list-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-sheet>
            </v-col>
            <v-col cols="12" md="8">
                <v-row >
                    <v-col cols="12" sm="6" v-for="value in 50">
                        <v-sheet >
                            <Card/>
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

    const { resourceList } = useResources()


</script>