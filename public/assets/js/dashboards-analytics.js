'use strict';

(function () {
  let cardColor, labelColor, headingColor, borderColor, bodyColor;

  if (isDarkStyle) {
    cardColor = config.colors_dark.cardColor;
    labelColor = config.colors_dark.textMuted;
    headingColor = config.colors_dark.headingColor;
    borderColor = config.colors_dark.borderColor;
    bodyColor = config.colors_dark.bodyColor;
  } else {
    cardColor = config.colors.cardColor;
    labelColor = config.colors.textMuted;
    headingColor = config.colors.headingColor;
    borderColor = config.colors.borderColor;
    bodyColor = config.colors.bodyColor;
  }

  // Sessions line chart
  // --------------------------------------------------------------------
  const sessionsChartEl = document.querySelector('#sessions'),
    sessionsChartConfig = {
      chart: {
        height: 102,
        type: 'line',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      grid: {
        borderColor: labelColor,
        strokeDashArray: 6,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -15,
          left: -7,
          right: 7,
          bottom: -15
        }
      },
      colors: [config.colors.info],
      stroke: {
        width: 3
      },
      series: [
        {
          data: [0, 20, 5, 30, 15, 45]
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
        }
      },
      xaxis: {
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      tooltip: {
        enabled: false
      },
      markers: {
        size: 6,
        strokeWidth: 3,
        strokeColors: 'transparent',
        strokeWidth: 3,
        colors: ['transparent'],
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: cardColor,
            strokeColor: config.colors.info,
            size: 6,
            shape: 'circle'
          }
        ],
        hover: {
          size: 7
        }
      },
      responsive: [
        {
          breakpoint: 1441,
          options: {
            chart: {
              height: 70
            }
          }
        },
        {
          breakpoint: 1310,
          options: {
            chart: {
              height: 90
            }
          }
        },
        {
          breakpoint: 1189,
          options: {
            chart: {
              height: 70
            }
          }
        },
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 73
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 102
            }
          }
        }
      ]
    };
  if (typeof sessionsChartEl !== undefined && sessionsChartEl !== null) {
    const sessionsChart = new ApexCharts(sessionsChartEl, sessionsChartConfig);
    sessionsChart.render();
  }

  // Total Transactions Bar Chart
  // --------------------------------------------------------------------
  const totalTransactionChartEl = document.querySelector('#totalTransactionChart'),
    totalTransactionChartConfig = {
      chart: {
        height: 218,
        stacked: true,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return Math.abs(val);
          }
        }
      },
      legend: { show: false },
      dataLabels: { enabled: false },
      colors: [config.colors.primary, config.colors.success],
      grid: {
        borderColor,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: false } },
        padding: {
          top: -5,
          bottom: -25
        }
      },
      states: {
        hover: { filter: { type: 'none' } },
        active: { filter: { type: 'none' } }
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          barHeight: '30%',
          horizontal: true,
          endingShape: 'flat',
          startingShape: 'rounded'
        }
      },
      xaxis: {
        position: 'top',
        axisTicks: { show: false },
        axisBorder: { show: false },
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          formatter: function (val) {
            return Math.abs(Math.round(val));
          },
          style: {
            colors: labelColor,
            fontFamily: 'Inter'
          }
        }
      },
      yaxis: { labels: { show: false } },
      series: [
        {
          name: 'Last Week',
          data: [83, 153, 213, 279, 213, 153, 83]
        },
        {
          name: 'This Week',
          data: [-84, -156, -216, -282, -216, -156, -84]
        }
      ]
    };
  if (typeof totalTransactionChartEl !== undefined && totalTransactionChartEl !== null) {
    const totalTransactionChart = new ApexCharts(totalTransactionChartEl, totalTransactionChartConfig);
    totalTransactionChart.render();
  }

  // Performance Radar Chart
  // --------------------------------------------------------------------
  const performanceChartEl = document.querySelector('#performanceChart'),
    performanceChartConfig = {
      chart: {
        height: 247,
        type: 'radar',
        toolbar: {
          show: false
        }
      },
      legend: {
        show: true,
        markers: { offsetX: -2 },
        itemMargin: { horizontal: 10 },
        fontFamily: 'Inter',
        fontSize: '15px',
        labels: {
          colors: bodyColor,
          useSeriesColors: false
        }
      },
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: borderColor,
            connectorColors: borderColor
          }
        }
      },
      yaxis: {
        show: false
      },
      series: [
        {
          name: 'Income',
          data: [70, 90, 80, 95, 75, 90]
        },
        {
          name: 'Net Worth',
          data: [110, 72, 62, 65, 100, 75]
        }
      ],
      colors: [config.colors.warning, config.colors.primary],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          show: true,
          style: {
            colors: [bodyColor, bodyColor, bodyColor, bodyColor, bodyColor, bodyColor],
            fontSize: '15px',
            fontFamily: 'Inter'
          }
        }
      },
      fill: {
        opacity: [1, 0.9]
      },
      stroke: {
        show: false,
        width: 0
      },
      markers: {
        size: 0
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          bottom: -10
        }
      },
      responsive: [
        {
          breakpoint: 1398,
          options: {
            chart: {
              height: 287
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 393
            }
          }
        }
      ]
    };
  if (typeof performanceChartEl !== undefined && performanceChartEl !== null) {
    const performanceChart = new ApexCharts(performanceChartEl, performanceChartConfig);
    performanceChart.render();
  }

  // Total Revenue
  // --------------------------------------------------------------------
  const totalRevenueEl = document.querySelector('#totalRevenue'),
    totalRevenueConfig = {
      chart: {
        height: 115,
        type: 'bar',
        distributed: true,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      grid: {
        padding: {
          top: -20,
          left: -14,
          right: 0,
          bottom: -15
        },
        yaxis: {
          lines: { show: false }
        }
      },
      series: [
        {
          name: 'Earning',
          data: [120, 200, 150, 120]
        },
        {
          name: 'Expense',
          data: [72, 120, 50, 65]
        }
      ],
      legend: {
        show: false
      },
      tooltip: {
        enabled: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [config.colors.primary, config.colors.warning],
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '48%',
          startingShape: 'rounded'
        }
      },
      states: {
        hover: {
          filter: {
            // type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      xaxis: {
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      responsive: [
        {
          breakpoint: 834,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 4
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 8
              }
            }
          }
        },
        {
          breakpoint: 426,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10
              }
            }
          }
        }
      ]
    };
  if (typeof totalRevenueEl !== undefined && totalRevenueEl !== null) {
    const totalRevenue = new ApexCharts(totalRevenueEl, totalRevenueConfig);
    totalRevenue.render();
  }

  // Overview Chart
  // --------------------------------------------------------------------
  const overviewChartEl = document.querySelector('#overviewChart'),
    overviewChartConfig = {
      chart: {
        height: 134,
        type: 'radialBar',
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '55%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: true,
              offsetY: 5,
              fontWeight: 500,
              fontSize: '1rem',
              fontFamily: 'Inter',
              color: headingColor
            }
          },
          track: {
            background: config.colors_label.secondary
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      stroke: {
        lineCap: 'round'
      },
      colors: [config.colors.primary],
      grid: {
        padding: {
          bottom: -15
        }
      },
      series: [64],
      labels: ['Progress']
    };
  if (typeof overviewChartEl !== undefined && overviewChartEl !== null) {
    const overviewChart = new ApexCharts(overviewChartEl, overviewChartConfig);
    overviewChart.render();
  }

  // Sales Country Bar Chart
  // --------------------------------------------------------------------
  const salesCountryChartEl = document.querySelector('#salesCountryChart'),
    salesCountryChartConfig = {
      chart: {
        type: 'bar',
        height: 368,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'Sales',
          data: [17165, 13850, 12375, 9567, 7880]
        }
      ],
      plotOptions: {
        bar: {
          borderRadius: 10,
          barHeight: '60%',
          horizontal: true,
          distributed: true,
          startingShape: 'rounded',
          dataLabels: {
            position: 'bottom'
          }
        }
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        offsetY: 8,
        offsetX: 11,
        style: {
          fontWeight: 500,
          fontSize: '0.9375rem',
          fontFamily: 'Inter'
        }
      },
      tooltip: {
        enabled: false
      },
      legend: {
        show: false
      },
      colors: [
        config.colors.primary,
        config.colors.success,
        config.colors.warning,
        config.colors.info,
        config.colors.danger
      ],
      grid: {
        strokeDashArray: 8,
        borderColor,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: false } },
        padding: {
          top: -18,
          left: 21,
          right: 33,
          bottom: 10
        }
      },
      xaxis: {
        categories: ['US', 'IN', 'JA', 'CA', 'AU'],
        labels: {
          formatter: function (val) {
            return Number(val / 1000) + 'K';
          },
          style: {
            fontSize: '0.9375rem',
            colors: labelColor,
            fontFamily: 'Inter'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontWeight: 500,
            fontSize: '0.9375rem',
            colors: headingColor,
            fontFamily: 'Inter'
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof salesCountryChartEl !== undefined && salesCountryChartEl !== null) {
    const salesCountryChart = new ApexCharts(salesCountryChartEl, salesCountryChartConfig);
    salesCountryChart.render();
  }

  // Weekly Sales Line Chart
  // --------------------------------------------------------------------
  const weeklySalesEl = document.querySelector('#weeklySalesChart'),
    weeklySalesConfig = {
      chart: {
        stacked: true,
        type: 'line',
        height: 261,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      tooltip: { enabled: false },
      series: [
        {
          type: 'column',
          name: 'Earning',
          data: [90, 52, 67, 45, 75, 55, 48]
        },
        {
          type: 'column',
          name: 'Expense',
          data: [-53, -29, -67, -84, -60, -40, -77]
        },
        {
          type: 'line',
          name: 'Expense',
          data: [73, 20, 50, -20, 58, 15, 31]
        }
      ],
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '57%',
          endingShape: 'flat',
          startingShape: 'rounded'
        }
      },
      markers: {
        size: 4,
        strokeWidth: 3,
        fillOpacity: 1,
        strokeOpacity: 1,
        colors: [cardColor],
        strokeColors: config.colors.warning
      },
      stroke: {
        curve: 'smooth',
        width: [0, 0, 3],
        colors: [config.colors.warning]
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      colors: [config.colors.primary, config.colors_label.primary],
      grid: {
        yaxis: { lines: { show: false } },
        padding: {
          top: -28,
          left: -6,
          right: -8,
          bottom: -5
        }
      },
      xaxis: {
        axisTicks: { show: false },
        axisBorder: { show: false },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: {
          style: {
            colors: bodyColor
          }
        }
      },
      yaxis: {
        max: 100,
        min: -100,
        show: false
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof weeklySalesEl !== undefined && weeklySalesEl !== null) {
    const weeklySales = new ApexCharts(weeklySalesEl, weeklySalesConfig);
    weeklySales.render();
  }

  // Visits By Day Bar Chart
  // --------------------------------------------------------------------
  const visitsByDayChartEl = document.querySelector('#visitsByDayChart'),
    visitsByDayChartConfig = {
      chart: {
        height: 238,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 12,
          distributed: true,
          columnWidth: '55%',
          endingShape: 'rounded',
          startingShape: 'rounded'
        }
      },
      series: [
        {
          data: [38, 55, 48, 65, 80, 38, 48]
        }
      ],
      tooltip: {
        enabled: false
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [
        config.colors_label.warning,
        config.colors.warning,
        config.colors_label.warning,
        config.colors.warning,
        config.colors.warning,
        config.colors_label.warning,
        config.colors_label.warning
      ],
      grid: {
        show: false,
        padding: {
          top: -15,
          left: -7,
          right: -4
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      xaxis: {
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        },
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        labels: {
          style: {
            colors: bodyColor
          }
        }
      },
      yaxis: { show: false },
      responsive: [
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 266
            }
          }
        }
      ]
    };
  if (typeof visitsByDayChartEl !== undefined && visitsByDayChartEl !== null) {
    const visitsByDayChart = new ApexCharts(visitsByDayChartEl, visitsByDayChartConfig);
    visitsByDayChart.render();
  }
})();
