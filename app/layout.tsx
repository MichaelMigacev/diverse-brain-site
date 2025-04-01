import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer"; // Import footer

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat", // Define a CSS variable
});

export const metadata = {
    title: "Teaching Event",
    description: "A teaching event leading to an exhibition",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={montserrat.variable}>
            <body className="font-montserrat bg-gray-100">
                <Navbar />
                <main className="pt-24">{children}</main>
                <Footer /> {/* Footer always at bottom */}
            </body>
        </html>
    );
}
