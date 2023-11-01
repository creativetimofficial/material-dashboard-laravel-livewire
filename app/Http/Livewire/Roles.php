<?php

namespace App\Http\Livewire;

use App\Http\Livewire\WithConfirmation;
use App\Http\Livewire\WithSorting;
use App\Models\Role;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Livewire\Component;
use Livewire\WithPagination;
use App\Exports\RolesExport;

class Roles extends Component
{
    use WithPagination;
    use WithSorting;
    use WithConfirmation;

	protected $paginationTheme = 'bootstrap';
    public $selected_id, $keyWord, $title;

   public $updateMode = false;

    public int $perPage;

    public array $orderable;

     public array $listsForFields = [];

    public string $search = '';

    public array $selected = [];

    public array $paginationOptions;

    protected $queryString = [
        'search' =>[
            'except' =>'',
        ],
        'sortBy' =>[
            'except' =>'id',
        ],
        'sortDirection' =>[
            'except' =>'desc',
        ],
    ];

     protected $listeners = ['deleteConfirmed' => 'deletedConfirmed'];


    public function getSelectedCountProperty()
    {
        return count($this->selected);
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function updatingPerPage()
    {
        $this->resetPage();
    }

    public function resetSelected()
    {
        $this->selected = [];
    }

    public function mount()
    {
        $this->sortBy            = 'id';
        $this->sortDirection     = 'desc';
        $this->perPage           = 5;
        $this->paginationOptions = config('project.pagination.options');
        $this->orderable         = (new Role())->orderable;
        $this->initListsForFields();
    }

    public function render()
    {
        $query = Role::with(['permissions'])->advancedFilter([
            's'               =>$this->search ?: null,
            'order_column'    =>$this->sortBy,
            'order_direction' =>$this->sortDirection,
        ]);

        $roles = $query->paginate($this->perPage);

        return view('livewire.roles.view', compact('query', 'roles'));
    }



    protected function initListsForFields(): void
    {
        $this->listsForFields['roles'] = \App\Models\Role::pluck('name', 'id')->toArray();
    }


    function destroy($id)
    {
        abort_if(Gate::denies('role_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
         $role =  Role::find($id);


        if ($role->id === 1) {
             $this->emit('alert','¡Lo siento!','Este role no puede ser eliminado','error');
        } else {

             $role->delete();
             $this->resetSelected();
            $this->emit('alert','¡Bien hecho!','Role eliminado','success');
        }

    }


      public function deleteConfirmation($id)
    {
        $this->selected_id = $id;
        $this->dispatchBrowserEvent('show-delete-confirmation');
    }

     public function deletedConfirmed()
    {
        if ($this->selected_id) {
            $user   = \App\Models\User::where('role_id',$this->selected_id)
            ->update([
            'status' => 0

            ]);

            $record = Role::find($this->selected_id);
            $record->status = 0;
            $record->save();

            $this->emit('alert','¡Bien hecho!','Datos eliminados satisfactoriamente','success');
        }

    }

    public function export()
    {
        return \Maatwebsite\Excel\Facades\Excel::download(new RolesExport,'roles.xlsx');
    }
}
