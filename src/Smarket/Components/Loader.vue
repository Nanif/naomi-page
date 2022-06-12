<template>
    <div v-if="loading" class="font-icon-wrapper text-danger">
        <i class="icon-spinner icon-spin icon-large icon-gradient bg-happy-itmeo"></i>
        <p>הנתונים בדרך...</p>
    </div>
</template>

<script>
    export default {
        name: "Loader",
        props:{
            loading: Boolean
        }
    }
</script>

<style scoped>

</style>
