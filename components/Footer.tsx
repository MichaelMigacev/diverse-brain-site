import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white py-6 border-t border-gray-300">
            <div className="w-full max-w-7xl mx-auto px-4">
                {/* Row 1 */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-4 py-4">
                    <Image
                        src="/diverse-brain-site/logos/FU_Logo.svg"
                        alt="FU Berlin"
                        width={120}
                        height={120}
                        className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <Image
                        src="/diverse-brain-site/logos/HU_Logo.svg"
                        alt="HU Berlin"
                        width={120}
                        height={120}
                        className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <Image
                        src="/diverse-brain-site/logos/TU_Logo.svg"
                        alt="TU Berlin"
                        width={120}
                        height={120}
                        className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <Image
                        src="/diverse-brain-site/logos/Char_Logo.svg"
                        alt="Charité"
                        width={120}
                        height={120}
                        className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                </div>

                {/* Row 2 */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-4 py-4">
                    <Image
                        src="/diverse-brain-site/logos/CCNB-blau-s.jpg"
                        alt="CCNB"
                        width={120}
                        height={120}
                        className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <Image
                        src="/diverse-brain-site/logos/BUA_Logo_hoch_2_RGB_24.svg"
                        alt="BUA"
                        width={120}
                        height={120}
                        className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <p className="text-sm md:text-base font-medium max-w-lg">
                        Gefördert vom Bundesministerium für Bildung und
                        Forschung (BMBF) und dem Land Berlin im Rahmen der
                        Exzellenzstrategie von Bund und Ländern
                    </p>
                </div>

                {/* Row 3: Text + More Logos */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center py-4">
                    <div className="flex gap-6 md:gap-12">
                        <Image
                            src="/diverse-brain-site/logos/BMBF_logo_weiss.jpg"
                            alt="BMBF"
                            width={120}
                            height={120}
                            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                        />
                        <Image
                            src="/diverse-brain-site/logos/senat_logo_weiss.png"
                            alt="Senat"
                            width={120}
                            height={120}
                            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
