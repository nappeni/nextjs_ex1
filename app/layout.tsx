import '@/app/ui/global.css';
import { inter, f_light, f_normal, f_bold } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${f_light.className} antialiased`}>{children}</body>
    </html>
  );
}
