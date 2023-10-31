/**
 * Statistics Cards
 */

'use strict';

(function () {
  let cardColor, labelColor, headingColor, bodyColor;

  if (isDarkStyle) {
    cardColor = config.colors_dark.cardColor;
    labelColor = config.colors_dark.textMuted;
    headingColor = config.colors_dark.headingColor;
    bodyColor = config.colors_dark.bodyColor;
  } else {
    cardColor = config.colors.cardColor;
    labelColor = config.colors.textMuted;
    headingColor = config.colors.headingColor;
    bodyColor = config.colors.bodyColor;
  }

  // Total Revenue
  // --------------------------------------------------------------------
  const totalRevenueEl = document.querySelector('#totalRevenue'),
    totalRevenueConfig = {
      chart: {
        height: 100,
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
      }
    };
  if (typeof totalRevenueEl !== undefined && totalRevenueEl !== null) {
    const totalRevenue = new ApexCharts(totalRevenueEl, totalRevenueConfig);
    totalRevenue.render();
  }

  // Sessions line chart
  // --------------------------------------------------------------------
  const sessionsChartEl = document.querySelector('#sessions'),
    sessionsChartConfig = {
      chart: {
        height: 100,
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
          breakpoint: 768,
          options: {
            chart: {
              height: 110
            }
          }
        }
      ]
    };
  if (typeof sessionsChartEl !== undefined && sessionsChartEl !== null) {
    const sessionsChart = new ApexCharts(sessionsChartEl, sessionsChartConfig);
    sessionsChart.render();
  }

  // Overview Chart
  // --------------------------------------------------------------------
  const overviewChartEl = document.querySelector('#overviewChart'),
    overviewChartConfig = {
      chart: {
        height: 114,
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

  // Total Profit Chart
  // --------------------------------------------------------------------
  const totalProfitChartEl = document.querySelector('#totalProfitChart'),
    totalProfitChartConfig = {
      chart: {
        type: 'bar',
        height: 100,
        parentHeightOffset: 0,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'PRODUCT A',
          data: [44, 21, 56, 34, 47]
        },
        {
          name: 'PRODUCT B',
          data: [-27, -17, -31, -23, -31]
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '28%',
          borderRadius: 5,
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
        width: 1,
        lineCap: 'round',
        colors: [cardColor]
      },
      legend: {
        show: false
      },
      colors: [config.colors.secondary, config.colors.danger],
      grid: {
        show: false,
        padding: {
          top: -21,
          right: 0,
          left: -10,
          bottom: -16
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
      }
    };
  if (typeof totalProfitChartEl !== undefined && totalProfitChartEl !== null) {
    const totalProfitChart = new ApexCharts(totalProfitChartEl, totalProfitChartConfig);
    totalProfitChart.render();
  }

  // Total Sales Chart
  // --------------------------------------------------------------------
  const totalSalesChartEl = document.querySelector('#totalSalesChart'),
    totalSalesChartConfig = {
      chart: {
        type: 'line',
        height: 100,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          data: [0, 30, 10, 70, 40, 110, 95]
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '28%',
          borderRadius: 5,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      tooltip: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 4,
        lineCap: 'round'
      },
      legend: {
        show: false
      },
      colors: [config.colors.warning],
      grid: {
        show: false,
        padding: {
          left: -5,
          top: -15,
          right: 5,
          bottom: -10
        }
      },
      xaxis: {
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
      }
    };
  if (typeof totalSalesChartEl !== undefined && totalSalesChartEl !== null) {
    const totalSalesChart = new ApexCharts(totalSalesChartEl, totalSalesChartConfig);
    totalSalesChart.render();
  }

  // Total Growth Chart
  // --------------------------------------------------------------------
  const totalGrowthChartEl = document.querySelector('#totalGrowthChart'),
    totalGrowthChartConfig = {
      chart: {
        height: 127,
        parentHeightOffset: 0,
        type: 'donut'
      },
      labels: [`${new Date().getFullYear()}`, `${new Date().getFullYear() - 1}`, `${new Date().getFullYear() - 2}`],
      series: [35, 30, 23],
      colors: [config.colors.primary, config.colors.success, config.colors.secondary],
      stroke: {
        width: 5,
        colors: cardColor
      },
      tooltip: {
        y: {
          formatter: function (val, opt) {
            return parseInt(val) + '%';
          }
        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      states: {
        hover: {
          filter: { type: 'none' }
        },
        active: {
          filter: { type: 'none' }
        }
      },
      legend: {
        show: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              value: {
                fontSize: '1rem',
                fontFamily: 'Inter',
                color: bodyColor,
                fontWeight: 500,
                offsetY: 4,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                show: false
              },
              total: {
                label: '',
                show: true,
                fontSize: '1.5rem',
                fontWeight: 500,
                formatter: function (w) {
                  return '12%';
                }
              }
            }
          }
        }
      }
    };
  if (typeof totalGrowthChartEl !== undefined && totalGrowthChartEl !== null) {
    const totalGrowthChart = new ApexCharts(totalGrowthChartEl, totalGrowthChartConfig);
    totalGrowthChart.render();
  }

  // Sales & Profit Chart
  // --------------------------------------------------------------------

  // Sales & Profit Chart function
  function salesProfitLineChart(arrayData, chartColor) {
    const salesProfitLineChartConfig = {
      chart: {
        height: 77,
        parentHeightOffset: 0,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      tooltip: { enabled: false },
      markers: {
        size: 5,
        offsetY: 1,
        offsetX: -2,
        strokeWidth: 2,
        strokeOpacity: 1,
        colors: 'transparent',
        strokeColors: 'transparent',
        discrete: [
          {
            size: 5,
            fillColor: cardColor,
            seriesIndex: 0,
            dataPointIndex: 5,
            strokeColor: chartColor
          }
        ]
      },
      grid: {
        show: false,
        padding: {
          left: -7,
          top: -15
        }
      },
      colors: [chartColor],
      stroke: {
        width: 3,
        curve: 'smooth',
        lineCap: 'round'
      },
      series: [
        {
          data: arrayData
        }
      ],
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: { labels: { show: false } },
      responsive: [
        {
          breakpoint: 1441,
          options: {
            chart: {
              height: 90
            }
          }
        },
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 78
            }
          }
        },
        {
          breakpoint: 577,
          options: {
            chart: {
              height: 87
            }
          }
        }
      ]
    };
    return salesProfitLineChartConfig;
  }

  var chartJson = 'sales-profit-charts.json';
  // Sales & Profit Chart JSON data
  var salesProfitChart = $.ajax({
    url: assetsPath + 'json/' + chartJson, //? Use your own search api instead
    dataType: 'json',
    async: false
  }).responseJSON;

  // Sales
  const salesChartEl = document.querySelector('#salesChart'),
    salesChartConfig = salesProfitLineChart(
      salesProfitChart['data'][0]['chart_data'],
      config.colors[salesProfitChart['data'][0]['chart_color']]
    );
  if (typeof salesChartEl !== undefined && salesChartEl !== null) {
    const salesChart = new ApexCharts(salesChartEl, salesChartConfig);
    salesChart.render();
  }

  // Profit
  const profitChartEl = document.querySelector('#profitChart'),
    profitChartConfig = salesProfitLineChart(
      salesProfitChart['data'][1]['chart_data'],
      config.colors[salesProfitChart['data'][1]['chart_color']]
    );
  if (typeof profitChartEl !== undefined && profitChartEl !== null) {
    const profitChart = new ApexCharts(profitChartEl, profitChartConfig);
    profitChart.render();
  }

  // Sales This Month
  // --------------------------------------------------------------------
  const saleThisMonthChartEl = document.querySelector('#saleThisMonth'),
    saleThisMonthChartConfig = {
      chart: {
        height: 100,
        type: 'line',
        parentHeightOffset: 0,
        toolbar: { show: false },
        dropShadow: {
          top: 14,
          blur: 4,
          left: 0,
          enabled: true,
          opacity: 0.12,
          color: config.colors.primary
        }
      },

      tooltip: { enabled: false },
      grid: {
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: false } },
        padding: {
          top: -12,
          left: -2,
          right: 8,
          bottom: -10
        }
      },
      colors: [config.colors.primary],
      stroke: {
        width: 5,
        lineCap: 'round'
      },
      series: [
        {
          data: [200, 200, 500, 500, 300, 300, 100, 100, 450, 450, 650, 650]
        }
      ],
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: {
        min: 0,
        labels: { show: false }
      },
      responsive: [
        {
          breakpoint: 1441,
          options: {
            chart: {
              height: 125
            }
          }
        },
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 100
            }
          }
        }
      ]
    };
  if (typeof saleThisMonthChartEl !== undefined && saleThisMonthChartEl !== null) {
    const saleThisMonthChart = new ApexCharts(saleThisMonthChartEl, saleThisMonthChartConfig);
    saleThisMonthChart.render();
  }

  // Total Impression & Order Chart
  // --------------------------------------------------------------------

  // Impression & Order Chart Function
  function orderImpressionRadialBar(color, value, icon) {
    const orderImpressionRadialBarOpt = {
      chart: {
        height: 90,
        type: 'radialBar',
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '52%',
            image: icon,
            imageWidth: 18,
            imageHeight: 18,
            imageClipped: false
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
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
      colors: [color],
      grid: {
        padding: {
          bottom: 0
        }
      },
      series: [value],
      labels: ['Progress'],
      responsive: [
        {
          breakpoint: 1441,
          options: {
            chart: {
              height: 103
            }
          }
        },
        {
          breakpoint: 1400,
          options: {
            chart: {
              height: 100
            }
          }
        },
        {
          breakpoint: 1380,
          options: {
            chart: {
              height: 95
            }
          }
        },
        {
          breakpoint: 1332,
          options: {
            chart: {
              height: 85
            }
          }
        },
        {
          breakpoint: 1265,
          options: {
            chart: {
              height: 75
            }
          }
        },
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 90
            }
          }
        }
      ]
    };
    return orderImpressionRadialBarOpt;
  }

  const chartProgressList = document.querySelectorAll('.chart-progress');
  if (chartProgressList) {
    chartProgressList.forEach(function (chartProgressEl) {
      const color = config.colors[chartProgressEl.dataset.color],
        series = chartProgressEl.dataset.series,
        icon = chartProgressEl.dataset.icon;
      const optionsBundle = orderImpressionRadialBar(color, series, icon);
      const chart = new ApexCharts(chartProgressEl, optionsBundle);
      chart.render();
    });
  }

  // Weekly sales swiper loop and autoplay
  // --------------------------------------------------------------------
  const swiperWithPagination = document.querySelector('#swiper-weekly-sales');
  if (swiperWithPagination) {
    new Swiper(swiperWithPagination, {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination'
      }
    });
  }

  // Marketing and sales swiper loop and autoplay
  // --------------------------------------------------------------------
  const swiperMarketingPagination = document.querySelector('#swiper-marketing-sales');
  if (swiperMarketingPagination) {
    new Swiper(swiperMarketingPagination, {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination'
      }
    });
  }

  // Weekly sales with bg swiper loop and autoplay
  // --------------------------------------------------------------------
  const swiperWithBgPagination = document.querySelector('#swiper-weekly-sales-with-bg');
  if (swiperWithBgPagination) {
    new Swiper(swiperWithBgPagination, {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination'
      }
    });
  }

  // Live Visitors Bar Chart
  // --------------------------------------------------------------------
  const liveVisitorsEl = document.querySelector('#liveVisitors'),
    liveVisitorsConfig = {
      chart: {
        height: 250,
        parentHeightOffset: 0,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 12,
          columnWidth: '43%',
          endingShape: 'rounded',
          startingShape: 'rounded'
        }
      },
      colors: [config.colors.success],
      grid: {
        padding: {
          top: -4,
          left: -20,
          right: -2,
          bottom: -7
        },
        yaxis: { lines: { show: false } }
      },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          data: [70, 118, 92, 49, 19, 49, 23, 82, 65, 23, 49, 65, 65]
        }
      ],
      legend: {
        show: false
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
          breakpoint: 1441,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10
              }
            }
          }
        },
        {
          breakpoint: 1288,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 8
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10
              }
            }
          }
        },
        {
          breakpoint: 1025,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 8
              }
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 14
              }
            }
          }
        },
        {
          breakpoint: 645,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10
              }
            }
          }
        },
        {
          breakpoint: 474,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 7
              }
            }
          }
        },
        {
          breakpoint: 383,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 6
              }
            }
          }
        }
      ]
    };
  if (typeof liveVisitorsEl !== undefined && liveVisitorsEl !== null) {
    const liveVisitors = new ApexCharts(liveVisitorsEl, liveVisitorsConfig);
    liveVisitors.render();
  }
})();
