import "./globals.scss";

export const metadata = {
  title: "FocalPoint",
  description: "Lista de tarefas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
