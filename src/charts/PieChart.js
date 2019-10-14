import React from 'react';
import { pie, arc } from 'd3-shape';
import { scaleOrdinal } from 'd3-scale';
import Numbers from './Numbers'
import '../styles/bootstrap.min.css';

import '../styles/PieChart.css';

const size = 220;
const radius = size / 2;
var thickness = 10;

const dataArc = arc()
  .outerRadius(radius - thickness)
  .innerRadius(radius);

const pieChart = pie()
  .sort(null)
  .value(d => d.value);

const PieChart = ({ data, width, height, leyend, total, colorSmar, colorTab }) => {
  const color = scaleOrdinal([colorSmar, colorTab]);

  return (
    <div className="container-fluid ">
      <div className="col col-lg-12 col-sm-12 col-md-12 ">
        <div id="chart" className="d-flex justify-content-center">
          <svg width={width} height={height}>
            <g transform={`translate(${radius}, ${radius})`}>
              {pieChart(data).map((d, i) => (
                <g key={i} className="arc">
                  <path
                    d={dataArc(d)}
                    fill={color(d.data.label)}
                  />
                  <text className="text-up" dy="-0.9em">{leyend}</text>
                  <text className="text-down" dy="0.5em">{total}</text>
                </g>
              ))}
            </g>
          </svg>
        </div>
        <div className="row col-sm-12 col-lg-12 col-md-12 info">
          <div className="col col-lg-6 col-sm-12 col-md-12 d-flex 
            justify-content-start align-items-end ">
            <Numbers
              colorTag={colorTab}
              label={data[1].label}
              value={data[1].value}
              equivalent={data[1].equivalent}
            />
          </div>
          <div className="col col-lg-6 col-sm-12 col-md-12 d-flex justify-content-end ">
            <Numbers
              colorTag={colorSmar}
              label={data[0].label}
              value={data[0].value}
              equivalent={data[0].equivalent}              
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default PieChart;
