import Link from 'next/link';
import Logout from "./logout";

const linkStyle = {
    marginRight: 15,
}

export default function Header() {
    return (
        <div>
            <Link href="/home">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/account">
                <a style={linkStyle}>Settings</a>
            </Link>
            <Link href="/profile">
                <a style={linkStyle}>Profile</a>
            </Link>
            <Link href="/">
                <Logout />
            </Link>
            <Link href="/create">
                <a style={linkStyle}>Create a Workout</a>
            </Link>
        </div>
    )
}