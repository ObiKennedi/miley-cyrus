import Header from "@/component/header";
import Footer from "@/component/footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
  }