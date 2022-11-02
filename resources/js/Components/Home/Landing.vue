<template>
    <section class="container my-5">
        <article data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="2500">
            <h1>
                Hi,<br>
                I'm <span>Bernard</span>,<br>
            </h1>
            <p class="role">FRONTEND DEVELOPER</p>
            <p class="introduction">A 19-year-old <span>Frontend Developer</span> base<br> in Imus, Cavite Philippines.</p>
        </article>
        <figure data-aos="zoom-out-left" data-aos-easing="ease-in-out" data-aos-delay="2500"></figure>
    </section>
</template>

<style lang="scss" scoped>
    section.container {
        max-height: 700px;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & article {
            & h1 {
                color: hsl(0, 0%, 100%);
                font-size: 6rem;
                font-weight: bolder;

                & span {
                    color: hsl(180, 100%, 43%);
                }
            }

            & p.role {
                color: hsl(0, 0%, 100%);
                font-size: 3.5rem;
                font-weight: bolder;
            }

            & p.introduction {
                color: hsl(0, 0%, 70%);
                font-size: 2em;

                & span {
                    color: hsl(0, 0%, 100%);
                    font-weight: bolder;
                }
            }
        }

        & figure {
            display: block;
            height: 400px;
            width: 400px;
            border-radius: 50%;
            background-color: hsl(180, 100%, 43%);
            background-image: url("./images/Me/BernardSapida.jpg");
            background-size: cover;
            background-position: center;
        }
    }

    @media screen and (max-width: 1200px){
        section.container {
            & article {
                & h1 {
                    font-size: 5rem;
                }

                & p.role {
                    font-size: 2.5rem;
                }
    
                & p.introduction {
                    font-size: 1.8em;
                }
            }

            & figure {
                height: 350px;
                width: 350px;
            }
        }
    }

    @media screen and (max-width: 992px){
        section.container {
            & article {
                & h1 {
                    font-size: 4rem;
                }

                & p.role {
                    font-size: 1.5rem;
                }
    
                & p.introduction {
                    font-size: 1em;
                }
            }

            & figure {
                height: 300px;
                width: 300px;
            }
        }
    }

    @media screen and (max-width: 768px){
        section.container {
            height: 100%;
            gap: 20px;
            flex-direction: column;

            & figure {
                height: 200px;
                width: 200px;
            }
        }
    }

    @media screen and (max-width: 396px){
        section.container {
            & article {
                & h1 {
                    font-size: 3rem;
                }

                & p.role {
                    font-size: 1.5rem;
                }
    
                & p.introduction {
                    font-size: 1em;
                }
            }

            & figure {
                height: 180px;
                width: 180px;
            }
        }
    }

    @media screen and (max-width: 313px){
        section.container {
            & article {
                & h1 {
                    font-size: 2.5rem;
                }

                & p.role {
                    font-size: 1.2rem;
                }
    
                & p.introduction {
                    font-size: 14px;
                }
            }
        }
    }
</style>