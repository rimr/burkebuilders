/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.10.0 - 2014-01-15
 * License: MIT
 */

$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

$('#navlogo').affix({
      offset: {
        top: $('header').height()
      }
});	

d3.selectAll(".topnav")
		.on("mouseenter", function () {

			d3.select(this)
				.transition().duration(200)
				.style("color","red")
				.style("text-decoration","underline");
			})

d3.selectAll(".topnav")
		.on("mouseout", function () {

			d3.select(this)
				.transition().duration(200)
				.style("color","")
				.style("text-decoration","");
			})


d3.selectAll(".servicemask")
		.on("mouseenter", function () {

			d3.select(this.parentNode).select(".servicecir")
			  .transition().duration(200)
				.attr("stroke", "red");

			d3.select(this.parentNode)
			  .select("text")
			.transition()
			  .attr("transform", "translate(" + 0 + "," + -10 + ")")
		})

d3.selectAll(".servicemask")
		.on("mouseout", function () {

			d3.select(this.parentNode).select(".servicecir")
			  .transition()
				.attr("stroke", "#777")

			d3.select(this.parentNode)
			  .selectAll("text")
			.transition()
			  .attr("transform", "translate(" + 0 + "," + 0 + ")")
		})









		



