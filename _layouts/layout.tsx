import Header from '@includes/header';
import Footer from '@includes/footer';

const Layout = (props: any) => {
  return (
    <>
      <div className="layout">
        <Header />
        <main className="containers">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
