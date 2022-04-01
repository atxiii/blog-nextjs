import Header from '@includes/header';
import Footer from '@includes/footer';

const Layout = (props: any) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container z-40">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
