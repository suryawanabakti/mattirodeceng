import React from "react";
import { Link } from "@inertiajs/react";
import {
    IconHome,
    IconPdf,
    IconReport,
    IconUserScreen,
    IconUsers,
} from "@tabler/icons-react";

export default function NavLinkSiswa() {
    return (
        <ul className="navbar-nav">
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
