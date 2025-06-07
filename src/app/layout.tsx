import './globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '[Your Name] - Data Scientist Portfolio | Retro Edition',
  description: 'A portfolio showcasing data science projects and skills, built with Next.js and a retro gaming theme.',
  // Add keywords like: 'data science, machine learning, portfolio, [Your Name]'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links and other head elements can go here if not handled by Next.js metadata or public folder structure */}
        {/* The Google Font import is in globals.css */}
      </head>
      <body>
        <div className="app-wrapper">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
