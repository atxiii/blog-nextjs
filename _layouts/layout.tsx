import Header from '@includes/header';
import Footer from '@includes/footer';

const Layout = (props: any) => {
  return (
    <>
      <div className="layout" data-barba="wrapper">
        <Header />
        <main
          className="containers"
          data-barba="container"
          data-barba-namespace="home"
        >
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
