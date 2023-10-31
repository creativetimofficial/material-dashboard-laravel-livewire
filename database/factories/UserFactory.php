<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
			'name' => $this->faker->name,
			'email' => $this->faker->name,
			'phone' => $this->faker->name,
			'location' => $this->faker->name,
			'about' => $this->faker->name,
        ];
    }
}
