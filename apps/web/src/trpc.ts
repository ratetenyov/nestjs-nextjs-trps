import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../server/trpc/trpc.router';

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `${import.meta.env.VITE_NESTJS_SERVER_URL}/trpc`, // TODO: use env var
        }),
    ],
});
