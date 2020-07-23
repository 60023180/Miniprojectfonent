<template>
<div>
    <div class="text-center">
        <p class="display-1 font-weight-black"><v-icon x-large color="blue-grey darken-1" style="font-size:30px">
            mdi-account-group
        </v-icon>
            Add Student
        </p>
    </div>
    <div class="d-flex justify-center" >
        <v-card width="500" elevation="0">
            <v-col >
                <v-text-field
                        label="Student ID"
                        single-line
                ></v-text-field>
                <v-select
                        :items="items"
                        label=""
                        placeholder="choose course"
                ></v-select>
                <v-text-field
                        label="Name"
                        single-line
                ></v-text-field>
                <v-textarea
                        name="input-7-4"
                        label="Address"
                ></v-textarea>
                <v-text-field
                        label="Contact Details"
                        single-line
                ></v-text-field>
                <v-text-field
                        label="Parent Contact"
                        single-line
                ></v-text-field>
                <div class="text-center">
                    <v-btn color="red" dark @click="$router.push({name : 'Id student'})">confirm</v-btn>
                </div>

            </v-col>

        </v-card>
    </div>
</div>
</template>

<script>
    export default {
        name: "Add student",
        data: () => ({
            items: ['EN124', 'TH555'],
        }),
        data1: () => ({
            date: new Date().toISOString().substr(0, 10),
            menu: false,

        }),

    }
</script>

<style scoped>
</style>