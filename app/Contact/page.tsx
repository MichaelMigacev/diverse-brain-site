import Image from "next/image";

export default function TeachingPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            {/* === Teacher Section === */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-8 pb-2">Contact</h2>

                {/* Individual Entry */}
                <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 mb-8">
                    {/* Image + Name */}
                    <div className="flex flex-col gap-4 px-16 sm:w-1/3">
                        <Image
                            src="/diverse-brain-site/people/Micha_test.jpeg"
                            alt="Michael Migacev"
                            width={1000}
                            height={1000}
                            className="object-cover w-48 h-56"
                        />
                        <p className="text-lg font-semibold">Michael Migacev</p>
                    </div>
                    {/* Contributions */}
                    <ul className="list-inside text-lg font-medium w-full sm:w-2/3 px-8 py-16">
                        <li className="py-0.5">
                            <span className="font-normal text-xl text-gray-800">
                                E-Mail:
                            </span>{" "}
                            micha.migacev@googlemail.com
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
