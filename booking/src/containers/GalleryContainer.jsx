import React from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import GalleryImage from "../components/GalleryImage";

function GalleryContainer({ images }){
    return(
        <>
        <div class="section-gallery">
            <div class="header-block-with-btn">
                <div class="header-text-block">
                    <h1 class="text-title">From The Gallery</h1>
                    <p class="gallery-text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit
                    </p>
                </div>
    
                <div class="btn-view-all-images">
                    <button type="button" class="btn-view-all">
                        View All Images
                    </button>
                </div>
            </div>
            <div class="gallery-images-container">
            {
        images.map((image, index) => (
            <GalleryImage link={image.link} key={index}/>
        ))
    }
    </div>
    </div>
        </>
    );
}

export default GalleryContainer;