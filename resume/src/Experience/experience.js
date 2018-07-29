import React from "react";
import ExperienceCard from "./experienceCard";


export function experience () {
    const Background="https://1onjea25cyhx3uvxgs4vu325-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Full-Stack-Web-Developer-Udacity.png";
    return (
        <div>
            <section style={{backgroundImage: `url(${Background})`, overflow: "hidden", height: "100vh" }} >
                <div style={{padding: '50px 50px 50px 50px'}}>
                    <ExperienceCard />
                </div>
            </section>
        </div>);
};
