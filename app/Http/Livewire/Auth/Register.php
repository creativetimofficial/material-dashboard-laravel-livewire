<?php

namespace App\Http\Livewire\Auth;

use App\Models\User;
use Livewire\Component;

class Register extends Component
{

    public $name ='';
    public $email = '';
    public $password = '';
    public $password_confirmation = '';

    protected $rules=[
    'name' => 'required|min:3',
    'password_confirmation' => 'required',
    'email' => 'required|email|unique:users,email',
    'password' => 'required|min:5|confirmed',];


    public function store(){

        $attributes = $this->validate();

        $user = User::create($attributes);

        //auth()->login($user);

        return  redirect('sign-in')->with('status', '¡Usuario registrado Satisfactoriamente!');
    }

    public function render()
    {
        return view('livewire.auth.register');
    }
}
