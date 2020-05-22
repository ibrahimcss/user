<template>
    <div class="container">

        <div class="row col-10">
            <div style="padding: 10px;margin:auto;width:90%">

                <b-carousel
                        id="carousel-1"
                        v-model="slide"
                        :interval="4000"
                        controls
                        indicators
                        background="#ababab"
                        img-width="1024"
                        img-height="480"
                        style="text-shadow: 1px 1px 2px #333;"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                >
                    <b-carousel-slide v-for="image in posts" v-bind:img-src="image.photoUrl" :key="image"></b-carousel-slide>

                    <!-- Slides with img slot -->
                    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                    <b-carousel-slide>
                        <template v-slot:img>
                            <img
                                    class="d-block img-fluid w-100"
                                    width="1024"
                                    height="480"
                                    alt="image slot"
                            >
                        </template>
                    </b-carousel-slide>

                </b-carousel>

            </div>
            <div class="col-8">
                <div class="card" style="width: auto;" v-for="image in posts" v-bind:img-src="image" :key="image">

                    <img class="card-img-bottom"  v-bind:src="image.link" alt="Card image cap">


                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card" style="width: 18rem;" v-for="image in images" v-bind:img-src="image" :key="image">

                    <img class="card-img-bottom" v-bind:src="image.link" alt="Card image cap" >

                    <div class="card-body" >
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from "axios";


    export default {
        name:"main",
        data() {
            return {
                posts: [],
                errors: []
            }
        },

        // Fetches posts when the component is created.
        created() {
            axios.get('http://localhost:3000/api/image/list')
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.posts = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })


        }
    }

</script>

<style scoped>

</style>
