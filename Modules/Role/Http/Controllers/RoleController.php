<?php

namespace Modules\Role\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
         if (! \Gate::allows('role_access'))
      {

           \Alert::error('¡Lo siento!','No tienes permiso para acceder a este módulo');

           return \Redirect::to('home');

        } else
       {
           return view('role::index');
       }
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {

        return view('role::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
       try {


        $role = \DB::table('roles')->where('name',$request->name)->first();

        if ($role <> null) {

            \Alert::error('¡Lo siento!','El Role ya existe');
            return redirect()->route('role.index');
        }
        else
        {


            $role = new \Spatie\Permission\Models\Role();

            $role->name = $request->name;
            $role->status = $request->status;
            $role->save();

            if(! empty($request->permissions))
            {
                 $role->syncPermissions($request->permissions);
            }
            else
            {
                $permissions =  \Spatie\Permission\Models\Permission::all();

                foreach ($permissions as $permission)
                {
                    $role->revokePermissionTo($permission->name);
                }
            }


            \Alert::success('¡Bien hecho!','Role creado satisfactoriamente');
            return redirect()->route('role.index');
        }



       } catch (\Exception $e) {

            \Alert::error('¡Lo siento!','Algo salió mal al enviar el formulario');
            return redirect()->route('role.index');
       }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('role::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        $role = \Spatie\Permission\Models\Role::find($id);
        return view('role::edit',compact('role'));
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {


        try {

            if(! empty($request->permissions))
            {
                $role = \Spatie\Permission\Models\Role::find( $id);
                $role->status = $request->status;
                $role->save();

                 $role->syncPermissions($request->permissions);
            }
            else
            {
                $permissions =  \Spatie\Permission\Models\Permission::all();
                $role = \Spatie\Permission\Models\Role::find($id);
                $role->status = $request->status;
                $role->save();

                foreach ($permissions as $permission)
                {
                    $role->revokePermissionTo($permission->name);
                }
            }

            \Alert::success('¡Bien hecho!','Role modificado satisfactoriamente');
            return redirect()->route('role.index');



        } catch (\Exception $e) {

        }


    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
