"use client";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Portfolio from "@/app/ui/Portfolio";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { events } from "@/constants";
import { useParams, useRouter } from "next/navigation";

export default function DomainEventsPage() {
  const [itemShow, setItemShow] = useState(6)
  const router = useRouter();
  const { domain } = useParams();

  // Get events for current domain and process them
  const domainEvents = events[domain] ? Object.values(events[domain]) : [];
  const processedEvents = domainEvents
    .map((event) => {
      const [day, month, year] = event.date.split("-");
      const eventDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();

      let status = "upcoming";
      if (eventDate < today) status = "past";
      else if (eventDate.toDateString() === today.toDateString())
        status = "current";

      return { ...event, status };
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const categoryMenu = Object.keys(events).map((domain) => ({
    title: domain.charAt(0).toUpperCase() + domain.slice(1),
    category: domain,
  }));

  return (
    <>
      <PageHeading
        title={`${domain.charAt(0).toUpperCase() + domain.slice(1)} Events`}
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Events"
      />
      <Spacing lg="145" md="80" />
      <div className="container">
        <div className="cs-portfolio_1_heading">
          <SectionHeading
            title={`${domain.charAt(0).toUpperCase() + domain.slice(1)} Events`}
            subtitle="Our Events"
          />
          <div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li>
                <span onClick={() => router.push("/events")}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  key={index}
                  className={item.category === domain ? "active" : ""}
                >
                  <span onClick={() => router.push(`/events/${item.category}`)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Spacing lg="90" md="45" />
        <div className="row">
          {processedEvents.slice(0, itemShow).map((event, index) => (
            <div className="col-lg-4" key={index}>
              <Portfolio
                title={event.title}
                subtitle={`${event.date} - ${event.status}`}
                href={event.href}
                src={event.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </div>
          ))}
        </div>

        <div className="text-center">
          {processedEvents.length <= itemShow ? (
            ""
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </div>
      </div>
      <Spacing lg="70" md="50" />
    </>
  );
}
