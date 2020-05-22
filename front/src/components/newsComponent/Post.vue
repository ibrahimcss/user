<template>
    <div>
        <div class="container">
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <input type="text" v-model="title" placeholder="title" class="form-control">
                </div>
                <div class="form-group" >
                    <b-form-textarea   placeholder="Enter something..."
                                       rows="30"
                                       max-rows="40" v-model="content" class="form-control" >
                    </b-form-textarea>
                </div>
                <div class="form-group">
                    <select v-model="selectedCategory" class="form-control">
                    <option disabled value="">Category</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                    <span>Selected: {{ selectedCategory }}</span>
                </div>

                <div class="form-group">
                    <input type="file" @change="onFileUpload">
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block btn-lg">Create Post</button>
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
                FILE: null,
                name: '',
                title:'',
                content:'',
                selectedCategory:''
            };
        },
        methods: {
            onFileUpload (event) {
                this.FILE = event.target.files[0]
            },
            onSubmit() {
                // upload file
                const formData = new FormData()
                formData.append('avatar', this.FILE, this.FILE.name)
                formData.append('name', this.name)
                axios.post('http://localhost:4000/api/create-user', formData, {
                }).then((res) => {
                    console.log(res)
                })
                axios.get("")///get ile image çek
            }
        }

    }
</script>

<style scoped >
    .container {
        max-width: 600px;
    }
</style>
