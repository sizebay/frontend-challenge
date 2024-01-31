import { ChangeEventHandler } from "react";
import { FilterEnum } from "./enums";

export interface ButtonInterface {
    label:string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    checked:boolean,
    value: FilterEnum,
    onClick: (e:any) => void,
}

export interface ChoreInterface {
        chore: string, 
        isDone: boolean, 
        id?: any ,
}

export interface ChoreActionInterface {
    type: string,
    payload: {
        chore: string, 
        isDone: boolean, 
        id: any,
    }
  }

export interface ItemInterface {
    title:string,
     id:number, 
     isDone:boolean,
}