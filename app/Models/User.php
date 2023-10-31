<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
	use HasFactory;
	
    public $timestamps = true;

    protected $table = 'users';

    protected $fillable = ['name','email','phone','location','about'];
	
}
