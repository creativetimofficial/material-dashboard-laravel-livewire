@section('title', __('agencias'))

<div>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                <h4 class="card-title">
                    Listado de general de empresas
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

                        <div class="btn  btn-info" data-bs-toggle="modal" data-bs-target="#createDataModal">
                            <i class="fa fa-plus me-2"></i>  Nueva empresa
                         </div>

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
						@include('livewire.empresas.modals')
						<div class="table-responsive">
					<table class="table table-users table-sm">
						<thead class="thead">
							<tr class="text-center">
								<td>#</td>
								<th>Razon Social</th>
								<th>Documento</th>
								<th>Telefono</th>
								<th>Direccion</th>
								<th>Email</th>
								<th>Estado de la empresa</th>
								<th>Logo Empresa</th>
								<td>OPCIONES</td>
							</tr>
						</thead>
						<tbody>
							@foreach($empresas as $row)
							<tr class="text-center">
								<td>{{ $loop->iteration }}</td>
								<td>
                                    @if(strlen($row->razon_social) > 12)
										{{ substr($row->razon_social, 0, 12) . "..."}}
									@else
										{{ $row->razon_social }}
									@endif
                                </td>
								<td>{{ $row->documento }}</td>
								<td>{{ $row->telefono }}</td>
								<td> @if(strlen($row->direccion) > 30)
										{{ substr($row->direccion, 0, 30) . "..."}}
									@else
										{{ $row->direccion }}
									@endif</td>
								<td>{{ $row->email }}</td>
								<td>
                                    @if ($row->status == 1)
                                        <span class="badge bg-label-success">ACTIVO</span>
                                    @else
                                        <span class="badge bg-label-danger">INACTIVO</span>

                                    @endif
                                </td>
								<td><img src="{{ asset('/images/logo/'.$row->logo_empresa ) }}" height="15" alt=""></td>
								<td width="150">
								<div class="btn-group">

									@can('empresa_edit')
                                    <a data-bs-toggle="modal" data-bs-target="#updateModal" class="btn btn-primary text-white" wire:click="edit({{$row->id}})"><i class="fa fa-edit"></i>  </a>
                                    @endcan
                                    @can('empresa_delete')
                                    <a class="btn btn-danger text-white" wire:click.prevent="deleteConfirmation({{$row->id}})"><i class="fa fa-trash"></i>  </a>
                                    @endcan

								</div>
								</td>
							@endforeach
						</tbody>
					</table>
					</div>
				</div>
                <div class="card-footer clearfix">
                      {{ $empresas->links() }}
                      <p class="text-muted">Mostrando <strong>{{ $empresas->count() }}</strong> registros de <strong>{{$empresas->total() }}</strong> totales</p>
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

