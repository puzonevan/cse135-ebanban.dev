import { getData } from './helper.js';


// because this Javascript is injected into the document head
window.addEventListener('load', async() => {

    // https://www.zingchart.com/docs/api/json-configuration/
    let activity1 = await getData("https://ebanban.dev/api/activity/1");
    let activity2 = await getData("https://ebanban.dev/api/activity/2");
    let activity3 = await getData("https://ebanban.dev/api/activity/3");
    
    let idle1 = activity1.idle.map(item => item.length);
    let idle2 = activity2.idle.map(item => item.length);
    let idle3 = activity3.idle.map(item => item.length);

    let mouse1 = 0;
    activity1.mouse.forEach(item => {if(item.type == 'move'){ mouse1++; }});
    let mouse2 = 0;
    activity2.mouse.forEach(item => {if(item.type == 'move'){ mouse2++; }});
    let mouse3 = 0;
    activity3.mouse.forEach(item => {if(item.type == 'move'){ mouse3++; }});
    let click1 = 0;
    activity1.mouse.forEach(item => {if(item.type == 'click'){ click1++; }});
    let click2 = 0;
    activity2.mouse.forEach(item => {if(item.type == 'click'){ click2++; }});
    let click3 = 0;
    activity3.mouse.forEach(item => {if(item.type == 'click'){ click3++; }});

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
        "values": idle1,
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
        "values": idle2,
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
        "values": idle3,
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
        values: [mouse1, mouse2, mouse3],
        text: 'Mouse',
        backgroundColor: '#205375'
      },
      {
        // user 2 values
        values: [click1, click2, click3],
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