<?php
/*
namespace App\Http\Controllers;
use App\Models\Container; // Certifique-se de importar o Model
use Illuminate\Http\Request;

class ContainerController extends Controller
{
    /**
     * Display a listing of the resource.
      
    public function index()
    {
        $containers = Container::all();
        return view('containers.index', compact('containers'));
    }
    /**
     * Show the form for creating a new resource.
     
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
      
    public function store(Request $request)
    {
        $request->validate([
            'numero_container' => 'required|unique:containers',
            'tipo' => 'required',
            'status' => 'required',
            'localizacao_atual' => 'required',
        ]);

        Container::create($request->all());

        return redirect()->route('containers.index');
    }
    /**
     * Display the specified resource.
      
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     
    public function destroy(string $id)
    {
        //
    }
}
*/