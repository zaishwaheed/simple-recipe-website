import Link from "next/link";
import Button from "./Button";

export default function Header () {
    return (
        <>
        <header className="header">
            <Button></Button>
            <ul>
                <Link href="/pakistani"><li>Pakistani</li></Link>
                <Link href="/chinese"><li>Chinese</li></Link>
                <Link href="/korean"><li>Korean</li></Link>
                <Link href="/american"><li>American</li></Link>
            </ul>
        </header>
        </>
    )
}