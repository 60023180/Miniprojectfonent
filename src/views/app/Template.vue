<template>
    <div class="fill-height" style="width: 100%">
        <TopMenu></TopMenu>
        <v-container>
            <router-view></router-view>
        </v-container>
    </div>

</template>

<script>
    import TopMenu from "../../components/TopMenu";

    export default {
        name: "Template",
        components: {TopMenu},

    }
</script>

<style scoped>

</style>