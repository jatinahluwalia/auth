import { getUser } from '@/utils/actions/user.action';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const authUser = await getServerSession();
  const user = await getUser({ email: authUser?.user?.email });
  if (user.role !== 'admin') return redirect('/');
  return <div>{children}</div>;
};

export default AdminLayout;
