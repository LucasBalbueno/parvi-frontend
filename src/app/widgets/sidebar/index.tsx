'use client';

import Image from 'next/image';

import { FaCirclePlus } from 'react-icons/fa6';
import {
  IoCalendarNumberSharp,
  IoOptionsSharp,
  IoSpeedometerSharp,
  IoNotifications,
  IoPaperPlane,
} from 'react-icons/io5';
import { MdDashboard, MdQuestionMark } from 'react-icons/md';
import { LuGalleryVerticalEnd } from 'react-icons/lu';

import { NavMain } from '@/src/shared/ui/shadcn/sidebar/nav-main';
import { NavSecondary } from '@/src/shared/ui/shadcn/sidebar/nav-secondary';
import { NavUser } from '@/src/shared/ui/shadcn/sidebar/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from '@/src/shared/ui/shadcn/sidebar/sidebar';
import ParviLogo from '@/public/images/LogoParvi.svg';
import ParviLogoCompact from '@/public/images/LogoParviCompact.svg';

const data = {
  user: {
    name: 'Example user',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  workspaces: [
    {
      name: 'Example Manager',
      logo: LuGalleryVerticalEnd,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: MdDashboard,
      isActive: true,
    },
    {
      title: 'Launches',
      url: '#',
      icon: FaCirclePlus,
      items: [
        {
          title: 'New Revenue',
          url: '#',
        },
        {
          title: 'New Expense',
          url: '#',
        },
        {
          title: 'New Transfer',
          url: '#',
        },
      ],
    },
    {
      title: 'Limits',
      url: '#',
      icon: IoSpeedometerSharp,
    },
    {
      title: 'Calendar',
      url: '#',
      icon: IoCalendarNumberSharp,
    },
    {
      title: 'Notifications',
      url: '#',
      icon: IoNotifications,
    },
    {
      title: 'Settings',
      url: '#',
      icon: IoOptionsSharp,
      items: [
        {
          title: 'Bank accounts',
          url: '#',
        },
        {
          title: 'Bank Cards',
          url: '#',
        },
        {
          title: 'Boxes',
          url: '#',
        },
        {
          title: 'Categories',
          url: '#',
        },
        {
          title: 'Tags',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: MdQuestionMark,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: IoPaperPlane,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <div className="w-full p-2 h-15 bg-gradient-purple flex items-center justify-center">
        {state === 'collapsed' ? (
          <Image src={ParviLogoCompact} alt="Parvi Logo Compacta" className="h-8" />
        ) : (
          <Image src={ParviLogo} alt="Parvi Logo" className="w-7/12" />
        )}
      </div>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
