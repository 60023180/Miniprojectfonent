<template>
    <v-container>
        <div class="text-center">
            <p class="display-1" >
                <v-icon x-large color="blue-grey darken-1" class="ma-16" style="font-size:180px"  >
                    mdi-book-open-variant
                </v-icon>
                <v-btn color="deep-orange accent-1" dark @click="$router.push({name : 'Id course'})">course</v-btn>
                <br>
                <v-icon x-large color="blue-grey darken-1" class="ma-16" style="font-size:180px">
                    mdi-account-group
                </v-icon>
                <v-btn color="deep-orange accent-1" dark @click="$router.push({name : 'Id student'})">student</v-btn>
            </p>
        </div>

    </v-container>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>