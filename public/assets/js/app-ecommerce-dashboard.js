'use strict';

(function () {
  let labelColor;

  if (isDarkStyle) {
    labelColor = config.colors_dark.bodyColor;
  } else {
    labelColor = config.colors.bodyColor;
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

  // Sales This Month
  // --------------------------------------------------------------------
  const saleThisMonthChartEl = document.querySelector('#saleThisMonth'),
    saleThisMonthChartConfig = {
      chart: {
        height: 97,
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
      }
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
        height: 97,
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
              height: 96
            }
          }
        },
        {
          breakpoint: 1354,
          options: {
            chart: {
              height: 93
            }
          }
        },
        {
          breakpoint: 1336,
          options: {
            chart: {
              height: 88
            }
          }
        },
        {
          breakpoint: 1286,
          options: {
            chart: {
              height: 84
            }
          }
        },
        {
          breakpoint: 1258,
          options: {
            chart: {
              height: 80
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 98
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

  // Live Visitors Bar Chart
  // --------------------------------------------------------------------
  const liveVisitorsEl = document.querySelector('#liveVisitors'),
    liveVisitorsConfig = {
      chart: {
        height: 153,
        parentHeightOffset: 0,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
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
          breakpoint: 1443,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 7
              }
            }
          }
        },
        {
          breakpoint: 1372,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 6
              }
            }
          }
        },
        {
          breakpoint: 1248,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 5
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 6
              }
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 8
              }
            },
            chart: {
              height: 156
            }
          }
        },
        {
          breakpoint: 838,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 6
              }
            }
          }
        },
        {
          breakpoint: 644,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 4
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

  // eCommerce Datatable
  // --------------------------------------------------------------------
  var dt_ecommerce = $('.datatables-ecommerce');

  if (dt_ecommerce.length) {
    dt_ecommerce = dt_ecommerce.DataTable({
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
              '<span class="name text-truncate h6 mb-0">' +
              $name +
              '</span>' +
              '<small class="user_name text-truncate">@' +
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

  // Visits By Day Bar Chart
  // --------------------------------------------------------------------
  const visitsByDayChartEl = document.querySelector('#visitsByDayChart'),
    visitsByDayChartConfig = {
      chart: {
        height: 328,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
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
            colors: labelColor
          }
        }
      },
      yaxis: { show: false },
      responsive: [
        {
          breakpoint: 1240,
          options: {
            chart: {
              height: 307
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 327
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 250
            },
            plotOptions: {
              bar: {
                columnWidth: '35%'
              }
            }
          }
        },
        {
          breakpoint: 577,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '45%'
              }
            }
          }
        },
        {
          breakpoint: 477,
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
  if (typeof visitsByDayChartEl !== undefined && visitsByDayChartEl !== null) {
    const visitsByDayChart = new ApexCharts(visitsByDayChartEl, visitsByDayChartConfig);
    visitsByDayChart.render();
  }
})();
