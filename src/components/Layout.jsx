export default function Layout({children}) {
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li>Kommer en link</li>
                    </ul>
                </nav>
            </header>
            {children}
            <footer>Footer</footer>
        </>
    )
}