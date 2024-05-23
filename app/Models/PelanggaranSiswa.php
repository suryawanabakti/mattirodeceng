<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PelanggaranSiswa extends Model
{
    use HasFactory;
    public $table = 'pelanggaran_siswa';
    protected $guarded = ['id'];
    public $with = ['user', 'pelanggaran'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pelanggaran()
    {
        return $this->belongsTo(Pelanggaran::class);
    }
}
