
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import States from "./pages/States";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import ArunachalPradesh from "./pages/states/ArunachalPradesh";
import Assam from "./pages/states/Assam";
import Manipur from "./pages/states/Manipur";
import Meghalaya from "./pages/states/Meghalaya";
import Mizoram from "./pages/states/Mizoram";
import Nagaland from "./pages/states/Nagaland";
import Sikkim from "./pages/states/Sikkim";
import Tripura from "./pages/states/Tripura";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/states" element={<States />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/states/arunachal-pradesh" element={<ArunachalPradesh />} />
          <Route path="/states/assam" element={<Assam />} />
          <Route path="/states/manipur" element={<Manipur />} />
          <Route path="/states/meghalaya" element={<Meghalaya />} />
          <Route path="/states/mizoram" element={<Mizoram />} />
          <Route path="/states/nagaland" element={<Nagaland />} />
          <Route path="/states/sikkim" element={<Sikkim />} />
          <Route path="/states/tripura" element={<Tripura />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
