<script setup>
    // Fetching id, name and jerseynumber from Hygraph. 
    const { data } = await useFetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnxarjac1qjm01t9gyflapt8/master', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: {
            query: `query MyQuery{
                players (first: 30, orderBy: jerseyNumber_ASC){
                    id
                    jerseyNumber
                    name
                }
            }`
        },
    })
    const players = await data.value.data.players
</script>

<script>
    // FUNCTION TO CHANGE BG COLOR OF DISC POSITIONS
    export default {
        data() {
            return {
                countTeamA: 0,
                countTeamB: 0,
            };
        },
        methods: {
            incrementTeamA() {
                this.countTeamA++;
            },
            decrementTeamA() {
                if (this.countTeamA > 0) {
                    this.countTeamA--;
                };
            },
            incrementTeamB() {
                this.countTeamB++;
            },
            decrementTeamB() {
                if (this.countTeamB > 0) {
                    this.countTeamB--;
                };
            },
            handleClick(event){
                const buttons = document.querySelectorAll('.disc-position');
                buttons.forEach(button => {
                    button.classList.add('disc-position-not-active');
                    button.classList.remove('disc-position-active');
                })
                const clickedButton = event.target;
                clickedButton.classList.add('disc-position-active');
                clickedButton.classList.remove('disc-position-not-active');
            }
        }
    }

    // FUNCTION FOR SWITCHING BETWEEN JERSEYNUMBERS AND PLAYER NAMES
    const showJerseyNumbers = ref(false);

    function switchNamesToNumbers(){
        showJerseyNumbers.value = !showJerseyNumbers.value
    }

    // FUNCTION FOR ADDING AND SUBTRACTING SCORES


    // function incrementTeamA() {
    //     this.countTeamA++;
    // };

    // function decrementTeamA() {
    //     this.countTeamA--;
    // };
    

    // const showPlayerNames = ref(false);
    // const flexSwitch = ref(true)

    // function switchToggle(){
    //     showPlayerNames.value = !showPlayerNames.value
    //     flexSwitch.value = !flexSwitch.value
    // };
</script>

<!-- <script>
    export default{
        data() {
            return{
                countTeamA: 0,
                countTeamB: 0
            };
        }
    }

</script> -->

