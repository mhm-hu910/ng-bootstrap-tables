import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  users = [
    {name: "Ali", age: "21", gender: "male"},
    {name: "Sara", age: "15", gender: "female"},
    {name: "Ahmed", age: "32", gender: "male"},
    {name: "Salem", age: "46", gender: "male"},
    {name: "Basma", age: "24", gender: "female"}
  ];
}
