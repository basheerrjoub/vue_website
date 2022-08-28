<template>

    <div id="error-box">
        <h1>
            <slot></slot>
        </h1>
    </div>


</template>


<script>
export default {
    data() {
        return {};

    },
    methods: {

    }
}

</script>


<style>
#error-box {
    width: 300px;
    height: 160px;
    background: gold;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid black;
}

#error-box h1{
    font-family: monospace;
    align-items: center;
    text-align: center;

}
</style>