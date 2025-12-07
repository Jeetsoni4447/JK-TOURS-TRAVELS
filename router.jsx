import { createBrowserRouter } from "react-router-dom";
import App from "./src/App.jsx";
import About from "./src/views/About/About.jsx";
import Contact from "./src/views/Contact/Contact.jsx";
import HomePage from "./src/views/HomePage/HomePage.jsx";
import Packages from "./src/views/Packages/Packages.jsx";
import Busbooking from "./src/views/Busbooking/Busbooking.jsx"
import Trainbooking from "./src/views/Trainbooking/Trainbooking.jsx"
import Flightbooking from "./src/views/Flightbooking/Flightbooking.jsx"
import Carbooking from "./src/views/Carbooking/Carbooking.jsx"
import Termsconditions from "./src/views/Terms&Conditions/Termsconditions.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "contact", element: <Contact /> },
            { path: "packages", element: <Packages /> },
            { path: "about", element: <About /> },
            { path: "Termsconditions", element: <Termsconditions /> },
            { path: "Busbooking", element: <Busbooking /> },
            { path: "Flightbooking", element: <Flightbooking /> },
            { path: "Trainbooking", element: <Trainbooking /> },
            { path: "Carbooking", element: <Carbooking /> },
        ],
    },
]);

export default router;