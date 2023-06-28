export class Habit {

name?: string
description?: string
startDate?: string
frequency?: string
completed?: boolean
category?: string
id?: string

constructor (

    name = '',
    description = '',
    startDate = '',
    frequency = '',
    completed = false,
    category = '',
    id = ''
    
){
    this.name = name;    
    this.description = description;
    this.startDate = startDate;
    this.frequency = frequency;
    this.completed = completed;
    this.category = category;
    this.id = id;
   
}

}