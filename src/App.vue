<template>
    <header>
        <h1>WSC-Memory</h1>
    </header>
    <MenuComponent @start="onStart" v-if="!start"></MenuComponent>
    <GameComponent v-if="start" :peoples="peoples" :size="size"></GameComponent>
    <footer>
        <p>Disclaimer: The images used belong to WorldSkills and are only used for the purpose of the demnstration</p>
    </footer>
</template>

<script>
    import MenuComponent from './components/MenuComponent.vue'
    import GameComponent from './components/GameComponent.vue'
    import datas from "./peoples";

    export default {
        name: 'App',
        components: {
            MenuComponent, GameComponent
        },
        data() {
            return {
                start: false,
                size: 0,
                peoples: []
            }
        },
        methods: {
            onStart(size) {
                datas.sort(() => {
                    return Math.random() - 0.5
                });

                this.size = size;
                this.start = true;
                let selectedDatas = [];
                for (let i = 0; i < (size == 8 ? 8 : 18); i++) {
                    selectedDatas.push(datas[i]);
                }

                let peoples = [];
                for (let data of selectedDatas) {
                    peoples.push({
                        id: data.id,
                        type: "Expert",
                        image: data.expertImage,
                        name: data.expertName,
                        country: data.country,
                        countryImage: data.countryImage
                    });
                    peoples.push({
                        id: data.id,
                        type: "Competitor",
                        image: data.competitorImage,
                        name: data.competitorName,
                        country: data.country,
                        countryImage: data.countryImage
                    });
                }

                peoples.sort(() => {
                    return Math.random() - 0.5
                });
                console.log(peoples);
                this.peoples = peoples;
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        width: 100%;
        height: 100vh;
    }

    .button {
        position: relative;
        width: 20ch;
        padding: 1rem;
        background: #003764;
        color: white;
        border: none;
        border-radius: 0.5rem;

        transition: all 0.3s ease;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
    }

    .button:hover {
        background: #034973;
    }

    .button::after {
        content: '';
        position: absolute;
        inset: 4px;
        border: solid 2px white;
        border-radius: 5px;
    }

    .gongrats-text {
        font-size: 25px;
        font-weight: bold;
        color: #003764;
    }

    header {
        padding: 1rem;
        display: flex;
        justify-content: center;
        flex-shrink: 0;
    }

    header h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
        color: #003764;
    }


    footer {
        padding: 0.2rem;
        display: flex;
        justify-content: end;
        flex-shrink: 0;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
    }

    footer p {
        margin: 0;
        max-width: 50ch;
        text-align: right;
        font-size: 0.75rem;
        line-height: 1.2;
    }
</style>