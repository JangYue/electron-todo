<script setup lang="ts">
import {ref,provide} from "vue"
import type { InjectionKey } from 'vue'
import Todo from "./views/Todo.vue"

import {List,ListMethod} from "./types/List"


let list = ref<List[]>([
    {content:"贴心代办,帮你梳理工作和生活",status:false}
])
let copyList = ref<List[]>([{content:"贴心代办,帮你梳理工作和生活",status:false}])
let seList = ref<List[]>([])
let copySeList = ref<List[]>([])

const deleteList = (i:number)=>{
  list.value.splice(i,1);

}
const addList = (obj:List)=>{
  list.value = copyList.value;
  list.value.unshift(obj)

}
const completeList = (item:List,i:number)=>{
  list.value.splice(i,1);
  list.value.push(item)

}
const searchList = (key:string)=>{
  seList.value = [];
  const temp:List[] = list.value;
  for(let i = 0; i<temp.length; i++){
    if(temp[i].content.indexOf(key)!==-1){
      seList.value.push(temp[i])
    }
  }
  if(seList.value.length === 0){
    seList.value.push({
      content:"没有该备忘录",
      status:false
    })
  }
  copyList.value = list.value;
  list.value = seList.value;
}
const todo = {
  list,
  seList,
  deleteList,
  addList,
  completeList,
  searchList,
}
provide("todoList",todo)

</script>

<template>
  <div>
    <Todo/>
  </div>
</template>

<style scoped>

</style>