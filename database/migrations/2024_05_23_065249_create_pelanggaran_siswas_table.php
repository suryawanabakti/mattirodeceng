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
        Schema::create('pelanggaran_siswa', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id');
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreignId('pelanggaran_id');
            $table->foreign('pelanggaran_id')->references('id')->on('pelanggaran')->cascadeOnDelete();
            $table->date('tanggal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pelaggaran_siswas');
    }
};
