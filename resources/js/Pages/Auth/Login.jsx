import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        input_type: "",
        password: "",
        remember: false,
        show_password: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="row g-0 flex-fill">
                <div className="col-12 col-lg-6 col-xl-4 border-top-wide border-primary d-flex flex-column justify-content-center">
                    <div className="container container-tight my-5 px-lg-5">
                        <div className="text-center mb-4">
                            <Link
                                href="/"
                                className="navbar-brand navbar-brand-autodark"
                            >
                                Mattiro Deceng
                            </Link>
                        </div>
                        <h2 className="h3 text-center mb-3">
                            Login to your account
                        </h2>
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label className="form-label">
                                    Email atau Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email atau Username kamu"
                                    autoComplete="input_type"
                                    onChange={(e) =>
                                        setData("input_type", e.target.value)
                                    }
                                />
                                {errors.username && (
                                    <small className="text-danger">
                                        {errors.username}
                                    </small>
                                )}
                                {errors.email && (
                                    <small className="text-danger">
                                        {errors.email}
                                    </small>
                                )}
                            </div>
                            <div className="mb-2">
                                <label className="form-label">
                                    Password
                                    <span className="form-label-description">
                                        <Link
                                            tabIndex={-1}
                                            href={route("password.request")}
                                        >
                                            I forgot password
                                        </Link>
                                    </span>
                                </label>
                                <div className="input-group input-group-flat">
                                    <input
                                        type={`${
                                            !data.show_password
                                                ? "password"
                                                : "text"
                                        }`}
                                        className="form-control"
                                        placeholder="Your password"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <span className="input-group-text">
                                        <a
                                            href="#"
                                            tabIndex={-1}
                                            className="link-secondary"
                                            onClick={() =>
                                                setData(
                                                    "show_password",
                                                    !data.show_password
                                                )
                                            }
                                        >
                                            {/* Download SVG icon from http://tabler-icons.io/i/eye */}
                                            {!data.show_password ? (
                                                <IconEye className="icon" />
                                            ) : (
                                                <IconEyeOff className="icon" />
                                            )}
                                        </a>
                                    </span>
                                </div>
                                {errors.password && (
                                    <small className="text-danger">
                                        {errors.password}
                                    </small>
                                )}
                            </div>
                            <div className="mb-2">
                                <label className="form-check">
                                    <input
                                        type="checkbox"
                                        tabIndex={-1}
                                        className="form-check-input"
                                        name="remember"
                                        value={1}
                                        onChange={(e) =>
                                            setData("remember", e.target.value)
                                        }
                                    />
                                    <span className="form-check-label">
                                        Remember me on this device
                                    </span>
                                </label>
                            </div>
                            <div className="form-footer">
                                <button
                                    type="submit"
                                    className={`btn btn-primary w-100 ${
                                        processing ? "btn-loading" : ""
                                    }`}
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-8 d-none d-lg-block">
                    {/* Photo */}
                    <div
                        className="bg-cover h-100 min-vh-100"
                        style={{
                            backgroundImage:
                                "url(https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                        }}
                    />
                </div>
            </div>
        </GuestLayout>
    );
}
