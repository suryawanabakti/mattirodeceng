import { Link } from "@inertiajs/react";
import { IconHome, IconReport } from "@tabler/icons-react";

export default function NavLinkWaliKelas() {
    return (
        <ul className="navbar-nav">
            <li
                className={`nav-item ${
                    route().current("dashboard") && "active"
                }`}
            >
                <Link className="nav-link" href={route("dashboard")}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconHome className="icon" />
                    </span>
                    <span className="nav-link-title">Home</span>
                </Link>
            </li>

            <li
                className={`nav-item ${
                    route().current("admin.pelanggaran-siswa.*") && "active"
                }`}
            >
                <Link
                    className="nav-link"
                    href={route("admin.pelanggaran-siswa.index")}
                >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconReport className="icon" />
                    </span>
                    <span className="nav-link-title">Pelanggaran Siswa</span>
                </Link>
            </li>
        </ul>
    );
}
