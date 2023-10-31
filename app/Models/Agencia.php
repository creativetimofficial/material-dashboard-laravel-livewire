<?php

namespace App\Models;

use \DateTimeInterface;
use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Hash;
use Illuminate\Contracts\Translation\HasLocalePreference;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use App\Traits\Tenantable;

class Agencia extends Model
{
	use HasFactory;
    use HasAdvancedFilter;
    //use Tenantable;

    public $timestamps = true;

    protected $table = 'agencias';

    protected $fillable = [
        'code','name','status','user_id','empresa_id'
    ];
    public $orderable =
     [
        'id', 'code','name','status','user_id','empresa_id'
     ];

       public $filterable = [
        'id', 'code','name','status','user_id','empresa_id'

    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function empresa()
    {
        return $this->hasOne('App\Models\Empresa', 'id', 'empresa_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function logins()
    {
        return $this->hasMany('App\Models\Login', 'agencia_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function modulos()
    {
        return $this->hasMany('App\Models\Modulo', 'agencia_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany('App\Models\User', 'agencia_id', 'id');
    }

}
