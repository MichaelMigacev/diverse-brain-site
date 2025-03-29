import { redirect } from "next/navigation";

export default function Home() {
    if (typeof window !== "undefined" && window.location.pathname !== "/de") {
        redirect("/de");
    }
    return null; // Prevents an empty render
}
