import Link from 'next/link';
import { Component } from 'react';

class NavBar extends Component<{ activeIcon: number }> {
    render() {
        const { activeIcon } = this.props;

        const getIconColor = (index: number) => {
            return activeIcon === index ? 'icon-active' : 'icon-inactive';
        };

        return (
            <nav className="nav-bar flex space-x-4">
                {/* Home */}
                <Link href="/" className="nav-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={`w-6 h-6 ${getIconColor(1)}`}
                    >
                        <path
                            d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                        <path
                            d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                    </svg>
                </Link>

                {/* Products */}
                <Link href="/products" className="nav-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={`w-6 h-6 ${getIconColor(2)}`}
                    >
                        <path
                            d="M403.29 32H280.36a14.46 14.46 0 00-10.2 4.2L24.4 281.9a28.85 28.85 0 000 40.7l117 117a28.86 28.86 0 0040.71 0L427.8 194a14.46 14.46 0 004.2-10.2v-123A28.66 28.66 0 00403.29 32z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                        <path
                            d="M352 144a32 32 0 1132-32 32 32 0 01-32 32z"
                            fill="currentColor"
                        />
                        <path
                            d="M230 480l262-262a13.81 13.81 0 004-10V80"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                    </svg>
                </Link>

                {/* Search */}
                <Link href="/search" className="nav-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={`w-6 h-6 ${getIconColor(3)}`}
                    >
                        <path
                            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                            d="M338.29 338.29L448 448"
                        />
                    </svg>
                </Link>

                {/* Cart */}
                <Link href="/cart" className="nav-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={`w-6 h-6 ${getIconColor(4)}`}
                    >
                        <circle
                            cx="176"
                            cy="416"
                            r="16"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                        <circle
                            cx="400"
                            cy="416"
                            r="16"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                            d="M48 80h64l48 272h256"
                        />
                        <path
                            d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                    </svg>
                </Link>

                {/* Account */}
                <Link href="/account" className="nav-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={`w-6 h-6 ${getIconColor(5)}`}
                    >
                        <path
                            d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                        <path
                            d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                        />
                    </svg>
                </Link>
            </nav>
        );
    }
}

export default NavBar;
