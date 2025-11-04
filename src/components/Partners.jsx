import './Partners.css';

const Partners = () => {
  const partnerCategories = [
    {
      title: "E-Commerce Integration",
      icon: "store",
      description: "Local platforms for integration and data access",
      partners: [
        { name: "Jiji", logo: "shopping_bag" },
        { name: "Kikuubo Online", logo: "local_mall" },
        { name: "Afriven", logo: "storefront" }
      ]
    },
    {
      title: "Product Data Providers",
      icon: "inventory_2",
      description: "Manufacturers and vendors providing product datasets",
      partners: [
        { name: "Product Manufacturers", logo: "precision_manufacturing" },
        { name: "Verified Vendors", logo: "verified" },
        { name: "Data Validation Partners", logo: "fact_check" }
      ]
    },
    {
      title: "Marketing & Advertisement",
      icon: "campaign",
      description: "Digital marketing and brand activation partners",
      partners: [
        { name: "Blu Flamingo", logo: "palette" },
        { name: "Kawempe Media", logo: "broadcast_on_home" }
      ]
    },
    {
      title: "Logistics & Delivery",
      icon: "local_shipping",
      description: "Last mile delivery services",
      partners: [
        { name: "Faras Delivery", logo: "delivery_dining" }
      ]
    },
    {
      title: "Cloud Infrastructure",
      icon: "cloud",
      description: "Hosting and storage solutions",
      partners: [
        { name: "Amazon Web Services (AWS)", logo: "cloud_upload" }
      ]
    },
    {
      title: "Payment & Fintech",
      icon: "payment",
      description: "Secure payment processing partners",
      partners: [
        { name: "Flutterwave", logo: "credit_card" }
      ]
    },
    {
      title: "Research & Innovation",
      icon: "science",
      description: "Research and prototyping collaborators",
      partners: [
        { name: "MIIC", logo: "biotech" },
        { name: "Mak UniPod", logo: "school" }
      ]
    }
  ];

  return (
    <section className="partners" id="partners">
      <div className="partners-container">
        <div className="partners-header">
          <h2 className="section-title">Our Key Partners</h2>
          <p className="section-description">
            Building the future of AI-powered shopping through strategic partnerships
          </p>
        </div>

        <div className="partners-grid">
          {partnerCategories.map((category, index) => (
            <div key={index} className="partner-category">
              <div className="category-header">
                <span className="material-icons category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <p className="category-description">{category.description}</p>
              
              <div className="partners-list">
                {category.partners.map((partner, pIndex) => (
                  <div key={pIndex} className="partner-item">
                    <span className="material-icons partner-logo">{partner.logo}</span>
                    <span className="partner-name">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Partnership Questions */}
        <div className="partnership-info">
          <h3 className="info-title">Strategic Partnership Framework</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="material-icons">groups</span>
              <div>
                <strong>Key Partners & Suppliers</strong>
                <p>Local and international partners providing essential services and resources</p>
              </div>
            </div>
            <div className="info-item">
              <span className="material-icons">extension</span>
              <div>
                <strong>Key Resources Acquired</strong>
                <p>Product data, cloud infrastructure, payment solutions, and delivery networks</p>
              </div>
            </div>
            <div className="info-item">
              <span className="material-icons">trending_up</span>
              <div>
                <strong>Partner Activities</strong>
                <p>Data integration, marketing activations, secure transactions, and research collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
