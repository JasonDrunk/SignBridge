import './Company.css';

export default function Company() {
    return (
        <section className="about" id="about">
            <h1 className="heading">About <span>Neuon AI</span></h1>
                <div className="row">

                    <div className="video-container">
                        {/* <video loop="loop" autoplay="autoplay" muted="muted"><source src="images/homePage/about-vid.mp4" type="video/mp4"/></video> */}
                        <img src="/images/company.png" alt="Company"/>
                        {/* <h3>Best Expert Training Provider</h3> */}
                    </div>

                    <div className="content">
                        {/* <h3>Why Choose Us?</h3> */}
                        <p>Neuon AI is a technology company dedicated to bridging communication gaps for the Sarawak Society for Deaf. We believe in leveraging the power of artificial intelligence to facilitate seamless two-way communication between sign language users and the broader community.</p>
                        <p>Our mission is to empower individuals with hearing impairments by providing them with innovative tools and solutions that enhance their ability to communicate effectively in both digital and real-world environments.</p>
                    </div>
                </div>
        </section>
    );
}