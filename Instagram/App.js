import { StatusBar } from "expo-status-bar";

import StackRoutes from "./src/routes/stack.routes";

export default function App() {
  return (
    <>
      <StackRoutes />
      <StatusBar style="auto" />
    </>
  );
}
