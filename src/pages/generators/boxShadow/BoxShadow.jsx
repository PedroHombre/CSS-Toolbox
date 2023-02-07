import React from "react";

import GeneratorInput from "../../../Generator/GeneratorInput/GeneratorInput";
import GeneratorPreview from "../../../Generator/GeneratorPreview/GeneratorPreview";
import GeneratorOutput from "../../../Generator/GeneratorOutput/GeneratorOutput";

import '../Generators.scss';

const BoxShadowGen = () => {
    return (
        <div className="container">
            BoxShadow

            <div className="wrapper">
                <div className="row">
                    <GeneratorInput />

                    <GeneratorPreview />
                </div>

                <div className="row">
                    <GeneratorOutput />
                </div>
            </div>
        </div>
    )
}

export default BoxShadowGen;