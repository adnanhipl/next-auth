'use client';

import { signOut, useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();

    return (
        <>
            <p>Welcome, {session.user?.name}</p>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    );
}