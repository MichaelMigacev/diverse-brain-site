"use client";
import Image from "next/image";
import Slideshow from "../../components/Slideshow";

const images = Array.from(
    { length: 34 },
    (_, i) => `/exhibition-imgs/event/img${i + 1}.jpg`
);

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
                <div className="pt-24">
                    <Slideshow images={images} />
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4 pt-8">
                    {/* Title */}
                    <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-8">
                        Neuroplasticity
                    </h3>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {/* Left Column: Names + Image */}
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            {/* Names */}
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Cora-Lorraine Sachs{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Psychology (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Nazlican Göksu Tekdogan{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Computational Sciences (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Jakob Schmock{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Computer Science (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Jonas Heinemann{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Computer Science (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Michael Migacev{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Computer Science (FU Berlin)
                                    </span>
                                </p>
                            </div>

                            <div className="flex justify-center w-full pt-12">
                                <Image
                                    src="/exhibition-imgs/pieces/laser_edited_1_cropped.jpg"
                                    alt="Image of the neuroplasticity puzzle"
                                    width={400}
                                    height={400}
                                    className="object-cover w-72 h-72 md:w-120 md:h-120 shadow"
                                />
                            </div>
                        </div>

                        {/* Right Column: Description + References */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                While many people believe the brain cannot
                                recover after brain damage, neuroplasticty
                                proves otherwise. Dendritic remodeling, axonal
                                sprouting, and neurogenesis play crucial role in
                                the recovery process.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                In this piece we playfully highlight some
                                aspects of neuroplasticity and simulate a
                                healing brain by placing the correct tiles into
                                the correct cutouts. We primarily focus on 3
                                parts of neuroplasticity:
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                1. Dendritic remodeling involves changes in the
                                dendrites which are branches of neurons that
                                receive information from other neurons. This
                                process helps neurons adapt to new functions and
                                rebuild damaged circuits. [1]
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                2. Axonal sprouting occurs when neighboring
                                neurons extend their axons to establish new
                                connections with damaged brain regions. That
                                helps in restoring lost neural paths and
                                functional connections. [2]
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                3. New neurons can be generated in certain brain
                                regions. Newly generated neurons collaborate
                                with existing connections, and contribute to
                                restoring cognitive functions such as memory and
                                learning. Whether neurogenesis happens on a
                                scale relevant to healing and upholding neural
                                function is still debated. [3]
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-semibold text-justify mb-6">
                                References:
                            </p>

                            {/* References */}
                            <div className="text-xs text-gray-600 mt-auto">
                                <p>
                                    <span className="font-semibold">[1]:</span>{" "}
                                    RP Stroemer, TA Kent, and CE Hulsebosch.
                                    Synchronous neuronal activity is a signal
                                    for axonal sprouting after cortical lesions
                                    in the adult. The Journal of Neuroscience,
                                    22(14):6062–6070, July 2002.
                                </p>
                                <p>
                                    <span className="font-semibold">[2]:</span>:
                                    Gregory Yiu and Zhigang He. Axonal
                                    regeneration: Underlying molecular
                                    mechanisms and potential therapeutic
                                    targets. Biomedicines, 10(12):3186, 2022.
                                </p>
                                <p>
                                    <span className="font-semibold">[3]:</span>:
                                    Dong Sun, Raymond J Colello, William P
                                    Daugherty, Taejung H Kwon, Michael J McGinn,
                                    and C Edward Dixon. Neurogenesis in adult
                                    human brain after traumatic brain injury.
                                    Journal of Neurotrauma, 28(4):763–774, 2011.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4 pt-8">
                    {/* Title */}
                    <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-8">
                        Learning
                    </h3>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {/* Left Column: Names + Image */}
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            {/* Names */}
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Paul Nelde{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Computer Science (FU Berlin)
                                    </span>
                                </p>
                            </div>

                            <div className="flex justify-center w-full pt-12">
                                <Image
                                    src="/exhibition-imgs/pieces/paul_edited_1_cropped.jpg"
                                    alt="Image of the neuroplasticity puzzle"
                                    width={400}
                                    height={400}
                                    className="object-cover w-72 h-72 md:w-120 md:h-120 shadow"
                                />
                            </div>
                        </div>

                        {/* Right Column: Description + References */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                The idea that we can change simple things and
                                achieve great impact has always been popular
                                among people. One great example of such thinking
                                are the different learning modalities.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                These can be understood as different learning
                                methods such as seeing, reading and hearing.
                                Popular opinion suggests that each person has
                                their own style of learning which boosts
                                performance when used correctly. Contrary to
                                this belief research suggest that learning
                                styles are primarily preferences of the learner
                                which have little effect on the ability to
                                memorize compared to the non-preferred styles of
                                learning [1, 2].
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Additionally there is benefit in learning in
                                many learning styles and modalities at once.
                                This quiz compares peoples perfomances when
                                using their preferred style of learning as well
                                as all modalities (seeing, reading and hearing)
                                at once.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Can we replicate these study results with a
                                simple quiz? Participate here and find out!
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-semibold text-justify mb-6">
                                References:
                            </p>

                            {/* References */}
                            <div className="text-xs text-gray-600 mt-auto">
                                <p>
                                    <span className="font-semibold">[1]:</span>{" "}
                                    Testing the ATI hypothesis: Should
                                    multimedia instruction accommodate
                                    verbalizer-visualizer cognitive style?
                                    Author links open overlay panel by Laura J.
                                    Massa, Richard E. Mayer 2005
                                </p>
                                <p>
                                    <span className="font-semibold">[2]:</span>:
                                    Willingham, D. T., Hughes, E. M., & Dobolyi,
                                    D. G. (2015). The Scientific Status of
                                    Learning Styles Theories. Teaching of
                                    Psychology, 42(3), 266-271.
                                    https://doi.org/10.1177/0098628315589505
                                    (Original work published 2015)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4 pt-8">
                    {/* Title */}
                    <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-8">
                        Representing fMRI Activity
                    </h3>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {/* Left Column: Names + Image */}
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            {/* Names */}
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Sara Wesolek{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Neuroscience (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Michael Migacev{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Computer Science (FU Berlin)
                                    </span>
                                </p>
                            </div>

                            <div className="flex justify-center w-full pt-12">
                                <Image
                                    src="/exhibition-imgs/pieces/LEDBrain_edited_2_cropped.jpg"
                                    alt="Image of the neuroplasticity puzzle"
                                    width={400}
                                    height={400}
                                    className="object-cover w-72 h-72 md:w-120 md:h-120 shadow"
                                />
                            </div>
                        </div>

                        {/* Right Column: Description + References */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Traditionally, fMRI study results are presented
                                as a figure or table. Especially as technology
                                advances, the complexity of the data which must
                                be illustrated increases.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                For example, Sara and their colleagues are
                                working on a study which explores novel methods
                                to record and analyze fMRI data resulting in
                                ultra-high temporal resolution. This transforms
                                the commonly seen 3D data into 4D data –
                                activity patterns in three spatial dimensions
                                across time. But how can these complex results
                                be visualized?
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                While investigating the limitations of 2D paper
                                and experimenting with modern 3D printing we
                                have come up with an intuitive way to view such
                                study results. 3D printing a hollow brain
                                allowed us to attach LEDs along the shell. After
                                cartographing each of the individual 204 LEDs,
                                the lights can be individually addressed to
                                display real study results – even complex data
                                over time – on a 3D brain.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                We hope to make neuroscientific research just a
                                little more tangible with this project.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4 pt-8">
                    {/* Title */}
                    <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-8">
                        Senses
                    </h3>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {/* Left Column: Names + Image */}
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            {/* Names */}
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Luisa Manrique Núñez{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Cognitive Neuroscience (HU Berlin)
                                    </span>
                                </p>
                            </div>

                            <div className="flex justify-center w-full pt-12">
                                <Image
                                    src="/exhibition-imgs/pieces/dome_edited_2_cropped.jpg"
                                    alt="Image of the neuroplasticity puzzle"
                                    width={400}
                                    height={400}
                                    className="object-cover w-72 h-72 md:w-120 md:h-120 shadow"
                                />
                            </div>
                        </div>

                        {/* Right Column: Description + References */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Having five senses is something we are taught
                                from a young age. We go to the kindergarden and
                                learn that we can see, hear, smell, taste and
                                touch. But what if we have more?
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                We have looked into the current research body
                                and investigated. What we have found we would
                                like to present to you in an interactive
                                experience. Entering the dome gives you an
                                opportunity to explore some unconventional
                                senses. You will learn about proprioception [1],
                                interoception [2] and see how they are relevant
                                for us.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Unfortunately we have not found amazing dormant
                                supernatural abilities but we hope that thinking
                                about our available senses in a different way
                                may lead to a higher appreciation of our brains
                                and bodies.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                While researchers to this day disagree and argue
                                about the number of senses we do have. Fact is
                                that some beliefs we are taught as children
                                should be challenged along our way to adulthood.
                                Especially if it concerns our bodies.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                We hope that you have learned something new
                                today!
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-semibold text-justify mb-6">
                                References:
                            </p>

                            {/* References */}
                            <div className="text-xs text-gray-600 mt-auto">
                                <p>
                                    <span className="font-semibold">[1]:</span>{" "}
                                    Qin, Z. (2024). Proprioception. In: Kan, Z.
                                    (eds) The ECPH Encyclopedia of Psychology.
                                    Springer, Singapore. https:/
                                    /doi.org/10.1007/978-981-97-7874-4_1246
                                </p>
                                <p>
                                    <span className="font-semibold">[2]:</span>:
                                    Craig, A. How do you feel? Interoception:
                                    the sense of the physiological condition of
                                    the body. Nat Rev Neurosci 3, 655–666
                                    (2002). https://doi.org/10.1038/nrn894
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4 pt-8">
                    {/* Title */}
                    <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-8">
                        Structural Connectivity
                    </h3>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {/* Left Column: Names + Image */}
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            {/* Names */}
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Carla Fillbrandt{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Psychology (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Alena Beliaeva{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Veterinary Medicine (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Zimo Gerlinger{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Psychology (FU Berlin)
                                    </span>
                                </p>
                            </div>

                            <div className="flex justify-center w-full pt-12">
                                <Image
                                    src="/exhibition-imgs/pieces/connectivity_edited_1_cropped.jpg"
                                    alt="Image of the neuroplasticity puzzle"
                                    width={400}
                                    height={400}
                                    className="object-cover w-72 h-72 md:w-120 md:h-120 shadow"
                                />
                            </div>
                        </div>

                        {/* Right Column: Description + References */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Current research is focusing on regions of the
                                brain and analysing their function in relation
                                to certain tasks. A lot of people overlook that
                                these regions are connected not only to the
                                regions next to them but also with a network of
                                white matter lying underneath the grey matter.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                We have followed a recent study which
                                investigated structural connectivity[1] between
                                the brain regions. Using that we have laid out
                                an LED circle which represents connected
                                regions. The buttons represent different regions
                                in the left and right brain halves. The buttons
                                are colored the show which regions they
                                represent. Pressing the buttons reveals the
                                connections between the regions. Not only do the
                                connection vary from region to region but also
                                their strength, so we have attempted encoding
                                the strength of the connections with different
                                LED colors.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                This allows us to explore the existing
                                connections and empower learning in a more
                                interactive way. Play around with the model and
                                think about what piques your curiosity and where
                                you would like to know more. We hope to satisfy
                                some of it with our short descriptions of the
                                regions but we would be happy if you walk away
                                curious.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-semibold text-justify mb-6">
                                References:
                            </p>

                            {/* References */}
                            <div className="text-xs text-gray-600 mt-auto">
                                <p>
                                    <span className="font-semibold">[1]:</span>{" "}
                                    Škoch, A., Rehák Bučková, B., Mareš, J. et
                                    al. Human brain structural connectivity
                                    matrices–ready for modelling. Sci Data 9,
                                    486 (2022).
                                    https://doi.org/10.1038/s41597-022-01596-9[1]:
                                    oinmckls am NJONCSAN cosd onk oincomlk nm
                                    aoi x20129 f sdjcn2981 10984u sdifj 193
                                    3321423
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4 pt-8">
                    {/* Title */}
                    <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-8">
                        Printing a Brain
                    </h3>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {/* Left Column: Names + Image */}
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            {/* Names */}
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Michael Migacev{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Computer Science (FU Berlin)
                                    </span>
                                </p>
                            </div>

                            <div className="flex justify-center w-full pt-12">
                                <Image
                                    src="/exhibition-imgs/pieces/printing_edited_1_cropped.jpg"
                                    alt="Image of the neuroplasticity puzzle"
                                    width={400}
                                    height={400}
                                    className="object-cover w-72 h-72 md:w-120 md:h-120 shadow"
                                />
                            </div>
                        </div>

                        {/* Right Column: Description + References */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Modern MRI scanners are amazing. We can detect
                                and distinguish matter within the millimeter.
                                Combining this with common analysis methods
                                let&lsquo;s us extract a 3D surface of the
                                brain.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                We encourage you to walk around and to see how
                                different our brains look. The folds can almost
                                be seen as a personal fingerprint. Although they
                                all have a different shape researchers were
                                unable to f ind corrrelation in function to the
                                shape of the brain contrary to the once popular
                                and luckily outdated belief of phrenology.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                We have looked at all potential methods to
                                generate the 3D surface and compared their
                                results. We have finetuned the manual
                                postprocessing which enables us to print the
                                brains. Our code and video tutorial can be found
                                at [1]
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Want to get your own brain printed? We are
                                currently working out a way to print your brain
                                for you. If you would be interested make sure to
                                write down your eMail on the note or shoot us an
                                eMail at:
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                micha.migacev@googlemail.com
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                We will notify you once we are ready.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-semibold text-justify mb-6">
                                References:
                            </p>

                            {/* References */}
                            <div className="text-xs text-gray-600 mt-auto">
                                <p>
                                    <span className="font-semibold">[1]:</span>{" "}
                                    https://github.com/printyourbrain/3DPrintYourBrain
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4 pt-8">
                    {/* Title */}
                    <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-8">
                        Left & Right Brain
                    </h3>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {/* Left Column: Names + Image */}
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            {/* Names */}
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Alexandra Groß{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Psychology (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Andre Sebayang{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Psychology (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Ahmed Abdelfatah{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Computational Neuroscience (TU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Darvin Hassan{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Psychology (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Michael Migacev{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Computer Science (FU Berlin)
                                    </span>
                                </p>
                            </div>

                            <div className="flex justify-center w-full pt-12">
                                <Image
                                    src="/exhibition-imgs/pieces/labyrinth_edited_1_cropped.jpg"
                                    alt="Image of the neuroplasticity puzzle"
                                    width={400}
                                    height={400}
                                    className="object-cover w-72 h-72 md:w-120 md:h-120 shadow"
                                />
                            </div>
                        </div>

                        {/* Right Column: Description + References */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                The brain can be described as a maze, in which
                                certain paths are taken in certain situations.
                                Unfortunately, there are many misconceptions
                                about these &quot; paths &quot;, i.e. brain
                                activity patterns, inspired by popular media,
                                where thought-experiments often turn into
                                misinformation.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                The goal of our project was to debunk one such
                                misconception: to show that being creative does
                                not equal having a dominant &quot;right
                                brain&quot;, and being better at math does not
                                equal having a dominant &quot;left brain&quot;.
                                Our interactive model, representing the activity
                                patterns for creativity and math based tasks in
                                an artistic interpretation. As you push the
                                buttons of our model, you will see that the
                                patterns are randomized and show little
                                preference to specific brain halves. Although it
                                is an artistic interpretation research suggests
                                that complex mechanism such as logic or
                                creativity are not bound to individual brain
                                halves.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Instead, the activity patterns are most often
                                divided on both brain hemispheres, though one
                                hemisphere might be activated more strongly
                                (Arsalidou et al., 2018; Bashwiner et al., 2020;
                                Shah et al., 2013; Wang et al., 2022). Also,
                                patterns vary from person to person (Finn et
                                al., 2015). Similar things can be said about
                                other brain functions, such as visual, auditory
                                and emotional processing (Alho et al., 2014;
                                Fusar-Poli et al., 2009, Li et al., 2022).
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-semibold text-justify mb-6">
                                References:
                            </p>

                            {/* References */}
                            <div className="text-xs text-gray-600 mt-auto">
                                <p>
                                    <span className="font-semibold">[1]:</span>{" "}
                                    Alho, K., Rinne, T., Herron, T. J., & Woods,
                                    D. L. (2014). Stimulus-dependent activations
                                    and attention-related modulations in the
                                    auditory cortex: a meta-analysis of fMRI
                                    studies. Hearing research, 307, 29-41.
                                </p>
                                <p>
                                    <span className="font-semibold">[2]:</span>:
                                    Arsalidou, M., Pawliw-Levac, M., Sadeghi,
                                    M., & Pascual-Leone, J. (2018). Brain areas
                                    associated with numbers and calculations in
                                    children: meta-analyses of fMRI studies.
                                    Dev. Cogn. Neurosci. 30, 239–250.
                                </p>
                                <p>
                                    <span className="font-semibold">[3]:</span>:
                                    Bashwiner, D. M., Bacon, D. K., Wertz, C.
                                    J., Flores, R. A., Chohan, M. O., & Jung, R.
                                    E. (2020). Resting state functional
                                    connectivity underlying musical creativity.
                                    NeuroImage, 218, 116940.
                                </p>
                                <p>
                                    <span className="font-semibold">[4]:</span>:
                                    Finn, E. S., Shen, X., Scheinost, D.,
                                    Rosenberg, M. D., Huang, J., Chun, M. M.,
                                    ... & Constable, R. T. (2015). Functional
                                    connectome f ingerprinting: identifying
                                    individuals using patterns of brain
                                    connectivity. Nature neuroscience, 18(11),
                                    1664-1671.
                                </p>
                                <p>
                                    <span className="font-semibold">[5]:</span>:
                                    Fusar-Poli, P., Placentino, A., Carletti,
                                    F., Landi, P., Allen, P., Surguladze, S.,
                                    ... & Politi, P. (2009). Functional atlas of
                                    emotional faces processing: a voxel-based
                                    meta-analysis of 105 functional magnetic
                                    resonance imaging studies. Journal of
                                    psychiatry and neuroscience, 34(6), 418-432.
                                </p>
                                <p>
                                    <span className="font-semibold">[6]:</span>:
                                    Li, X., O&lsquo;Sullivan, M. J., &
                                    Mattingley, J. B. (2022). Delay activity
                                    during visual working memory: A
                                    meta-analysis of 30 fMRI experiments.
                                    Neuroimage, 255, 119204.
                                </p>
                                <p>
                                    <span className="font-semibold">[7]:</span>:
                                    Shah, C., Erhard, K., Ortheil, H. J., Kaza,
                                    E., Kessler, C., & Lotze, M. (2013). Neural
                                    correlates of creative writing: an fMRI
                                    study. Human brain mapping, 34(5),
                                    1088-1101.
                                </p>
                                <p>
                                    <span className="font-semibold">[8]:</span>:
                                    Wang, L., Li, M., Yang, T., Wang, L., &
                                    Zhou, X. (2022). Mathematics meets science
                                    in the brain. Cerebral Cortex, 32(1),
                                    123-136.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4 pt-8">
                    {/* Title */}
                    <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-8">
                        Sleeping and Memory
                    </h3>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {/* Left Column: Names + Image */}
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            {/* Names */}
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Filippo Ghirardini{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        University of Pisa (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Viola Zeoli{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        University of Trento (FU Berlin)
                                    </span>
                                </p>
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Michael Migacev{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Computer Science (FU Berlin)
                                    </span>
                                </p>
                            </div>

                            <div className="flex justify-center w-full pt-12">
                                <Image
                                    src="/exhibition-imgs/pieces/marble_edited_2_cropped.jpg"
                                    alt="Image of the neuroplasticity puzzle"
                                    width={400}
                                    height={400}
                                    className="object-cover w-72 h-72 md:w-120 md:h-120 shadow"
                                />
                            </div>
                        </div>

                        {/* Right Column: Description + References */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Sleeping is a natural human function. We are
                                aware that when we sleep we rest and recover
                                physically. Rarely can we appreciate or
                                comprehend how sleep benefits our brain in many
                                aspects. We will focus on the memory
                                consolidation that happens during our sleep.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Researchers have determined that sleep is
                                responsible for long term memory formations.
                                They suggest these mechanisms to be at work:
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                1. hippocampal replay that, by replaying parts
                                of our memories to us foster memorization
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                2. brain oscillations hallmarking slow-wave and
                                rapid-eye movement sleep that provide mechanisms
                                for regulating both information flow across
                                distant brain networks and local synaptic
                                plasticity;
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                3. qualitative transformations of memories
                                during consolidation systems resulting
                                abstracted, in gist-like representations. [2]
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                While these abstract concepts are difficult to
                                grasp we have looked into how each of our sleep
                                phases affects our memory formation. Try our
                                accompanying marble run to learn more!
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-semibold text-justify mb-6">
                                References:
                            </p>

                            {/* References */}
                            <div className="text-xs text-gray-600 mt-auto">
                                <p>
                                    <span className="font-semibold">[1]:</span>{" "}
                                    Carskadon, Mary & Dement, William. (1989).
                                    Normal Human Sleep: An Overview. Principles
                                    and Practice of Sleep Medicine. M.H. Kryger
                                    (Ed.). W.B. Saunders, Philadelphia. 3-13.
                                </p>
                                <p>
                                    <span className="font-semibold">[2]:</span>:
                                    Klinzing, J.G., Niethard, N. & Born, J.
                                    Mechanisms of systems memory consolidation
                                    during sleep. Nat Neurosci 22, 1598–1610
                                    (2019).
                                    https://doi.org/10.1038/s41593-019-0467-3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto my-12 px-4 pt-8">
                    {/* Title */}
                    <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-8">
                        Global Integration Under Psilocybin
                    </h3>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {/* Left Column: Names + Image */}
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            {/* Names */}
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-base md:text-lg font-semibold text-black">
                                    Kasey Devitt{" "}
                                    <span className="font-normal text-gray-700 text-sm md:text-base">
                                        Cognitive Neuroscience (FU Berlin)
                                    </span>
                                </p>
                            </div>

                            <div className="flex justify-center w-full pt-12">
                                <Image
                                    src="/exhibition-imgs/pieces/kasey_img_cropped.jpg"
                                    alt="Image of the neuroplasticity puzzle"
                                    width={400}
                                    height={400}
                                    className="object-cover w-72 h-72 md:w-120 md:h-120 shadow"
                                />
                            </div>
                        </div>

                        {/* Right Column: Description + References */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Psychedelics are being investigated for their
                                therapeutic benefits. In neuroscience the study
                                of psychedelics has revealed many insights into
                                how these substances may alter brain
                                connectivity. This model &quot;Global
                                integration Under Psilocybin,&quot; aims to
                                visually represent the shift in brain region
                                connectivity under the influence of psilocybin.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                For many years it was thought that psychedelics
                                primarily deactivated the medial prefrontal
                                cortex (mPFC), a major node of the Default Mode
                                Network (DMN). The DMN is a network of brain
                                regions that are generally active when the brain
                                is at rest. This led to the misconception that
                                psychedelics simply &quot;turn off&quot; certain
                                parts of the brain.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Recent research has corrected this. Rather than
                                deactivating the mPFC. Psychedelics such as
                                psilocybin cause a shift from local to global
                                connectivity. This means that brain regions,
                                including the mPFC, become more interconnected
                                with other parts of the brain, leading to a
                                state of increased global integration.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                In our model, each color represents a particular
                                area of the brain, and each pattern of
                                connectivity represents a functional brain
                                network, such as the Default Mode Network (DMN)
                                or the Salience Network. The two circular
                                diagrams in the artwork illustrate the
                                difference in connectivity patterns.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Placebo
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                In the placebo condition, local connectivity is
                                strong, and global connectivity is sparse. The
                                strings between pins of the same color are more
                                numerous, emphasizing the localized connections
                                within specific brain regions. This represents
                                the typical state of the brain when not under
                                the influence of psychedelics, where functional
                                networks like the DMN operate in a more isolated
                                manner.
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Psilocybin
                            </p>
                            <p className="text-black text-base md:text-lg lg:text-xl font-medium text-justify mb-6">
                                Under the influence of psilocybin, local
                                connectivity is disrupted, as illustrated by the
                                lack of strings between pins of the same color.
                                Instead, global connectivity is enhanced, with a
                                significant increase in strings connecting nodes
                                of different colors. This visual representation
                                highlights the shift to global integration,
                                where brain regions that were previously less
                                connected now communicate more freely, leading
                                to a more interconnected brain state.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
