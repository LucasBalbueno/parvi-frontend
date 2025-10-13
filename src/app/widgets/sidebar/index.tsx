'use client';

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
import { WorkSpaceSwitcher } from '@/src/shared/ui/shadcn/sidebar/workspace-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/src/shared/ui/shadcn/sidebar/sidebar';

const data = {
  user: {
    name: 'Exemple user',
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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <WorkSpaceSwitcher workspaces={data.workspaces} />
      </SidebarHeader>
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
