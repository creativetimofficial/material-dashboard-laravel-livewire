<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionTableSeeder extends Seeder
{
     private $permissions, $tecnico;

    public function __construct()
    {
        /*
        set the default permissions
        */
        $this->permissions =  [
            [
                'name' => 'user_create',
                'descripcion' =>'Registro',
                'slug' => 'Usuarios',
                'status' => 1
            ],
            [
                'name' => 'user_edit',
                'descripcion' =>'Edición',
                'slug' => 'Usuarios',
                'status' => 1
            ],
            [
                'name' => 'user_delete',
                'descripcion' =>'Borrar',
                'slug' => 'Usuarios',
                'status' => 1
            ],
            [
                'name' => 'user_access',
                'descripcion' =>'Acceso',
                'slug' => 'Usuarios',
                'status' => 1
            ],
            [
                'name' => 'profile_edit',
                'descripcion' =>'Edición de perfil',
                'slug' => 'Usuarios',
                'status' => 1
            ],
            [
                'name' => 'view_logins',
                'descripcion' =>'Historial de logueo',
                'slug' => 'Usuarios',
                'status' => 1
            ],
            [
                'name' => 'role_create',
                'descripcion' =>'Registro',
                'slug' => 'Roles',
                'status' => 1
            ],
            [
                'name' => 'role_edit',
                'descripcion' =>'Edición',
                'slug' => 'Roles',
                'status' => 1
            ],

            [
                'name' => 'role_delete',
                'descripcion' =>'Borrar',
                'slug' => 'Roles',
                'status' => 1
            ],
            [
                'name' => 'role_access',
                'descripcion' =>'Acceso',
                'slug' => 'Roles',
                'status' => 1
            ],
            [
                'name' => 'permission_create',
                'descripcion' =>'Registro',
                'slug' => 'Permisos',
                'status' => 1
            ],
            [
                'name' => 'permission_edit',
                'descripcion' =>'Edición',
                'slug' => 'Permisos',
                'status' => 1
            ],
            [
                'name' => 'permission_delete',
                'descripcion' =>'Borrar',
                'slug' => 'Permisos',
                'status' => 1
            ],
            [
                'name' => 'permission_access',
                'descripcion' =>'Acceso',
                'slug' => 'Permisos',
                'status' => 1
            ],
            [
                'name' => 'logs_access',
                'descripcion' =>'Acceso',
                'slug' => 'Logs',
                'status' => 1
            ],
            [
                'name' => 'logs_create',
                'descripcion' =>'Registro',
                'slug' => 'Logs',
                'status' => 1
            ],
            [
                'name' => 'logs_edit',
                'descripcion' =>'Edición',
                'slug' => 'Logs',
                'status' => 1
            ],
            [
                'name' => 'logs_delete',
                'descripcion' =>'Borrar',
                'slug' => 'Logs',
                'status' => 1
            ],
            [
                'name' => 'empresa_access',
                'descripcion' =>'Acceso',
                'slug' => 'Empresas',
                'status' => 1
            ],
            [
                'name' => 'empresa_create',
                'descripcion' =>'Registro',
                'slug' => 'Empresas',
                'status' => 1
            ],
            [
                'name' => 'empresa_edit',
                'descripcion' =>'Edición',
                'slug' => 'Empresas',
                'status' => 1
            ],
            [
                'name' => 'empresa_delete',
                'descripcion' =>'Borrar',
                'slug' => 'Empresas',
                'status' => 1
            ],
            [
                'name' => 'agencia_create',
                'descripcion' =>'Registro',
                'slug' => 'Agencias',
                'status' => 1
            ],
            [
                'name' => 'agencia_edit',
                'descripcion' =>'Edición',
                'slug' => 'Agencias',
                'status' => 1
            ],
            [
                'name' => 'agencia_delete',
                'descripcion' =>'Borrar',
                'slug' => 'Agencias',
                'status' => 1
            ],
             [
                'name' => 'agencia_access',
                'descripcion' =>'Acceso',
                'slug' => 'Agencias',
                'status' => 1
            ],
            [
                'name' => 'backup_access',
                'descripcion' =>'Acceso',
                'slug' => 'Backups',
                'status' => 1
            ],
            [
                'name' => 'seguridad_access',
                'descripcion' =>'Acceso',
                'slug' => 'Módulo de seguridad',
                'status' => 1
            ],
            [
                'name' => 'configuracion_access',
                'descripcion' =>'Acceso',
                'slug' => 'Módulo de configuracion',
                'status' => 1
            ],
            [
                'name' => 'backup_generate',
                'descripcion' =>'Generar',
                'slug' => 'Backups',
                'status' => 1
            ],
            [
                'name' => 'backup_download',
                'descripcion' =>'Descargar',
                'slug' => 'Backups',
                'status' => 1
            ],
            [
                'name' => 'backup_delete',
                'descripcion' =>'Eliminar',
                'slug' => 'Backups',
                'status' => 1
            ]
      ];
        $this->tecnico =  [

        ];



    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
      {
          // Reset cached roles and permissions
        app()['cache']->forget('spatie.permission.cache');

         Permission::insert($this->permissions);
        // create the admin role and set all default permissions
        $role = Role::create(['name' => 'Seguridad', 'status' => 1]);

        foreach ($this->permissions as $key => $value) {

            $role->givePermissionTo($value['name']);
        }

        $role = Role::create(['name' => 'Tecnologia', 'status' => 1]);

        foreach ($this->permissions as $key => $value) {

            $role->givePermissionTo($value['name']);
        }

        $role = Role::create(['name' => 'Consultor', 'status' => 1]);

        foreach ($this->tecnico as $key => $value) {

            $role->givePermissionTo($value['name']);
        }

    }

}
