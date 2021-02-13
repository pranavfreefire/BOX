class Ground{
constructor(){
   var Options ={
    isStatic:true   
   }
this.ground=Bodies.rectangle(200,400,400,10,Options)
World.add(world,this.ground)
}

}