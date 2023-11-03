<template>
    <main>
        <section>
            <NuxtLink class="create-tournament">
                <h2 class="title-text">Create <br> Tournament</h2>
            </NuxtLink>
            <NuxtLink class="create-team">
                <h2 class="subtitle-text">Create <br> Team</h2>
            </NuxtLink>
            <NuxtLink class="create-player">
                <h2 class="subtitle-text">Create <br> Player</h2>
            </NuxtLink>
            <NuxtLink class="completed-tournaments">
                <h2 class="title-text">Completed <br> Tournaments</h2>
            </NuxtLink>
            <NuxtLink to="/tournament" class="current-tournament">
                    <h2 class="title-text">Current Tournament</h2>
            </NuxtLink>
            <NuxtLink class="image">
                <img src="~/assets/pulsar.jpg">
            </NuxtLink>
        </section>
        <!-- <NuxtLink to="/tournament" >Current Tournament</NuxtLink> -->
    </main>
</template>

<style scoped>
    body{
        background-color: var(--background-color);
    }

    main{
        padding: 3vw;
        height: 100dvh;
        width: 100dvw;
    }

    section{
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(5, 1fr); 
        gap: 3vw;
        height: 100%;
        width: 100%;
    }

    section a{
        border-radius: 25px;
        box-shadow: var(--box-shadow);
        padding: 2vw;
        text-decoration: none;
    }

    section a h2{
        font-family: var(--primary-font);
    }
    .create-tournament{ 
        grid-area: 1 / 1 / 3 / 5; 
        background-color: #E7FFF7;
    }

    .create-team{
        grid-area: 3 / 1 / 4 / 3;
        background-color: #E7FFF7;
    }

    .create-player{ 
        grid-area: 3 / 3 / 4 / 5; 
        background-color: #E7FFF7;
    }

    .completed-tournaments{ 
        grid-area: 1 / 5 / 4 / 10; 
        background-color: #FFF;
    }

    .current-tournament{ 
        grid-area: 4 / 1 / 6 / 7; 
        background-color: #D6DCFF;
    }

    .image{ 
        grid-area: 4 / 7 / 6 / 10; 
        padding: 0;
    }

    .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 25px;
    }

</style>

