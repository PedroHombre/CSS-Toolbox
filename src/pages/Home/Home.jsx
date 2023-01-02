import React from "react";
import { Link } from "react-router-dom";
import './Home.scss';

const Home = () => {
    return (
        <main className="home-page">
            <h2>
                CSS Toolbox
            </h2>

            {/* TODO: Change this paragraph */}
            <p>
                A simple generator wich you can use to generate CSS properties. Allows simple and convenient adjustments of parameters using sliders. Features live preview and an easy way to copy generated CSS code.
            </p>

            <div className="buttons-container">
                <Link to="/box-shadow" >
                    Box shadow
                </Link>
            </div>
        </main>
    )
}

export default Home;