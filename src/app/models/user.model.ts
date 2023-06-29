export class User {

    //atributos
      //atributos
    image?:string
    email?:string 
    name?: string
    password?:string
    _id?:string

    constructor(
        name = "",
        email = "",
        password = "",
        image = "63f7d3ad4027ca9ce1e4ce1e",
        _id = ""
    ) {
        this.image = image;
        this.email = email;
        this.name = name;
        this.password= "";
        this._id
      }

}