"use client";
import Image from "next/image";
import { useState } from "react";

export default function ExhibitionPage() {
    return (
        <div>
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="text-center mb-12">
                    <Image
                        src="/diverse-brain-site/logos/logo_blue_writing.svg" // Correct path to the logo image
                        alt="Logo Blue"
                        width={0} // Set width to 0 to allow width control by Tailwind
                        height={0} // Set height to 0 to allow height control by Tailwind
                        className="mx-auto w-1/3 h-auto" // Centers and sets the width to 50%
                    />
                </div>
                {/* Section 1: Title */}
                <div className="text-center max-w-4xl mb-24 mx-auto">
                    <p className="mt-4 sm:text-lg md:text-xl lg:text-2xl text-black font-semibold text-justify">
                        In the course &quot;Diverse Brain&quot; we aimed to
                        innovate on how people communicate and interact with
                        knowledge through the use of 3-dimensional exhibition
                        pieces. Our focus has been the brain, as it is not only
                        incredibly fascinating but also common for having
                        misconceptions around it, presenting us with new
                        opportunities of dismantling them. The exhibition
                        focuses on highlighting various topic about the brain to
                        clear up common misconceptions like the notion of a
                        &quot;left brain&quot; for logical thinking and
                        &quot;righ brain&quot; for creative thinking. In this
                        course we co-educated neuroscience, computer science as
                        well and many other students from Berlins major
                        universities to go beyond the limits of one
                        specialization and benefit from as many perspectives as
                        we could.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto my-12 px-4">
                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Participant Names on the Left */}
                        <div className="flex items-center justify-center">
                            <h3 className="sm:text-base md:text-lg lg:text-xl font-semibold text-black space-y-1">
                                <div>
                                    Cora-Lorraine Sachs{" "}
                                    <span className="font-normal sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Psychology (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Nazlican Göksu Tekdogan{" "}
                                    <span className="font-normal sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computational Sciences (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Jakob Schmock{" "}
                                    <span className="font-normal sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Jonas Heinemann{" "}
                                    <span className="font-normal sm:text-sm md:text-base lg:text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>

                        {/* Description on the Right */}
                        <div>
                            <p className="text-black sm:text-base md:text-lg lg:text-xl font-medium text-justify sm:px-6 md:px-12 lg:px-16 py-4">
                                Can our brain self repair? How could such a
                                complex organ do that? Here we try to answer the
                                question and bring understanding to the complex
                                mechanisms involved with repairing broken
                                connections. Get an intuitive understanding of
                                key functions responsible for neural
                                reorganization. The piece prompts you to
                                interact and discover these mechanism yourself.
                                Through trial and error you are guided to the
                                correct answer as you slowly discover and
                                fortify the new gained knowledge. It features
                                additional descriptions further deepening our
                                understanding of neuroplasticity.
                            </p>
                        </div>
                    </div>
                    <BlurImage src="/diverse-brain-site/pictures/puzzle_simple.jpeg" />
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4">
                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Participant Names on the Left */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-xl font-semibold text-black space-y-1">
                                <div>
                                    Alexandra Groß{" "}
                                    <span className="font-normal text-lg text-gray-800">
                                        Psychology (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Andre Sebayang{" "}
                                    <span className="font-normal text-lg text-gray-800">
                                        Psychology (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Darvin Hassan{" "}
                                    <span className="font-normal text-lg text-gray-800">
                                        Psychology (TU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Ahmed Abdelfatah{" "}
                                    <span className="font-normal text-lg text-gray-800">
                                        Computational Neuroscience (TU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>

                        {/* Description on the Right */}
                        <div>
                            <p className="text-black text-xl font-medium text-justify px-16 py-4">
                                Am I a right or left brained person? These are
                                one of the many questions people seem to be
                                interested in. But how can we answer this
                                question? This project carefully guides you to a
                                simple and shocking solution. The brain halves
                                are represented playfully in front of the
                                visitor where they can interact with them and
                                see differences in activity depending on the
                                quality of the task. Sometimes the solution is
                                exceptionally clear people tend to get lost
                                easily.
                            </p>
                        </div>
                    </div>
                    <BlurImage src="/diverse-brain-site/pictures/labyrinth_simple.jpeg" />
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4">
                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Participant Names on the Left */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-xl font-semibold text-black space-y-1">
                                <div>
                                    Viola Zeoli{" "}
                                    <span className="font-normal text-lg text-gray-800">
                                        Psychology (FU Berlin)
                                    </span>
                                </div>
                                <div>
                                    Filippo Ghirardini{" "}
                                    <span className="font-normal text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>

                        {/* Description on the Right */}
                        <div>
                            <p className="text-black text-xl font-medium text-justify px-16 py-4">
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
                    <BlurImage src="/diverse-brain-site/pictures/marble_simple.jpeg" />
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4">
                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Participant Names on the Left */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-xl font-semibold text-black space-y-1">
                                <div>
                                    Michael Migacev{" "}
                                    <span className="font-normal text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>

                        {/* Description on the Right */}
                        <div>
                            <p className="text-black text-xl font-medium text-justify px-16 py-4">
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
                    <BlurImage src="/diverse-brain-site/pictures/brain_simple.jpeg" />
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4">
                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Participant Names on the Left */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-xl font-semibold text-black space-y-1">
                                <div>
                                    Michael Migacev{" "}
                                    <span className="font-normal text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>

                        {/* Description on the Right */}
                        <div>
                            <p className="text-black text-xl font-medium text-justify px-16 py-4">
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

                    <BlurImage src="/diverse-brain-site/pictures/printing_rainbow.jpeg" />
                </div>

                {/* <div className="max-w-7xl mx-auto my-12 px-4">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        
                        <div className="flex items-center justify-center">
                            <h3 className="text-xl font-semibold text-black space-y-1">
                                <div>
                                    Michael Migacev{" "}
                                    <span className="font-normal text-lg text-gray-800">
                                        Computer Science (FU Berlin)
                                    </span>
                                </div>
                            </h3>
                        </div>
                        <div>
                            <p className="text-black text-xl font-medium text-justify px-16 py-4">
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
            className="w-full sm:h-40 md:h-64 lg:h-80 bg-gray-200 relative overflow-hidden"
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
                className="object-cover w-full h-full filter blur-md"
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
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
}
