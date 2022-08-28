<template>
    <div id="message">
        <div>Here You Find </div>
        <ul>
            <li><span>Developers</span></li>
            <li><span>Engineers</span></li>
            <li><span>Designers</span></li>
            <li><span>Professionals</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }

}


</script>


<style>
#message {
    display: inline-flex;
    margin-top: 50px;
    margin-bottom: 50px;
    ;

}

#message div {
    color: gold;
    font-size: 60px;
    font-weight: 400;
    margin-right: -10px;
}

#message ul {
    margin-top: -10px;
    margin-right: -50px;
    margin-left: -20px;
    height: 90px;
    line-height: 90px;
    overflow: hidden;
    

}

#message ul li {
    list-style: none;
    color: black;
    font-size: 60px;
    font-weight: 500;
    position: relative;
    top: 0;
    animation: slide 12s steps(4) infinite;
}

@keyframes slide {
    100% {
        top: -360px;
    }
}   

#message ul li span {
  position: relative;
  margin: 5px 0;
  line-height: 90px;
}

#message ul li span::after {
    content: "";
    position: absolute;
    left: 0;
    height: 120%;
    width: 100%;
    background: white;
    border-left: 2px solid black;
    animation: typing 3s steps(10) infinite;
}

@keyframes typing {
    40%, 60%{
      left: calc(100% + 30px);
    }
    100%{
      left: 0;
    }
}
@media screen and (max-width: 1000px) {
    #message {
        display: block;
    }
    
}
</style>