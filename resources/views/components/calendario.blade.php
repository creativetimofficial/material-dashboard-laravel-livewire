@php
$mytime = Carbon\Carbon::now('America/Caracas');
$fecha=$mytime->format('Y-m-d');

$today = getdate();
$data_month = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
$current_month = $today['mon'];
$current_year = $today['year'];
$mes_actual =$data_month[$current_month - 1];
$nombre_dia = $today['mday'];


switch($nombre_dia)
{
    case 1: $nombre_dia="Lunes";
    break;
    case 2: $nombre_dia="Martes";
    break;
    case 3: $nombre_dia="Miercoles";
    break;
    case 4: $nombre_dia="Jueves";
    break;
    case 5: $nombre_dia="Viernes";
    break;
    case 6: $nombre_dia="Sabado";
    break;
}
@endphp

<div class="   text-center">
  <small>
      <div class="text-center mt-5 mb-4 ">
    <span id="weekDay" class="weekDay">
        {{ $nombre_dia }}
    </span>,
    <span id="day" class="day"></span> de
    <span id="month" class="month">
        {{ $mes_actual }}
    </span> del
    <span id="year" class="year">
        {{ date('Y') }}
    </span> ,
    <span id="hours" class="hours"></span> :
    <span id="minutes" class="minutes"></span> :
    <span id="seconds" class="seconds"></span>
  </div>
  </small>
</div>
