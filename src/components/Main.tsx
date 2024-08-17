import { CSSProperties } from "react";

export default () => {
    let dark_color: CSSProperties = { backgroundColor: "#1b1b2f" };
    let light_blue: CSSProperties = { backgroundColor: "#0085ff" };
    let imaginary_technique_purple: CSSProperties = {
        backgroundColor: "#ad00ff"
    };

    return (
        <>
            <main className="main-hero">
                <div>
                    <h2 className="small-article">
                        O amante perfeito é aquele que vira pizza
                    </h2>
                    <a href="#">
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
                </div>
                <article className="article-blockots">
                    <div className="blockots">
                        <h3>170+</h3>
                        <p>Pizza Comum</p>
                    </div>
                    <div className="blockots" style={dark_color}>
                        <h3>80+</h3>
                        <p>Pizza Italiana</p>
                    </div>
                    <div className="blockots" style={light_blue}>
                        <h3>120+</h3>
                        <p>Domino's Pizza</p>
                    </div>
                    <div
                        className="blockots"
                        style={imaginary_technique_purple}
                    >
                        <h3>24/7</h3>
                        <p>Suporte</p>
                    </div>
                </article>
            </main>
        </>
    );
};
