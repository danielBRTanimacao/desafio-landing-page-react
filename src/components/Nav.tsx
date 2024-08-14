export default () => {
    return (
        <>
            <nav className="nav">
                <h3 className="nav-title">Loremipsum</h3>
                <ul className="list-navigation">
                    <li>products</li>
                    <li>explore</li>
                    <li>company</li>
                    <ul className="list-navigation">
                        <li>search</li>
                        <li>ball</li>
                        <li>person</li>
                        <li>sacola</li>
                    </ul>
                </ul>
            </nav>
        </>
    );
};
