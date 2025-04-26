import './globals.css';
import '../styles/bootstrap.min.css'
import '../styles/style.css'
import { getServerSession } from 'next-auth';
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import SessionWrapper from '../app/components/SessionWrapper'; 
import Script from 'next/script';

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionWrapper session={session}>
          {children}
        </SessionWrapper>
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
