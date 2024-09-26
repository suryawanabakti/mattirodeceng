<?php

namespace App\Http\Resources\Admin;

use App\Http\Resources\RoleResoruce;
use App\Models\PelanggaranSiswa;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $point = 100;
        $pelanggaranSiswa = PelanggaranSiswa::with('pelanggaran')->where('user_id', $this->id)->get();
        foreach ($pelanggaranSiswa as $pelanggaran) {
            $point = $point - $pelanggaran->pelanggaran->point;
        }
        return [
            "id" => $this->id,
            "name" => $this->name,
            "username" => $this->username,
            "gender" => $this->gender,
            "photo" => $this->photo,
            "point" => $point,
            "roles" => RoleResoruce::collection($this->roles),
            "created_at" => $this->created_at->format('d M Y'),
            "updated_at" => $this->created_at->format('d M Y'),
        ];
    }
}
