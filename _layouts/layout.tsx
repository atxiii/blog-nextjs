import Header from '@includes/header';
const Layout = (props: any) => {
  return (
    <div className="containers layout">
      <Header />
      {props.children}
    </div>
  );
};
export default Layout;
