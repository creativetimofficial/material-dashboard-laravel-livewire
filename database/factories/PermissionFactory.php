<?php

namespace Database\Factories;

use App\Models\Permission;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PermissionFactory extends Factory
{
    protected $model = Permission::class;

    public function definition()
    {
        return [
			'name' => $this->faker->name,
			'guard_name' => $this->faker->name,
			'slug' => $this->faker->name,
			'descripcion' => $this->faker->name,
			'status' => $this->faker->name,
        ];
    }
}
