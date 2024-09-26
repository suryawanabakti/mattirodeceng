import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { IconDatabase, IconUsers } from "@tabler/icons-react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} header={""}>
            <Head title="Dashboard" />
            <div className="row row-cards">
                <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-primary text-white avatar">
                                        {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                        <IconDatabase className="icon" />
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-medium">
                                        5 Pelanggaran
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-primary text-white avatar">
                                        {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                        <IconUsers className="icon" />
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-medium">
                                        10 Siswa
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
