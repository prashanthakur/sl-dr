import Marquee from "react-fast-marquee";
import Carousal from "./Carousal";


import React from 'react'

const FastCarousal = () => {
    return (
        <Marquee
            // direction='right'
            // delay={3}
            // speed={200}
            // gradient={true}
            // gradientColor={[59, 239, 245]}
            // gradientWidth={400}
        >
            <Carousal />
            <Carousal />
            <Carousal />
            <Carousal />
            <Carousal />
        </Marquee>
    )
}

export default FastCarousal