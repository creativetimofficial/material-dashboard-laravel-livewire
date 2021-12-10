<?php

namespace App\Http\Livewire\Auth;

use Livewire\Component;
use App\Notifications\ResetPassword;
use App\Models\User;
use Illuminate\Notifications\Notifiable;

class ForgotPassword extends Component
{
    use Notifiable;

    public $email='';
    
    protected $rules = [
        'email' => 'required|email',
    ];

    public function render()
    {
        return view('livewire.auth.forgot-password');
    }


    public function routeNotificationForMail() {
        return $this->email;
    }

    public function show(){

        if(env('IS_DEMO')){
            return back()->with('demo', "You are in a demo version, you can't reset the password");
        }
        else{

        $this->validate();

        $user = User::where('email', $this->email)->first();

    
        if($user){

    
            $this->notify(new ResetPassword($user->id));

            return back()->with('status', "We have emailed your password reset link!");

    
        } else {
    
            return back()->with('email', "We can't find any user with that email address.");
    
        }
    }
}
}
