// Simple content API for She's An Asset CMS
const content = {
  pages: {
    home: {
      title: "She's An Asset - Leadership & Empowerment Training",
      description: "Empowering women to lead with confidence, boundaries, and real strength. Women's safety workshops, corporate training, and leadership development.",
      hero_headline: "You don't need to feel scared. You need to feel ready.",
      hero_subhead: "She's An Asset helps women build real-world safety skills and body-based confidence—so you move through the world with presence, power, and peace of mind."
    }
  },
  events: {
    "hard-target-fundamentals": {
      title: "She's An Asset-Hard Target Fundamentals: Awareness, Resiliency & Firearms",
      description: "For women seeking a welcoming and supportive space to learn about firearms, self-protection, and resiliency with confidence.",
      date: "2024-09-28T09:00:00.000Z",
      location: "Scarborough Fish & Game Association — 21 Fish and Game Lane, Scarborough, ME 04074",
      duration: "7 hours • Doors at 8:45 AM",
      price: "Check Eventbrite for pricing",
      eventbrite_link: "https://www.eventbrite.com/e/shes-an-asset-hard-target-fundamentals-awareness-resiliency-firearms-tickets-1584233808969?aff=oddtdtcreator"
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = content;
} else {
  window.content = content;
}
