import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Chart as ChartJS } from 'chart.js/auto';
import { FunnelController,TrapezoidElement} from 'chartjs-chart-funnel';
import { jsPDF } from 'jspdf'; 
import html2canvas from 'html2canvas';
import "./Charts.css";
import {
  Chart,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement, 
  PieController,
  DoughnutController,
  PolarAreaController,
  RadarController,
  ScatterController,
  BubbleController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
} from 'chart.js';

Chart.register(
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  PieController,
  DoughnutController,
  PolarAreaController,
  RadarController,
  ScatterController,
  BubbleController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  FunnelController,
  TrapezoidElement,
);

const ExcelChart = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [xAxis, setXAxis] = useState('default');
  const [yAxis, setYAxis] = useState('default');
  const [chartInstance, setChartInstance] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet, { defval: '' });
      setData(json);

      if (json.length > 0) {
        setHeaders(Object.keys(json[0]));
      }
    };

    reader.readAsBinaryString(file);
  };

  const drawChart = () => {
    if (xAxis === 'default' || yAxis === 'default'){
      alert("Please select a file."); 
      return ;
    } 
    const ctx = document.getElementById('myChart').getContext('2d');

    if (chartInstance) chartInstance.destroy();

    const labels = data.map(row => row[xAxis]);
    const values = data.map(row => parseFloat(row[yAxis]) || 0);
    let chartType = document.getElementById('chart-type').value ;
    let downloadBtn = document.querySelector('.download');
    let chartOptions = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          },
        }
      };
    let chartDataset = [{
          label: `${yAxis} by ${xAxis}`,
          data: values,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }];
    if(chartType === 'area'){
      chartType = "line" ;
      chartDataset[0].fill = true ; 
      chartOptions = {
        plugins: {
          filler: {
            propagate: true
          }
        }
      };
    }
    else if(chartType === 'funnel'){
      chartDataset[0].fill = true ; 
      chartOptions = {
        indexAxis: 'y',
        options: {
          responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
      };
    }
    else if (chartType === 'scatter' || chartType === 'bubble') {
      chartDataset[0].data = data.map((row, i) => {
        const point = {
          x: i,
          y: parseFloat(row[yAxis]) || 0
        };
    
        if (chartType === 'bubble') {
          point.r = 5;
        }
        return point;
        });
    }
    else if (chartType === 'waterfall') {
      const waterfallData = [];
      let runningTotal = 0;

      values.forEach((val) => {
       runningTotal += val;
       waterfallData.push(runningTotal - val); 
      });

      chartDataset[0].data = waterfallData;
      chartDataset[0].type = 'bar';
      chartDataset[0].waterfall = { 
        finalValue: runningTotal, 
      };
      chartType = 'bar';
      chartOptions = {
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const value = values[ctx.dataIndex];
              return `Change: ${value >= 0 ? '+' : ''}${value}`;
            }
          }
        }
      }  
  }
}
    const newChart = new ChartJS(ctx, {
      type: chartType,
      data: {
        labels: labels,
        datasets: chartDataset
      },
      options: chartOptions
    });
    setChartInstance(newChart);
    downloadBtn.style.display = "block" ;
  };
  
  async function downloadPdf(){
    const canvas = document.getElementById('myChart');
    const pdf = new jsPDF('landscape');

    const imageData = await html2canvas(canvas , {
      scale : 2,
      logging : false,
      useCORS : true,
    });

    const imgWidth = 280;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imageData , 'PNG' , 10 , 10 , imgWidth , imgHeight);

    pdf.save('Chart.pdf');
  }
  return (
    <>
    <div className='input-panel'>
      <label htmlFor="file">Upload File: </label>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} id='file' required/>
      <label htmlFor="x-axis">X-Axis: </label>
      <select
        name="x-axis"
        id="x-axis"
        value={xAxis}
        onChange={(e) => setXAxis(e.target.value)}
        required
      >
        <option value="default">--Choose--</option>
        {headers.map(header => (
          <option key={header} value={header}>{header}</option>
        ))}
      </select>

      <label htmlFor="y-axis">Y-Axis: </label>
      <select
        name="y-axis"
        id="y-axis"
        value={yAxis}
        onChange={(e) => setYAxis(e.target.value)}
        required
      >
        <option value="default">--Choose--</option>
        {headers.map(header => (
          <option key={header} value={header}>{header}</option>
        ))}
      </select>
      <label htmlFor="chart-type">Chart type : </label>
      <select name="chart-type" id="chart-type" defaultValue={"default"} required>
        <option value="default">None</option>
        <option value="bar">Bar</option>
        <option value="line">Line</option>
        <option value="area">Area</option>
        <option value="pie">Pie</option>
        <option value="doughnut">Doughnut</option>
        <option value="polarArea">Polar Area</option>
        <option value="radar">Radar</option>
        <option value="scatter">Scatter</option>
        <option value="bubble">Bubble</option>
        <option value="funnel">Funnel</option>
        <option value="waterfall">Waterfall</option>
    </select>
    <button onClick={drawChart} disabled={xAxis === 'default' || yAxis === 'default'}>
        Generate Chart
      </button>
      <canvas id="myChart" width="100" height="100" className="chart-container"></canvas>
      <button onClick={downloadPdf} className='download'>Download as PDF</button>
    </div>
    </>
  );
};

export default ExcelChart;

