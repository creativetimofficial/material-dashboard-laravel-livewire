<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\Permission;

class Permissions extends Component
{
    use WithPagination;

	protected $paginationTheme = 'bootstrap';
    public $selected_id, $keyWord, $name, $guard_name, $slug, $descripcion, $status;

    public function render()
    {
		$keyWord = '%'.$this->keyWord .'%';
        return view('livewire.permissions.view', [
            'permissions' => Permission::latest()
						->orWhere('name', 'LIKE', $keyWord)
						->orWhere('guard_name', 'LIKE', $keyWord)
						->orWhere('slug', 'LIKE', $keyWord)
						->orWhere('descripcion', 'LIKE', $keyWord)
						->orWhere('status', 'LIKE', $keyWord)
						->paginate(10),
        ]);
    }
	
    public function cancel()
    {
        $this->resetInput();
    }
	
    private function resetInput()
    {		
		$this->name = null;
		$this->guard_name = null;
		$this->slug = null;
		$this->descripcion = null;
		$this->status = null;
    }

    public function store()
    {
        $this->validate([
		'name' => 'required',
		'guard_name' => 'required',
		'slug' => 'required',
		'descripcion' => 'required',
		'status' => 'required',
        ]);

        Permission::create([ 
			'name' => $this-> name,
			'guard_name' => $this-> guard_name,
			'slug' => $this-> slug,
			'descripcion' => $this-> descripcion,
			'status' => $this-> status
        ]);
        
        $this->resetInput();
		$this->dispatchBrowserEvent('closeModal');
		session()->flash('message', 'Permission Successfully created.');
    }

    public function edit($id)
    {
        $record = Permission::findOrFail($id);
        $this->selected_id = $id; 
		$this->name = $record-> name;
		$this->guard_name = $record-> guard_name;
		$this->slug = $record-> slug;
		$this->descripcion = $record-> descripcion;
		$this->status = $record-> status;
    }

    public function update()
    {
        $this->validate([
		'name' => 'required',
		'guard_name' => 'required',
		'slug' => 'required',
		'descripcion' => 'required',
		'status' => 'required',
        ]);

        if ($this->selected_id) {
			$record = Permission::find($this->selected_id);
            $record->update([ 
			'name' => $this-> name,
			'guard_name' => $this-> guard_name,
			'slug' => $this-> slug,
			'descripcion' => $this-> descripcion,
			'status' => $this-> status
            ]);

            $this->resetInput();
            $this->dispatchBrowserEvent('closeModal');
			session()->flash('message', 'Permission Successfully updated.');
        }
    }

    public function destroy($id)
    {
        if ($id) {
            Permission::where('id', $id)->delete();
        }
    }
}