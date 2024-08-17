export default () => {
    return (
        <>
            <nav className="nav">
                <h2 className="orange-title">Lorem</h2>
                <ul className="nav">
                    <li>
                        <a href="#" className="active-link" aria-current="page">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <form className="flex-form" action="#" method="get">
                            <a href="#qId" className="orange-title">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    className="bi bi-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </a>
                            <input
                                className="flex-form input-search"
                                type="search"
                                name="q"
                                id="qId"
                                placeholder="Search"
                            />
                        </form>
                    </li>
                </ul>
                <a href="#" className="btn-rounded">
                    CRIAR CONTA
                </a>
            </nav>
        </>
    );
};
