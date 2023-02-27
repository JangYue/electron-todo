<script setup lang="ts">
import {ref,inject} from "vue"
import {List,ListMethod} from "../types/List"
const todo = ref<List>({
    status:false,
    content:""
})
let content = ref<string>("")
const {addList,searchList,list,seList} = inject<ListMethod>("todoList");

const saveData = ()=>{
    const temp:List =  JSON.parse(JSON.stringify(list)); 
    myTodo.save(temp)
}

const add = (cont:string)=>{ 
    const item:List = {
        content:cont,
        status:false
    }
    addList(item);
    content.value = ""

}
const search = ()=>{
    if(content.value!=="") {
         searchList(content.value)
    }
    content.value = ""
   
}

</script>
<template>
    <div class="add_box">
        <label class="todo_label">Todo</label>
        <input type="text" placeholder="输入备忘录内容..." v-model="content"/>
        <button class="add_btn" @click="add(content)">添加</button>
        <button class="add_search" @click="search">查询</button>
        <button class="add_save" @click="saveData">导出</button>
    </div>
</template>
<style scoped>
    .add_box{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .todo_label{
        font-size: 22px;
        margin-right:10px;
    }
    input{
        width: 200px;
        height: 20px;
    }
    .add_search{
        background-color:#ffaaaa;
        border: 4px solid white;
        border-radius: 20%;
    }
    .add_search:hover{
        background-color: #ff8888;
    }
    .add_btn{
        margin-left:15px;
        margin-right: 15px;
        background-color:#ffaaaa;
        border: 4px solid white;
        border-radius: 20%;
    }
    .add_btn:hover{
        background-color: #ff8888;
    }
    .add_save{
        margin-left:15px;
        background-color:#ffaaaa;
        border: 4px solid white;
        border-radius: 20%;
    }
    .add_save:hover{
        background-color: #ff8888;
    }
    

</style>