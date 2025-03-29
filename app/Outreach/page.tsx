export default function OutreachPage() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Outreach</h1>

            {/* Outreach Entries */}
            <div className="space-y-6 py-10">
                {/* Outreach Item 1 */}
                <div>
                    <a
                        href="https://www.fu-berlin.de/campusleben/campus/2024/241118-meet-the-bua/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl font-semibold"
                    >
                        The Diverse Brain Course featured at &quot;Meet the
                        BUA&quot;
                    </a>
                    <p className="text-gray-600 mt-1">November 2024</p>
                </div>
            </div>
        </div>
    );
}
