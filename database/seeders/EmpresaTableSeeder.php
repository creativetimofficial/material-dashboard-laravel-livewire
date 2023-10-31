<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmpresaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $empresa = new \App\Models\Empresa();
        $empresa->razon_social  = 'BANDES';
        $empresa->documento     = 'G-20004752-6';
        $empresa->telefono      = '02125058000';
        $empresa->direccion     = 'Av. Universidad entre De Traposos A Colon, Edificio Torre Bandes, Nivel Mzz, Urbanización La Hoyada, Caracas, Distrito Capital';
        $empresa->email         = 'contacto@bandes.gob.ve';
        $empresa->logo1  = 'logo.png';
        $empresa->logo2 = 'logo_mini.png';
        $empresa->status    = 1;
        $empresa->save();


        \DB::table('agencias')->insert([

            'code' => uniqid(),
            'name' => 'Caracas',
            'status' => 1,
            'empresa_id' => 1

        ]);
    }
}
