import PageProvider from "./PageProvider/PageProvider";
import MaterialProvider from "./MaterialProvider/MaterialProvider";
import RouterProvider from "./RouterProvider/RouterProvider";

const Providers = () => {
  return (
    <MaterialProvider>
      <PageProvider>
        <RouterProvider />
      </PageProvider>
    </MaterialProvider>
  );
};

export default Providers;
