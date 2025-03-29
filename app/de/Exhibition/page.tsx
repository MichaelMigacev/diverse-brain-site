import { redirect } from "next/navigation";

export default function Home() {
    if (
        typeof window !== "undefined" &&
        window.location.pathname !== "/de/Exhibition"
    ) {
        redirect("/de/Exhibition");
    }
    return null; // Prevents an empty render
}
