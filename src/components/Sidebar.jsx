import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
        <div
          className="offcanvas-md offcanvas-end bg-body-tertiary"
          tabIndex={-1}
          id="sidebarMenu"
          aria-labelledby="sidebarMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sidebarMenuLabel">
              Company name
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto h-lvh">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                  to=""
                >
                  <svg className="bi">
                    <use xlinkHref="#house-fill" />
                  </svg>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center gap-2"
                  to="products"
                >
                  <svg className="bi">
                    <use xlinkHref="#cart" />
                  </svg>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center gap-2"
                  to="profile"
                >
                  <svg className="bi">
                    <use xlinkHref="#people" />
                  </svg>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="#"
                >
                  <svg className="bi">
                    <use xlinkHref="#graph-up" />
                  </svg>
                  Reports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="#"
                >
                  <svg className="bi">
                    <use xlinkHref="#puzzle" />
                  </svg>
                  Integrations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
