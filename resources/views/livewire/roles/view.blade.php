@section('title', __('Roles'))
<div>
    <div class="row g-4 mb-4">
        <div class="col-sm-6 col-xl-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                        <div class="content-left">
                            <span>Roles</span>
                            <div class="d-flex align-items-end mt-2">
                                <h3 class="mb-0 me-2">{{ \App\Models\Role::count() }}</h3>
                                <small class="text-success">(100%)</small>
                            </div>
                            <small>Total Registrados</small>
                        </div>
                        <span class="badge bg-label-success rounded p-2">
                            <i class="mdi mdi-shield-account ti-sm"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                        <div class="content-left">
                            <span>Roles inactivos</span>
                            <div class="d-flex align-items-end mt-2">
                                <h3 class="mb-0 me-2">{{ \App\Models\Role::where('status',0)->count() }}</h3>
                                <small class="text-danger">(+95%)</small>
                            </div>
                            <small>Total en espera </small>
                        </div>
                        <span class="badge bg-label-danger rounded p-2">
                            <i class="mdi mdi-close-box-multiple ti-sm"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                        <div class="content-left">
                            <span>Roles activos</span>
                            <div class="d-flex align-items-end mt-2">
                                <h3 class="mb-0 me-2">{{ \App\Models\Role::where('status',1)->count() }}</h3>
                                <small class="text-success">(+95%)</small>
                            </div>
                            <small>Total de activos</small>
                        </div>
                        <span class="badge bg-label-success rounded p-2">
                            <i class="mdi  mdi-check-all ti-sm"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                <h4 class="card-title">
                    Listado de roles
                </h4>
                   <div class="card-controls">
                     <div class="row">
                         <div class="my-1 col-sm-2">

                        <select wire:model="perPage" class="form-select w-full sm:w-1/6">
                            @foreach($paginationOptions as $value)
                                <option value="{{ $value }}">{{ $value }}</option>
                            @endforeach
                        </select>
                  </div>
                  <div class="my-1 col-sm-7">
                       @can('role_create')
                        <a class="btn  btn-info" href="{{ route('role.create') }}">
                           <i class="fa fa-plus me-2"></i>  Nuevo role
                         </a>
                       @endcan
                       @if(file_exists(app_path('Http/Livewire/ExcelExport.php')))
                       <x-excel-export/>
                      @endif


                </div>
                <div class="my-1 col-sm-3">
                     <input type="text" wire:model.debounce.300ms="search" class="form-control" placeholder="Búsqueda de datos" />
                </div>
                   </div>
                  </div>
              </div>

                <div class="card-body">
                        @include('livewire.roles.create')
                        @include('livewire.roles.update')
                <div class="table-responsive">
                    <table class="table  datatables-users table-sm">
                        <thead class="thead">
                            <tr class="text-center">

                                <td>#</td>
                                <th>Roles</th>
                                <th>Permisos</th>
                                <th>Usado por Usuarios</th>
                                <th>Estado del Role</th>
                                <td>ACTIONS</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($roles as $row)
                            <tr class="text-center">

                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $row->name }}</td>
                                  <td>

                                     <span class="badge bg-label-info">{{ $row->permissions->count() }}</span>

                                  </td>
                                   <td>

                                     <span class="badge bg-label-warning">{{ $row->users->count() }}</span>

                                  </td>
                                  <td>

                                    @if ($row->status == 1)
                                        <span class="badge bg-label-success">
                                            ACTIVO
                                        </span>
                                     @else
                                       <span class="badge bg-label-danger">
                                            INACTIVO
                                        </span>
                                    @endif

                                  </td>
                                 <td width="150">
                                <div class="btn-group">


                                    @can('role_edit')
                                       <a href="{{ route('role.edit',$row->id) }}"  class="btn btn-primary"><i class="mdi mdi-pencil"></i>  </a>
                                    @endcan
                                    @can('role_delete')
                                         <a class="btn btn-danger text-white" wire:click.prevent="deleteConfirmation({{$row->id}})"><i class="mdi mdi-delete"></i>  </a>
                                    @endcan
                                    </div>

                                </td>
                            @endforeach
                        </tbody>
                    </table>
                    </div>
                </div>
                <div class="card-footer clearfix">
                      {{ $roles->links() }}
                      <p class="text-muted">Mostrando <strong>{{ $roles->count() }}</strong> registros de <strong>{{$roles->total() }}</strong> totales</p>
                  </div>
            </div>
        </div>
    </div>
</div>

@push('scripts')
    <script>
        Livewire.on('confirm', e => {
    if (!confirm("{{ trans('¿Estás seguro(a)?') }}")) {
        return
    }
    @this[e.callback](...e.argv)
    })
    </script>

<script>
    window.addEventListener('show-delete-confirmation', event =>{
        Swal.fire({
          title: '¿Estás seguro(a)?',
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Livewire.emit('deleteConfirmed');
          }
    })
    });

</script>

@endpush
