import { redirect } from "next/navigation";

export default function Home() {
    if (
        typeof window !== "undefined" &&
        window.location.pathname !== "/Exhibition"
    ) {
        redirect("/Exhibition");
    }
    return null; // Prevents an empty render
}
