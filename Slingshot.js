class Slingshot{
 constructor(bodyA, bodyB){
     this.Slingshot= Constraint.create(options)

     var options = {
         bodyA: bodyA, 
         bodyB: bodyB,
         stiffness: 0.04,
         length: 10
     }
     World.add(world, this.Slingshot)
 }
display(){
    var pointA = this.Slingshot.bodyA.position

    var pointB = this.Slingshot.bodyB.position
}
}