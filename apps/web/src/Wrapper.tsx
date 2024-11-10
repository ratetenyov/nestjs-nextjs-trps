import { useEffect, useState } from 'react';
import { trpc } from './trpc';

const getResponse = async () => {
    const response = await trpc.hello.query({ name: 'Yasha' });
    return response;
};

export const Wrapper = () => {
    const [response, setResponse] = useState<string>('');

    useEffect(() => {
        trpc.hello.query({ name: 'Yasha' }).then((response) => {
            setResponse(response);
        });
    }, []);

    console.log({ response });

    return <div>Hello man, {response}</div>;
};
