<script setup lang="ts">
import {ref,inject} from "vue"
import type { InjectionKey } from 'vue'
import  {List,ListMethod} from "../types/List"


let {list,deleteList,completeList} = inject<ListMethod>("todoList");


const complete = (cont:string,i:number,status:boolean)=>{
    const obj:List= {
        content:cont,
        status:true
    }
    if(status === false){
        completeList(obj,i)
    }
}

</script>
<template>
    <div class="list_box">
        <div class="list_item" v-for="(item,index) in list" :key="item.content">
           <div v-if="item.content==='没有该备忘录'">
                <div class="list_item_cont">没有该备忘录</div>
           </div>
            <div :class="{active:item.status}" v-else >
                <div class="list_item_cont">{{item.content}}</div>
                <input type="checkbox" v-model="item.status"  @click="complete(item.content,index,item.status)"/>
                <span class="list_item_com">完成</span>
            </div>
             <button v-if="item.content!=='没有该备忘录'" class="list_item_del" @click="deleteList(index)">删除</button>
                
        </div>
    </div>
</template>
<style scoped>
    .list_box{
        margin-top:30px;
        
    }
    .list_item{ 
        position: relative;
        font-size: 16px;
        height: 35px;
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;
    }
    .active::before{
        position: absolute;
        z-index: 20;
        content: "";
        width: 80%;
        border: 1px solid #777;
    }
    .active{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffeeee;
        color: #bbb;
    }
    .list_item_cont{
        width: 200px;
        padding: 2px;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-right:5px;
    }
    .list_item_com{
        font-size: 16px;
        margin-right: 10px;

    }
    .list_item_del{
        background-color: #Ff6666;
        border: 2px solid #ff4444;
        color: white;
        border-radius: 10%;
        margin-left: 10px;
    }
    .list_item_del:hover{
        background-color: #ff4444;
    }

   .active .list_item_del{
     color: #888;
     height: 35px;

   }
  
 
</style>