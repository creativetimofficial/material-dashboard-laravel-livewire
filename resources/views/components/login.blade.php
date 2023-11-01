<!DOCTYPE html>
<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg">
<head>
    <meta charset="utf-8" />
    <title>BANDES - {{ $title ?? '' }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Sistema automatizado para el control de servicio medico BANDES" name="description" />
    <meta content="Sistema automatizado para el control de servicio medico BANDES" name="author" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="/images/logo/bandes_mini.png">
  <!-- General CSS Files -->

  <!-- Styles -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <link href="{{ asset('css/system.css') }}" rel="stylesheet">

    @stack('styles')
</head>
<body class="blue">

  {{ $slot }}

<script src="{{ asset('assets/libs/jquery/jquery.min.js') }}"></script>
<script type="text/javascript" src="{{asset('assets/js/clock.js')}} "></script>
<script>
  $('#login-username').on('keydown keypress',function(e){
  if(e.key.length === 1){ // Evaluar si es un solo caracter
      if($(this).val().length < 8 && !isNaN(parseFloat(e.key))){ /* Comprobar que
                                                                  * son menos de 12
                                                                  * catacteres y que
                                                                  * es un número */
          $(this).val($(this).val() + e.key); // Muestra el valor en el input
          /*
          * Aquí haces lo que quieras.
          */
      }
      return false;
    }
  });
</script>
</body>
</html>
