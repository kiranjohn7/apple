import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const columns = [
  {
    title: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    title: "Apple Wallet",
    links: ["Wallet", "Apple Pay"],
  },
  {
    title: "Account",
    links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
  },
  {
    title: "Entertainment",
    links: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple News+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  {
    title: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Group Reservations",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    title: "For Business",
    links: ["Apple and Business", "Shop for Business", "Business Financing"],
  },
  {
    title: "For Education",
    links: [
      "Apple and Education",
      "Shop for K–12",
      "Shop for University",
      "Education Financing",
    ],
  },
  {
    title: "For Healthcare",
    links: [
      "Apple in Healthcare",
      "Mac in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone and iPad",
    ],
  },
  {
    title: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Privacy",
      "Supply Chain Innovation",
    ],
  },
  {
    title: "About Apple",
    links: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  },
];

export default function Footer() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => {
    setOpenIdx((prev) => (prev === i ? null : i));
  };

  return (
    <footer className="bg-[#f2f2f7] text-gray-700">
      <div className="max-w-7xl mx-auto text-start px-6 py-8 text-xs text-gray-600 space-y-6 border-b border-gray-300">
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Qualified Purchasers can receive Promotion Savings when they
            purchase an Eligible Product with their choice of a Promotion
            Product at a Qualifying Location. Only one Promotion Product per
            Eligible Product per Qualified Purchaser. Offer subject to
            availability. Subject to terms and conditions herein.
          </li>
          <li>
            The Hearing Protection feature works with AirPods Pro 2 with the
            latest firmware when paired with a compatible iPhone, iPad or Mac
            with iOS 18, iPadOS 18 or macOS Sequoia and later. The feature is
            not available in all regions or all languages. See{" "}
            <a
              href="https://support.apple.com/120850"
              className="underline hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              support.apple.com/120850
            </a>{" "}
            for total attenuation and more information. The Hearing Protection
            feature is not suitable for protection against extremely loud
            impulse sounds, such as gunfire, fireworks or jackhammers, or
            against sustained sounds louder than 110 dBA. View complete list.
          </li>
          <li>
            Available in two models: AirPods 4 and AirPods 4 with Active Noise
            Cancellation.
          </li>
          <li>
            Trade-in values will vary based on the condition, year and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least the age of majority to be
            eligible to trade in for credit or for an Apple Gift Card.
            Trade-in value will be applied toward qualifying new device purchase
            or added to an Apple Gift Card. Actual value awarded is based on
            receipt of a qualifying device matching the description provided
            when estimate was made. Sales tax will be assessed on full value of
            a new device purchase. In-store trade-in requires presentation of a
            valid photo ID (local law may require saving this information).
            Offer may not be available in all stores and may vary between in-store
            and online trade-in. Some stores may have additional requirements.
            Apple or its trade-in partners reserve the right to refuse, cancel or
            limit quantity of any trade-in transaction for any reason. More
            details are available from Apple’s trade-in partner for trade-in and
            recycling of eligible devices. Restrictions and limitations may
            apply.
          </li>
        </ol>

        <div className="border-t border-gray-200 pt-4 space-y-2">
          <p>
            Apple Intelligence is available in beta on all iPhone 16 models,
            iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and
            Mac models with M1 and later, with Siri and device language set to
            the same supported language, as part of an iOS 18, iPadOS 18 and
            macOS Sequoia software update. Supported languages include English,
            French, German, Italian, Portuguese (Brazil), Spanish, Japanese,
            Korean and Chinese (Simplified). More languages are coming over the
            course of the year, including Vietnamese. Some features may not be
            available in all regions or languages.
          </p>
          <p>A subscription is required for Apple TV+.</p>
          <p>
            Features are subject to change. Some features, applications and
            services may not be available in all regions or all languages.
          </p>
        </div>
      </div>

      <div className="hidden lg:block max-w-7xl mx-auto px-6 py-10 ">
        <div className="grid text-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-semibold mb-2">{col.title}</h3>
              <ul className="space-y-1 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="block hover:underline"
                      aria-label={link}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden max-w-7xl mx-auto px-6 py-6">
        <div className="space-y-4">
          {columns.map((col, i) => (
            <div key={col.title} className="border-b border-gray-300">
              <button
                aria-expanded={openIdx === i}
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-4 text-left font-semibold text-lg"
              >
                <span>{col.title}</span>
                <FiChevronDown
                  className={`transition-transform ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                  size={20}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 text-sm ${
                  openIdx === i ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="space-y-2 pb-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="block hover:underline"
                        aria-label={link}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 text-sm ">
        <p className="flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-2">
          <span className="font-medium">More ways to shop:</span>
          <span className="underline hover:text-gray-900 cursor-pointer">
            Find an Apple Store
          </span>
          <span>or</span>
          <span className="underline hover:text-gray-900 cursor-pointer">
            other retailer
          </span>
          <span>near you. Or call</span>
          <span className="underline hover:text-gray-900 cursor-pointer">
            1-800-MY-APPLE (1-800-692-7753)
          </span>
          <span>.</span>
        </p>
      </div>

      <div className="border-t border-gray-300 mt-5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between text-xs gap-4">
          <div className="flex flex-wrap gap-2 items-center">
            <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:underline">
              Use of Cookies
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:underline">
              Sales and Refunds
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:underline">
              Legal
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:underline">
              Site Map
            </a>
          </div>
          <div className="flex flex-wrap gap-2 items-center justify-start lg:justify-end text-gray-600">
            <a href="#" className="hover:underline">
              Canada (English)
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:underline">
              Français
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}