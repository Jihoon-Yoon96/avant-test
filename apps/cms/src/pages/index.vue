<template>
    <h2>Pinia 연결 테스트</h2>
    <nx3-btn>{{ $hello('윤지훈') }}</nx3-btn>

    <div>
        <h4>1. state</h4>
        <div class="flex pa-2">
            <h3>index.value1 : {{index.value1}}</h3> ||
            <h3>test : {{test}}</h3>
        </div>
        <h4>2. getter</h4>
        <div class="flex pa-2">
            <h3>index.combinedValue : {{index.combinedValue}}</h3>||
            <h3>test2 : {{test2}}</h3>
        </div>
        <button color="primary" @click="add">클릭하면 값 변화</button>

        <h4>3. action</h4>
        <h1>{{ index.text }}</h1>
        <input placeholder="바꿀 텍스트 입력" v-model="text" @keydown.enter.prevent="changeTxt(text)"/>
        <button @click="changeTxt(text)">클릭하면 텍스트 변화</button>
    </div>
</template>

<script setup lang="ts">
import {useIndexStore} from "~/store";
import {onMounted} from "#imports";

const index = useIndexStore()
const test = computed(() => index.value1); // nuxt3에선 $set이 사라져서, computed로 객체 변경값을 감지해야 됨
const test2 = computed(() => index.combinedValue);

// watch 객체 변경 감지 예시
// watch(
//     () => index.value1,
//     (newVal) => {
//         test.value = newVal;
//     }
// );
//
// watch(
//     () => index.combinedValue,
//     (newVal) => {
//         test2.value = newVal;
//     }
// );


function add(){
    index.add()
}

const text = ref<string>('')
function changeTxt(msg : string){
    index.changeText(msg)
}

onMounted( () =>{
    console.log(index)
})
</script>

<style scoped>
.flex {
    display: flex;
}
</style>