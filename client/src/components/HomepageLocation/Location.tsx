import './Location.css';

export default function Location() {
    return (
        <section className="location">
            <h1 className="heading" id="gmap_canvas"><span> Location </span></h1>
            <div className="mapouter"><div className="gmap_canvas">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15953.835287675945!2d110.4059977!3d1.4957629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba1332943cb13%3A0x9050a3791464b11a!2sNEUON%20AI!5e0!3m2!1sen!2smy!4v1710735767635!5m2!1sen!2smy"></iframe>
                <a href="https://123movies-to.org"></a>
                <br/>
                <a href="https://www.embedgooglemap.net"></a>
            </div></div>
        </section>
    );
}