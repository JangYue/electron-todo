const {app,BrowserWindow,ipcMain,Tray,nativeImage,Menu,dialog} = require("electron")
const WinState = require("electron-win-state").default
const path = require("path")
const fs = require("fs")



const createWindow = ()=>{
    const winState = new WinState({
        defaultWidth:530,
        defaultHeight:800, 
    }) 
    const win = new BrowserWindow({
        // 自定义窗口状态
       ...winState.winOptions,
       webPreferences:{
        // 预加载
        preload:path.resolve(__dirname,"./preload/index.js")
       },
       show:false
    })
    win.loadURL("http://localhost:5173")

    winState.manage(win)

    // 页面加载完后才打开窗口 
    win.on("ready-to-show",()=>{
        win.show();
    })
    createMenu();
}
  
app.whenReady().then(()=>{
   createWindow();
    app.on("activate",()=>{
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    })

    app.on('window-all-closed',()=>{
        if(process.platform!=='darwin'){
            app.quit()
        }
    })

})


const createMenu = ()=>{
    const menu = [
        {
            label:"退出",
            role:"quit"
        }
       ]
       const menuBuilder = Menu.buildFromTemplate(menu)
       Menu.setApplicationMenu(menuBuilder)
    
    }

ipcMain.handle("savafile",async(event,todo)=>{
    const list = todo._value;
    let str = '';
    for(let i = 0; i<list.length;i++){
        if(list[i].content.indexOf("贴心代办")){
            if(list[i].status){
                str +=`${i+1}  ${list[i].content}   完成 \n`
            }else{
                str +=`${i+1}  ${list[i].content}   未完成 \n`
            }
           
        }
       
    }
    return await dialog.showSaveDialog({
        title:"保存便签内容",
        properties:['saveFile'],
        filters:[
            {name:'TXT',extensions:['txt']}
        ]
    }).then(async(res)=>{
        if(res.filePath){
            fs.writeFileSync(res.filePath,str)
        } 
       
    }).catch(err=>{
        console.log(err)
    })
})
