<template>
    <nav id="header-nav">
        <li>Main</li>
        <li>Blog</li>
        <li>About US</li>
    
    </nav>
</template>

<script>
export default {
    data() { return {} },
    methods: {}
}

</script>

<style>
#card-wrap {

    height: 310px;
    
}

#header-nav{
    display: flex;
    justify-content: center;
    height: 30px;
    background-color: rgb(31, 30, 30);
    margin: auto;
    

}

#header-nav li{
    color: white;
    list-style: none;
    margin-left: 60px;
    font-size: 25px;
    font-family:  monospace;
}

#header-nav li:first-child{
    color: #FFD700;
    margin-right: 0;
}

</style>