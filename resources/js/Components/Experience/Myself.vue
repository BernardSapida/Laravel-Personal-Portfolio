<template>
    <section class="container p-3 mb-5 mt-3">
        <article class="About-Me" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="2500">
            <h1>Skill &<br>Experience</h1>
            <p>Since beginning my journey as a freelance developer nearly 4 years ago, I've done remote work for clients and collaborated with talented people to create web application for capstones, thesis, and consumer use.</p>
            <p>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
            <p>Visit my <a href="https://www.linkedin.com/in/bernardsapida/" target="_blank">LinkedIn</a> profile for more details or just contact me.</p>
        </article>
        <article class="graph d-block" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-delay="2500">
            <canvas id="polarArea"></canvas>
        </article>
    </section>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  mounted() {
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