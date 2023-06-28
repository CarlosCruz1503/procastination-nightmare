export class TaskTable {

    //atributos
    name?: string
    state?: string
    type?: string
    startdate?: string
    enddate?: string
    inCharge?:string
    author?:string


    constructor(
        name = '',
        state = '',
        type = '',
        startdate = '',
        enddate= '',
        inCharge= '',
        author= ''
    ) {
        this.name = name;
        this.state = state;
        this.type = type;
        this.startdate = startdate;
        this.enddate = enddate;
        this.inCharge = inCharge;
        this.author = author;
    }

}