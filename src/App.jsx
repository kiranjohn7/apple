import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import iwatch from "./assets/iwatch.png";
import ipad from "./assets/ipad.jpg";
import airpods4 from "./assets/airpods4.jpg";
import airpodspro2 from "./assets/airpodspro2.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        variant="secondary"
        items={[
          {
            title: "WATCH",
            showAppleLogo: true,
            subtitle: "Stay connected to your kids. Wherever they go.",
            img: iwatch,
            cta: "Learn more",
          },
          {
            title: "iPad",
            accent: "air",
            subtitle: "Now supercharged by the M3 chip.",
            img: ipad,
            cta: [
              { label: "Learn more", variant: "primary" },
              { label: "Buy", variant: "outline" },
            ],
            tagline: "Built for Apple Intelligence.",
          },
        ]}
      />

      <Section
        variant="primary"
        items={[
          {
            title: "AirPods 4",
            subtitle: "High-fidelity sound meets seamless design.",
            img: airpods4,
            cta: [
              { label: "Learn more", variant: "primary" },
              { label: "Buy", variant: "outline" },
            ],
            invert: true,
            contentPosition: "bottom",
          },
          {
            title: "AirPods Pro 2",
            subtitle: "Active Noise Cancellation for every moment.",
            img: airpodspro2,
            cta: [
              { label: "Learn more", variant: "primary" },
              { label: "Buy", variant: "outline" },
            ],
            invert: true,
            contentPosition: "bottom",
          },
        ]}
      />

      <Footer />
    </>
  );
}

export default App;
