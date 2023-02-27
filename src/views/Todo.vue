<script setup lang="ts">
import {ref} from "vue"
import Add from "../components/Add.vue"
import List from "../components/List.vue"
</script>
<template>
    <div class="box">
        <Add/>
        <List/>
    </div>
</template>
<style scoped>
    .box{
        padding-top:50px;
        width: 100%;
        min-height: 600px;
        display: flex;
        margin: 20px auto;
        flex-direction: column;
        align-items: center;
        min-width: 450px;
    }
</style>