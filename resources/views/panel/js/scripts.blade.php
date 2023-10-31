<script src="/assets/vendor/libs/jquery/jquery.js"></script>
<script src="/assets/vendor/libs/popper/popper.js"></script>
<script src="/assets/vendor/js/bootstrap.js"></script>
<script src="/assets/vendor/libs/node-waves/node-waves.js"></script>
<script src="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
<script src="/assets/vendor/libs/hammer/hammer.js"></script>
<script src="/assets/vendor/libs/i18n/i18n.js"></script>
<script src="/assets/vendor/libs/typeahead-js/typeahead.js"></script>
<script src="/assets/vendor/js/menu.js"></script>


<script src="/assets/js/main.js"></script>
<script src="/assets/js/alpine.min.js" defer></script>
<script src="/assets/vendor/libs/sweetalert2/sweetalert2.js"></script>
@livewireScripts
    <script type="text/javascript">
        window.livewire.on('closeModal', () => {
            $('#createDataModal').modal('hide');
            $('#estadoSolicitudDataModal').modal('hide');
            $('#asignarDataModal').modal('hide');
            $('#updateDataModal').modal('hide');
        });
      </script>
      <script>
        Livewire.on('alert',function(title,message,icon){
             var timerInterval;
                  Swal.fire({
                          title: title,
                          text: message,
                          icon: icon,
                          showConfirmButton: !1,
                          timer: 1500,
                          customClass: {
                              confirmButton: "btn btn-primary waves-effect waves-light"
                          },
                          buttonsStyling: !1
                      })
        })
      </script>
