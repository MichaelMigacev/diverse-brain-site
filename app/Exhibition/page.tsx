"use client";
import Image from "next/image";
import { useState } from "react";

export default function ExhibitionPage() {
    return (
        <div>
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="text-center mb-12">
                    <Image
                        src="/logos/logo_blue_writing.svg" // Correct path to the logo image
                        alt="Logo Blue"
                        width={0} // Set width to 0 to allow width control by Tailwind
                        height={0} // Set height to 0 to allow height control by Tailwind
                        className="mx-auto w-2/3 sm:w-2/3 md:1/2 lg:w-1/3 h-auto" // Centers and sets the width to 50%
                    />
                </div>
                {/* Section 1: Title */}
                <div className="text-center max-w-4xl mb-24 mx-auto">
                    <p className="mt-4 text-lg sm:text-lg md:text-xl lg:text-2xl text-black font-semibold text-justify">
                        In the course &quot;Diverse Brain&quot; we aimed to
                        innovate on how people communicate and interact with
                        science. We believe that through the use of
                        3-dimensional exhibition pieces we can not only better
                        capture the attention of the casual onlooker but also
                        are able to communicate more direct and intuitive. Our
                        focus has been the brain, as it is not only incredibly
                        fascinating to us but has also been a major focus of
                        pop-sci for quite some time. Our challenge was to
                        highlight various topics about the brain and clear up
                        common misconceptions. A common one would be the notion
                        of a &quot;left brain&quot; for logical thinking and
                        &quot;right brain&quot; for creative thinking. In this
                        course we co-educated neuroscience, computer science as
                        well as students from many other disciplines from
                        Berlins major universities to go beyond the limits of
                        specialization and benefit from as many perspectives as
                        we could.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto my-12 px-4">
                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Participant Names on the Left */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-black space-y-1">
                                <div>
                                    Cora-Lorraine Sachs{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Psychology (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Nazlican Göksu Tekdogan{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computational Sciences (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Jakob Schmock{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Jonas Heinemann{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>

                        {/* Description on the Right */}
                        <div>
                            <h3 className="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-black sm:px-8 md:px-12 lg:px-16 space-y-1">
                                Neuroplasticity{" "}
                                <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800"></span>
                            </h3>
                            <p className="text-black text-base sm:text-base md:text-lg lg:text-xl font-medium text-justify sm:px-8 md:px-12 lg:px-16 py-4">
                                Can our brain self repair? If it could how would
                                it do that? Both of these questions are shown in
                                this piece. To answer them we attempt to let the
                                visitor discover how a complex organ such as the
                                brain recovers from internal damage. This
                                highlights not only the broader fascinating
                                concept of &quot;Neuroplasticity&quot; but also
                                some important details of the individual
                                building blocks that make up and result in our
                                incredible mental flexibility. We do that by
                                providing a laser cut wooden board with a
                                presumably damaged brain on it. The visitors
                                task is to fill in certain gaps with matching
                                tiles to simulate mechanisms of neuroplasticity.
                                The tiles are aided by short explanatory text in
                                a delicate balance of explain and explore.
                                Additionally they are recognized by the board so
                                successful completion can be indicated by a
                                green light.
                            </p>
                        </div>
                    </div>
                    <BlurImage src="/pictures/puzzle_simple.jpeg" />
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4">
                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Participant Names on the Left */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-black space-y-1">
                                <div>
                                    Alexandra Groß{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Psychology (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Andre Sebayang{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Psychology (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Darvin Hassan{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Psychology (TU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Ahmed Abdelfatah{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computational Neuroscience (TU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>

                        {/* Description on the Right */}
                        <div>
                            <h3 className="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-black sm:px-8 md:px-12 lg:px-16 space-y-1">
                                Left & Right Brain{" "}
                                <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800"></span>
                            </h3>
                            <p className="text-black text-base sm:text-base md:text-lg lg:text-xl font-medium text-justify sm:px-8 md:px-12 lg:px-16 py-4">
                                Am I a right or left brained person? Most
                                research suggests a simple answer to this
                                question. You are neither, but rather than
                                informing our visitors through difficult text we
                                drive the point home visually. This piece
                                focuses on the point that there is no dominant
                                brain half in terms of activity. We illustrate
                                it by printing a labyrinth resembling a brain
                                and simulate a 50/50 activity distribution with
                                LEDs hidden underneath our brain. The visitor is
                                prompted to press buttons for logical and
                                creative thinking only to be led to a written
                                conclusion, which explains that both of these
                                options result in the same randomly prioritised
                                activity. We do this as an exageration to the
                                common misconception which suggests that one
                                brain half sits idle while the other one is
                                engaged in logic and or creativity.
                            </p>
                        </div>
                    </div>
                    <BlurImage src="/pictures/labyrinth_simple.jpeg" />
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4">
                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Participant Names on the Left */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-black space-y-1">
                                <div>
                                    Viola Zeoli{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Psychology (University of Trento,
                                        ERASMUS-student to FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Filippo Ghirardini{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computer Science (University of Pisa,
                                        ERASMUS-student to FU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>

                        {/* Description on the Right */}
                        <div>
                            <p className="text-black text-base sm:text-base md:text-lg lg:text-xl font-medium text-justify sm:px-8 md:px-12 lg:px-16 py-4">
                                Do our brains turn off when we go to sleep?
                                Well, no but what is actually happening in there
                                while we do sleep? A big part of sleep is to
                                ensure we remember the things we did before
                                going to sleep - memory. Our sleeping brain
                                wanders through many different phases which
                                presumably assist in the memory formation
                                process. This piece focuses on the memory aspect
                                of sleep while explaining the impacts of the
                                phases on the memory formation with a 3D-printed
                                marble run. A marble run!
                            </p>
                        </div>
                    </div>
                    <BlurImage src="/pictures/marble_simple.jpeg" />
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4">
                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Participant Names on the Left */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-black space-y-1">
                                <div>
                                    Michael Migacev{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>

                        {/* Description on the Right */}
                        <div>
                            <p className="text-black text-base sm:text-base md:text-lg lg:text-xl font-medium text-justify sm:px-8 md:px-12 lg:px-16 py-4">
                                Everybody presumably thinks in different ways.
                                How can you think in different ways when all the
                                brains look the same? The key to the question is
                                realizing they don&apos;t all look the same. One
                                can see this in MR Images, in statistics and can
                                read it in papers. But can we actually see the
                                difference? This piece prompts you to just see
                                for yourself! We printed 10 brains from
                                different people. You can look at them and
                                discover similarities most of them have and
                                acknowledge the differences that make us all
                                unique!
                            </p>
                        </div>
                    </div>
                    <BlurImage src="/pictures/brain_simple.jpeg" />
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4">
                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Participant Names on the Left */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-black space-y-1">
                                <div>
                                    Michael Migacev{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>

                        {/* Description on the Right */}
                        <div>
                            <p className="text-black text-base sm:text-base md:text-lg lg:text-xl font-medium text-justify sm:px-8 md:px-12 lg:px-16 py-4">
                                How did we print those brains you just saw? This
                                piece is less about a certain scientific mystery
                                but more about 3D-printing itself. Slowly
                                forming in front of the visitors eyes is a
                                3D-print of a brain. Yes, live 3D-printing!
                                Being open about our science and methods is
                                something we are proud of. To stay true to this
                                we linking our repository on how to process and
                                print your own brain:
                                <span className="text-xl font-semibold">
                                    {" "}
                                    <a
                                        href="https://github.com/printyourbrain/3DPrintYourBrain"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline"
                                    >
                                        Repo
                                    </a>{" "}
                                </span>
                                We have tried our best to make it easy and have
                                a complimentary video linked as well:{" "}
                                <span className="text-xl font-semibold">
                                    {" "}
                                    <a
                                        href="https://www.youtube.com/watch?v=MWKAPG3rMBI"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline"
                                    >
                                        Video
                                    </a>{" "}
                                </span>
                            </p>
                        </div>
                    </div>

                    <BlurImage src="/pictures/printing_rainbow.jpeg" />
                </div>

                {/* <div className="max-w-7xl mx-auto my-12 px-4">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        
                        <div className="flex items-center justify-center">
                            <h3 className="text-xl font-semibold text-black space-y-1">
                                <div>
                                    Michael Migacev{" "}
                                    <span className="font-normal text-sm sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>
                        <div>
                            <p className="text-black text-base sm:text-base md:text-lg lg:text-xl font-medium text-justify sm:px-8 md:px-12 lg:px-16 py-4">
                                Brains
                            </p>
                        </div>
                    </div>
                    <BlurImage src="/diverse-brain-site/pictures/slicercleancolored1.png" />
                </div> */}
            </div>
        </div>
    );
}

function BlurImage({ src }: { src: string }) {
    const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });

    return (
        <div
            className="w-full h-32 sm:h-40 md:h-64 lg:h-80 bg-gray-200 relative overflow-hidden"
            onMouseMove={(e) => {
                const { left, top } = e.currentTarget.getBoundingClientRect();
                setMousePosition({ x: e.clientX - left, y: e.clientY - top });
            }}
            onMouseLeave={() => setMousePosition({ x: -9999, y: -9999 })}
        >
            {/* Blurred Image */}
            <Image
                src={src}
                alt="Exhibition Piece"
                width={1200}
                height={1000}
                className="object-cover w-full h-full filter blur-md sm:h-auto"
            />

            {/* Clear Image with circular mask */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
                }}
            >
                <Image
                    src={src}
                    alt="Exhibition Piece Clear"
                    width={1200}
                    height={1000}
                    className="object-cover w-full h-full sm:h-auto"
                />
            </div>
        </div>
    );
}
