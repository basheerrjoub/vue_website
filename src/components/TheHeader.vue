<template>
    <div id="header">
        <img id="header-icon" src="iphase-icon.png" alt="icon">
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
    components:{
        'nav-bar': NavBar
    },
    data() {
        return {};
    },
    methods: {

    },
}


</script>


<style>
#header-icon {
    display: block;
    margin: auto;
    width: 300px;

}
#header {
    margin: 0;
    padding: 0;
    width: 100%;
    background: black

}
</style>
