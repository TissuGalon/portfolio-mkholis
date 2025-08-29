import { title } from "@/components/primitives";

export default function BlogPage() {
    return (
        <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Aurora Background */}
            <div className="myaurora"></div>

            {/* Konten */}
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold">Aurora Gradient Background</h1>
                <p className="mt-4 text-lg">Next.js + Tailwind + CSS Animation</p>
            </div>
        </main>
    );
}
