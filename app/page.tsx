import Slideshow from "../components/Slideshow";

const images = Array.from(
    { length: 34 },
    (_, i) => `/exhibition-imgs/event/img${i + 1}.jpg`
);

export default function Home() {
    return (
        <div className="pt-24">
            <Slideshow images={images} />
        </div>
    );
}
