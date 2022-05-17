import { getData } from './helper.js';


// because this Javascript is injected into the document head
window.addEventListener('load', function() {

    // https://www.zingchart.com/docs/api/json-configuration/

    // Render line chart
    const lineChart = {
      type: 'line', 
      title: {
        text: 'Idle Amounts over Time between different ', 
        fontSize: 24, 
        color: '#15133C'
      }, 
      legend: {
        draggable: true
      }, 
      "scale-x": {
        "min-value": 1383292800000,
        "shadow": 0,
        "step": 6000,
        "transform": {
          "type": "date",
          "all": "%D, %d %M<br />%h:%i %A",
          "item": {
            "visible": false
          }
        }, 
        "label": {
          "visible": false
        },
        "minor-ticks": 0
      }, 
      "scale-y": {
        "line-color": "#f6f7f8",
        "label": {
          "text": "Idle Time",
        },
        "minor-ticks": 0
      },
      "series": [{
        "values": [
          149.2,
          174.3,
          187.7,
          147.1,
          129.6,
          189.6,
          230,
          164.5,
          171.7,
          163.4,
          194.5,
          200.1,
          193.4,
          254.4,
          287.8,
          246,
          199.9,
          218.3,
          244,
          312.2,
          284.5,
          249.2,
          305.2,
          286.1,
          347.7,
          278,
          240.3,
          212.4,
          237.1,
          253.2,
          186.1,
          153.6,
          168.5,
          140.9,
          86.9,
          49.4,
          24.7,
          64.8,
          114.4,
          137.4
        ],
        "text": "Session 1",
        "line-color": "#205375",
        "legend-item": {
          "background-color": "#205375",
          "borderRadius": 5,
          "font-color": "white"
        },
        "legend-marker": {
          "visible": false
        },
        "marker": {
          "background-color": "#205375",
          "border-width": 1,
          "shadow": 0,
          "border-color": "#0AA1DD"
        },
        "highlight-marker": {
          "size": 6,
          "background-color": "#007790",
        }
      },
      {
        "values": [
          714.6,
          656.3,
          660.6,
          729.8,
          731.6,
          682.3,
          654.6,
          673.5,
          700.6,
          755.2,
          817.8,
          809.1,
          815.2,
          836.6,
          897.3,
          896.9,
          866.5,
          835.8,
          797.9,
          784.7,
          802.8,
          749.3,
          722.1,
          688.1,
          730.4,
          661.5,
          609.7,
          630.2,
          633,
          604.2,
          558.1,
          581.4,
          511.5,
          556.5,
          542.1,
          599.7,
          664.8,
          725.3,
          694.2,
          690.5
        ],
        "text": "Session 2",
        "line-color": "#F66B0E",
        "legend-item": {
          "background-color": "#F66B0E",
          "borderRadius": 5,
          "font-color": "white"
        },
        "legend-marker": {
          "visible": false
        },
        "marker": {
          "background-color": "#F66B0E",
          "border-width": 1,
          "shadow": 0,
          "border-color": "#EFD345"
        },
        "highlight-marker": {
          "size": 6,
          "background-color": "#F66B0E",
        }
      },
      {
        "values": [
          536.9,
          576.4,
          639.3,
          669.4,
          708.7,
          691.5,
          681.7,
          673,
          701.8,
          636.4,
          637.8,
          640.5,
          653.1,
          613.7,
          583.4,
          538,
          506.7,
          563.1,
          541.4,
          489.3,
          434.7,
          442.1,
          482.3,
          495.4,
          556.1,
          505.4,
          463.8,
          434.7,
          377.4,
          325.4,
          351.7,
          343.5,
          333.2,
          332,
          378.9,
          415.4,
          385,
          412.6,
          445.9,
          441.5
        ],
        "text": "Session 3",
        "line-color": "#EB5353",
        "legend-item": {
          "background-color": "#EB5353",
          "borderRadius": 5,
          "font-color": "white"
        },
        "legend-marker": {
          "visible": false
        },
        "marker": {
          "background-color": "#EB5353",
          "border-width": 1,
          "shadow": 0,
          "border-color": "#faa39f"
        },
        "highlight-marker": {
          "size": 6,
          "background-color": "#EB5353",
        }
      }
    ]
    }
    zingchart.render({
      id: 'line-chart', 
      data: lineChart, 
      height: '100%', 
      width: '100%'
    })
    
    // Render bar chart
    const barChart = {
      type: 'bar', 
      title: {
        text: 'Mouse Movement and Click amounts between Sessions',
        fontSize: 24,
        color: '#15133C'
      },
      scaleX: {
        label: {
          text: 'Sessions'
        },
        // convert text on scale indices
        labels: ['1', '2', '3']
      },
      legend: {
        draggable: true
      },
      scaleY: {
        label: {
          text: 'Amount'
        }
      }, 
      plot: {
        animation: {
          effect: 'ANIMATION_EXPAND_BOTTOM',
          method: 'ANIMATION_STRONG_EASE_OUT',
          sequence: 'ANIMATION_BY_NODE',
          speed: 275,
        }
      },
      series: [{
        // user 1 values
        values: [23, 20, 27],
        text: 'Mouse',
        backgroundColor: '#205375'
      },
      {
        // user 3 values, linear data
        values: [15, 22, 13],
        text: 'Clicks',
        backgroundColor: '#EB5353'
      }
    ]
    };
    zingchart.render({
      id: 'bar-chart', 
      data: barChart, 
      height: '100%', 
      width: '100%'
    });

    // Render pie chart
    const pieChart = {
      type: 'pie', 
      title: {
        text: 'Vowel Frequencies of Session 1',
        fontSize: 24,
        color: '#15133C', 
        align: 'left', 

      },
      plot: {
        valueBox: {
          placement: 'out',
          text: '%t\n%npv%',
          fontFamily: "Open Sans"
        },
      },
      plotarea: {
        margin: "20 0 0 0"
      },
      series: [{
        values: [11.38],
        text: "A",
        backgroundColor: '#50ADF5',
      },
      {
        values: [56.94],
        text: "E",
        backgroundColor: '#FF7965',
      },
      {
        values: [14.52],
        text: 'I',
        backgroundColor: '#FFCB45',
      },
      {
        text: 'O',
        values: [9.69],
        backgroundColor: '#6877e5'
      },
      {
        text: 'U',
        values: [7.48],
        backgroundColor: '#6FB07F'
      }
      ]
    }
    zingchart.render({
      id: 'pie-chart', 
      data: pieChart, 
      height: '100%', 
      width: '100%'
    })


  });