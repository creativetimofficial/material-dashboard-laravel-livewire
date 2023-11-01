<table class="table table-hover table-sm">
    <thead class="thead">
        <tr class="text-center">

            <td>#</td>
            <th>Roles</th>
            <th>Permisos</th>
            <th>Estado del Role</th>
        </tr>
    </thead>
    <tbody>
        @foreach($roles as $row)
        <tr class="text-center">

            <td>{{ $loop->iteration }}</td>
            <td>{{ $row->name }}</td>
              <td>
                @foreach($row->permissions as $key => $item)
                 <span class="badge bg-info">{{ $item->name }}</span>
                @endforeach

              </td>
              <td>

                @if ($row->status == 1)
                    <span class="badge bg-success">
                        ACTIVO
                    </span>
                 @else
                   <span class="badge bg-danger">
                        INACTIVO
                    </span>
                @endif

                </td>
        @endforeach
    </tbody>
</table>
