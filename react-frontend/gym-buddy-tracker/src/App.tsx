import "./App.css";
import Layout from "./Layout";
import { Outlet, RootRoute } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Outlet />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export const rootRoute = new RootRoute({
  component: App,
});

export default App;
