import React, { Component } from "react";
import Chart from "chart.js";

export default class LineGraph extends Component {
  chartRef = React.createRef();
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: this.props.data.map((d) => d.t),
        datasets: [
          {
            label: this.props.label,
            data: this.props.data,
            backgroundColor: "#003087",
            borderColor: "#003087",
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "linear",
            },
          ],
        },
      },
    });
  }
  render() {
    const canvasStyle = {
      backgroundColor: "#ffff",
    };
    return (
      <div>
        <canvas style={canvasStyle} id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
