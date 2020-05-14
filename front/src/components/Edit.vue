<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update User</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.firstName" required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="user.lastName" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                user: { }
            }
        },
        created() {
            let apiURL = `http://localhost:3000/users/${this.$route.params.id}`;
            axios.get(apiURL).then((res) => {
                this.user = res.data;
            })
        },
        methods: {
            handleUpdateForm() {
                let apiURL = `http://localhost:3000/users/${this.$route.params.id}`;
                axios.put(apiURL, this.user).then((res) => {
                    console.log(res)
                    this.$router.push('/')
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style scoped>

</style>
