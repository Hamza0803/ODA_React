import React from "react";
function Cards () {

    const posts = [
        {
            title: "WatchfulWing",
            desc: "Main ODJ 557 A model",
            img: "/images/Sequence A.png",
           
        },
        {
            title: "StealthScout 1",
            desc: "Main ODJ 557 A model",
            img: "/images/Sequence E.png",
          
        },
        {
            title: "StealthScout 2",
            desc: "Main ODJ 557 A model",
            img: "/images/Sequence C.png",
           
        },
        {
            title: "SentinelEye",
            desc: "Main ODJ 557 A model",
            video: "/videos/Truckvideo.mp4",
           
        },
        {
            title: "StealthScout 3",
            desc: "Main ODJ 557 A model",
            img: "/images/Sequence F.png",
           
        },
        {
            title: "StealthScout 4",
            desc: "Main ODJ 557 A model",
            img: "/images/Sequence D.png",
           
        },
    ]
    
return (
        <section className="bg-gray-950 bg-opacity-220"
    // style={{
    //     // position: 'absolute',
    //     // top: 65
    //     left: 3,
    //     right: 200,
    //     display: 'flex'}}
    >
    <div className="mt-2 mb-2 grid gap-0.5 sm:grid-cols-1 lg:grid-cols-6  bg-gray-950 bg-opacity-220" >
                {
                    posts.map((items, key) => (
                        <article className="max-w-30 ml-1 shadow-lg duration-300 hover:shadow-sm relative" 
                        key={key}>
                    {/* <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}> */}
                    <div className="hover:shadow-sm hover:bg-purple-800 hover:bg-opacity-30">
                            <a href={items.href}>
                            {items.video ? (
                                    <video controls width="148" height="120" className="mb-3" loop>
                                        <source src={items.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-36 h-22" />
                                    )}
                                 {/* <img
                                //     src={items.img}
                                //     loading="lazy"
                                //     alt={items.title}
                                //     className="w-36 h-22" // Adjust image size
                                // /> */}
                                <div>
                                    <h3 className="text-xs text-gray-300">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs mt-0">{items.desc}</p>
                                </div>
                            </a>
                        </div>
                        <div className="absolute inset-y-0 right-0 bg-gray-800 bg-opacity-20 w-0.5 transform translate-x-1/2"></div> {/* Thin and centered line */}
                        </article>
                    ))
                }
            </div>
        </section>
    
    )
}
export default Cards ;