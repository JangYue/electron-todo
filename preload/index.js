const {contextBridge,ipcRenderer} = require("electron")

contextBridge.exposeInMainWorld('myTodo',{
    save:(list)=>{
        return ipcRenderer.invoke("savafile",list).then((res)=>{
            // console.log("成功",res)
        }).catch((fail)=>{
            // console.log("失败",fail)
        })
    }
    
})

