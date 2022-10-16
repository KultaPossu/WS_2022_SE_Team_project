<template>
    <div class="navbar">
        <div class="logo">P-Media</div>
    </div>
    <MenuComponent @start="onStart" v-if="!start"></MenuComponent>
    <GameComponent v-if="start" :peoples="peoples" :size="size"></GameComponent>
    <div class="footer"></div>
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
</style>