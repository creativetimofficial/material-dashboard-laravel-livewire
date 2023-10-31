'use strict';

(function () {
  let cardColor, labelColor, headingColor, borderColor, bodyColor, grayColor;

  if (isDarkStyle) {
    cardColor = config.colors_dark.cardColor;
    labelColor = config.colors_dark.textMuted;
    headingColor = config.colors_dark.headingColor;
    borderColor = config.colors_dark.borderColor;
    bodyColor = config.colors_dark.bodyColor;
    grayColor = '#3b3e59';
  } else {
    cardColor = config.colors.cardColor;
    labelColor = config.colors.textMuted;
    headingColor = config.colors.headingColor;
    borderColor = config.colors.borderColor;
    bodyColor = config.colors.bodyColor;
    grayColor = '#f4f4f6';
  }

  const chartColors = {
    donut: {
      series1: config.colors.warning,
      series2: '#fdb528cc',
      series3: '#fdb52899',
      series4: '#fdb52866',
      series5: config.colors_label.warning
    }
  };

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
          left: 0,
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
      },
      responsive: [
        {
          breakpoint: 1440,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '38%'
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 150
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 100
            },
            plotOptions: {
              bar: {
                columnWidth: '28%'
              }
            }
          }
        }
      ]
    };
  if (typeof totalProfitChartEl !== undefined && totalProfitChartEl !== null) {
    const totalProfitChart = new ApexCharts(totalProfitChartEl, totalProfitChartConfig);
    totalProfitChart.render();
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

  // Organic Sessions Donut Chart
  // --------------------------------------------------------------------
  const organicSessionsEl = document.querySelector('#organicSessionsChart'),
    organicSessionsConfig = {
      chart: {
        height: 300,
        type: 'donut',
        parentHeightOffset: 0,
        offsetY: 0
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
                color: bodyColor
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
                color: bodyColor,
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
        offsetY: -10,
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
          columnWidth: '35%',
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
      },
      responsive: [
        {
          breakpoint: 1462,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '40%'
              }
            }
          }
        },
        {
          breakpoint: 1388,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '45%',
                borderRadius: 8
              }
            }
          }
        },
        {
          breakpoint: 1030,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '48%'
              }
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '28%'
              }
            }
          }
        },
        {
          breakpoint: 874,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '38%'
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '28%',
                borderRadius: 10
              }
            }
          }
        },
        {
          breakpoint: 500,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 7
              }
            }
          }
        },
        {
          breakpoint: 393,
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
  if (typeof weeklyOverviewChartEl !== undefined && weeklyOverviewChartEl !== null) {
    const weeklyOverviewChart = new ApexCharts(weeklyOverviewChartEl, weeklyOverviewChartConfig);
    weeklyOverviewChart.render();
  }

  // Monthly Budget Area Chart
  // --------------------------------------------------------------------
  const monthlyBudgetEl = document.querySelector('#monthlyBudgetChart'),
    monthlyBudgetConfig = {
      chart: {
        height: 235,
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
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 300
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 240
            }
          }
        }
      ]
    };
  if (typeof monthlyBudgetEl !== undefined && monthlyBudgetEl !== null) {
    const monthlyBudget = new ApexCharts(monthlyBudgetEl, monthlyBudgetConfig);
    monthlyBudget.render();
  }

  // External Links Stacked Bar Chart
  // --------------------------------------------------------------------
  const externalLinksChartEl = document.querySelector('#externalLinksChart'),
    externalLinksChartConfig = {
      chart: {
        type: 'bar',
        height: 330,
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
                columnWidth: '55%'
              }
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '40%'
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '28%'
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

  // CRM Datatable
  // --------------------------------------------------------------------
  var dt_crm = $('.datatables-crm');

  if (dt_crm.length) {
    dt_crm = dt_crm.DataTable({
      ajax: assetsPath + 'json/table-dashboards.json',
      dom: 't',
      columns: [{ data: 'id' }, { data: 'name' }, { data: 'email' }, { data: 'role' }, { data: 'status' }],
      columnDefs: [
        {
          targets: 0,
          searchable: false,
          visible: false
        },
        {
          // Avatar image/badge, Name and post
          targets: 1,
          render: function (data, type, full, meta) {
            var $user_img = full['image'],
              $name = full['name'],
              $username = full['username'],
              $output;
            if ($user_img) {
              // For Avatar image
              $output =
                '<img src="' + assetsPath + 'img/avatars/' + $user_img + '" alt="Avatar" class="rounded-circle">';
            }
            // Creates full output for row
            var $row_output =
              '<div class="d-flex justify-content-start align-items-center user-name">' +
              '<div class="avatar-wrapper">' +
              '<div class="avatar avatar-sm me-2">' +
              $output +
              '</div>' +
              '</div>' +
              '<div class="d-flex flex-column ps-1">' +
              '<span class="name text-truncate h6 mb-0 mt-1">' +
              $name +
              '</span>' +
              '<small class="user_name text-truncate mb-1">@' +
              $username +
              '</small>' +
              '</div>' +
              '</div>';
            return $row_output;
          }
        },
        {
          // Label
          targets: -2,
          render: function (data, type, full, meta) {
            var $role_name = full['role'];
            var $role = {
              Admin: { icon: 'mdi mdi-laptop', class: 'danger' },
              Editor: { icon: 'mdi mdi-pencil-outline', class: 'info' },
              Author: { icon: 'mdi mdi-cog-outline', class: 'warning' },
              Maintainer: { icon: 'mdi mdi-chart-donut', class: 'success' },
              Subscriber: { icon: 'mdi mdi-account-outline', class: 'primary' }
            };
            if (typeof $role[$role_name] === 'undefined') {
              return data;
            }
            return (
              '<span class="d-flex align-items-center gap-2"><i class="' +
              $role[$role_name].icon +
              ' text-' +
              $role[$role_name].class +
              '"></i>' +
              $role_name +
              '</span>'
            );
          }
        },
        {
          // Label
          targets: -1,
          render: function (data, type, full, meta) {
            var $status_number = full['status'];
            var $status = {
              1: { title: 'Pending', class: 'bg-label-warning' },
              2: { title: 'Active', class: ' bg-label-success' },
              3: { title: 'Inactive', class: ' bg-label-secondary' }
            };
            if (typeof $status[$status_number] === 'undefined') {
              return data;
            }
            return (
              '<span class="badge rounded-pill ' +
              $status[$status_number].class +
              '">' +
              $status[$status_number].title +
              '</span>'
            );
          }
        }
      ],
      order: [[0, 'asc']]
    });
  }
})();
