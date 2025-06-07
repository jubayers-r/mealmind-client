import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import AuthProvider from "./context/authContext/AuthProvider";
import * as Tooltip from "@radix-ui/react-tooltip";

function App() {
  return (
      <Tooltip.Provider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Tooltip.Provider>
  );
}

export default App;