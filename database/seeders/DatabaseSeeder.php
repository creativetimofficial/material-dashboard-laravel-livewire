<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call([
            EmpresaTableSeeder::class,
            RolesAndPermissionTableSeeder::class,

        ]);

       $user = new  User();
       $user->name = 'Admin';
       $user->email = 'admin@material.com';
       $user->password = ('secret');
       $user->save();

       $user->assignRole('Tecnologia');
    }

}
