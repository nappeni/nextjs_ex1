import { Inter, Noto_Sans_KR, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const f_light = Noto_Sans_KR({
    weight: ['400'],
    subsets: ['latin'],
});

export const f_normal = Noto_Sans_KR({
    weight: ['500'],
    subsets: ['latin'],
});

export const f_bold = Noto_Sans_KR({
    weight: ['700'],
    subsets: ['latin'],
});