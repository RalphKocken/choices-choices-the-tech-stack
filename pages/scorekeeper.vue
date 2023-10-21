<template>
    <section class="left-section">
        <div class="select-team">
            <p class="title-text">Adding stats to:</p>
            <div class="team team-A">
                <img src="~/assets/raimon.png" alt="raimon logo">
                <p class="subtitle-text">Bird</p>
            </div>
            <div class="team team-B">
                <img src="~/assets/chaos-angel-zero.png" alt="chaos angel zero logo">
                <p class="subtitle-text">Raimon</p>
            </div>
        </div>
        <div class="names-numbers-toggle">
            <p class="normal-text">Player Names</p>
            <div class="toggle">
                <div class="toggle-ball"></div>
            </div>
            <p class="deselected-text">Jersey Numbers</p>
        </div>
        <div></div>
    </section>
    <section class="right-section"></section>
</template>

<style>

    body{
        padding: 2rem;
    }

    .left-section{
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 2rem 1rem 2rem 2rem;
        background-color: var(--element-background-color);
        border-radius: 10px;
        gap: 2rem;
    }

    .select-team{
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .select-team > p{
        width: 30%;
    }

    .team{
        display: flex;
        width: 6.5rem;
        height: 6.5rem;
        flex-direction: column; 
        justify-content: center;
        align-items: center;       
        box-shadow: var(--box-shadow);
        border-radius: 20px; 
    }

    .names-numbers-toggle{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .names-numbers-toggle > p{
        font-weight: 800;
    }

    .toggle{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.2rem 0.3rem;
        width: 3rem;
        height: 1.5rem;
        border-radius: 10px;
        background-color: var(--button-background-color);
    }

    .toggle-ball{
        width: 1rem;
        height: 1rem;
        background-color: var(--element-background-color);
        border-radius: 50%;
    }

</style>