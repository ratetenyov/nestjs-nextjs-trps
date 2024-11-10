import { useEffect, useState } from 'react';
import { trpc } from './trpc';

export const Wrapper = () => {
    const [response, setResponse] = useState<string>('');

    useEffect(() => {
        trpc.hello.query({ name: 'Yasha' }).then((response) => {
            setResponse(response);
        });
    }, []);

    return <div>Hello man, {response}</div>;
};
