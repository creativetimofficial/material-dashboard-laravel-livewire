<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Container extends Model
{
    use HasFactory;

    protected $fillable = [
        'numero_container',
        'tipo',
        'status',
        'localizacao_atual'
    ];

    public function movimentos()
    {
        return $this->hasMany(Movimento::class);
    }
}
