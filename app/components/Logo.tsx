import { Link } from "react-router";

export const Logo = () => {
  return (
    <Link to="/" aria-label="Logo" title="Logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        aria-label="Logo"
      >
        <title>Logo</title>
        <path
          className="fill-amber-300"
          d="M16.975 3.036c6.402.475 11.514 5.586 11.99 11.989H24.32a7.345 7.345 0 0 1-7.345-7.345V3.036Zm-1.95 21.284v4.644c-6.402-.475-11.514-5.587-11.989-11.99H7.68a7.345 7.345 0 0 1 7.345 7.346Z"
        />
        <path
          className="fill-amber-500"
          d="M3.036 15.025c.475-6.403 5.587-11.514 11.99-11.99V7.68a7.345 7.345 0 0 1-7.346 7.345H3.036Zm21.284 1.95h4.644c-.475 6.402-5.586 11.514-11.989 11.989V24.32a7.345 7.345 0 0 1 7.345-7.345Z"
        />
      </svg>
    </Link>
  );
};
