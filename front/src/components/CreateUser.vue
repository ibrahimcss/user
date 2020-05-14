<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Student</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.firstName" required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="user.lastName" required>
                </div>


                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                    <router-link to="/" class="btn btn-success btn-block">List</router-link>
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
                user: {
                    firstName: '',
                    lastName: ''

                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:3000/users';

                axios.post(apiURL, this.user).then(() => {
                    this.$router.push('/')
                    this.user = {
                        firstName: '',
                        lastName: ''
                    }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style scoped>

</style>
