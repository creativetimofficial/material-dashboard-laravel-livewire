/**
 * app-ecommerce-product-list
 */

'use strict';

// Datatable (jquery)
$(function () {
  let borderColor, bodyBg, headingColor;

  if (isDarkStyle) {
    borderColor = config.colors_dark.borderColor;
    bodyBg = config.colors_dark.bodyBg;
    headingColor = config.colors_dark.headingColor;
  } else {
    borderColor = config.colors.borderColor;
    bodyBg = config.colors.bodyBg;
    headingColor = config.colors.headingColor;
  }

  // Variable declaration for table
  var dt_product_table = $('.datatables-products'),
    productAdd = 'app-ecommerce-product-add.html',
    statusObj = {
      1: { title: 'Scheduled', class: 'bg-label-warning' },
      2: { title: 'Publish', class: 'bg-label-success' },
      3: { title: 'Inactive', class: 'bg-label-danger' }
    },
    categoryObj = {
      0: { title: 'Household' },
      1: { title: 'Office' },
      2: { title: 'Electronics' },
      3: { title: 'Shoes' },
      4: { title: 'Accessories' },
      5: { title: 'Game' }
    },
    stockObj = {
      0: { title: 'Out_of_Stock' },
      1: { title: 'In_Stock' }
    },
    stockFilterValObj = {
      0: { title: 'Out of Stock' },
      1: { title: 'In Stock' }
    };

  // E-commerce Products datatable

  if (dt_product_table.length) {
    var dt_products = dt_product_table.DataTable({
      ajax: assetsPath + 'json/ecommerce-product-list.json', // JSON file to add data
      columns: [
        // columns according to JSON
        { data: 'id' },
        { data: 'id' },
        { data: 'product_name' },
        { data: 'category' },
        { data: 'stock' },
        { data: 'sku' },
        { data: 'price' },
        { data: 'quantity' },
        { data: 'status' },
        { data: '' }
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
          // Product name and product_brand
          targets: 2,
          responsivePriority: 1,
          render: function (data, type, full, meta) {
            var $name = full['product_name'],
              $id = full['id'],
              $product_brand = full['product_brand'],
              $image = full['image'];
            if ($image) {
              // For Product image

              var $output =
                '<img src="' +
                assetsPath +
                'img/ecommerce-images/' +
                $image +
                '" alt="Product-' +
                $id +
                '" class="rounded-2">';
            } else {
              // For Product badge
              var stateNum = Math.floor(Math.random() * 6);
              var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];
              var $state = states[stateNum],
                $name = full['product_brand'],
                $initials = $name.match(/\b\w/g) || [];
              $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();
              $output = '<span class="avatar-initial rounded-2 bg-label-' + $state + '">' + $initials + '</span>';
            }
            // Creates full output for Product name and product_brand
            var $row_output =
              '<div class="d-flex justify-content-start align-items-center product-name">' +
              '<div class="avatar-wrapper me-3">' +
              '<div class="avatar rounded-2 bg-label-secondary">' +
              $output +
              '</div>' +
              '</div>' +
              '<div class="d-flex flex-column">' +
              '<span class="text-nowrap text-heading fw-medium">' +
              $name +
              '</span>' +
              '<small class="text-truncate d-none d-sm-block">' +
              $product_brand +
              '</small>' +
              '</div>' +
              '</div>';
            return $row_output;
          }
        },
        {
          // Product Category

          targets: 3,
          responsivePriority: 5,
          render: function (data, type, full, meta) {
            var $category = categoryObj[full['category']].title;
            var categoryBadgeObj = {
              Household:
                '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-warning me-2"><i class="mdi mdi-home-outline"></i></span>',
              Office:
                '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-success me-2"><i class="mdi mdi-briefcase-variant-outline"></i></span>',
              Electronics:
                '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-primary me-2"><i class="mdi mdi-cellphone"></i></span>',
              Shoes:
                '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-info me-2"><i class="mdi mdi-shoe-sneaker"></i></span>',
              Accessories:
                '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-secondary me-2"><i class="mdi mdi-watch"></i></span>',
              Game: '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-dark me-2"><i class="mdi mdi-controller"></i></span>'
            };
            return (
              "<h6 class='text-truncate d-flex align-items-center mb-0'>" +
              categoryBadgeObj[$category] +
              $category +
              '</h6>'
            );
          }
        },
        {
          // Stock
          targets: 4,
          orderable: false,
          responsivePriority: 3,
          render: function (data, type, full, meta) {
            var $stock = full['stock'];
            var stockSwitchObj = {
              Out_of_Stock:
                '<label class="switch switch-primary switch-sm">' +
                '<input type="checkbox" class="switch-input" id="switch">' +
                '<span class="switch-toggle-slider">' +
                '<span class="switch-off">' +
                '</span>' +
                '</span>' +
                '</label>',
              In_Stock:
                '<label class="switch switch-primary switch-sm">' +
                '<input type="checkbox" class="switch-input" checked="">' +
                '<span class="switch-toggle-slider">' +
                '<span class="switch-on">' +
                '</span>' +
                '</span>' +
                '</label>'
            };
            return (
              "<span class='text-truncate'>" +
              stockSwitchObj[stockObj[$stock].title] +
              '<span class="d-none">' +
              stockObj[$stock].title +
              '</span>' +
              '</span>'
            );
          }
        },
        {
          // Sku
          targets: 5,
          render: function (data, type, full, meta) {
            var $sku = full['sku'];

            return '<span>' + $sku + '</span>';
          }
        },
        {
          // price
          targets: 6,
          render: function (data, type, full, meta) {
            var $price = full['price'];

            return '<span>' + $price + '</span>';
          }
        },
        {
          // qty
          targets: 7,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            var $qty = full['qty'];

            return '<span>' + $qty + '</span>';
          }
        },
        {
          // Status
          targets: -2,
          render: function (data, type, full, meta) {
            var $status = full['status'];

            return (
              '<span class="badge rounded-pill ' +
              statusObj[$status].class +
              '" text-capitalized>' +
              statusObj[$status].title +
              '</span>'
            );
          }
        },
        {
          // Actions
          targets: -1,
          title: 'Actions',
          searchable: false,
          orderable: false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-block text-nowrap">' +
              '<button class="btn btn-sm btn-icon"><i class="mdi mdi-pencil-outline"></i></button>' +
              '<button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical me-2"></i></button>' +
              '<div class="dropdown-menu dropdown-menu-end m-0">' +
              '<a href="javascript:0;" class="dropdown-item">View</a>' +
              '<a href="javascript:0;" class="dropdown-item">Suspend</a>' +
              '</div>' +
              '</div>'
            );
          }
        }
      ],
      order: [2, 'asc'], //set any columns order asc/desc
      dom:
        '<"card-header d-flex border-top rounded-0 flex-wrap py-md-0"' +
        '<"me-5 ms-n2"f>' +
        '<"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-3 mb-sm-0 gap-3"lB>>' +
        '>t' +
        '<"row mx-1"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      lengthMenu: [7, 10, 20, 50, 70, 100], //for length of menu
      language: {
        sLengthMenu: '_MENU_',
        search: '',
        searchPlaceholder: 'Search Product',
        info: 'Displaying _START_ to _END_ of _TOTAL_ entries'
      },
      // Buttons with Dropdown
      buttons: [
        {
          extend: 'collection',
          className: 'btn btn-label-secondary dropdown-toggle me-3',
          text: '<i class="mdi mdi-export-variant me-1"></i><span class="d-none d-sm-inline-block">Export </span>',
          buttons: [
            {
              extend: 'print',
              text: '<i class="mdi mdi-printer-outline me-1" ></i>Print',
              className: 'dropdown-item',
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
                // prevent avatar to be print
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('product-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              },
              customize: function (win) {
                //customize print view for dark
                $(win.document.body)
                  .css('color', headingColor)
                  .css('border-color', borderColor)
                  .css('background-color', bodyBg);
                $(win.document.body)
                  .find('table')
                  .addClass('compact')
                  .css('color', 'inherit')
                  .css('border-color', 'inherit')
                  .css('background-color', 'inherit');
              }
            },
            {
              extend: 'csv',
              text: '<i class="mdi mdi-file-document-outline me-1" ></i>Csv',
              className: 'dropdown-item',
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('product-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            },
            {
              extend: 'excel',
              text: '<i class="mdi mdi-file-excel-outline me-1"></i>Excel',
              className: 'dropdown-item',
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('product-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            },
            {
              extend: 'pdf',
              text: '<i class="mdi mdi-file-pdf-box me-1"></i>Pdf',
              className: 'dropdown-item',
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('product-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            },
            {
              extend: 'copy',
              text: '<i class="mdi mdi-content-copy me-1"></i>Copy',
              className: 'dropdown-item',
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('product-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            }
          ]
        },
        {
          text: '<i class="mdi mdi-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add Product</span>',
          className: 'add-new btn btn-primary ms-n1',
          action: function () {
            window.location.href = productAdd;
          }
        }
      ],
      // For responsive popup
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['product_name'];
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
      },
      initComplete: function () {
        // Adding status filter once table initialized
        this.api()
          .columns(-2)
          .every(function () {
            var column = this;
            var select = $(
              '<select id="ProductStatus" class="form-select text-capitalize"><option value="">Status</option></select>'
            )
              .appendTo('.product_status')
              .on('change', function () {
                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                column.search(val ? '^' + val + '$' : '', true, false).draw();
              });

            column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append('<option value="' + statusObj[d].title + '">' + statusObj[d].title + '</option>');
              });
          });
        // Adding category filter once table initialized
        this.api()
          .columns(3)
          .every(function () {
            var column = this;
            var select = $(
              '<select id="ProductCategory" class="form-select text-capitalize"><option value="">Category</option></select>'
            )
              .appendTo('.product_category')
              .on('change', function () {
                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                column.search(val ? '^' + val + '$' : '', true, false).draw();
              });

            column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append('<option value="' + categoryObj[d].title + '">' + categoryObj[d].title + '</option>');
              });
          });
        // Adding stock filter once table initialized
        this.api()
          .columns(4)
          .every(function () {
            var column = this;
            var select = $(
              '<select id="ProductStock" class="form-select text-capitalize"><option value=""> Stock </option></select>'
            )
              .appendTo('.product_stock')
              .on('change', function () {
                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                column.search(val ? '^' + val + '$' : '', true, false).draw();
              });

            column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append('<option value="' + stockObj[d].title + '">' + stockFilterValObj[d].title + '</option>');
              });
          });
      }
    });
    $('.dataTables_length').addClass('mt-0 mt-md-3');
    $('.dt-action-buttons').addClass('pt-0');
    $('.dt-buttons').addClass('d-flex flex-wrap');
  }

  // Filter form control to default size
  // ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
