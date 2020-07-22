<template>
    <v-toolbar
            color="red"
            dark
    >
        <v-toolbar-title class="font-weight-black">Cram School</v-toolbar-title>

        <v-divider
                class="mx-4"
                vertical
        ></v-divider>

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

            <v-btn text @click="$router.push({name : 'Login'})">
                Logout
            </v-btn>

            <v-divider vertical></v-divider>
        </v-toolbar-items>


    </v-toolbar>

</template>

<script>
    export default {
        name: "TopMenu"
    }

</script>