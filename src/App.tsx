import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import { Spinner } from "./components/ui/spinner";

function DefaultPending() {
  return (
    <div className="flex flex-1 items-center justify-center h-screen w-screen">
      <Spinner className="size-8" />
    </div>
  );
}

const router = createRouter({
  routeTree,
  defaultPreload: "viewport",
  defaultPendingComponent: DefaultPending,
  defaultViewTransition: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
