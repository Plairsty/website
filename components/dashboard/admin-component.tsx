import {
  IconHome2,
  IconDeviceDesktopAnalytics,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from '@tabler/icons';
import Home from './admin/home';
import Analytics from './admin/analytics';
import Account from './admin/account';
import Releases from './admin/releases';
import Settings from './admin/settings';
import React from 'react';
export const adminData = [
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
