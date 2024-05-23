<?php

namespace Database\Seeders;

use App\Models\Pelanggaran;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PelanggaranSeeder extends Seeder
{
    /**
     * Run the database seeds'.
     */
    public function run(): void
    {
        Pelanggaran::create([
            'nama_pelanggaran' => 'Pelanggaran 1',
            'deskripsi' => 'Test',
            'point' => 1,
        ]);

        Pelanggaran::create([
            'nama_pelanggaran' => 'Pelanggaran 2',
            'deskripsi' => 'Test',
            'point' => 1,
        ]);
    }
}
