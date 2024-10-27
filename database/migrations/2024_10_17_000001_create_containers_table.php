<?php 
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContainersTable extends Migration
{
    public function up()
    {
        Schema::create('containers', function (Blueprint $table) {
            $table->id();
            $table->string('numero_container')->unique();
            $table->string('tipo');
            $table->enum('status', ['Entrada', 'Saída', 'Em trânsito', 'No pátio']);
            $table->string('localizacao_atual');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('containers');
    }
}
