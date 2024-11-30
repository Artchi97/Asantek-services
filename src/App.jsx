import { lazy, Suspense } from "react";

const Header = lazy(() => import("./components/Header.jsx"));
const MainSentence = lazy(() => import("./components/MainSentence.jsx"));
const AboutUs = lazy(() => import("./components/AboutUs.jsx"));
const Services = lazy(() => import("./components/Services.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const ToTopBtn = lazy(() => import("./components/ToTopBtn.jsx"));
const FadeIn = lazy(() => import("./components/FadeIn.jsx"));
const FallbackComponent = lazy(() =>
  import("./components/FallbackComponent.jsx")
);

function App() {
  return (
    <Suspense fallback={<FallbackComponent />}>
      <div>
        <FadeIn>
          <Header />
        </FadeIn>
        <FadeIn>
          <MainSentence />
        </FadeIn>
        <main>
          <FadeIn>
            <AboutUs id="about-us" />
          </FadeIn>
          <FadeIn>
            <Services id="services" />
          </FadeIn>
          <FadeIn>
            <Contact id="contact" />
          </FadeIn>
        </main>
        <FadeIn>
          <Footer />
        </FadeIn>
        <ToTopBtn />
      </div>
    </Suspense>
  );
}

export default App;
