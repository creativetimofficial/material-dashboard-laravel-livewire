<?php
namespace App\Http\Livewire;

use Livewire\Component;
use App\Http\Livewire\WithConfirmation;
use App\Http\Livewire\WithSorting;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Livewire\WithPagination;
use App\Models\Empresa;
use Livewire\WithFileUploads;

class Empresas extends Component
{
    use WithPagination;
    use WithSorting;
    use WithConfirmation;
    use WithFileUploads;

    protected $paginationTheme = 'bootstrap';
    public $selected_id, $keyWord, $razon_social, $documento, $direccion, $telefono, $logo1, $email, $plan_id,$status;
    public $updateMode = false;



    public int $perPage;

    public array $orderable;

    public string $search = '';

    public array $selected = [];

    public array $permissions = [];

    public array $paginationOptions;

     public array $listsForFields = [];


    protected $queryString = [
        'search' => [
            'except' => '',
        ],
        'sortBy' => [
            'except' => 'id',
        ],
        'sortDirection' => [
            'except' => 'desc',
        ],
    ];

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
        $this->orderable         = (new Empresa())->orderable;
        $this->initListsForFields();
    }


    public function render()
    {
		 $query = Empresa::advancedFilter([
            's'               => $this->search ?: null,
            'order_column'    => $this->sortBy,
            'order_direction' => $this->sortDirection,
        ]);

        $empresas = $query->paginate($this->perPage);

        return view('livewire.empresas.view', compact('query', 'empresas'));
    }

    public function cancel()
    {
        $this->resetInput();
        $this->updateMode = false;
    }

    private function resetInput()
    {
		$this->razon_social = null;
		$this->documento = null;
		$this->direccion = null;
		$this->telefono = null;
		$this->logo1 = '';
		$this->email = null;
        $this->status = null;
    }

    public function store()
    {
        $this->validate([
		'razon_social' => 'required|max:60',
		'documento' => 'required|max:13',
		'direccion' => 'required',
		'email' => 'required|email',
		'telefono' => 'required|max:11',
		'logo1' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

        ]);

        $empresa = \App\Models\Empresa::where('status',1)->first();

        if ($empresa != null) {
            $this->emit('alert','¡Lo siento!','Ya posee una empresa activa.','warning');
            $this->emit('closeModal');
            $this->resetInput();
        } else {

            $file = $this->logo1;
            $ext = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
            $fileName = strtotime(date('Y-m-d H:i:s'));
            $fileName = $fileName . '.' . $ext;

            $empresa = new Empresa();
            $empresa->razon_social = $this->razon_social;
            $empresa->documento = $this->documento;
            $empresa->direccion = $this->direccion;
            $empresa->telefono = $this->telefono;
            $empresa->logo1 = $imagerazon_social;
            //$empresa->fecha_creacion = now();
            $empresa->status = 1;
            $empresa->save();

            $this->logo->store('logo', 'public');


            $this->resetInput();
            $this->emit('closeModal');
            $this->emit('alert','¡Bien hecho!','Datos creados satisfactoriamente','success');
        }



    }

    public function edit($id)
    {
        $record = Empresa::findOrFail($id);
        //dd($record);
        $this->selected_id = $id;
		$this->razon_social = $record->razon_social;
		$this->documento = $record->documento;
		$this->direccion = $record->direccion;
		$this->telefono = $record->telefono;
		$this->status = $record->status;
		$this->email = $record->email;
        $this->updateMode = true;
    }

    public function update()
    {
        $this->validate([
        'razon_social' => 'required',
        'documento' => 'required|max:13',
        'direccion' => 'required',
        'telefono' => 'required|max:11',
        'email' => 'required|email',
        //'logo1' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        //'fecha_creacion' => 'required',
        ]);

        if ($this->selected_id) {
            //$imagerazon_social = \Carbon\Carbon::now()->timestamp. '.' .$this->logo->extension();


			if ($this->logo1 != null) {

                $file = $this->logo1;
                $ext = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                $fileName = strtotime(date('Y-m-d H:i:s'));
                $fileName = $fileName . '.' . $ext;

                $record = Empresa::find($this->selected_id);
                $record->razon_social = $this->razon_social;
                $record->documento    = $this->documento;
                $record->direccion    = $this->direccion;
                $record->telefono     = $this->telefono;
                $record->email        = $this->email;
                $record->status    = $this->status;
                $record->logo1 = $fileName;

                $record->save();
                $this->resetInput();
                $this->updateMode = false;
                $this->emit('alert','¡Bien hecho!','Datos actualizados satisfactoriamente','success');
                $this->emit('closeModal');

                $file->storeAs('logo', $fileName, 'public');

            } else {
                $record = Empresa::find($this->selected_id);
                $record->razon_social = $this->razon_social;
                $record->documento    = $this->documento;
                $record->direccion    = $this->direccion;
                $record->telefono     = $this->telefono;
                $record->email        = $this->email;
                $record->status    = $this->status;
                $record->save();

                $this->resetInput();
                $this->updateMode = false;
                $this->emit('alert','¡Bien hecho!','Datos actualizados satisfactoriamente','success');
                $this->emit('closeModal');
            }



        }
    }

    public function destroy($id)
    {
        if ($id) {
            $record = Empresa::where('id', $id);
            $record->delete();
            $this->emit('alert','¡Bien hecho!','Registros eliminado(s) satisfactoriamente','success');
        }
    }

     protected function initListsForFields(): void
    {
        $this->listsForFields['empresas'] = \App\Models\Empresa::pluck('razon_social', 'id')->toArray();
    }

     public function deleteSelected()
    {
        abort_if(Gate::denies('role_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $empresa = Empresa::find($this->selected);
        $empresa->status = 0;
        $empresa->save();

        $this->resetSelected();
        $this->emit('alert','¡Bien hecho!','Empresa inactiva satisfactoriamente','success');
    }
}
