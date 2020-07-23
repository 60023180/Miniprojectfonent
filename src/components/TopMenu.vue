<template>
    <v-toolbar
            color="red"
            dark
    >
        <v-toolbar-title class="font-weight-black display-1" @click="$router.push({name : 'Home'})">
            <v-icon x-large color="grey darken-3">
                mdi-brain
            </v-icon>CRAM SCHOOL</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text @click="$router.push({name : 'Home'})">
                Home
            </v-btn>

            <v-divider vertical></v-divider>
            <v-btn text @click="$router.push({name : 'Add course'})">
                Add course
            </v-btn>

            <v-divider vertical></v-divider>

            <v-btn text @click="$router.push({name : 'Add student'})">
                Add student
            </v-btn>

            <v-divider vertical></v-divider>

            <v-btn text @click="$router.push({name : 'Login'})" class="ml-5">
                Logout
            </v-btn>


        </v-toolbar-items>


    </v-toolbar>

</template>

<script>
    export default {
        name: "TopMenu"
    }

</script>