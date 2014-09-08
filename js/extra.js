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

d3.selectAll(".servicecir")
		.on("mouseenter", function () {

			d3.select(this)
			  .transition().duration(200)
				.attr("stroke", "red")
		})

d3.selectAll(".servicecir")
		.on("mouseout", function () {

			d3.select(this)
			  .transition()
				.attr("stroke", "#777")
		})

