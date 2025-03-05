import Image from "next/image";

export default function SponsorsSection() {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "var(--background)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "8px", marginTop: "20px" }}>Our Sponsors</h2>
          <div style={{ height: "4px", width: "64px", backgroundColor: "#3b82f6", margin: "0 auto" }}></div>
          <p style={{ marginTop: "24px", color: "rgba(255, 255, 255, 75%)", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
            Proudly supported by these amazing organizations
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
          {/* Sponsors */}
          {[ 
            { title: "Gold Sponsor", image: "https://res.cloudinary.com/dnshzyk0z/image/upload/v1741164647/f42d4f155ff14cf59ff02f620ed26fe9_tew9um.webp", alt: "Hook2Events" },
            { title: "Silver Sponsor", image: "https://res.cloudinary.com/dnshzyk0z/image/upload/v1741164648/RG_ADIY_LOGO_PNG_SQUARE_nvxs9k.png", alt: "RG ADIY" },
            { title: "Silver Sponsor", image: "https://res.cloudinary.com/dnshzyk0z/image/upload/v1741164647/3d25fe46428d4bb497e9911e5a2d78e0_qc1d3f.webp", alt: "Hi TECHNOLOGY" },
            { title: "Bronze Sponsor", image: "https://res.cloudinary.com/dnshzyk0z/image/upload/v1741164646/5bdd2e6d65154d6eba7ea96e78292556_fd4jsu.webp", alt: "AFFINITY" }
          ].map((sponsor, index) => (
            <div key={index} style={{ backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", overflow: "hidden" }}>
              {/* <div style={{ backgroundColor: "#eff6ff", padding: "16px", borderBottom: "1px solid #e5e7eb" }}>
                <h3 style={{ textAlign: "center", fontSize: "14px", fontWeight: "500", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>{sponsor.title}</h3>
              </div> */}
              <div style={{ padding: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "relative", width: "100%", height: "112px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src={sponsor.image} alt={sponsor.alt} width={180} height={70} style={{ objectFit: "contain" }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div style={{ marginTop: "64px", textAlign: "center" }}>
          <a href="#contact" style={{ display: "inline-block", padding: "12px 24px", backgroundColor: "#2563eb", color: "#ffffff", fontWeight: "500", borderRadius: "6px", textDecoration: "none" }}>
            Become a Sponsor
          </a>
        </div> */}
      </div>
    </section>
  );
}