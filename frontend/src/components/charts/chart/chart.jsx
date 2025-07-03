import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
        datasets: [{
          label: 'Acquisitions by year',
          data: [10, 20, 15, 25, 22, 30, 28],
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    return () => chart.destroy();
  }, []);

    return (
    <div style={{ width: 800 }} className='charts-main'>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Graph;