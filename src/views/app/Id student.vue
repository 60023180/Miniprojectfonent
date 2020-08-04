<template>
    <v-data-table
            :headers="headers"
            :items="desserts"
            sort-by="name"
            class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title class="display-1 font-weight-black">Student</v-toolbar-title>

                <v-dialog v-model="dialog" max-width="500px">
                    <v-card>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.student_id" label="Student ID"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select
                                                :items="items"
                                                v-model="editedItem.course_id"
                                                label="course_id"
                                                placeholder=""
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-textarea
                                                name="input-7-4"
                                                label="Address"
                                                v-model="editedItem.address"
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.contact_details" label="Contact Details"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.parent_contact" label="Parent Contact"></v-text-field>
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
        name: "Student",
        data: () => ({
            items: ['EN124', 'TH555'],
            dialog: false,
            headers: [
                {
                    text: 'Student ID',
                    align: 'start',
                    sortable: false,
                    value: 'student_id',
                },
                { text: 'Course ID', value: 'course_id' },
                { text: 'Name', value: 'name' },
                { text: 'Address', value: 'address' },
                { text: 'Contact Details', value: 'contact_details' },
                { text: 'Parent Contact', value: 'parent_contact' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                student_id: '',
                course_id: 0,
                name: 0,
                address: 0,
                contact_details: 0,
                parent_contact: 0,
            },
            defaultItem: {
                student_id: '',
                course_id: 0,
                name: 0,
                address: 0,
                contact_details: 0,
                parent_contact: 0,
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
                        student_id: '001',
                        course_id: 'EN555',
                        name: 'บูม',
                        address: '-',
                        contact_details: '0634567842',
                        parent_contact: 'พ่อ แหลมแท้',
                    },
                    {
                        student_id: '002',
                        course_id: 'TH555',
                        name: 'เตย',
                        address: '-',
                        contact_details: '064857328',
                        parent_contact: 'แม่ ประวงค์',

                    },
                    {
                        student_id: '003',
                        course_id: 'TH555',
                        name: 'ไวน์',
                        address: '-',
                        contact_details: '0987654321',
                        parent_contact: 'พ่อ มาตรศาลา',

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
                confirm('Are you sure you want to delete this') && this.desserts.splice(index, 1)
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