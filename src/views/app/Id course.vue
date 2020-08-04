<template>
    <v-data-table
            :headers="headers"
            :items="desserts"
            sort-by="name"
            class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title class="display-1 font-weight-black">Course</v-toolbar-title>

                <v-dialog v-model="dialog" max-width="500px">
                    <v-card>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.course_id" label="Course Id"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">

                                        <v-menu
                                                ref="menu"
                                                v-model="menu"
                                                :close-on-content-click="false"
                                                :return-value.sync="date"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="290px"
                                        >
                                            <template v-slot:activator="{ on, attrs }" >
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
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.teacher_name" label="Teacher name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select
                                                v-model="editedItem.course_status"
                                                :items="items"
                                                label=""
                                                placeholder="Course Status"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="red" text @click="close">Cancel</v-btn>
                            <v-btn color="red" text @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                    small
                    @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
        </template>

    </v-data-table>
</template>

<script>
    export default {
        name: "Course",
        data: () => ({
            items: ['Available', 'Unavailable'],
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            dialog: false,
            headers: [
                {
                    text: 'Course ID',
                    align: 'start',
                    sortable: false,
                    value: 'course_id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Teaching period', value: 'teaching_period' },
                { text: 'Teacher name', value: 'teacher_name' },
                { text: 'Course status', value: 'course_status' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                course_id: '',
                name: 0,
                teaching_period: 0,
                teacher_name: 0,
                course_status: 0,
            },
            defaultItem: {
                course_id: '',
                name: 0,
                teaching_period: 0,
                teacher_name: 0,
                course_status: 0,
            },
        }),


        watch: {
            dialog (val) {
                val || this.close()
            },
        },

        created () {
            this.initialize()
        },

        methods: {
            initialize () {
                this.desserts = [
                    {
                        course_id: 'EN555',
                        name: 'English',
                        teaching_period: '2020/07/23',
                        teacher_name: 'คุณครูไวน์',
                        course_status: 'Available',
                    },
                    {
                        course_id: 'TH555',
                        name: 'Thai',
                        teaching_period: '2020/07/23',
                        teacher_name: 'คุณครูทราย',
                        course_status: 'Available',
                    },
                    {
                        course_id: '1',
                        name: 'Thai',
                        teaching_period: '2020/07/29',
                        teacher_name: 'คุณครูMama',
                        course_status: 'Available',
                    }
                ]
            },

            editItem (item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this?') && this.desserts.splice(index, 1)
            },

            close () {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            },
        },
    }
</script>