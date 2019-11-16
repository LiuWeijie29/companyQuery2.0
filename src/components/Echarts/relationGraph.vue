<template>
  <div class="graphContainer">
    <div id="relationGraph" style="position: relative;height: 600px;width: 800px">

    </div>
  </div>
</template>

<script>
    export default {
        name: "relationGraph",
        data() {
            return {
                company:this.currentCompany,
                myChart: Object,
                option: Object,
                newOption: Object,
            }
        },
        props:[
            "currentCompany",
        ],
        created(){

        },
        mounted(){

        },
        methods : {

        }
    }
</script>

<style scoped>
  .graphContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>