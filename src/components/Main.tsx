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
                <div className="small-article">
                    <h2>Lorem ipsum dolor sit amet consectetur lore</h2>
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
