import FlashMessage from "@/Components/FlashMessage";
import FormGroup from "@/Components/FormGroup";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import Select from "react-select";
import {
    IconPlus,
    IconEdit,
    IconTrash,
    IconSend,
    IconChevronLeft,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-hot-toast";

export default function Index({ auth, users, search, pelanggaran }) {
    const [showModal, setShowModal] = useState(false);

    const { flash } = usePage().props;
    console.log(flash);
    const [show, setShow] = useState(flash.message ? true : false);

    const [term, setTerm] = useState(search ? search : "");

    const handleSearch = (e) => {
        if (e.keyCode == 13) {
            router.visit(route("admin.pelanggaran-siswa.create"), {
                method: "get",
                data: {
                    search: e.target.value,
                },
            });
        }
    };
    const { data, post, setData, errors, processing } = useForm({
        user_id: "",
        pelanggaran_id: "",
        tanggal: "",
    });
    const [user, setUser] = useState({});
    const handleShowModal = (user) => {
        setUser(user);
        setData("user_id", user.id);
        setShowModal(true);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("admin.pelanggaran-siswa.store"));
    };
    useEffect(() => {
        setShow(flash.message ? true : false);
    }, [flash]);
    const header = (
        <div className="row g-2 align-items-center">
            <FlashMessage flash={flash} show={show} setShow={setShow} />
            <div className="row g-2 align-items-center">
                <div className="col">
                    <h2 className="page-title">Pelanggaran Siswa </h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mt-1">
                            <li class="breadcrumb-item">
                                <Link href={route("admin.pelanggaran.index")}>
                                    Pelanggaran Siswa
                                </Link>
                            </li>
                            <li
                                class="breadcrumb-item active"
                                aria-current="page"
                            >
                                Create
                            </li>
                        </ol>
                    </nav>
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
                            href={route("admin.pelanggaran-siswa.index")}
                            className="btn btn-primary"
                        >
                            {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                            <IconChevronLeft className="icon" />
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout user={auth.user} header={header}>
            <Head title="Users" />
            <div className="row row-cards">
                {users.data.map((user) => {
                    return (
                        <div className="col-md-6 col-lg-3" key={user.id}>
                            <div className="card">
                                <div className="card-body p-4 text-center">
                                    <span
                                        className="avatar avatar-xl mb-3 rounded"
                                        style={
                                            user.photo
                                                ? {
                                                      backgroundImage: `url(./storage/${user.photo})`,
                                                  }
                                                : {
                                                      backgroundImage: `url(https://ui-avatars.com/api/?name=${encodeURI(
                                                          user.name
                                                      )})`,
                                                  }
                                        }
                                    />
                                    <h3 className="m-0 mb-1">
                                        <a href="#">{user.name}</a>
                                    </h3>
                                    <div className="text-muted text-capitalize">
                                        {user.gender}
                                    </div>
                                    <div className="mt-3">
                                        {user.point > 90 && (
                                            <span className="badge bg-success-lt text-capitalize">
                                                Sisa Point Pelanggaran:{" "}
                                                {user.point}
                                            </span>
                                        )}
                                        {user.point < 90 && (
                                            <span className="badge bg-warning-lt text-capitalize">
                                                Sisa Point Pelanggaran:{" "}
                                                {user.point}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <Button
                                        variant=""
                                        className="card-btn "
                                        type="button"
                                        onClick={() => handleShowModal(user)}
                                    >
                                        <IconSend className="icon" /> Kirim
                                        Pelanggaran
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Pagination
                links={users.meta.links}
                search={search ? search : ""}
            />

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{user.name}</Modal.Title>
                </Modal.Header>
                <form onSubmit={submit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <label
                                htmlFor="pelanggaran_id"
                                className="form-label"
                            >
                                Pelanggaran
                            </label>
                            <Select
                                options={pelanggaran}
                                onChange={(e) =>
                                    setData("pelanggaran_id", e.value)
                                }
                            />
                        </div>
                        <FormGroup
                            label="Tanggal"
                            type="date"
                            value={data.tanggal}
                            onChange={(e) => setData("tanggal", e.target.value)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            <IconSend className="icon" /> Kirim
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
