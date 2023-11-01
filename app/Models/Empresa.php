<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Hash;
use Illuminate\Contracts\Translation\HasLocalePreference;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;


class Empresa extends Model
{
	use HasFactory;
    use HasAdvancedFilter;

    public $timestamps = true;

    protected $table = 'empresas';

    protected $fillable   = ['razon_social','documento','telefono','direccion','email','is_active','logo1','logo2'];

    public $orderable     = ['id','razon_social','documento','telefono','direccion','email','is_active','logo1','logo2'];

    public $filterable    = ['id','razon_social','documento','telefono','direccion','email','is_active','logo1','logo2'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function agencias()
    {
        return $this->hasMany('App\Models\Agencia', 'empresa_id', 'id');
    }

}
