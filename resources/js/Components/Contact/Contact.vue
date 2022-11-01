<template>
    <section class="container p-3 mb-5">
        <article class="contact">
            <h1 class="mb-4">Contact me</h1>
            <p class="mb-4">I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.</p>
            <b-form @submit.prevent="submitContact" novalidate>
                <div class="row mb-2 g-2">
                    <b-form-group
                        class="col-md-6 col-sm-12"
                        label-for="name"
                        :state="state_name"
                    >
                        <b-form-input id="name" v-model="name" :state="state_name" placeholder="Name" trim></b-form-input>
                        <b-form-invalid-feedback>{{ err_name }}</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-md-6 col-sm-12"
                        label-for="email"
                        :state="state_email"
                    >
                        <b-form-input id="name" v-model="email" :state="state_email" placeholder="Email" trim></b-form-input>
                        <b-form-invalid-feedback>{{ err_email }}</b-form-invalid-feedback>
                    </b-form-group>
                </div>
                <b-form-group
                    class="mb-2"
                    label-for="subject"
                    :state="state_subject"
                >
                    <b-form-input id="subject" v-model="subject" :state="state_subject" placeholder="Subject" trim></b-form-input>
                    <b-form-invalid-feedback>{{ err_subject }}</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                    class="mb-2"
                    label-for="subject"
                    :state="state_message"
                >
                    <b-form-textarea
                        id="message"
                        v-model="message"
                        :state="state_message"
                        placeholder="Message"
                        rows="6"
                    ></b-form-textarea>
                    <b-form-invalid-feedback>{{ err_message }}</b-form-invalid-feedback>
                </b-form-group>
                
                <b-button type="submit" class="submit-message mt-2">
                    <icon icon="fa-solid fa-paper-plane" />&nbsp; Send message
                </b-button>
            </b-form>
        </article>
        <article class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.837328457755!2d120.92840871431795!3d14.378822086329155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d37ab5fc9f0d%3A0x6ee35f73fcd9560c!2sMalagasang%20I-F%2C%20Imus%2C%20Cavite!5e0!3m2!1sen!2sph!4v1667223878472!5m2!1sen!2sph" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </article>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: "",
                email: "",
                subject: "",
                message: "",

                state_name: null,
                state_email: null,
                state_subject: null,
                state_message: null,

                err_name: "",
                err_email: "",
                err_subject: "",
                err_message: ""
            }
        },
        methods: {
            submitContact() {
                console.log("CLICKED!");
                this.state_name = false;
                this.state_email = false;
                this.state_subject = false;
                this.state_message = false;
                this.err_name = "Name is required";
                this.err_email = "Email is required";
                this.err_subject = "Subject is required";
                this.err_message = "Message is required";
            }
        }
    }
</script>

<style lang="scss" scoped>
    section.container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px;

        & article {
            &.contact {
                max-width: 500px;
                width: 100%;

                & h1 {
                    font-size: 5rem;
                    font-weight: bolder;
                    color: hsl(180, 100%, 43%);
                }

                & p {
                    color: hsl(0, 0%, 100%);
                }

                & form {
                    & input[type="text"], & textarea {
                        border: none;
                        border-radius: 0;
                        color: hsl(0, 0%, 40%);
                        background-color: hsl(0, 0%, 13%);
                    }

                    & button.submit-message {
                        padding: 5px 20px;
                        float: right;
                        background: transparent;
                        border-radius: 0;
                        border: 1px solid hsl(180, 100%, 43%);
                        color: hsl(180, 100%, 43%);
                        transition: ease-in-out 350ms all;

                        &:hover {
                            color: hsl(0, 0%, 100%);
                            background-color: hsl(180, 100%, 43%);
                        }
                    }
                }
            }

            &.map {
                max-width: 500px;
                width: 100%;

                & iframe {
                    display: block;
                    width: 100%;
                    height: 600px;
                }
            }
        }
    }

    @media screen and (max-width: 1200px){
        section.container article.contact h1 {
            font-size: 5rem;
        }
    }
    
    @media screen and (max-width: 992px){
        section.container article.contact h1 {
            font-size: 4rem;
        }
    }

    @media screen and (max-width: 396px){
        section.container article.contact h1 {
            font-size: 3rem;
        }
    }

    @media screen and (max-width: 313px){
        section.container article.contact {
            & h1 {
                font-size: 2.5rem;
            }

            & p {
                font-size: 14px;
            }
        }
    }
</style>