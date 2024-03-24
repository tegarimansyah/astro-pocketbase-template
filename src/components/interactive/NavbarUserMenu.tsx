import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { isLoggedIn, doLogout } from "@/services/backend/userService"

export default function NavbarMobileSidebar() {

    if (!isLoggedIn()) {
        return (
            <div
                className="flex w-full lg:w-40 justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"
            >
                <Button><a href="/login">Log In</a></Button>
            </div>
        )
    }

    return (
        <div
            className="flex w-full lg:w-20 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"
        >
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full ml-auto flex-none sm:flex-initial"
                    >
                        <Avatar className="h-9 w-9 sm:flex">
                            {/* <AvatarImage src="/avatars/01.png" alt="Avatar" /> */}
                            <AvatarFallback>TI</AvatarFallback>
                        </Avatar>
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={doLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}