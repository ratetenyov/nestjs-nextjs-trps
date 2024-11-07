import ClientSide from './ClientSide';
import { trpc } from './trpc';

export default async function Home() {
    const response = await trpc.hello.query({ name: 'Yasha' });

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <p>Server side {response}</p>
            <ClientSide />
        </div>
    );
}
