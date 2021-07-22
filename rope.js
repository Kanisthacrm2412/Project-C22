class Rope{
	constructor(BodyA,BodyB,PointA,PointB)
	{

	//create rope constraint here

	this.pointA = PointA;
	this.pointB = PointB;

	var rope_options={

		bodyA:BodyA,
		bodyB:BodyB,
		pointB:{x:this.pointA,y:this.pointA}

	}

	this.rope = Constraint.create(rope_options);
	World.add(world,this.rope);

	}


    //create display() here 

	display(){

		var posA = this.rope.bodyA.position;
		var posB = this.rope.bodyB.position;

		strokeWeight(2);
		line(posA.x,posA.y,posB.x+this.pointA,posB.y+this.pointB);


	}

}
