import Link from 'next/link';
import { Component } from 'react';

class NavBar extends Component<{ activeIcon: any }> {
    render() {
        let { activeIcon } = this.props;

        const getIconColor = ({ index }: { index: any }) => {
            return activeIcon === index ? 'icon-active' : 'icon-inactive';
        };

        return (
            <nav className="nav-bar">
                <Link href="/" className="nav-button">
                    <img
                        src="/static/Icons/icon-home.svg"
                        alt="Home"
                        className={`fill-current ${getIconColor({ index: 1 })}`}
                    />
                </Link>
                <Link href="/products" className="nav-button">
                    <img
                        src="/static/Icons/icon-products.svg"
                        alt="Products"
                        className={`fill-current ${getIconColor({ index: 2 })}`}
                    />
                </Link>
                <Link href="/search" className="nav-button">
                    <img
                        src="/static/Icons/icon-search.svg"
                        alt="Search"
                        className={`fill-current ${getIconColor({ index: 3 })}`}
                    />
                </Link>
                <Link href="/cart" className="nav-button">
                    <img
                        src="/static/Icons/icon-cart.svg"
                        alt="Cart"
                        className={`fill-current ${getIconColor({ index: 4 })}`}
                    />
                </Link>
                <Link href="/account" className="nav-button">
                    <img
                        src="/static/Icons/icon-person.svg"
                        alt="Account"
                        className={`fill-current ${getIconColor({ index: 5 })}`}
                    />
                </Link>
            </nav>
        );
    }
}

export default NavBar;
