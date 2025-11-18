"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Crown, HelpCircle, MapPin, MessageSquare, Sparkles, Star, User, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Experience", id: "testimonials" },
            { name: "Events", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476680653-pyikpr6f.jpg"
          logoAlt="Hookah Club Logo"
          brandName="Hookah Club"
          button={{
            text: "Book Table",
            href: "contact",
            props: {}
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Hookah Experience 666"
          description="Immerse yourself in the finest hookah traditions with our premium selection of flavors, elegant atmosphere, and exceptional service. Where friends gather and memories are made."
          tag="Authentic Experience"
          tagIcon={Sparkles}
          buttons={[
            { text: "Reserve Table", href: "contact" },
            { text: "View Menu", href: "products" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476681691-lj0mxbpd.jpg"
          imageAlt="Luxury hookah lounge interior with ambient lighting"
          imagePosition="right"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Hookah Club, we celebrate the ancient art of hookah smoking in a modern, sophisticated environment. Our carefully curated selection of premium tobaccos, expertly maintained equipment, and warm hospitality create an unparalleled experience that brings people together across cultures and traditions."
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardTwo
          title="Premium Hookah Selection"
          description="Explore our carefully curated collection of premium hookahs and authentic flavors"
          tag="Featured Menu"
          tagIcon={Crown}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Traditional",
              name: "Classic Ottoman Hookah",
              price: "$45/session",
              rating: 5,
              reviewCount: "124",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476683709-in41wvo7.jpg",
              imageAlt: "Premium traditional hookah pipe"
            },
            {
              id: "2",
              brand: "Modern",
              name: "Crystal Glass Hookah",
              price: "$55/session",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476684665-ufthqt7c.jpg",
              imageAlt: "Modern glass hookah pipe"
            },
            {
              id: "3",
              brand: "Luxury",
              name: "Royal Persian Hookah",
              price: "$75/session",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476685940-j517jo42.jpg",
              imageAlt: "Ornate Persian hookah pipe"
            }
          ]}
          buttons={[
            { text: "Full Menu", href: "#menu" }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Hear from our valued customers about their exceptional experiences"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Ahmed Hassan",
              role: "Regular Customer",
              testimonial: "The atmosphere here is absolutely incredible. The hookah quality is top-notch and the service is always exceptional. This has become our go-to spot for relaxing evenings with friends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476694660-r66wd3sn.jpg",
              imageAlt: "Ahmed Hassan customer photo"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Event Organizer",
              testimonial: "I've hosted several private events here and the team always goes above and beyond. The ambiance is perfect for both intimate gatherings and larger celebrations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476697672-jvq35cao.jpg",
              imageAlt: "Sarah Williams customer photo"
            },
            {
              id: "3",
              name: "Omar Al-Rashid",
              role: "Hookah Enthusiast",
              testimonial: "As someone who appreciates authentic hookah culture, I can say this place truly understands the tradition. The tobacco selection is extensive and the preparation is always perfect.",
              icon: User
            },
            {
              id: "4",
              name: "Jennifer Chen",
              role: "First-time Visitor",
              testimonial: "I was new to hookah and the staff made me feel so welcome. They explained everything patiently and helped me choose the perfect flavor. Definitely coming back!",
              icon: Star
            }
          ]}
        />
      </div>
      
      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted Partners"
          description="We work with the finest tobacco and accessory brands from around the world"
          tag="Premium Brands"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476699078-x28jc0zl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476700519-88cpgke4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476701416-7p69qfdh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476704228-hhw9tpf5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476706471-if0xpxr2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476708307-7v40e0n5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476710042-3dsf5p86.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about visiting our hookah lounge"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do I need to make a reservation?",
              content: "While walk-ins are welcome, we recommend making a reservation especially during weekends and evenings to guarantee your preferred seating and avoid waiting times."
            },
            {
              id: "2",
              title: "What age do you need to be to visit?",
              content: "You must be 21 years or older to enter our lounge. We strictly verify age with valid government-issued photo identification at the door."
            },
            {
              id: "3",
              title: "How long does a hookah session last?",
              content: "A typical hookah session lasts 60-90 minutes, depending on the size and how many people are sharing. We'll replace coals as needed to maintain quality throughout your visit."
            },
            {
              id: "4",
              title: "Can I bring my own hookah tobacco?",
              content: "For health and safety reasons, we only allow tobacco purchased from our establishment. We offer over 50 premium flavors and can create custom blends upon request."
            },
            {
              id: "5",
              title: "Do you serve food and drinks?",
              content: "Yes! We offer a full menu of Middle Eastern appetizers, desserts, and a variety of beverages including traditional teas, coffee, and refreshing drinks."
            },
            {
              id: "6",
              title: "Is there a dress code?",
              content: "We maintain a smart casual dress code. No tank tops, flip-flops, or overly casual attire. We want to maintain an upscale, comfortable atmosphere for all guests."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Visit Us"
          title="Ready for an Amazing Experience?"
          description="Join us for an unforgettable hookah experience. Reserve your table today or sign up for exclusive offers and event notifications."
          tagIcon={MapPin}
          inputPlaceholder="Enter your email"
          buttonText="Get Exclusive Offers"
          termsText="By signing up, you agree to receive promotional emails and updates about special events and offers."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1763476680653-pyikpr6f.jpg"
          logoText="Hookah Club"
          copyrightText="© 2025 Hookah Club. All rights reserved."
          columns={[
            {
              title: "Experience",
              items: [
                { label: "Premium Hookah", href: "products" },
                { label: "Private Events", href: "events" },
                { label: "Group Bookings", href: "contact" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Hours & Location", href: "location" },
                { label: "Parking Info", href: "parking" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Events Calendar", href: "events" },
                { label: "Newsletter", href: "newsletter" },
                { label: "Reviews", href: "reviews" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "Policies", href: "policies" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/hookahclub",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/hookahclub",
              ariaLabel: "Like us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/hookahclub",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}