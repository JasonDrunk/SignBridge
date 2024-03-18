import './Youtube.css';

export default function Youtube() {
    return (
        <section className="youtube-video">
            <h1 className="heading" id="ytvideo"> Youtube <span>Video </span></h1>
            <iframe src="https://www.youtube.com/embed/GAGJV-NCwNM?si=G1jz9fVu140555QM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </section>
    );
}