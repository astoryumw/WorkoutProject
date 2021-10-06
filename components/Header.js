import Link from 'next/link';

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
        </div>
    )
}