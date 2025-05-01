import React from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import Stories from "../components/Stories";

function StoriesContainer({ stories }){
    return(
        <div class="section-stories">
            <div class="header-block-with-btn stories-block">
                <div class="header-text-block">
                    <h1 class="text-title stories-text-title">Latest Stories From The City</h1>
                    <p class="gallery-text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit
                    </p>
                </div>
    
                <div class="btn-view-all-images">
                    <button type="button" class="btn-view-all">
                        View All Posts
                    </button>
                </div>
            </div>
            <div class="stories-images-container">
            {
                stories.map((story, index) => (
                    <Stories key={index} title={story.title} image={story.image}/>
                ))
            }
            </div>
            </div>
    );
}

export default StoriesContainer;