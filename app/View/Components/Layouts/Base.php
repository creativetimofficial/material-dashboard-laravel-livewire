<?php

namespace App\View\Components\Layouts;

use Illuminate\View\Component;

class Base extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
       if (\Auth::check()) {
        return view('layouts.base');
       } else {
        return view('layouts.auth');
       }

    }
}
