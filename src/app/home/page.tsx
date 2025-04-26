'use client';

import { signOut, useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        return (
            <>
                <p>You are not signed in</p>
                <button onClick={() => signOut()}>Sign out</button> {/* Optional: you can remove this button if not needed */}
            </>
        );
    }

    return (
        <>
            <p>Welcome, {session.user?.name}</p>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    );
}
