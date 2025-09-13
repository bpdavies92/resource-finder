<template>
    <v-container>
        <v-sheet class="d-flex mb-12 mt-12">
            <v-row>
                <v-col cols="12" sm="12" md="4">
                    <CoursePrincipleBlocks :image="'https://plus.unsplash.com/premium_vector-1756823207842-d9e93f8c08db?q=80&w=2860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'">
                        <template v-slot:principle>Student dfadfa</template>
                    </CoursePrincipleBlocks>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <CoursePrincipleBlocks :image="'https://plus.unsplash.com/premium_vector-1756823207842-d9e93f8c08db?q=80&w=2860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'">
                        <template v-slot:principle>dfadf adfa</template>
                    </CoursePrincipleBlocks>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <CoursePrincipleBlocks :image="'https://plus.unsplash.com/premium_vector-1756823207842-d9e93f8c08db?q=80&w=2860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'">
                        <template v-slot:principle>dfadf adfa</template>
                    </CoursePrincipleBlocks>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <CoursePrincipleBlocks :image="'https://plus.unsplash.com/premium_vector-1756823207842-d9e93f8c08db?q=80&w=2860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'">
                        <template v-slot:principle>dfadf adfa</template>
                    </CoursePrincipleBlocks>
                </v-col>
            </v-row>
        </v-sheet>

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
                                    <v-list-title>

                                    </v-list-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-sheet>
            </v-col>
            <v-col cols="12" md="9">
                <v-row >
                    <v-col cols="12" sm="6" v-for="(value, index) in resourceList">
                        <v-sheet >
                            <Card>
                                <template v-slot:title>
                                    {{ value.title }}
                                </template>

                                <template v-slot:description>
                                    {{ value.description[0] }}
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

    const { resourceList } = useResources()


</script>