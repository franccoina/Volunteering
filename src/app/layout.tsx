import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ToastContainer } from "react-toastify";
import ClientLayout from "@/ui/layouts/ClientLayout";
import Head from 'next/head';
import "react-toastify/dist/ReactToastify.css"; 
import "./globals.scss";

export const metadata: Metadata = {
  title: "Vac-N-Comp",
  description: "Look for companies and vacants",
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Atrévete a gestionar compañías y sus vacantes de empleo. Todo en un solo panel de administrador, 
          sencillo, eficiente y cómodo."
        />
        <meta
          name="keywords"
          content="Management, Gestión, Panel, Admin, Company, Vacants, Jobs, Work, David, Francisco, Blandón, 
          Mena, franccoina, frn!, Riwi, Vac-N-Comp"
        />
        <meta name="sitedomain" content="https://example.com/" />
        <meta name="organization" content="Vac-N-Comp, frn!, riwi" />
        <meta name="author" content=" David Francisco Blandón Mena" />
        <meta name="designer" content="David Francisco Blandón Mena" />
        <meta name="copyright" content="© 2024 Vac-N-Comp, Inc. Todos los derechos reservados." />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="15days" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={urbanist.className}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
        <ToastContainer />
      </body>
    </html>
  );
}
