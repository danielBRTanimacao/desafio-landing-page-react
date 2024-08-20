import PrincipalImage from "../assets/images/principal-image.png";
import PizzaSmall from "../assets/images/pizza-small.png";

export default () => {
    return (
        <>
            <header className="header-hero">
                <article className="small-article">
                    <h1 className="title-hero">
                        Tudo fica melhor com{" "}
                        <span className="title-pizza fluid-image">
                            PIZZA <img src={PizzaSmall} alt="pizza-small" />
                        </span>
                    </h1>
                    <p className="legends division-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda magnam optio cupiditate veniam Lorem, ipsum.
                        Lorem, ipsum dolor.
                    </p>
                    <aside className="aside-btns">
                        <a href="#" className="btn-rounded">
                            Fazer um pedido
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                className="bi bi-chevron-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </a>
                        <a href="#" className="btn-rounded none-bg">
                            Veja mais
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                className="bi bi-chevron-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </a>
                    </aside>
                </article>
                <div className="img-edited carousel-btn">
                    <aside className="container-carousel">
                        <img src={PrincipalImage} alt={PrincipalImage} />
                    </aside>
                </div>
            </header>
        </>
    );
};
