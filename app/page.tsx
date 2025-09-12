import Slideshow from "../components/Slideshow";

const images = Array.from(
    { length: 34 },
    (_, i) => `/exhibition/event/img${i + 1}.jpg`
);

export default function Home() {
    return (
        <div className="pt-24">
            <h1 className="text-4xl font-bold text-center mb-8">
                Exhibition Slideshow
            </h1>
            <Slideshow images={images} />
        </div>
    );
}
