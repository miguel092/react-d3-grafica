import React, { Component } from 'react';
import Dimensions from 'react-dimensions';
import PieChart from './charts/PieChart';
import './styles/bootstrap.min.css';
import data from './data/data.json';
import './App.css';

const WIDTH = 220;
const HEIGHT = 220;
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          {
            Object.keys(data).map((e, i) => {
              console.log(data[e].title);
              return (
                <div className="col col-lg-4 col-sm-12  col-md-6 grafica">
                  <PieChart
                    data={data[e].values}
                    leyend={data[e].title}
                    total={data[e].total}
                    width={WIDTH}
                    height={HEIGHT}
                    colorSmar={data[e].colorLbl1}
                    colorTab={data[e].colorLbl2}
                  />
                </div>

              )
            })}
        </div>
      </div>
    );
  }
}

export default Dimensions()(App);
