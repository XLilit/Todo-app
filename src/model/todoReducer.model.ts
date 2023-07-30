export interface ITodoState {
    data:ITodoTypes[]
}
export interface  ITodoTypes{
    id:number | string ;
    title:string ;
    available:boolean
}