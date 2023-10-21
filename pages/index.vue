<template>
    <ul>
        <NuxtLink to="/tournament" >Current Tournament</NuxtLink>
        <li v-for="(player) in players">
            {{ player.jerseyNumber }}
            {{ player.name }}
        </li>
    </ul>
</template>

<style>
    body{
        background-color: var(--background-color);
    }
</style>

<script setup>

    const { data } = await useFetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnxarjac1qjm01t9gyflapt8/master', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: {
            query: `query MyQuery{
                players (first: 50){
                    id
                    jerseyNumber
                    name
                }
            }`
        },
    })

    const players = await data.value.data.players

        console.log(players)
</script>