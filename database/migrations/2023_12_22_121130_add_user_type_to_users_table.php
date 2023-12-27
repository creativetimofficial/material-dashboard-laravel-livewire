<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('kupli')->nullable(true);
            $table->boolean('pelajar')->nullable(true);
            $table->boolean('pensyarah_penilai')->nullable(true);
            $table->boolean('pensyarah_penilai_ojt')->nullable(true);
            $table->boolean('penyelaras_program')->nullable(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('kupli');
            $table->dropColumn('pelajar');
            $table->dropColumn('pensyarah_penilai');
            $table->dropColumn('pensyarah_penilai_ojt');
            $table->dropColumn('penyelaras_program');
        });
    }
};
