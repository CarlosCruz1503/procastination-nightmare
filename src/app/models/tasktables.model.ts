export class TaskTable {

    //atributos
    _id?:string
    name?: string
    state?: string
    type?: string
    startdate?: string
    enddate?: string
    inCharge?:string
    author?:string


    constructor(
        _id='',
        name = '',
        state = '',
        type = '',
        startdate = '',
        enddate= '',
        inCharge= '',
        author= ''
    ) {
        this._id=_id;
        this.name = name;
        this.state = state;
        this.type = type;
        this.startdate = startdate;
        this.enddate = enddate;
        this.inCharge = inCharge;
        this.author = author;
    }

}