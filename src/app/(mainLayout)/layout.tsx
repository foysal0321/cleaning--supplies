import Footer from "@/components/shared/footer/Footer";
import { Navbars } from "@/components/shared/navbar/Navbars";


export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbars />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    )
}
