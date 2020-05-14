<template>
    <div class="row">
        <div class="col-md-4">

            <table class="table table-striped">
                <thead class="thead-dark" >
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <router-link to="/create" class="btn btn-success btn-block">Create</router-link>
                </tr>

                </thead>
                <tbody>
                <tr v-for="user in Users" :key="user.id">
                    <td>{{ user.firstName}}</td>
                    <td>{{ user.lastName }}</td>
                    <td>
                        <router-link :to="{name: 'edit', params: { id: user.id }}" class="btn btn-success">Edit
                        </router-link>
                        <button @click.prevent="deleteStudent(user.id)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Users: []
            }
        },
        created() {
            let apiURL = 'http://localhost:3000/users';
            axios.get(apiURL).then(res => {
                this.Users = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:3000/users/${id}`;
                let indexOfArrayItem = this.Users.findIndex(i => i.id === id);
                if (window.confirm("Do you really want to delete?--",id)) {
                    axios.delete(apiURL).then(() => {
                        this.Users.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
