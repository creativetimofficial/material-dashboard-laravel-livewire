/**
 * Advanced Cards
 */

'use strict';

(function () {
  let cardColor, headingColor, legendColor, labelColor;
  if (isDarkStyle) {
    cardColor = config.colors_dark.cardColor;
    labelColor = config.colors_dark.textMuted;
    legendColor = config.colors_dark.bodyColor;
    headingColor = config.colors_dark.headingColor;
  } else {
    cardColor = config.colors.cardColor;
    labelColor = config.colors.textMuted;
    legendColor = config.colors.bodyColor;
    headingColor = config.colors.headingColor;
  }

  // Radial bar chart functions
  function radialBarChart(color, value, show) {
    const radialBarChartOpt = {
      chart: {
        height: show == 'true' ? 58 : 55,
        width: show == 'true' ? 58 : 45,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: show == 'true' ? '50%' : '25%'
          },
          dataLabels: {
            show: show == 'true' ? true : false,
            value: {
              offsetY: -10,
              fontSize: '15px',
              fontWeight: 500,
              fontFamily: 'Inter',
              color: headingColor
            }
          },
          track: {
            background: config.colors_label.secondary
          }
        }
      },
      colors: [color],
      grid: {
        padding: {
          top: show == 'true' ? -12 : -15,
          bottom: show == 'true' ? -17 : -15,
          left: show == 'true' ? -17 : -5,
          right: -15
        }
      },
      series: [value],
      labels: show == 'true' ? [''] : ['Progress']
    };
    return radialBarChartOpt;
  }

  // Progress Chart
  // --------------------------------------------------------------------
  // All progress chart
  const chartProgressList = document.querySelectorAll('.chart-progress');
  if (chartProgressList) {
    chartProgressList.forEach(function (chartProgressEl) {
      const color = config.colors[chartProgressEl.dataset.color],
        series = chartProgressEl.dataset.series;
      const progress_variant = chartProgressEl.dataset.progress_variant
        ? chartProgressEl.dataset.progress_variant
        : 'false';
      const optionsBundle = radialBarChart(color, series, progress_variant);
      const chart = new ApexCharts(chartProgressEl, optionsBundle);
      chart.render();
    });
  }

  // Credit Card Validation
  // --------------------------------------------------------------------

  const creditCardPayment = document.querySelector('.credit-card-payment'),
    expiryDatePayment = document.querySelector('.expiry-date-payment'),
    cvvMaskList = document.querySelectorAll('.cvv-code-payment');
  let cleave;

  // Credit Card Cleave Masking
  if (creditCardPayment) {
    cleave = new Cleave(creditCardPayment, {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        if (type != '' && type != 'unknown') {
          document.querySelector('.card-payment-type').innerHTML =
            '<img src="' + assetsPath + 'img/icons/payments/' + type + '-cc.png" class="cc-icon-image" height="28"/>';
        } else {
          document.querySelector('.card-payment-type').innerHTML = '';
        }
      }
    });
  }

  // Expiry Date Mask
  if (expiryDatePayment) {
    new Cleave(expiryDatePayment, {
      date: true,
      delimiter: '/',
      datePattern: ['m', 'y']
    });
  }

  // All CVV field
  if (cvvMaskList) {
    cvvMaskList.forEach(function (cvvMaskEl) {
      new Cleave(cvvMaskEl, {
        numeral: true,
        numeralPositiveOnly: true
      });
    });
  }
})();
