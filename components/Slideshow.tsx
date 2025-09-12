"use client";
import { useState } from "react";
import Image from "next/image";

type SlideshowProps = {
    images: string[];
};

export default function Slideshow({ images }: SlideshowProps) {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            {/* Main Image */}
            <div className="relative w-full h-160 bg-white overflow-hidden rounded-lg">
                <Image
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    fill
                    className="object-contain"
                />

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
                >
                    ◀
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
                >
                    ▶
                </button>
            </div>

            {/* Preview Images */}
            <div className="mt-4 flex justify-center gap-8">
                {/* Previous preview */}
                <div
                    className="w-48 h-32 cursor-pointer overflow-hidden rounded border"
                    onClick={prevSlide}
                >
                    <Image
                        src={
                            images[
                                (current - 1 + images.length) % images.length
                            ]
                        }
                        alt="Previous Preview"
                        width={400}
                        height={240}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Next preview */}
                <div
                    className="w-48 h-32 cursor-pointer overflow-hidden rounded border"
                    onClick={nextSlide}
                >
                    <Image
                        src={images[(current + 1) % images.length]}
                        alt="Next Preview"
                        width={400}
                        height={240}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
