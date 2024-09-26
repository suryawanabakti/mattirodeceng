<?php

namespace App\Http\Controllers;

use App\Models\PelanggaranSiswa;
use App\Http\Requests\StorePelanggaranSiswaRequest;
use App\Http\Requests\UpdatePelanggaranSiswaRequest;
use App\Http\Resources\Admin\UserResource;
use App\Http\Resources\PelanggaranSiswaResource;
use App\Models\Pelanggaran;
use App\Models\User;
use App\Service\FonnteService;

class PelanggaranSiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pelanggaranSiswa = PelanggaranSiswaResource::collection(PelanggaranSiswa::orderBy('created_at')->paginate(10));
        return inertia('Admin/PelanggaranSiswa/Index', ["pelanggaranSiswa" => $pelanggaranSiswa]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::role('siswa')->orderBy('updated_at', 'desc');
        if (request('search')) {
            $users->where('name', 'LIKE', '%' . request('search') . '%');
        }
        // return UserResource::collection($users);
        $pelanggaran = Pelanggaran::all()->map(function ($p) {
            return [
                "value" =>  $p->id,
                "label" => $p->nama_pelanggaran
            ];
        });

        return inertia("Admin/PelanggaranSiswa/Create", ["users" => UserResource::collection($users->paginate(8)), "search" => request('search'), "pelanggaran" => $pelanggaran]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePelanggaranSiswaRequest $request)
    {
        PelanggaranSiswa::create([
            'user_id' => $request->user_id,
            'pelanggaran_id' => $request->pelanggaran_id,
            'tanggal' => $request->tanggal
        ]);

        $user = User::find($request->user_id);

        $pelanggaran = Pelanggaran::find($request->pelanggaran_id);

        $point = 100;
        $pelanggaranSiswa = PelanggaranSiswa::with('pelanggaran')->where('user_id', $request->user_id)->get();
        foreach ($pelanggaranSiswa as $pelanggaran) {
            $point = $point - $pelanggaran->pelanggaran->point;
        }
        FonnteService::sendWa($user->phone, "Anda telah melanggar pelanggaran {$pelanggaran->nama_pelanggaran} \nSisa Point : $point");

        return redirect()->to(route("admin.pelanggaran-siswa.index"))->with([
            "message" => [
                "label" => "Berhasil menambahkan pelanggaran ke siswa",
                "type" => "success"
            ],
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(PelanggaranSiswa $pelanggaranSiswa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PelanggaranSiswa $pelanggaranSiswa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePelanggaranSiswaRequest $request, PelanggaranSiswa $pelanggaranSiswa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PelanggaranSiswa $pelanggaranSiswa)
    {
        //
    }
}
