import Image from "next/image";

export default function TeachingPage() {
    return (
        <div className="w-full mx-auto px-4">
            <div className="max-w-6xl mx-auto overflow-hidden pb-16">
                <Image
                    src="/pictures/collage_cropped.PNG" // Replace with your actual image path
                    alt="Teaching Page Banner"
                    width={1920}
                    height={540}
                    className="object-cover w-full h-80"
                    priority
                />
            </div>
            <div className="max-w-5xl mx-auto px-4">
                {/* === Teacher Section === */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 pb-2">
                        Teaching Instructor
                    </h2>

                    {/* Individual Entry */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 mb-8">
                        {/* Image + Name */}
                        <div className="flex flex-col gap-4 px-16 sm:w-1/2">
                            <Image
                                src="/people/Micha_test.jpeg"
                                alt="Michael Migacev"
                                width={1000}
                                height={1000}
                                className="object-cover w-48 h-56"
                            />
                            <p className="text-lg font-semibold">
                                Michael Migacev
                            </p>
                            <p className="font-normal text-lg text-gray-800">
                                Not Final Picture (I promise)
                            </p>
                        </div>
                        {/* Contributions */}
                        <ul className="list-inside text-lg font-medium w-full sm:w-1/2 px-8">
                            <li className="py-0.5">
                                Course Design and Planning
                            </li>
                            <li className="py-0.5">
                                Regular Assessment and Feedback
                            </li>
                            <li className="py-0.5">
                                Creative Designs and Execution
                            </li>
                            <li className="py-0.5">
                                Lectures on Design and Electronics
                            </li>
                            <li className="py-0.5">
                                3D Printing and Maintenance
                            </li>
                            <li className="py-0.5">Assistance with Blender</li>
                            <li className="py-0.5">
                                Assistance with Electronics
                            </li>
                            <li className="py-0.5">Website</li>
                        </ul>
                    </div>
                </section>
                {/* === Teacher Section === */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 pb-2">
                        Guest Lecturers and Contributors
                    </h2>

                    {/* Individual Entry */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 mb-8">
                        {/* Image + Name */}
                        <div className="flex flex-col gap-4 px-16 sm:w-1/2">
                            <Image
                                src="/pictures/slicercleancoloredblue.png"
                                alt="Sara Wesolek"
                                width={1000}
                                height={1000}
                                className="object-cover w-48 h-56"
                            />
                            <p className="text-lg font-semibold">
                                Sara Wesolek
                            </p>
                        </div>
                        {/* Contributions */}
                        <ul className="list-inside text-lg font-medium w-full sm:w-1/2 px-8">
                            <li className="py-0.5">
                                Guest Lectures - fMRI Theory
                            </li>
                            <li className="py-0.5">Labtour Workshop - fMRI</li>
                            <li className="py-0.5">
                                Assistance in Scientific Integrity
                            </li>
                            <li className="py-0.5">
                                Assistance in 3D Printing
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 mb-8">
                        {/* Image + Name */}
                        <div className="flex flex-col gap-4 px-16 sm:w-1/2">
                            <Image
                                src="/people/sascha.jpeg"
                                alt="Teacher 1"
                                width={1000}
                                height={1000}
                                className="object-cover w-48 h-56"
                            />
                            <p className="text-lg font-semibold">
                                Sascha Migaceva
                            </p>
                        </div>
                        {/* Contributions */}
                        <ul className="list-inside text-lg font-medium w-full sm:w-1/2 px-8">
                            <li className="py-0.5">Guest Lecture - Blender</li>
                            <li className="py-0.5">Assistance with Blender</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 mb-8">
                        {/* Image + Name */}
                        <div className="flex flex-col gap-4 px-16 sm:w-1/2">
                            <Image
                                src="/people/Gian1.jpg"
                                alt="Gian Giannini"
                                width={1000}
                                height={1000}
                                className="object-cover w-48 h-56"
                            />
                            <p className="text-lg font-semibold">
                                Gian Giannini
                            </p>
                        </div>
                        {/* Contributions */}
                        <ul className="list-inside text-lg font-medium w-full sm:w-1/2 px-8">
                            <li className="py-0.5">
                                Guest Lecture - EEG Theory
                            </li>
                            <li className="py-0.5">Labtour Workshop - EEG</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 mb-8">
                        {/* Image + Name */}
                        <div className="flex flex-col gap-4 px-16 sm:w-1/2">
                            <Image
                                src="/pictures/slicercleancoloredblue.png"
                                alt="Teacher 1"
                                width={1000}
                                height={1000}
                                className="object-cover w-48 h-56"
                            />
                            <p className="text-lg font-semibold">
                                Jakob Schmock
                            </p>
                        </div>
                        {/* Contributions */}
                        <ul className="list-inside text-lg font-medium w-full sm:w-1/2 px-8">
                            <li className="py-0.5">Got us donuts</li>
                        </ul>
                    </div>
                </section>
                {/* === Teacher Section === */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 pb-2">
                        Supervisers
                    </h2>

                    {/* Individual Entry */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 mb-8">
                        {/* Image + Name */}
                        <div className="flex flex-col gap-4 px-16 sm:w-1/2">
                            <Image
                                src="/people/Timo-1.jpg"
                                alt="Dr. Timo Schmidt"
                                width={1000}
                                height={1000}
                                className="object-cover w-48 h-56"
                            />
                            <p className="text-lg font-semibold">
                                Dr. rer. nat. Timo Torsten Schmidt
                            </p>
                        </div>
                        {/* Contributions */}
                        <ul className="list-inside text-lg font-medium w-full sm:w-1/2 px-8">
                            <li className="py-0.5">
                                Supervising Teaching Instructor
                            </li>
                            <li className="py-0.5">Outward Communications</li>
                            <li className="py-0.5">
                                Organizational Assistance
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 mb-8">
                        {/* Image + Name */}
                        <div className="flex flex-col gap-4 px-16 sm:w-1/2">
                            <Image
                                src="/people/Felix_3.jpg"
                                alt="Prof. Felix Blankenburg"
                                width={1000}
                                height={1000}
                                className="object-cover w-48 h-56"
                            />
                            <p className="text-lg font-semibold">
                                Prof. Dr. Felix Blankenburg
                            </p>
                        </div>
                        {/* Contributions */}
                        <ul className="list-inside text-lg font-medium w-full sm:w-1/2 px-8">
                            <li className="py-0.5">Professor</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
