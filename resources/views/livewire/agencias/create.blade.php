<!-- Modal -->
<div wire:ignore.self class="modal fade" id="createDataModal" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="createDataModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
        <div class="modal-content">
            <div class="modal-header bg-transparent">
               <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  wire:click.prevent="cancel()" aria-hidden="true"
                ></button>
            </div>
            <div class="modal-body pb-5 px-sm-5 pt-50">
                <div class="text-center mb-2">
                    <h1 class="mb-1">NUEVA AGENCIA</h1>
                    <p> <div class="alert alert-info alert-dismissible fade show" role="alert">
                        <div class="alert-body">
                            No se admiten campos vacíos, todos campos son requeridos
                        </div>

                    </div></p>
                </div>
                <form>
                 <div class="row">

                     <div class="col-sm-6 mt-2">
                         <div class="form-group">
                            <label for="name">Nombre de la agencia</label>
                            <input wire:model="name" type="text" class="form-control" id="name" placeholder="Name">@error('name') <span class="error text-danger">{{ $message }}</span> @enderror
                        </div>
                     </div>

                     <div class="col-sm-6 mt-2">
                         <div class="form-group">
                            <label for="username">Estado de la agencia</label>
                            <select wire:model="status" type="text" class="form-control"  placeholder="status">
                                <option value="">Seleccione</option>
                                <option value="1">ACTIVO</option>
                                <option value="0">INACTIVO</option>
                            </select>
                                @error('status') <span class="error text-danger">{{ $message }}</span> @enderror
                        </div>
                     </div>
                 </div>
                 <div class="col-12 text-center mt-4 pt-50">
                       <button type="button" wire:click.prevent="store()" class="btn btn-primary close-modal me-1">Guardar</button>
                        <button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="modal" aria-label="Close">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
