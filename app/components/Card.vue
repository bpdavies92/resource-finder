<template>
    <v-card>
        <v-img
        src="https://images.unsplash.com/photo-1755289445750-71c381bfc8e4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        cover
        max-height="150"
        >
        </v-img>
        <v-card-title>
            <slot name="title"></slot>
        </v-card-title>
        <v-card-text>
            <slot name="description"></slot>
        </v-card-text>
        <v-card-actions>
            <v-btn  text="Learn more"></v-btn>
        </v-card-actions>
    </v-card>
</template>