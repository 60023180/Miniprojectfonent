<template>
    <div>
        <div class="text-center"><br>
            <p class="display-1 font-weight-black"> <br><v-icon x-large color="blue-grey darken-1" style="font-size:30px">
                mdi-book-open-variant
            </v-icon>
                Add Coures
            </p>
        </div>
        <div class="d-flex justify-center" >
            <v-card width="500" elevation="0">
                <v-col >
                    <v-text-field
                            label="Course ID"
                            single-line
                    ></v-text-field>
                    <v-text-field
                            label="Course Name"
                            single-line
                    ></v-text-field>
                    <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                        v-model="date"
                                        label="Teaching Period"
                                        prepend-icon=""
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="red" @click="menu = false">Cancel</v-btn>
                                <v-btn text color="red" @click="$refs.menu.save(date)">OK</v-btn>
                            </v-date-picker>
                    </v-menu>

                    <v-text-field
                            label="Teacher name"
                            single-line
                    ></v-text-field>
                    <v-select
                            :items="items"
                            label=""
                            placeholder="Course Status"
                    ></v-select>


                </v-col>

                <div class="text-center">
                    <v-btn color="red" dark @click="$router.push({name : 'Id course'})">confirm</v-btn>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add course",
        data: () => ({
            items: ['Available', 'Unavailable'],
        }),
        Data: () => ({
            date: new Date().toISOString().substr(0, 10),
            menu: false,

        }),
    }
</script>

<style scoped>
</style>