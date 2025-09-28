import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const HeroSection = () => {
    return (
        <main className='hero-section main'>
            <div className="container grid grid-two-cols">
                <div className='hero-content'>
                    <h1>Explore the World,One Country at a Time.</h1>
                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation. Sort,
                        search, and filter through countries to find the details you need.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaArrowUpRightFromSquare />
                    </button>
                </div>
                <div className="hero-image">
                    <img className='banner-image' src="/images/world.png" alt="world png" />
                </div>

            </div>
        </main>
    )
}