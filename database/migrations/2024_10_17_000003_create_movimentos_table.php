<?php use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMovimentosTable extends Migration
{
    public function up()
    {
        Schema::create('movimentos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('container_id')->constrained()->onDelete('cascade');
            $table->foreignId('veiculo_id')->constrained()->onDelete('cascade');
            $table->enum('tipo_movimento', ['Entrada', 'Saída']);
            $table->timestamp('data_hora_movimento');
            $table->string('localizacao_origem');
            $table->string('localizacao_destino');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('movimentos');
    }
}
