import React from "react";
import Benefits from "../components/home/benefits";
import CTA from "../components/home/cta";
import CustomerReview from "../components/home/customerReview";
import Faqs from "../components/home/faqs";
import Footer from "../components/home/footer";
import Hero from "../components/home/hero";
import Purpose from "../components/home/purpose";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Purpose />
      <Benefits />
      <CustomerReview />
      <Faqs />
      <CTA />
      <Footer />
    </div>
  );
}
