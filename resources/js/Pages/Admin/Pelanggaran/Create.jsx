import FormGroup from "@/Components/FormGroup";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import {
    IconChevronLeft,
    IconGenderMale,
    IconGenderFemale,
} from "@tabler/icons-react";
export default function Create({ auth }) {
    const { data, setData, post, errors, processing } = useForm({
        nama_pelanggaran: "",
        deskripsi: "",
        point: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.pelanggaran.store"));
        console.log(data);
    };

    const header = (
        <div className="row g-2 align-items-center">
            <div className="col">
                <h2 className="page-title">pelanggaran </h2>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mt-1">
                        <li class="breadcrumb-item">
                            <Link href={route("admin.pelanggaran.index")}>
                                Pelanggaran
                            </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Create
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="col-auto ms-auto d-print-none">
                <div className="d-flex">
                    <Link
                        href={route("admin.pelanggaran.index")}
                        className="btn btn-primary"
                    >
                        {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                        <IconChevronLeft className="icon" />
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout user={auth.user} header={header}>
            <Head title="Create" />
            <div className="card">
                <form onSubmit={submit}>
                    <div className="card-body">
                        <FormGroup
                            required={true}
                            label="Nama"
                            id="name"
                            onChange={(e) =>
                                setData("nama_pelanggaran", e.target.value)
                            }
                            value={data.nama_pelanggaran}
                            placeholder="Iput Nama Pelanggaran..."
                            errors={errors.nama_pelanggaran}
                        />
                        <FormGroup
                            label="Deskripsi"
                            id="deskripsi"
                            onChange={(e) =>
                                setData("deskripsi", e.target.value)
                            }
                            value={data.deskripsi}
                            placeholder="Iput deskripsi..."
                            errors={errors.deskripsi}
                        />
                        <FormGroup
                            required={true}
                            label="Point"
                            type="number"
                            id="point"
                            onChange={(e) => setData("point", e.target.value)}
                            value={data.point}
                            placeholder="Input Point..."
                            errors={errors.point}
                        />
                    </div>
                    <div className="card-footer">
                        <button
                            className={`btn btn-primary ${
                                processing ? "btn-loading" : ""
                            }`}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
