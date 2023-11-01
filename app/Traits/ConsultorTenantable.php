<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

trait ConsultorTenantable
{
    protected static function bootConsultorTenantable(): void
    {
        if (app()->runningInConsole()) {
            return;
        }

        static::creating(function (Model $model) {
            if (!auth()->check()) {
                return;
            }

        });

        static::addGlobalScope('user_filter', function (Builder $builder) {
            //dd(\Auth::user());

            if (auth()->user()->hasRole('Seguridad') || auth()->user()->hasRole('Tecnologia')) {
                return;
            }
            else
            {
                 $builder->where((new static())->getTable() . '.user_id', \Auth::user()->id);
            }
        });
    }
}
