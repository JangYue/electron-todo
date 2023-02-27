export type List = {
    content:string,
    status:boolean,

}
export interface ListMethod{
    list?:List,
    seList?:List,
    deleteList?:(i:number)=>void,
    addList?:(obj:List)=>void,
    completeList?:(item:List,i:number)=>void,
    searchList?:(key:string)=>void
}
