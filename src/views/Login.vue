<template>

    <v-app id="inspire">
        <v-main>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="red"
                                    dark
                                    flat
                            >
                                <v-toolbar-title  class="font-weight-black"><v-icon x-large color="grey darken-3">
                                    mdi-brain</v-icon>CRAM SCHOOL</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-tooltip bottom>
                                </v-tooltip>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="Login"
                                            name="login"
                                            prepend-icon="mdi-account"
                                            type="username"
                                    ></v-text-field>

                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            prepend-icon="mdi-lock"
                                            type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="red" dark @click="$router.push({name : 'Home'})">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>

</template>

<script>
    export default {
        name : "Login",
        data : () => ({

        }),
        methods : {

        }
    }

</script>

<style scoped>


</style>