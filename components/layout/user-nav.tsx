"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
export function UserNav() {
  // const { data: session } = useSession();
  // if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={
                  //"session.user?.image"
                  '/avatar.png'
                }
                alt={
                  // "session.user?.name"
                  'wilson gichuhi'
                }
              />
              <AvatarFallback>{
              // "session.user?.name?.[0]"
              'Wilson Gichuhi'
              }</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {/* {"session.user?.name"} */}
                Wilson Gichuhi
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {/* {"session.user?.email"} */}
                winchygichu@gmail.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href={'/profile'}>Profile</Link>
              
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/financial-details'}>Financial Accounts</Link>
              <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/profile/settings'}>Settings</Link>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            {/* <DropdownMenuItem>Add Member</DropdownMenuItem> */}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => {console.log('signed out')}}>
            <Link href={'/'}>Log out</Link>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
 // }
}
