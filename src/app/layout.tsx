import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from "./api/auth/[...nextauth]/route";
import SessionWrapper from '../app/components/SessionWrapper';

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.svg" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <SessionWrapper session={session}>
          {children}
        </SessionWrapper>

        <script src="/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
