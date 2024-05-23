import FlashMessage from "@/Components/FlashMessage";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import {
    IconPlus,
    IconEdit,
    IconTrash,
    IconDotsVertical,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Index({ auth, pelanggaran, search }) {
    const { flash } = usePage().props;
    console.log(flash);
    const [show, setShow] = useState(flash.message ? true : false);

    const [term, setTerm] = useState(search ? search : "");

    const handleSearch = (e) => {
        if (e.keyCode == 13) {
            router.visit(route("admin.pelanggaran.index"), {
                method: "get",
                data: {
                    search: e.target.value,
                },
            });
        }
    };

    useEffect(() => {
        setShow(flash.message ? true : false);
    }, [flash]);
    const header = (
        <div className="row g-2 align-items-center">
            <FlashMessage flash={flash} show={show} setShow={setShow} />
            <div className="col">
                <h2 className="page-title">Pelanggaran</h2>
                <div className="text-muted mt-1">
                    {pelanggaran.meta.from ?? 0}-{pelanggaran.meta.to ?? 0} of{" "}
                    {pelanggaran.meta.total}
                </div>
            </div>
            <div className="col-auto ms-auto d-print-none">
                <div className="d-flex">
                    <input
                        type="search"
                        className="form-control d-inline-block w-9 me-3"
                        placeholder="Search…"
                        onKeyUp={handleSearch}
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                    />
                    <Link
                        href={route("admin.pelanggaran.create")}
                        className="btn btn-primary"
                    >
                        {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                        <IconPlus className="icon" />
                        Pelanggaran
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout user={auth.user} header={header}>
            <Head title="pelanggaran" />
            <div className="card">
                <table className="table card-table">
                    <thead>
                        <tr>
                            <th>Nama Pelanggaran</th>
                            <th>Deskripsi</th>
                            <th>Point</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pelanggaran.data.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.nama_pelanggaran}</td>
                                    <td>{data.deskripsi}</td>
                                    <td>{data.point}</td>
                                    <td>
                                        <div class="dropdown">
                                            <button
                                                class="btn btn-icon"
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <IconDotsVertical className="icon" />
                                            </button>
                                            <ul
                                                class="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton1"
                                            >
                                                <li>
                                                    <Link
                                                        class="dropdown-item"
                                                        href={route(
                                                            "admin.pelanggaran.destroy",
                                                            data.id
                                                        )}
                                                        method="delete"
                                                        as="button"
                                                    >
                                                        Hapus
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination
                links={pelanggaran.meta.links}
                search={search ? search : ""}
            />
        </AuthenticatedLayout>
    );
}
