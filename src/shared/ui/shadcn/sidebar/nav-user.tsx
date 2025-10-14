'use client';

import { ChevronsUpDown, Sparkles } from 'lucide-react';
import { MdLocalActivity, MdLogout, MdAccountCircle } from 'react-icons/md';
import { FaGear } from 'react-icons/fa6';

import { Avatar, AvatarFallback, AvatarImage } from '@/src/shared/ui/shadcn/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/src/shared/ui/shadcn/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/src/shared/ui/shadcn/sidebar/sidebar';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string | StaticImageData;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-background hover:bg-lightpurple hover:text-light transition duration-400"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={typeof user.avatar === 'string' ? user.avatar : user.avatar.src}
                  alt={user.name}
                />
                <AvatarFallback className="rounded-lg">NA</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={typeof user.avatar === 'string' ? user.avatar : user.avatar.src}
                    alt={user.name}
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href={'/'}>
                <DropdownMenuItem className="hover-buttons-sidebar transition duration-400">
                  <Sparkles className="text-black hover-text-sidebar transition duration-400" />
                  <p className="hover-text-sidebar transition duration-400">Upgrade to Pro</p>
                </DropdownMenuItem>
              </Link>
              <Link href={'/'}>
                <DropdownMenuItem className="hover-buttons-sidebar transition duration-400">
                  <MdAccountCircle className="text-black hover-text-sidebar transition duration-400" />
                  <p className="hover-text-sidebar transition duration-400">My Account</p>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <Link href={'/'}>
                <DropdownMenuItem className="hover-buttons-sidebar transition duration-400">
                  <FaGear className="text-black hover-text-sidebar transition duration-400" />
                  <p className="hover-text-sidebar transition duration-400">Preferences</p>
                </DropdownMenuItem>
              </Link>
              <Link href={'/'}>
                <DropdownMenuItem className="hover-buttons-sidebar transition duration-400">
                  <MdLocalActivity className="text-black hover-text-sidebar transition duration-400" />
                  <p className="hover-text-sidebar transition duration-400">Activity</p>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <Link href={'/'}>
              <DropdownMenuItem className="hover-button-logout transition duration-400">
                <MdLogout className="text-black hover-text-sidebar transition duration-400" />
                <p className="hover-text-sidebar transition duration-400">Log out</p>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
