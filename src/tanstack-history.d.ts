type AppRouteId = import("@tanstack/react-router").RouteIds<
  import("@tanstack/react-router").RegisteredRouter["routeTree"]
>;

declare module "@tanstack/history" {
  interface HistoryState {
    fromEntryPoint?: {
      name: AppRouteId;
      query?: string;
    };
  }
}
