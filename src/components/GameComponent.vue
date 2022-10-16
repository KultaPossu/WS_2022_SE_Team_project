<template>
    <div class="menu">
        <h1>WSC - Ｍemory</h1>
        <div class="cards" :style="'--size:'+size/2">
            <div class="card" v-for="(people,index) of peoples"
                :class="{'card-rotated':people == frisSelectedPeople || people == lastSelectedPeople || (people.show)}"
                :key="index" @click="click(people)">
                <div class="card-froent">
                    <img :src="'/assets/'+people.image" alt="">
                    <div class="name">{{people.name}} - {{people.country}}</div>
                    <div class="flag">
                        <img :src="'/assets/'+people.countryImage" alt="">
                    </div>

                    <img class="portrait" :src="'/assets/'+people.image" alt="UAE competitor portrait" />
                    <div class="text">
                        <img class="flag" :src="'/assets/'+people.countryImage" alt="UAE country flag" />
                        <!-- <h2>{{people.name}}</h2> -->
                        <!-- <p>{{people.type}}</p> -->
                    </div>
                </div>
                <div class="card-back">
                    <img src="/assets/Card Back.png" alt="">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="point">Points: {{point}}</div>
            <div class="time">
                <img src="/assets/timer_black_24dp.svg" alt="">
                : {{time}}
            </div>
        </div>
        <div class="result" v-if="result">
            <div>
                <h1 class="text-center">Congratulations !!!</h1>
                <p>Time: {{time}}</p>
                <p>Point: {{point}}</p>
                <input type="button" value="Restart" @click="restart">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GameComponent',
        props: {
            peoples: Array,
            size: Number
        },
        data() {
            return {
                frisSelectedPeople: null,
                lastSelectedPeople: null,
                point: 1000,
                timeid: 0,
                time: 0,
                result: false
            };
        },
        methods: {
            click(people) {
                if (people.show) {
                    return
                }
                if (people == this.frisSelectedPeople || people == this.lastSelectedPeople) {
                    return;
                }
                if (this.frisSelectedPeople && this.lastSelectedPeople) {
                    return
                }
                if (this.frisSelectedPeople) {
                    this.lastSelectedPeople = people;
                    if (this.lastSelectedPeople.id == this.frisSelectedPeople.id) {
                        this.lastSelectedPeople.show = true;
                        this.frisSelectedPeople.show = true;
                        this.frisSelectedPeople = null
                        this.lastSelectedPeople = null
                    } else {
                        setTimeout(() => {
                            this.frisSelectedPeople = null
                            this.lastSelectedPeople = null
                            this.point -= 10;
                        }, 1000)
                    }
                } else {
                    this.frisSelectedPeople = people;
                }

                for (let people of this.peoples) {
                    if (!people.show) {
                        return
                    }
                }
                clearInterval(this.timeid);
                window.parent.postMessage({
                    event_type: "game_run_end",
                    score: this.point
                });
                this.result = true;
            },
            restart() {
                location.reload();
            }
        },
        mounted() {
            for (let people of this.peoples) {
                people.show = true
            }
            setTimeout(() => {
                for (let people of this.peoples) {
                    people.show = false
                }
                this.timeid = setInterval(() => {
                    this.point--;
                    this.time++;
                }, 1000);
            }, 3000);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .cards {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(var(--size), minmax(0, 1fr));
    }

    .card {
        isolation: isolate;
        position: relative;
        overflow: hidden;

        aspect-ratio: 1;
        border-radius: 1rem;
        user-select: none;
        cursor: pointer;
    }

    .card-froent>.portrait {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-froent>.text {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        background: white;
        color: #003764;
    }

    .card-froent .text .flag {
        position: absolute;
        bottom: 0%;
        right: 0%;
        /* transform: translateY(-60%); */
        height: 1.5rem;
    }

    .card-froent .text h2 {
        margin: 0;
        margin-bottom: 0.125rem;
        font-size: 1rem;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card-froent .text p {
        margin: 0;
        font-size: 0.75rem;
        font-weight: normal;
        text-overflow: ellipsis;
    }


    .card {
        background-color: #aaa;
        aspect-ratio: 1;
        border: 1px solid #333;
        position: relative;
    }

    .card-rotated {
        background-color: #999;
        cursor: unset;
    }

    .card>div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .card>div>img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .card>.card-back {
        display: block;
    }

    .card>.card-froent {
        display: none;
    }

    .card-rotated>.card-back {
        display: none;
    }

    .card-rotated>.card-froent {
        display: block;
    }

    .point {
        font-size: 20px;
        font-weight: bold;
    }

    .time {
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    .footer {
        display: flex;
        margin-top: 16px;
        justify-content: space-between;
    }

    .result {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .result>div {
        max-width: 400px;
        margin: 200px auto;
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
    }

    .text-center {
        text-align: center;
    }
</style>