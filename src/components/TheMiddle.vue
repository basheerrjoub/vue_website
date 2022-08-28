<template>
    <div id="cont-one">
        <h1 id="card-title"> TEAM </h1>
        <div id="cards">
            <card-wrapper>
                <div class="card">
                    <img src="../../public/people/p1.png" alt="image">
                    <h1 class="name">Muna Essa</h1>
                </div>
            </card-wrapper>
            <card-wrapper>
                <div class="card">
                    <img src="../../public/people/p2.png" alt="image">
                    <h1 class="name">Ahmad Essa</h1>
                </div>
            </card-wrapper>
            <card-wrapper>
                <div class="card">
                    <img src="../../public/people/p3.png" alt="image">
                    <h1 class="name">Essa Essa</h1>
                </div>
            </card-wrapper>
            <card-wrapper>
                <div class="card">
                    <img src="../../public/people/p4.png" alt="image">
                    <h1 class="name">Muna Essa</h1>
                </div>
            </card-wrapper>

        </div>
    </div>
</template>

<script>

</script>


<style>
#cont-one {
    width: 100%;
    padding: 0;
    margin-top: 100px;

}

.card h1 {
    margin: auto;

}

#cards {
    background-color: black;
    width: 100%;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    padding-top: 20px;
    margin: auto;
    gap: 20px;
    overflow-y: scroll;
    align-items: center;


}

#card-title {
    background: #FFD700;
    margin: 0;
}

.card img {
    width: 300px;
    height: 250px;
    margin: auto;
    margin-top: -50px;
}

.card {
    width: 300px;
    height: 300px;
    padding: 0;
    margin: 10px;
    background-color: white;

}
</style>