import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { IoIosMenu } from "react-icons/io";

interface Props {
    title: string;
    navigation: {
        title: string;
        href: string;
        isActive: boolean;
    }[];
}

export default function NavbarMobileSidebar({ title, navigation }: Props) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <IoIosMenu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold"
                    >
                        <h1 className="text-xl font-light">&gt;{title}</h1>
                    </a>
                    {navigation.map((nav) => (
                        <a key={nav.title} href={nav.href}
                            className={`hover:text-foreground ${nav.isActive ? "font-bold text-xl text-foreground" : "text-muted-forground"}`}>
                            {nav.title}
                        </a>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}