<template>
    <main>
        <div class="stats">
            <div class="select-team">
                <h2 class="subtitle-text">Adding stats to:</h2>
                <div class="team-A">
                    <span class="normal-text">Bird</span>
                </div>
                <div class="team-B">
                    <span class="normal-text">Camel</span>
                </div>
            </div>
            <div class="toggle-numbers-or-names">
                <span class="toggle-names"  :class="{'deselect-text': showJerseyNumbers, 'select-text': !showJerseyNumbers }">Player names</span>
                <div class="toggle" :class="{'switchToggleBall': showJerseyNumbers}" @click="switchNamesToNumbers">
                    <div class="toggle-ball"></div>
                </div>
                <p class="toggle-jerseys" :class="{'deselect-text': !showJerseyNumbers, 'select-text': showJerseyNumbers }">Jersey numbers</p>
            </div>
            <div class="stats-selector">
                <div class="scored-by">
                    <span class="scored-by-title">Scored By</span>
                    <div v-if="!showJerseyNumbers" class="select-name">
                        <div class="name" v-for="(player) in players">
                            <span>{{ player.jerseyNumber }}</span>
                            <span>{{ player.name }}</span>
                        </div>
                    </div>
                    <div v-else class="select-number">
                        <div class="number" v-for="(player) in players">
                            <span>{{ player.jerseyNumber }}</span>
                        </div>
                    </div>
                </div>
                <div class="assist-by">
                    <span class="assist-by-title">Assist By</span>
                    <div v-if="!showJerseyNumbers" class="select-name">
                        <div class="name" v-for="(player) in players">
                            <span>{{ player.jerseyNumber }}</span>
                            <span>{{ player.name }}</span>
                        </div>
                    </div>
                    <div v-else class="select-number">
                        <div class="number" v-for="(player) in players">
                            <span>{{ player.jerseyNumber }}</span>
                        </div>
                    </div>
                </div>
                <div class="turnover-by">
                    <span class="turnover-by-title">Turnover By</span>
                    <div v-if="!showJerseyNumbers" class="select-name">
                        <div class="name" v-for="(player) in players">
                            <span>{{ player.jerseyNumber }}</span>
                            <span>{{ player.name }}</span>
                        </div>
                    </div>
                    <div v-else class="select-number">
                        <div class="number" v-for="(player) in players">
                            <span>{{ player.jerseyNumber }}</span>
                        </div>
                    </div>
                </div>
                <div class="block-by">
                    <span class="block-by-title">Block By</span>
                    <div v-if="!showJerseyNumbers" class="select-name">
                        <div class="name" v-for="(player) in players">
                            <span>{{ player.jerseyNumber }}</span>
                            <span>{{ player.name }}</span>
                        </div>
                    </div>
                    <div v-else class="select-number">
                        <div class="number" v-for="(player) in players">
                            <span>{{ player.jerseyNumber }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="score">
            <div class="team-A1 team">
                <span>BIRD</span>
            </div>
            <div class="counter-team-A">
                <button class="+team-A adder" @click="incrementTeamA">+</button>
                <button class="-team-A subtractor" @click="decrementTeamA">-</button>
            </div>
            <span class="score-team-A">{{ countTeamA }}</span>
            <span>-</span>
            <span class="score-team-B">{{ countTeamB }}</span>
            <div class="counter-team-B">
                <button class="+team-B adder" @click="incrementTeamB">+</button>
                <button class="-team-B subtractor" @click="decrementTeamB">-</button>
            </div>
            <div class="team-B1 team">
                <span>CAMEL</span>
            </div>
        </div>
        <div class="field">
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
            <button class="disc-position" @click="handleClick"></button>
        </div>
    </main>
</template>

<style>

    main{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        height: 100vh;
        width: 100%;
        gap: 2vw;
        padding: 2vw;
    }

    button{
        border: none;
        cursor: pointer;
    }

    /* -----------------STATS------------------- */

    .stats{
        grid-area: 1 / 1 / 5 / 2;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--element-background-color);
        border-radius: 10px;
        padding: 2vw;
    }

    .select-team{
        display: flex;
        align-items: center;
        min-height: 10%;
        gap: 5%
    }

    .team-A,
    .team-B{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60%;
        width: 20%;
        box-shadow: var(--box-shadow);
        border-radius: 20px;
    }

    .team-A p, .team-B span{
        font-weight: 800;
    }

    .toggle-numbers-or-names{
        display: flex;
        align-items: center;
        gap: 3%;
        min-height: 10%;
    }

    .toggle-jerseys,
    .toggle-names{
        font-family: var(--primary-font);
    }


    .toggle{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 7px;
        width: 4.5rem;
        height: 50%;
        border-radius: 25px;
        background-color: #63C6A7;
    }

    .toggle-ball{
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
    }

    .toggle-numbers-or-names{
        display: flex;
        height: 10%;
    }

    .stats-selector{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        flex: 1;
        overflow: hidden;
        gap: 5%;
    }

    .stats-selector > div{
        display: flex;
        flex-direction: column;
        gap: 5%;
        overflow: hidden;
    }

    .scored-by{
        grid-area: 1 / 1 / 2 / 2; 
    }

    .assist-by{
        grid-area: 1 / 2 / 2 / 3; 
    }

    .turnover-by{
        grid-area: 2 / 1 / 3 / 2;
    }

    .block-by{ 
        grid-area: 2 / 2 / 3 / 3; 
    }

    .scored-by-title,
    .assist-by-title,
    .turnover-by-title,
    .block-by-title{
        display: block;
        width: 100%;
        text-align: center;
        padding: 5%;
        font-family: var(--primary-font);
        font-size: 20px;
        font-weight: 700;
        color: white;
        border-radius: 10px;
    }

    .scored-by-title{
        background-color: #18D02B;
    }

    .assist-by-title{
        background-color: #2974E4;
    }

    .turnover-by-title{
        background-color: #ED4444;
    }

    .block-by-title{
        background-color: #FFC738;
    }

    .select-name{
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        gap: 1rem;
    }

    .name{
        display: flex;
        gap: 5%;
        padding: 1% 0;
        align-items: center;
        justify-content: flex-start;
        border-bottom: 1px solid var(--sub-text-color);
        font-family: var(--primary-font);
        font-weight: 800;
        color: var(--primary-font-color)
    }

    .select-number{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(5, 1fr);
        height: 100%;
        gap: 3%;
    }

    .select-number div{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--primary-font-color);
        border-radius: 10px;
        font-weight: 800;
        font-family: var(--primary-font);
        color: var(--primary-font-color);
    }

    /* --------------------SCORE--------------------- */

    .score{
        grid-area: 1 / 2 / 2 / 3;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5%;
        background-color: var(--element-background-color);
        border-radius: 10px;
    }

    .team{
        display: flex;
        flex-direction: column;
        font-weight: 700;
        font-family: var(--primary-font);
        color: var(--primary-font-color);
    }

    .counter-team-A,
    .counter-team-B{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .adder,
    .subtractor{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-font-color);
        color: white;
        width: 60px;
        height: 30px;
        border-radius: 20px;
        font-size: 24px;
        font-weight: 600;
        font-family: var(--tertiary-font);
    }

    .score-team-A,
    .score-team-B{
        font-size: 50px;
        font-family: var(--primary-font);
        color: var(--primary-font-color);
        font-weight: 800;
    }

    /* FIELD */

    .field{
        grid-area: 2 / 2 / 5 / 3;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(3, 1fr);
        background-color: var(--element-background-color);
        border-radius: 10px;
        gap: 1rem;
        padding: 1rem;
    }

    .disc-position{
        border-radius: 10px;
        background-color: #E4FDE1;
    }

    .disc-position-not-active{
        background-color: #E4FDE1;
    }

    .disc-position-active{
        background-color: #90CF8E;
    }


    /* TOGGLE CLASSES */

    .switchToggleBall{
        justify-content: flex-end;
    }

    .deselect-text{
        color: var(--sub-text-color);
        font-family: var(--primary-font);
        font-weight: 800;
    }

    .select-text{
        color: var(--primary-font-color);
        font-family: var(--primary-font);
        font-weight: 800;
    }

    .is-not-displayed{
        display: none;
    }
</style>