'use client';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import React, { useState } from 'react';

export let Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={session}
    >
      {children}
    </SessionContextProvider>
  );
};
