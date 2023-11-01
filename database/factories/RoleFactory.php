<?php

namespace Database\Factories;

use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class RoleFactory extends Factory
{
    protected $model = Role::class;

    public function definition()
    {
        return [
			'name' => $this->faker->name,
			'guard_name' => $this->faker->name,
			'status' => $this->faker->name,
        ];
    }
}
