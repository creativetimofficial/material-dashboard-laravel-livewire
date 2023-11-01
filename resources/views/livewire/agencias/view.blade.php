@section('title', __('agencias'))
<div>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                <h4 class="card-title">
                    Listado de agencias
                </h4>
                   <div class="card-controls">
                     <div class="row">
                         <div class="my-1 col-sm-2">

                        <select wire:model="perPage" class="form-select w-full sm:w-1/6">
                            @foreach ($paginationOptions as $value)
                                <option value="{{ $value }}">{{ $value }}</option>
                            @endforeach
                        </select>
                  </div>
                  <div class="my-1 col-sm-7">
                       @can('agencia_create')
                        <div class="btn  btn-info" data-bs-toggle="modal" data-bs-target="#createDataModal">
                           <i class="fa fa-plus me-2"></i>  Nueva agencia
                         </div>
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
						@include('livewire.agencias.create')
						@include('livewire.agencias.update')
				<div class="table-responsive">
					<table class="table table-users table-sm">
						<thead class="thead">
							<tr class="text-center">
								<td>#
                                     @include('components.table.sort', ['field' => 'id'])
                                </td>
								<th>Descripción
                                     @include('components.table.sort', ['field' => 'name'])
                                </th>
								<th>Estado de la agencia
                                     @include('components.table.sort', ['field' => 'status'])
                                </th>
								<td>OPCIONES</td>
							</tr>
						</thead>
						<tbody>
							@foreach($agencias as $row)
							<tr class="text-center">
								<td>{{ $loop->iteration }}</td>
								<td>{{ $row->name }}</td>
								<td>

                                @if ($row->status == 1)
                                    <span class="badge bg-label-success">
                                        DISPONIBLE
                                    </span>
                                @else
                                    <span class="badge bg-label-danger">
                                        INACTIVO
                                    </span>
                                @endif

                                </td>
								<td width="150">
								<div class="btn-group">

									@can('agencia_edit')
                                    <a data-bs-toggle="modal" data-bs-target="#updateModal" class="text-white btn btn-primary" wire:click="edit({{$row->id}})"><i class="fa fa-edit"></i>  </a>
                                    @endcan
									@can('agencia_delete')
                                    <a class="text-white btn btn-danger" wire:click.prevent="deleteConfirmation({{$row->id}})"><i class="fa fa-trash"></i>  </a>
                                    @endcan
								</div>
								</td>
							@endforeach
						</tbody>
					</table>
					</div>

				</div>
                <div class="card-footer clearfix">
                      {{ $agencias->links() }}
                      <p class="text-muted">Mostrando <strong>{{ $agencias->count() }}</strong> registros de <strong>{{$agencias->total() }}</strong> totales</p>
                  </div>
			</div>
		</div>
	</div>
</div>
@push('scripts')
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
