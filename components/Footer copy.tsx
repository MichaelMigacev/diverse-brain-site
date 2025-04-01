import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white py-6 border-t border-gray-300">
            <div className="w-full bg-white h-32 flex items-center">
                {/* Container for Logos */}
                <div className="flex justify-evenly items-center w-full max-w-7xl mx-auto px-4">
                    <Image
                        src="/diverse-brain-site/logos/FU_Logo.svg"
                        alt="Logo 1"
                        width={120}
                        height={120}
                        className="object-contain h-16 w-auto"
                    />
                    <Image
                        src="/diverse-brain-site/logos/HU_Logo.svg"
                        alt="Logo 1"
                        width={120}
                        height={120}
                        className="object-contain h-16 w-auto"
                    />
                    <Image
                        src="/diverse-brain-site/logos/TU_Logo.svg"
                        alt="Logo 1"
                        width={120}
                        height={120}
                        className="object-contain h-16 w-auto"
                    />
                    <Image
                        src="/diverse-brain-site/logos/Char_Logo.svg"
                        alt="Logo 1"
                        width={120}
                        height={120}
                        className="object-contain h-16 w-auto"
                    />
                    <Image
                        src="/diverse-brain-site/logos/BUA_Logo_hoch_2_RGB_24.svg"
                        alt="Logo 2"
                        width={120}
                        height={120}
                        className="object-contain h-24 w-auto"
                    />

                    <Image
                        src="/diverse-brain-site/logos/CCNB-blau-s.jpg"
                        alt="Logo 3"
                        width={120}
                        height={120}
                        className="object-contain h-18 w-auto"
                    />
                    <p>
                        Gefördert vom Bundesministerium für Bildung und
                        Forschung (BMBF) und dem Land Berlin im Rahmen der
                        Exzellenzstrategie von Bund und Ländern
                    </p>
                    <Image
                        src="/diverse-brain-site/logos/BMBF_logo_weiss.jpg"
                        alt="Logo 2"
                        width={120}
                        height={120}
                        className="object-contain h-24 w-auto"
                    />

                    <Image
                        src="/diverse-brain-site/logos/senat_logo_weiss.png"
                        alt="Logo 3"
                        width={120}
                        height={120}
                        className="object-contain h-18 w-auto"
                    />
                </div>
            </div>
        </footer>
    );
}
