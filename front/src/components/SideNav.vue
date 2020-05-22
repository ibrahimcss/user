<template>
    <div class="nav justify-content-end navBack" style="width: 100%">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link disabled" href="#">New News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
            </li>

            <li class="nav-item">
                <a class="nav-link">User
                    <img width="32px" src="https://picsum.photos/1024/480/?image=10">
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Exit</a>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "SideNav"
    }
</script>

<style scoped>
    .navBack{
        background: aliceblue;
    }
</style>
