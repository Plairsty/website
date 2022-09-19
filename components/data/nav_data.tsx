import {
  IconHome2,
  IconDeviceDesktopAnalytics,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from '@tabler/icons';
import Home from './home';
import Analytics from './analytics';
import Account from './account';
import Releases from './releases';
import Settings from './settings';
import React from 'react';
export const mockdata = [
  {
    icon: IconHome2,
    label: 'Dashboard',
    component: <Home />,
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: 'Analytics',
    component: <Analytics />,
  },
  { icon: IconCalendarStats, label: 'Releases', component: <Releases /> },
  { icon: IconUser, label: 'Account', component: <Account /> },
  { icon: IconSettings, label: 'Settings', component: <Settings /> },
];
