/*
 *  exercise03a
 * 
 * Write a constructor function Trinagle
 * that create a triangle given its three edges.
 */
function Triangle(e1, e2, e3) {
	this.edge1 = e1;
	this.edge2 = e2;
	this.edge3 = e3;
}

/*
 *  exercise03b
 * 
 * Write a method perimeter for Triangle
 * that compute the perimeter of the triangle.
 */
Triangle.prototype.perimeter = function() {
	return this.edge1.length() + this.edge2.length() + this.edge3.length();
}

/*  exercise03b
 * 
 * Write a method area for Triangle
 * that compute the area of the triangle
 */
Triangle.prototype.area = function() {
	var p = this.perimeter()/2;
	return Math.sqrt(p * (p-this.edge1.length()) * (p-this.edge2.length()) * (p-this.edge3.length()));
}
