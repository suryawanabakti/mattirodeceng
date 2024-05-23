import React from "react";
import { Link } from "@inertiajs/react";
import {
    IconHome,
    IconPdf,
    IconReport,
    IconUserScreen,
    IconUsers,
} from "@tabler/icons-react";

export default function NavLinkAdmin() {
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
                    route().current("admin.users*") && "active"
                }`}
            >
                <Link className="nav-link" href={route("admin.users.index")}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconUsers className="icon" />
                    </span>
                    <span className="nav-link-title">Siswa</span>
                </Link>
            </li>
            <li
                className={`nav-item ${
                    route().current("admin.walikelas*") && "active"
                }`}
            >
                <Link
                    className="nav-link"
                    href={route("admin.walikelas.index")}
                >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconUserScreen className="icon" />
                    </span>
                    <span className="nav-link-title">Wali Kelas</span>
                </Link>
            </li>
            <li
                className={`nav-item ${
                    route().current("admin.pelanggaran.*") && "active"
                }`}
            >
                <Link
                    className="nav-link"
                    href={route("admin.pelanggaran.index")}
                >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconPdf className="icon" />
                    </span>
                    <span className="nav-link-title">Pelanggaran</span>
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
