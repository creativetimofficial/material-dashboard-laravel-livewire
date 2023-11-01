<?php

namespace App\Http\Livewire\Auth;

use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Login extends Component
{

    public $email='';
    public $password='';

    protected $rules= [
        'email' => 'required|email',
        'password' => 'required'

    ];

    public function render()
    {
        return view('livewire.auth.login');
    }

    public function mount() {

        $this->fill(['email' => 'admin@material.com', 'password' => 'secret']);
    }

    public function store()
    {

        //dd($this->email);

        $attributes = $this->validate();

        if (! auth()->attempt($attributes)) {
            throw ValidationException::withMessages([
                'email' => 'Usuario o contraseña incorrectos, intenta nuevamente.'
            ]);
        }

        session()->regenerate();

        return redirect('/dashboard');

    }
}
