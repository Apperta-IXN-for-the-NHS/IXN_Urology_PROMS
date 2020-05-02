import React, { Component } from "react";
import Chart from "chart.js";
import axios from "../../axios";

export default class LineGraph extends Component {
  constructor(props) {
    super(props)
  }
  chartRef = React.createRef();
  async getData() {
    try{
      const response = await axios.get(`/api/results/${this.props.label}`);
      const data = response.data.data;
      const formattedData = data.map((item) => ({t: new Date(item.date.split("T")[0]), y: item.score}))
      return formattedData;
      console.log(data);
      console.log(formattedData);
    } catch (err) {
      return
    }
  }
  async componentDidMount() {
    let data = await this.getData();
    data = data ? data : [];
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: data.map((d) => d.t),
        datasets: [
          {
            label: `${this.props.label} Results`,
            data: data,
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
              time: {
                unit: "day",
                tooltipFormat: 'DD/MM/YYYY',
              },
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
