import React from "react";
import GalleryContainer from "./GalleryContainer";
import StoriesContainer from "./StoriesContainer";

function Wrapper(){
    const links = [
        { link: "../images/Rectangle 148.png" },
        { link: "../images/Rectangle 149.png" },
        { link: "../images/Rectangle 150.png" },
        { link: "../images/Rectangle 151.png" },
        { link: "../images/Rectangle 152.png" },
        { link: "../images/Rectangle 153.png" },
        { link: "../images/Rectangle 154.png" },
        { link: "../images/Rectangle 155.png" }
    ];

    const stories = [
        {
            title: "7 Signs and Symptoms of Iodine Deficiency",
            image: "../images/Rectangle 45.png"
        },
        {
            title: "How to Fix Your Sleep Schedule: 7 Easy Ways",
            image: "../images/Rectangle 46.png"
        },
        {
            title: "10 Proven Health Benefits of Cinnamon",
            image: "../images/Rectangle 47.png"
        },
        {
            title: "11 Health Benefits of Turmeric and Curcumin",
            image: "../images/Rectangle 48.png"
        }
    ];
    return(
        <div className="wrapper">
            <GalleryContainer images={links}/>
            <StoriesContainer stories={stories}/>
        </div>
    );
}

export default Wrapper;
