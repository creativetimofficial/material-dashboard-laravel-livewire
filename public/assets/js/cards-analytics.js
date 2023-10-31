/**
 * Analytics Cards
 */

'use strict';

(function () {
  let cardColor, labelColor, headingColor, borderColor, grayColor, currentTheme, bodyColorLabel;

  if (isDarkStyle) {
    cardColor = config.colors_dark.cardColor;
    labelColor = config.colors_dark.textMuted;
    headingColor = config.colors_dark.headingColor;
    borderColor = config.colors_dark.borderColor;
    grayColor = '#3b3e59';
    currentTheme = 'dark';
    bodyColorLabel = config.colors_dark.bodyColor;
  } else {
    cardColor = config.colors.cardColor;
    labelColor = config.colors.textMuted;
    headingColor = config.colors.headingColor;
    borderColor = config.colors.borderColor;
    grayColor = '#f4f4f6';
    currentTheme = 'light';
    bodyColorLabel = config.colors.bodyColor;
  }

  const chartColors = {
    donut: {
      series1: config.colors.warning,
      series2: '#fdb528cc',
      series3: '#fdb52899',
      series4: '#fdb52866',
      series5: config.colors_label.warning
    },
    donut2: {
      series1: config.colors.success,
      series2: '#43ff64e6',
      series3: '#43ff6473',
      series4: '#43ff6433'
    },
    line: {
      series1: config.colors.warning,
      series2: config.colors.primary,
      series3: '#7367f029'
    }
  };

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

  // Performance Overview Line Chart
  // --------------------------------------------------------------------
  const performanceOverviewChartEl = document.querySelector('#performanceOverviewChart'),
    performanceOverviewChartConfig = {
      chart: {
        height: 218,
        type: 'line',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          data: [7, 65, 40, 7, 40, 80, 45, 65, 65]
        }
      ],
      stroke: {
        curve: 'stepline'
      },
      tooltip: {
        enabled: false
      },
      colors: [config.colors.warning],
      grid: {
        yaxis: {
          lines: {
            show: false
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
          breakpoint: 1200,
          options: {
            chart: {
              height: 268
            }
          }
        }
      ]
    };
  if (typeof performanceOverviewChartEl !== undefined && performanceOverviewChartEl !== null) {
    const performanceOverviewChart = new ApexCharts(performanceOverviewChartEl, performanceOverviewChartConfig);
    performanceOverviewChart.render();
  }

  // Visits By Day Bar Chart
  // --------------------------------------------------------------------
  const visitsByDayChartEl = document.querySelector('#visitsByDayChart'),
    visitsByDayChartConfig = {
      chart: {
        height: 240,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
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
        config.colors_label.primary,
        config.colors.primary,
        config.colors_label.primary,
        config.colors.primary,
        config.colors.primary,
        config.colors_label.primary,
        config.colors_label.primary
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
            colors: bodyColorLabel
          }
        }
      },
      yaxis: { show: false },
      responsive: [
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 210
            }
          }
        }
      ]
    };
  if (typeof visitsByDayChartEl !== undefined && visitsByDayChartEl !== null) {
    const visitsByDayChart = new ApexCharts(visitsByDayChartEl, visitsByDayChartConfig);
    visitsByDayChart.render();
  }

  // Organic Sessions Donut Chart
  // --------------------------------------------------------------------
  const organicSessionsEl = document.querySelector('#organicSessionsChart'),
    organicSessionsConfig = {
      chart: {
        height: 355,
        type: 'donut',
        parentHeightOffset: 0
      },
      labels: ['USA', 'India', 'Canada', 'Japan', 'France'],
      tooltip: { enabled: false },
      dataLabels: { enabled: false },
      stroke: {
        width: 3,
        lineCap: 'round',
        colors: [cardColor]
      },
      states: {
        hover: {
          filter: { type: 'none' }
        },
        active: {
          filter: { type: 'none' }
        }
      },
      plotOptions: {
        pie: {
          endAngle: 130,
          startAngle: -130,
          customScale: 0.9,
          donut: {
            size: '83%',
            labels: {
              show: true,
              name: {
                offsetY: 25,
                fontSize: '50rem',
                fontFamily: 'Inter',
                color: bodyColorLabel
              },
              value: {
                offsetY: -15,
                fontWeight: 500,
                fontSize: '2.125rem',
                fontFamily: 'Inter',
                color: headingColor,
                formatter: function (val) {
                  return parseInt(val) + 'K';
                }
              },
              total: {
                show: true,
                label: '2022',
                fontSize: '1rem',
                fontFamily: 'Inter',
                color: bodyColorLabel,
                formatter: function (w) {
                  return '89K';
                }
              }
            }
          }
        }
      },
      series: [13, 18, 18, 24, 16],
      tooltip: {
        enabled: false
      },
      legend: {
        position: 'bottom',
        fontFamily: 'Inter',
        fontSize: '15px',
        markers: { offsetX: -5 },
        itemMargin: { horizontal: 10 },
        labels: {
          colors: headingColor
        }
      },
      colors: [
        chartColors.donut.series1,
        chartColors.donut.series2,
        chartColors.donut.series3,
        chartColors.donut.series4,
        chartColors.donut.series5
      ]
    };
  if (typeof organicSessionsEl !== undefined && organicSessionsEl !== null) {
    const organicSessions = new ApexCharts(organicSessionsEl, organicSessionsConfig);
    organicSessions.render();
  }

  // Weekly Sales Line Chart
  // --------------------------------------------------------------------
  const weeklySalesEl = document.querySelector('#weeklySalesChart'),
    weeklySalesConfig = {
      chart: {
        stacked: true,
        type: 'line',
        height: 235,
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
            colors: bodyColorLabel
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

  // Project Timeline Range Bar Chart
  // --------------------------------------------------------------------
  const projectTimelineEl = document.querySelector('#projectTimelineChart'),
    labels = ['Development Apps', 'UI Design', 'IOS Application', 'Web App Wireframing', 'Prototyping'],
    labelsResponsive = ['Development', 'UI Design', 'Application', 'App Wireframing', 'Prototyping'],
    projectTimelineConfig = {
      chart: {
        height: 230,
        type: 'rangeBar',
        parentHeightOffset: 0,
        toolbar: { show: false }
      },
      series: [
        {
          data: [
            {
              x: 'Catherine',
              y: [
                new Date(`${new Date().getFullYear()}-01-01`).getTime(),
                new Date(`${new Date().getFullYear()}-05-02`).getTime()
              ],
              fillColor: config.colors.primary
            },
            {
              x: 'Janelle',
              y: [
                new Date(`${new Date().getFullYear()}-02-18`).getTime(),
                new Date(`${new Date().getFullYear()}-05-30`).getTime()
              ],
              fillColor: config.colors.success
            },
            {
              x: 'Wellington',
              y: [
                new Date(`${new Date().getFullYear()}-02-07`).getTime(),
                new Date(`${new Date().getFullYear()}-05-31`).getTime()
              ],
              fillColor: config.colors.secondary
            },
            {
              x: 'Blake',
              y: [
                new Date(`${new Date().getFullYear()}-01-14`).getTime(),
                new Date(`${new Date().getFullYear()}-06-30`).getTime()
              ],
              fillColor: config.colors.info
            },
            {
              x: 'Quinn',
              y: [
                new Date(`${new Date().getFullYear()}-04-01`).getTime(),
                new Date(`${new Date().getFullYear()}-07-31`).getTime()
              ],
              fillColor: config.colors.warning
            }
          ]
        }
      ],

      tooltip: { enabled: false },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 15,
          distributed: true,
          endingShape: 'rounded',
          startingShape: 'rounded',
          dataLabels: {
            hideOverflowingLabels: false
          }
        }
      },
      stroke: {
        width: 2,
        colors: [cardColor]
      },
      dataLabels: {
        enabled: true,
        style: { fontWeight: 400 },
        formatter: function (val, opts) {
          return labels[opts.dataPointIndex];
        }
      },
      states: {
        hover: { filter: { type: 'none' } },
        active: { filter: { type: 'none' } }
      },
      legend: { show: false },
      grid: {
        strokeDashArray: 6,
        borderColor,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: false } },
        padding: {
          top: -32,
          left: 15,
          right: 18,
          bottom: 4
        }
      },
      xaxis: {
        type: 'datetime',
        axisTicks: { show: false },
        axisBorder: { show: false },
        labels: {
          style: { colors: labelColor },
          datetimeFormatter: {
            year: 'MMM',
            month: 'MMM'
          }
        }
      },
      yaxis: {
        labels: {
          show: true,
          align: 'left',
          style: {
            fontSize: '0.875rem',
            colors: headingColor
          }
        }
      },
      responsive: [
        {
          breakpoint: 446,
          options: {
            dataLabels: {
              formatter: function (val, opts) {
                return labelsResponsive[opts.dataPointIndex];
              }
            }
          }
        }
      ]
    };
  if (typeof projectTimelineEl !== undefined && projectTimelineEl !== null) {
    const projectTimeline = new ApexCharts(projectTimelineEl, projectTimelineConfig);
    projectTimeline.render();
  }

  // Monthly Budget Area Chart
  // --------------------------------------------------------------------
  const monthlyBudgetEl = document.querySelector('#monthlyBudgetChart'),
    monthlyBudgetConfig = {
      chart: {
        height: 179,
        type: 'area',
        parentHeightOffset: 0,
        offsetY: -8,
        toolbar: { show: false }
      },
      tooltip: { enabled: false },
      dataLabels: { enabled: false },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      series: [
        {
          data: [0, 85, 25, 125, 90, 250, 200, 350]
        }
      ],
      grid: {
        show: false,
        padding: {
          left: 10,
          top: 0,
          right: 12
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityTo: 0.7,
          opacityFrom: 0.5,
          shadeIntensity: 1,
          stops: [0, 90, 100],
          colorStops: [
            [
              {
                offset: 0,
                opacity: 0.6,
                color: config.colors.success
              },
              {
                offset: 100,
                opacity: 0.1,
                color: cardColor
              }
            ]
          ]
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: 'light',
          shadeIntensity: 1,
          color: config.colors.success
        }
      },
      xaxis: {
        type: 'numeric',
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: { show: false },
      markers: {
        size: 1,
        offsetY: 1,
        offsetX: -5,
        strokeWidth: 4,
        strokeOpacity: 1,
        colors: ['transparent'],
        strokeColors: 'transparent',
        discrete: [
          {
            size: 7,
            seriesIndex: 0,
            dataPointIndex: 7,
            strokeColor: config.colors.success,
            fillColor: cardColor
          }
        ]
      },
      responsive: [
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 255
            }
          }
        }
      ]
    };
  if (typeof monthlyBudgetEl !== undefined && monthlyBudgetEl !== null) {
    const monthlyBudget = new ApexCharts(monthlyBudgetEl, monthlyBudgetConfig);
    monthlyBudget.render();
  }

  // Performance Radar Chart
  // --------------------------------------------------------------------
  const performanceChartEl = document.querySelector('#performanceChart'),
    performanceChartConfig = {
      chart: {
        height: 300,
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
          colors: bodyColorLabel,
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
            colors: [bodyColorLabel, bodyColorLabel, bodyColorLabel, bodyColorLabel, bodyColorLabel, bodyColorLabel],
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
      }
    };
  if (typeof performanceChartEl !== undefined && performanceChartEl !== null) {
    const performanceChart = new ApexCharts(performanceChartEl, performanceChartConfig);
    performanceChart.render();
  }

  // External Links Stacked Bar Chart
  // --------------------------------------------------------------------
  const externalLinksChartEl = document.querySelector('#externalLinksChart'),
    externalLinksChartConfig = {
      chart: {
        type: 'bar',
        height: 232,
        parentHeightOffset: 0,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'Google Analytics',
          data: [155, 135, 320, 100, 150, 335, 160]
        },
        {
          name: 'Facebook Ads',
          data: [110, 235, 125, 230, 215, 115, 200]
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          borderRadius: 10,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 6,
        lineCap: 'round',
        colors: [cardColor]
      },
      legend: {
        show: false
      },
      colors: [config.colors.primary, config.colors.secondary],
      grid: {
        strokeDashArray: 10,
        borderColor,
        padding: {
          top: -12,
          left: -4,
          right: -5,
          bottom: 5
        }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
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
      },
      responsive: [
        {
          breakpoint: 1441,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            }
          }
        },
        {
          breakpoint: 1025,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '45%'
              }
            }
          }
        },
        {
          breakpoint: 577,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '35%'
              }
            }
          }
        },
        {
          breakpoint: 426,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            }
          }
        }
      ]
    };
  if (typeof externalLinksChartEl !== undefined && externalLinksChartEl !== null) {
    const externalLinksChart = new ApexCharts(externalLinksChartEl, externalLinksChartConfig);
    externalLinksChart.render();
  }

  // Sales Country Bar Chart
  // --------------------------------------------------------------------
  const salesCountryChartEl = document.querySelector('#salesCountryChart'),
    salesCountryChartConfig = {
      chart: {
        type: 'bar',
        height: 295,
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
          borderRadius: 8,
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

  // Weekly Overview Line Chart
  // --------------------------------------------------------------------
  const weeklyOverviewChartEl = document.querySelector('#weeklyOverviewChart'),
    weeklyOverviewChartConfig = {
      chart: {
        type: 'line',
        height: 178,
        offsetY: -9,
        offsetX: -16,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'Sales',
          type: 'column',
          data: [83, 68, 56, 65, 65, 50, 39]
        },
        {
          name: 'Sales',
          type: 'line',
          data: [63, 38, 31, 45, 46, 27, 18]
        }
      ],
      plotOptions: {
        bar: {
          borderRadius: 9,
          columnWidth: '50%',
          endingShape: 'rounded',
          startingShape: 'rounded',
          colors: {
            ranges: [
              {
                to: 50,
                from: 40,
                color: config.colors.primary
              }
            ]
          }
        }
      },
      markers: {
        size: 3.5,
        strokeWidth: 2,
        fillOpacity: 1,
        strokeOpacity: 1,
        colors: [cardColor],
        strokeColors: config.colors.primary
      },
      stroke: {
        width: [0, 2],
        colors: [config.colors.primary]
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      colors: [grayColor],
      grid: {
        strokeDashArray: 10,
        borderColor,
        padding: {
          bottom: -10
        }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        tickPlacement: 'on',
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 90,
        show: true,
        tickAmount: 3,
        labels: {
          formatter: function (val) {
            return parseInt(val) + 'K';
          },
          style: {
            fontSize: '0.75rem',
            fontFamily: 'Inter',
            colors: labelColor
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
  if (typeof weeklyOverviewChartEl !== undefined && weeklyOverviewChartEl !== null) {
    const weeklyOverviewChart = new ApexCharts(weeklyOverviewChartEl, weeklyOverviewChartConfig);
    weeklyOverviewChart.render();
  }

  // datatbale bar chart

  const horizontalBarChartEl = document.querySelector('#horizontalBarChart'),
    horizontalBarChartConfig = {
      chart: {
        height: 270,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '70%',
          distributed: true,
          startingShape: 'rounded',
          borderRadius: 7
        }
      },
      grid: {
        strokeDashArray: 10,
        borderColor: borderColor,
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
          top: -35,
          bottom: -12
        }
      },

      colors: [
        config.colors.primary,
        config.colors.info,
        config.colors.success,
        config.colors.secondary,
        config.colors.danger,
        config.colors.warning
      ],
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff'],
          fontWeight: 200,
          fontSize: '13px',
          fontFamily: 'Inter'
        },
        formatter: function (val, opts) {
          return horizontalBarChartConfig.labels[opts.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: {
          enabled: false
        }
      },
      labels: ['UI Design', 'UX Design', 'Music', 'Animation', 'React', 'SEO'],
      series: [
        {
          data: [35, 20, 14, 12, 10, 9]
        }
      ],

      xaxis: {
        categories: ['6', '5', '4', '3', '2', '1'],

        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          },
          formatter: function (val) {
            return `${val}%`;
          }
        }
      },
      yaxis: {
        max: 35,
        labels: {
          style: {
            colors: [labelColor],
            fontFamily: 'Inter',
            fontSize: '13px'
          }
        }
      },
      tooltip: {
        enabled: true,
        style: {
          fontSize: '12px'
        },
        onDatasetHover: {
          highlightDataSeries: false
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return '<div class="px-3 py-2">' + '<span>' + series[seriesIndex][dataPointIndex] + '%</span>' + '</div>';
        }
      },
      legend: {
        show: false
      }
    };
  if (typeof horizontalBarChartEl !== undefined && horizontalBarChartEl !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartEl, horizontalBarChartConfig);
    horizontalBarChart.render();
  }

  // Shipment statistics Chart
  // --------------------------------------------------------------------
  const shipmentEl = document.querySelector('#shipmentStatisticsChart'),
    shipmentConfig = {
      series: [
        {
          name: 'Shipment',
          type: 'column',
          data: [38, 45, 33, 38, 32, 50, 48, 40, 42, 37]
        },
        {
          name: 'Delivery',
          type: 'line',
          data: [23, 28, 23, 32, 28, 44, 32, 38, 26, 34]
        }
      ],
      chart: {
        height: 270,
        type: 'line',
        stacked: false,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      markers: {
        size: 4,
        colors: [config.colors.white],
        strokeColors: chartColors.line.series2,
        hover: {
          size: 6
        },
        borderRadius: 4
      },
      stroke: {
        curve: 'smooth',
        width: [0, 3],
        lineCap: 'round'
      },
      legend: {
        show: true,
        position: 'bottom',
        markers: {
          width: 8,
          height: 8,
          offsetX: -3
        },
        height: 40,
        offsetY: 10,
        itemMargin: {
          horizontal: 10,
          vertical: 0
        },
        fontSize: '15px',
        fontFamily: 'Inter',
        fontWeight: 400,
        labels: {
          colors: headingColor,
          useSeriesColors: false
        },
        offsetY: 10
      },
      grid: {
        strokeDashArray: 8
      },
      colors: [chartColors.line.series1, chartColors.line.series2],
      fill: {
        opacity: [1, 1]
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 4
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        tickAmount: 10,
        categories: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px',
            fontFamily: 'Inter',
            fontWeight: 400
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
        tickAmount: 4,
        min: 10,
        max: 50,
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px',
            fontFamily: 'Inter',
            fontWeight: 400
          },
          formatter: function (val) {
            return val + '%';
          }
        }
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: {
              height: 270
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '10px'
                }
              }
            },
            legend: {
              itemMargin: {
                vertical: 0,
                horizontal: 10
              },
              fontSize: '13px',
              offsetY: 12
            }
          }
        },
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 415
            },
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            }
          }
        },
        {
          breakpoint: 982,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '30%'
              }
            }
          }
        },
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 250
            },
            legend: {
              offsetY: 7
            }
          }
        }
      ]
    };
  if (typeof shipmentEl !== undefined && shipmentEl !== null) {
    const shipment = new ApexCharts(shipmentEl, shipmentConfig);
    shipment.render();
  }

  // Reasons for delivery exceptions Chart
  // --------------------------------------------------------------------
  const deliveryExceptionsChartE1 = document.querySelector('#deliveryExceptionsChart'),
    deliveryExceptionsChartConfig = {
      chart: {
        height: 420,
        parentHeightOffset: 0,
        type: 'donut'
      },
      labels: ['Incorrect address', 'Weather conditions', 'Federal Holidays', 'Damage during transit'],
      series: [13, 25, 22, 40],
      colors: [
        chartColors.donut2.series1,
        chartColors.donut2.series2,
        chartColors.donut2.series3,
        chartColors.donut2.series4
      ],
      stroke: {
        width: 0
      },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        offsetY: 10,
        markers: {
          width: 8,
          height: 8,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 15,
          vertical: 5
        },
        fontSize: '13px',
        fontFamily: 'Inter',
        fontWeight: 400,
        labels: {
          colors: headingColor,
          useSeriesColors: false
        }
      },
      tooltip: {
        theme: currentTheme
      },
      grid: {
        padding: {
          top: 15
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              value: {
                fontSize: '26px',
                fontFamily: 'Inter',
                color: headingColor,
                fontWeight: 500,
                offsetY: -30,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Inter'
              },
              total: {
                show: true,
                fontSize: '0.9rem',
                label: 'AVG. Exceptions',
                color: bodyColorLabel,
                formatter: function (w) {
                  return '30%';
                }
              }
            }
          }
        }
      },
      responsive: [
        {
          breakpoint: 420,
          options: {
            chart: {
              height: 360
            }
          }
        }
      ]
    };
  if (typeof deliveryExceptionsChartE1 !== undefined && deliveryExceptionsChartE1 !== null) {
    const deliveryExceptionsChart = new ApexCharts(deliveryExceptionsChartE1, deliveryExceptionsChartConfig);
    deliveryExceptionsChart.render();
  }
})();
