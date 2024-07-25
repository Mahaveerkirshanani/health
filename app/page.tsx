// app/main-page.tsx
"use client";

import Header from "@/components/Header";
import MainDetails from "@/components/MainDetails";
import CustomerFeedback from "@/components/CustomerFeedback";
import OurServices from "@/components/OurServices";
import OurDoctors from "@/components/OurDoctors";
import OtherFacilities from "@/components/OtherFacilities";
import Hero from "@/components/Hero";
import ContactUs from "@/components/Contactus";
import CEOPage from "@/components/Personal";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQsection";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <MainDetails />
      <Hero/>
      <CustomerFeedback />
      <OurServices />
      <OurDoctors />
      <CEOPage />
      <OtherFacilities />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default MainPage;
