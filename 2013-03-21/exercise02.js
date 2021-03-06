/*
 *  exercise02a
 * 
 * Write a contructor function Edge
 * that create an edge given its two vertices (i.e. two points).
 */
function Edge(p1, p2) {
	this.p1 = p1;
	this.p2 = p2;
}
/*
 *  exercise02b
 * 
 * Write a method length for Edge
 * that compute the length of the edge.
 */
Edge.prototype.length = function() {
	return Math.sqrt(Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2));
}