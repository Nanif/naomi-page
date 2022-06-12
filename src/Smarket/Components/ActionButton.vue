<template>
    <div>
        <div v-if="!hideDivider" class="divider"></div>
        <button class="btn btn-primary btn-smarket-1" v-on:click="execute" :disabled="executing">{{title}}
            <i :class="iconClass"></i>
            <span v-if="executing" class="mr-2"><i
                    class="icon-spinner icon-spin icon-large"></i></span>
            <span v-if="executed" class="mr-2"><i
                    class="far fa-check-circle fa-lg"></i></span>
        </button>
<!--        <span v-if="executed && !executing" class="mr-2"><i class="icon-ok"></i> נשמר</span>-->
    </div>
</template>

<script>
    export default {
        name: "ActionButton",
        props: {
            title: null,
            hideDivider: null,
            iconClass:null
        },
        data: () => {
            return {
                executing: false,
                executed: false
            }
        },
        methods: {
            async execute() {
                this.executed = false;
                this.executing = true;
                this.$emit('execute', {onExecuted: this.onExecuted})
            },
            onExecuted(){
                this.executing = false;
                this.executed = true;
                setTimeout(()=>{
                    this.executed = false;
                }, 5000);
            }
        }
    }
</script>

<style scoped>

</style>
