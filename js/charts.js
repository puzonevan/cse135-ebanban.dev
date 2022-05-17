// because this Javascript is injected into the document head
window.addEventListener('load', function() {
    // Javascript code to execute after DOM content

    // full ZingChart schema can be found here:
    // https://www.zingchart.com/docs/api/json-configuration/
    const myConfig = {
      type: 'bar',
      title: {
        text: 'Hello World Demo',
        fontSize: 24,
        color: '#5d7d9a'
      },
      legend: {
        draggable: true,
      },
      scaleX: {
        // set scale label
        label: {
          text: 'Days'
        },
        // convert text on scale indices
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      scaleY: {
        // scale label with unicode character
        label: {
          text: 'Temperature (°F)'
        }
      },
      plot: {
        // animation docs here:
        // https://www.zingchart.com/docs/tutorials/design-and-styling/chart-animation/#animation__effect
        animation: {
          effect: 'ANIMATION_EXPAND_BOTTOM',
          method: 'ANIMATION_STRONG_EASE_OUT',
          sequence: 'ANIMATION_BY_NODE',
          speed: 275,
        }
      },
      series: [{
          // plot 1 values, linear data
          values: [23, 20, 27, 29, 25, 17, 15],
          text: 'Week 1',
          backgroundColor: '#4d80a6'
        },
        {
          // plot 2 values, linear data
          values: [35, 42, 33, 49, 35, 47, 35],
          text: 'Week 2',
          backgroundColor: '#70cfeb'
        },
        {
          // plot 2 values, linear data
          values: [15, 22, 13, 33, 44, 27, 31],
          text: 'Week 3',
          backgroundColor: '#8ee9de'
        }
      ]
    };

    // render chart with width and height to
    // fill the parent container CSS dimensions
    zingchart.render({
      id: 'myChart',
      data: myConfig,
      height: '100%',
      width: '100%'
    });
  });