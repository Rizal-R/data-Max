<template>

    <body>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div v-for="infos in info" :key="infos.gender" class="col">
                    <div class="">
                        <div class="card mb-3">
                            <img :src=" infos.picture.large" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                    {{infos.name.first}} {{infos.name.last}}
                                </h5>
                                <h6 class="card-title text-title">
                                    <font-awesome-icon icon="genderless" />
                                    {{infos.gender}} -
                                    <font-awesome-icon icon="house" />
                                    {{infos.location.city}}
                                </h6>
                                <p class="card-text text-title">
                                    <font-awesome-icon icon="globe" />
                                    {{infos.location.country}} -
                                    <font-awesome-icon icon="user" />
                                    {{infos.login.username}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>


<script>
    import axios from "axios";
    export default {
        name: "GET API SOAL 3",
        data() {
            return {
                info: null,
            };
        },
        created: function () {
            axios.get("https://randomuser.me/api/?results=10")
                .then((response) => {
                    this.info = response.data.results;
                });
        },
    };

</script>