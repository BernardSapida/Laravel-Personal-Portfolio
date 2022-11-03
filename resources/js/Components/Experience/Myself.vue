<template>
    <section class="container p-3 mb-5 mt-3">
        <article class="About-Me" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="2500">
            <h1>
                <span class="animation" @mouseover.stop="hoverMe($event)">S</span><span class="animation" @mouseover.stop="hoverMe($event)">k</span><span class="animation" @mouseover.stop="hoverMe($event)">i</span><span class="animation" @mouseover.stop="hoverMe($event)">l</span><span class="animation" @mouseover.stop="hoverMe($event)">l</span>&nbsp;<span class="animation" @mouseover.stop="hoverMe($event)">&</span>&nbsp;<br><span class="animation" @mouseover.stop="hoverMe($event)">E</span><span class="animation" @mouseover.stop="hoverMe($event)">x</span><span class="animation" @mouseover.stop="hoverMe($event)">p</span><span class="animation" @mouseover.stop="hoverMe($event)">e</span><span class="animation" @mouseover.stop="hoverMe($event)">r</span><span class="animation" @mouseover.stop="hoverMe($event)">i</span><span class="animation" @mouseover.stop="hoverMe($event)">e</span><span class="animation" @mouseover.stop="hoverMe($event)">n</span><span class="animation" @mouseover.stop="hoverMe($event)">c</span><span class="animation" @mouseover.stop="hoverMe($event)">e</span>
            </h1>
            <p>Since beginning my journey as a freelance developer nearly 4 years ago, I've done remote work for clients and collaborated with talented people to create web application for capstones, thesis, and consumer use.</p>
            <p>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
            <p>Visit my <a href="https://www.linkedin.com/in/bernardsapida/" target="_blank">LinkedIn</a> profile for more details or just contact me.</p>
        </article>
        <article class="graph d-block" data-aos="fade-left" data-aos-easing="ease-in-out">
            <canvas id="polarArea"></canvas>
        </article>
    </section>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
    mounted() {
        let spans = document.querySelectorAll(".animation");
        let spansLength = spans.length;
        const ctx = document.getElementById('polarArea');
        const myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: [
                    'HTML',
                    'CSS',
                    'JS',
                    'VUE',
                    'PHP',
                    'Laravel',
                    'GraphQL'
                ],
                datasets: [{
                    label: 'Skills and Experience',
                    data: [90, 70, 60, 60, 50, 40, 30],
                    backgroundColor: [
                        'Orange',
                        'Cyan',
                        'Yellow',
                        'Green',
                        'Violet',
                        'Red',
                        'Pink'
                    ]
                }]
            }
        });
        myChart;

        setTimeout(() => {
            let time = setInterval(() => {
                if(spansLength != 0) {
                    spans[spans.length - spansLength].classList.add("rubber");
                    spansLength -= 1;
                } else {
                    setTimeout(() => {
                        spans.forEach(span => {
                            span.classList.remove("rubber")
                        });
                        clearInterval(time);
                    }, 700);
                }
            }, 150);
        }, 3000); 
    },
    methods: {
        redirectTo(link) {
            window.open(link, '_blank');
        },
        hoverMe(e) {
            if(e.target.className.split(" ")[e.target.className.split(" ").length - 1] != "rubber") {
                e.target.classList.add("rubber");

                setTimeout(() => {
                    e.target.classList.remove("rubber");
                }, 750);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    section.container {
        padding: 50px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;

        & article {
            &.About-Me {
                max-width: 600px;
                width: 100%;
                color: hsl(0, 0%, 100%);
                
                & h1 {
                    margin-bottom: 20px;
                    font-size: 5rem;
                    font-weight: bolder;
                    color: hsl(180, 100%, 43%);
                    font-family: 'Varela Round', sans-serif;

                    & span {
                        &.rubber {
                            display: inline-block;
                            animation: rubber 700ms alternate ease-out;                     
                        }
                        &.name {
                            color: hsl(180, 100%, 43%);
                        }
                    }
                }

                & p a {
                    color: hsl(180, 100%, 43%);
                }
            }

            &.graph {
                display: block;
                max-width: 400px;
                width: 100%;
            }
        }
    }

    @keyframes rubber {
        0%{
            transform: scaleX(1);
            color: hsl(197, 100%, 50%);
        }
        40%{
            transform: scaleX(1.12) scaleY(0.75);
        }
        55%{
            transform: scaleX(0.85) scaleY(1);
            color: hsl(342, 100%, 50%);
        }
        65%{
            transform: scaleX(1.09) scaleY(0.85);
        }
        75%{
            transform: scaleX(0.9)  scaleY(1);
        }
        90%{
            transform: scaleX(1.05) scaleY(0.95);
        }
        100%{
            transform: scaleX(1) scaleY(1);
            color: hsl(0, 0%, 100%);
        }
    }

    @media screen and (max-width: 1200px){
        section.container article.About-Me h1 {
            font-size: 5rem;
        }
    }
    
    @media screen and (max-width: 992px){
        section.container article.About-Me h1 {
            font-size: 4rem;
        }
    }

    @media screen and (max-width: 396px){
        section.container article.About-Me h1 {
            font-size: 3rem;
        }
    }

    @media screen and (max-width: 313px){
        section.container article.About-Me {
            & h1 {
                font-size: 2.5rem;
            }

            & p {
                font-size: 14px;
            }
        }
    }
</style>