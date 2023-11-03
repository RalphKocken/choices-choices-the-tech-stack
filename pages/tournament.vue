<script setup>
    // Fetching id, date, location and name of tournament from hygraph. 
    const { data } = await useFetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnxarjac1qjm01t9gyflapt8/master', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: {
            query: `query MyQuery{
                tournament (where: {id: "clo0cql7ro4ua0bw20laridck" }){
                    id
                    date
                    location
                    name
                }
                matches {
                    division
                    time
                    date
                    id
                    location
                    round
                    teamA
                    teamB
                }
            }`
        },
    })
    const tournament = await data.value.data.tournament
    const matches = await data.value.data.matches
    console.log(matches)
</script>

<template>
    <main>
        <h2 class="title-text"> {{ tournament.name }}</h2>
        <div class="tournament-info">
            <span class="normal-text"> {{ tournament.date }}</span> | <span class="normal-text"> {{ tournament.location }}</span>
        </div>
        <div class="tournament-overview">
            <p class="subtitle-text">All Matches</p>
            <div class="matches">
                <div class="match" v-for="(match) in matches">
                    <div class="time-date">
                        <span class="subtitle-text"> {{ match.time }}</span>
                        <span class="normal-text"> {{ match.date }}</span>
                    </div>
                    <span class="subtitle-text"> {{ match.teamA }}</span>
                    <span class="normal-text score"> 18-12</span>
                    <span class="subtitle-text"> {{ match.teamB }}</span>
                    <span class="deselected-text"> {{ match.division }}</span>
                    <span class="deselected-text">|</span>
                    <span class="deselected-text"> {{ match.location }} </span>
                    <span class="deselected-text">|</span>
                    <span class="deselected-text"> {{ match.round }} </span>
                    <NuxtLink to="/scorekeeper" class="normal-text add-points">Scorekeeper</NuxtLink>
                    <NuxtLink class="normal-text commentate">Commentate</NuxtLink>

                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

    span, a{
        white-space: nowrap;
        max-width: 150px;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    main{
        display: flex;
        flex-direction: column;
        padding: 3vw;
        background-color: var(--background-color);
        height: 100dvh;
        gap: 1rem;
    }
    .tournament-overview{
        background-color: white;
        flex-grow: 2;
        border-radius: 25px;
        box-shadow: var(--box-shadow);
        padding: 3vw;
    }
    .matches{
        display: flex;
        padding: 4vw;
        flex-direction: column;
        gap: 2vw;
        overflow-y: scroll;
    }
    .match{
        display: flex;
        align-items: center;
        gap: 1vw;
        width: 100%;
        overflow-x: scroll;
    }
    .time-date{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 5%;
    }

    .score{
        font-weight: 600;
        font-size: 16px;
    }

    .commentate,
    .add-points{
        font-weight: 800;
        color: white;
        padding: 1vw 2vw;
        border-radius: 25px;
    }
    .add-points{
        background-color: #FFC738;
    }
    .commentate{
        background-color: #63C6A7;
    }


</style>