/**
 * App User View - Account (jquery)
 */
'use strict';

$(function () {
  // Variable declaration for table
  var dt_project_table = $('.datatable-project'),
    dt_invoice_table = $('.datatable-invoice');

  // Project datatable
  // --------------------------------------------------------------------
  if (dt_project_table.length) {
    var dt_project = dt_project_table.DataTable({
      ajax: assetsPath + 'json/projects-list.json', // JSON file to add data
      columns: [
        // columns according to JSON
        { data: 'hours' },
        { data: 'hours' },
        { data: 'project_name' },
        { data: 'total_task' },
        { data: 'progress' },
        { data: 'hours' }
      ],
      columnDefs: [
        {
          // For Responsive
          className: 'control',
          searchable: false,
          orderable: false,
          responsivePriority: 2,
          targets: 0,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          // For Checkboxes
          targets: 1,
          orderable: false,
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          },
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input" >';
          },
          searchable: false
        },
        {
          // User full name and email
          targets: 2,
          responsivePriority: 1,
          render: function (data, type, full, meta) {
            var $name = full['project_name'],
              $framework = full['framework'],
              $image = full['project_image'];
            if ($image) {
              // For Avatar image
              var $output =
                '<img src="' +
                assetsPath +
                'img/icons/brands/' +
                $image +
                '" alt="Project Image" class="rounded-circle">';
            } else {
              // For Avatar badge
              var stateNum = Math.floor(Math.random() * 6) + 1;
              var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];
              var $state = states[stateNum],
                $name = full['full_name'],
                $initials = $name.match(/\b\w/g) || [];
              $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();
              $output = '<span class="avatar-initial rounded-circle bg-label-' + $state + '">' + $initials + '</span>';
            }
            // Creates full output for row
            var $row_output =
              '<div class="d-flex justify-content-left align-items-center">' +
              '<div class="avatar-wrapper">' +
              '<div class="avatar avatar-sm me-3">' +
              $output +
              '</div>' +
              '</div>' +
              '<div class="d-flex flex-column">' +
              '<span class="text-truncate fw-medium text-heading">' +
              $name +
              '</span>' +
              '<small>' +
              $framework +
              '</small>' +
              '</div>' +
              '</div>';
            return $row_output;
          }
        },
        {
          // Task
          targets: 2,
          render: function (data, type, full, meta) {
            var $task = full['total_task'];
            return '<span class="text-heading">' + $task + '</span>';
          }
        },
        {
          // Label
          targets: 4,
          responsivePriority: 3,
          render: function (data, type, full, meta) {
            var $progress = full['progress'] + '%',
              $color,
              $labelColor;
            switch (true) {
              case full['progress'] < 25:
                $color = 'bg-danger';
                $labelColor = 'bg-label-danger';
                break;
              case full['progress'] < 50:
                $color = 'bg-warning';
                $labelColor = 'bg-label-warning';
                break;
              case full['progress'] < 75:
                $color = 'bg-info';
                $labelColor = 'bg-label-info';
                break;
              case full['progress'] <= 100:
                $color = 'bg-success';
                $labelColor = 'bg-label-success';
                break;
            }
            return (
              '<div class="d-flex flex-column"><small class="text-heading mb-1">' +
              $progress +
              '</small>' +
              '<div class="progress rounded ' +
              $labelColor +
              ' w-100 me-3" style="height: 6px;">' +
              '<div class="progress-bar rounded ' +
              $color +
              '" style="width: ' +
              $progress +
              '" aria-valuenow="' +
              $progress +
              '" aria-valuemin="0" aria-valuemax="100"></div>' +
              '</div>' +
              '</div>'
            );
          }
        },
        {
          targets: 5,
          orderable: false
        }
      ],
      order: [[2, 'desc']],
      dom:
        '<"d-flex justify-content-between align-items-center flex-column flex-sm-row mx-4 row"' +
        '<"col-sm-4 col-12 d-flex align-items-center justify-content-sm-start justify-content-center"l>' +
        '<"col-sm-8 col-12 d-flex align-items-center justify-content-sm-end justify-content-center"f>' +
        '>t' +
        '<"d-flex justify-content-between mx-4 row"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      displayLength: 7,
      lengthMenu: [7, 10, 25, 50, 75, 100],
      language: {
        sLengthMenu: 'Show _MENU_',
        // search: '',
        searchPlaceholder: 'Search Project'
      },
      // For responsive popup
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['full_name'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                    col.rowIndex +
                    '" data-dt-column="' +
                    col.columnIndex +
                    '">' +
                    '<td>' +
                    col.title +
                    ':' +
                    '</td> ' +
                    '<td>' +
                    col.data +
                    '</td>' +
                    '</tr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/><tbody />').append(data) : false;
          }
        }
      }
    });
  }

  // Invoice datatable
  // --------------------------------------------------------------------
  if (dt_invoice_table.length) {
    var dt_invoice = dt_invoice_table.DataTable({
      ajax: assetsPath + 'json/invoice-list.json', // JSON file to add data
      columns: [
        // columns according to JSON
        { data: '' },
        { data: 'invoice_id' },
        { data: 'invoice_status' },
        { data: 'total' },
        { data: 'issued_date' },
        { data: 'action' }
      ],
      columnDefs: [
        {
          // For Responsive
          className: 'control',
          responsivePriority: 2,
          targets: 0,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          // Invoice ID
          targets: 1,
          render: function (data, type, full, meta) {
            var $invoice_id = full['invoice_id'];
            // Creates full output for row
            var $row_output = '<a href="app-invoice-preview.html"><span>#' + $invoice_id + '</span></a>';
            return $row_output;
          }
        },
        {
          // Invoice status
          targets: 2,
          render: function (data, type, full, meta) {
            var $invoice_status = full['invoice_status'],
              $due_date = full['due_date'],
              $balance = full['balance'];
            var roleBadgeObj = {
              Sent: '<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-secondary"><i class="mdi mdi-email-outline"></i></span></span>',
              Draft:
                '<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-primary"><i class="mdi mdi-folder-outline"></i></span></span>',
              'Past Due':
                '<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-danger"><i class="mdi mdi-alert-circle-outline"></i></span></span>',
              'Partial Payment':
                '<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-success"><i class="mdi mdi-check"></i></span></span>',
              Paid: '<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-warning"><i class="mdi mdi-chart-pie-outline"></i></span></span>',
              Downloaded:
                '<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-info"><i class="mdi mdi-arrow-down"></i></span></span>'
            };
            return (
              "<div class='d-inline-flex' data-bs-toggle='tooltip' data-bs-html='true' title='<span>" +
              $invoice_status +
              '<br> <span class="fw-medium">Balance:</span> ' +
              $balance +
              '<br> <span class="fw-medium">Due Date:</span> ' +
              $due_date +
              "</span>'>" +
              roleBadgeObj[$invoice_status] +
              '</div>'
            );
          }
        },
        {
          // Total Invoice Amount
          targets: 3,
          render: function (data, type, full, meta) {
            var $total = full['total'];
            return '$' + $total;
          }
        },
        {
          // Actions
          targets: -1,
          title: 'Actions',
          orderable: false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-flex align-items-center">' +
              '<a href="javascript:;" class="btn btn-sm btn-icon btn-text-secondary rounded-pill text-body" data-bs-toggle="tooltip" title="Delete Invoice"><i class="mdi mdi-delete-outline mdi-20px mx-1"></i></a>' +
              '<a href="app-invoice-preview.html" class="btn btn-sm btn-icon btn-text-secondary rounded-pill text-body" data-bs-toggle="tooltip" title="Preview"><i class="mdi mdi-eye-outline mdi-20px mx-1"></i></a>' +
              '<button class="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical mdi-20px"></i></button>' +
              '<div class="dropdown-menu dropdown-menu-end m-0">' +
              '<a href="javascript:;" class="dropdown-item"><i class="mdi mdi-download-outline me-2"></i><span>Download</span></a>' +
              '<a href="javascript:;" class="dropdown-item"><i class="mdi mdi-pencil-outline me-2"></i><span>Edit</span></a>' +
              '<a href="javascript:;" class="dropdown-item delete-record"><i class="mdi mdi-checkbox-multiple-blank-outline me-2"></i><span>Duplicate</span></a>' +
              '</div>' +
              '</div>'
            );
          }
        }
      ],
      order: [[1, 'desc']],
      dom: '<"card-header d-flex"<"head-label"><"dt-action-buttons text-end pt-0"B>>+t<"row mx-3"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
      language: {
        sLengthMenu: 'Show _MENU_',
        search: '',
        searchPlaceholder: 'Search Invoice'
      },
      // Buttons with Dropdown
      buttons: [
        {
          extend: 'collection',
          className: 'btn btn-label-primary dropdown-toggle float-sm-end mb-3 mb-sm-0',
          text: '<i class="mdi mdi-export-variant me-1"></i>Export',
          buttons: [
            {
              extend: 'print',
              text: '<i class="mdi mdi-printer-outline me-1" ></i>Print',
              className: 'dropdown-item',
              exportOptions: { columns: [1, 2, 3, 4] }
            },
            {
              extend: 'csv',
              text: '<i class="mdi mdi-file-document-outline me-1" ></i>Csv',
              className: 'dropdown-item',
              exportOptions: { columns: [1, 2, 3, 4] }
            },
            {
              extend: 'excel',
              text: '<i class="mdi mdi-file-excel-outline me-1"></i>Excel',
              className: 'dropdown-item',
              exportOptions: { columns: [1, 2, 3, 4] }
            },
            {
              extend: 'pdf',
              text: '<i class="mdi mdi-file-pdf-box me-1"></i>Pdf',
              className: 'dropdown-item',
              exportOptions: { columns: [1, 2, 3, 4] }
            },
            {
              extend: 'copy',
              text: '<i class="mdi mdi-content-copy me-1" ></i>Copy',
              className: 'dropdown-item',
              exportOptions: { columns: [1, 2, 3, 4] }
            }
          ]
        }
      ],
      // For responsive popup
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['full_name'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                    col.rowIndex +
                    '" data-dt-column="' +
                    col.columnIndex +
                    '">' +
                    '<td>' +
                    col.title +
                    ':' +
                    '</td> ' +
                    '<td>' +
                    col.data +
                    '</td>' +
                    '</tr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/><tbody />').append(data) : false;
          }
        }
      }
    });
    $('div.head-label').html('<h5 class="card-title mb-0">Invoice List</h5>');
  }
  // On each datatable draw, initialize tooltip
  dt_invoice_table.on('draw.dt', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {
        boundary: document.body
      });
    });
  });
  // Filter form control to default size
  // ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
