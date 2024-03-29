import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tvoё Streaming',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
