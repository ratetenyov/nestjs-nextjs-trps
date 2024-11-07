'use client';

import { useEffect, useState } from 'react';
import { trpc } from './trpc';

export default function ClientSide() {
    const [greeting, setGreeting] = useState<string>('');

    useEffect(() => {
        trpc.hello
            .query({ name: 'Client side' })
            .then((response) => setGreeting(response));
    }, []);
    return <div>I am client side - {greeting}</div>;
}
