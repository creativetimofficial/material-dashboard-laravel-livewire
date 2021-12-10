<?php

namespace App\Http\Livewire\Auth;

use App\Models\User;
use Livewire\Component;

class Register extends Component
{

    public $name ='';
    public $email = '';
    public $password = '';

    protected $rules=[
    'name' => 'required|min:3',
    'email' => 'required|email|unique:users,email',
    'password' => 'required|min:5',];


    public function store(){

        $attributes = $this->validate();

        $user = User::create($attributes);

        auth()->login($user);
        
        return redirect('/dashboard');
    } 

    public function render()
    {
        return view('livewire.auth.register');
    }
}
