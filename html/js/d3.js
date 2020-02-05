d3.json("http://localhost:3000").then((data) => {
    data.forEach(d => d.aantal.numberInt = +d.aantal.numberInt);

    var svg = d3.select("#data-here").append("svg")
        .attr("width", 300)
        .attr("height", 300);

    var circles = svg.selectAll("circle")
        .data(data);

    circles.enter()
        .append("rect")
        .attr("x", (d, idx) => {
            return idx;
        })
        .attr("y", function (d, idx) {
            return 200;
        })
        .attr("height", function (d) {
            var x = d.aantal.numberInt;

            if (x <= 0) return 0;

            return x;
        })
        .attr("width", "2px")
        .attr("fill", (d) => {
            if (d.aantal.numberInt > 50)
                return 'rgb(204,0,0)';
            else if (d.aantal.numberInt > 40)
                return 'rgb(204,102,0)';
            else if (d.aantal.numberInt > 30)
                return 'rgb(204,204,0)';
            else if (d.aantal.numberInt > 20)
                return 'rgb(102,204,0)';
            else if (d.aantal.numberInt > 10)
                return 'rgb(0,0,204)';
            else
                return 'rgb(0,0,0';
        });
}).catch(error => { console.log(error) })

