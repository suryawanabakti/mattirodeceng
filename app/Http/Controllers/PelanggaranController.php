<?php

namespace App\Http\Controllers;

use App\Models\Pelanggaran;
use App\Http\Requests\StorePelanggaranRequest;
use App\Http\Requests\UpdatePelanggaranRequest;
use App\Http\Resources\PelanggaranResource;

class PelanggaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pelanggaran = PelanggaranResource::collection(Pelanggaran::orderBy('created_at', 'desc')->paginate(10));
        return inertia("Admin/Pelanggaran/Index", ["pelanggaran" => $pelanggaran]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Admin/Pelanggaran/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePelanggaranRequest $request)
    {
        Pelanggaran::create($request->validated());
        return redirect()->route('admin.pelanggaran.index')->with([
            "message" => [
                "label" => "Berhasil tambah ➕ pelanggaran " . $request->nama_pelanggaran,
                "type" => "success",
            ],
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pelanggaran $pelanggaran)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pelanggaran $pelanggaran)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePelanggaranRequest $request, Pelanggaran $pelanggaran)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pelanggaran $pelanggaran)
    {
        $pelanggaran->delete();
        return back()->with([
            "message" => [
                "label" => "Berhasil tambah 🗑️ pelanggaran " . $pelanggaran->name,
                "type" => "success",
            ],
        ]);
    }
}
