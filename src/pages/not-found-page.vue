<script setup lang="ts">

//import
import {useRouter} from "vue-router"

// router
const router = useRouter()

// methods
function goHomePage() {
    router.push('/')
}
</script>

<template>
    <div class="not-found">
        <div>
            404 NOT FOUND
            <div class="button" @click="goHomePage">
                Home
            </div>
        </div>
    </div>
</template>

<style scoped>
.not-found {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
}

.button {
    transition: all 0.3s;
    padding: 5px;
    background: rgba(94, 193, 255, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    -webkit-user-select: none;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 10px;
}
.button:hover{
    background: rgba(94, 193, 255, 0.9);
}
.button:active{
    background: rgba(94, 193, 255, 0.8);
}
</style>