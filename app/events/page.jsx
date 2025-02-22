"use client";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Portfolio from "@/app/ui/Portfolio";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { events } from "@/constants";
import { useRouter } from "next/navigation";

const flattenEvents = Object.values(events)
  .flatMap((domainEvents) =>
    Object.values(domainEvents).map((event) => {
      const [day, month, year] = event.date.split("-");
      const eventDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();

      let status = "upcoming";
      if (eventDate < today) status = "past";
      else if (eventDate.toDateString() === today.toDateString())
        status = "current";
      console.log(
        "DATESTRING",
        eventDate.toDateString(),
        today.toDateString(),
        eventDate,
        today,
        status
      );
      return { ...event, status };
    })
  )
  .sort((a, b) => new Date(a.date) - new Date(b.date));

const categoryMenu = Object.keys(events).map((domain) => ({
  title: domain.charAt(0).toUpperCase() + domain.slice(1),
  category: domain,
}));

console.log("Processed Events:", flattenEvents);

export default function EventsPage() {
  const [itemShow, setItemShow] = useState(7);
  const router = useRouter();

  return (
    <>
      <PageHeading
        title="Events"
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Events"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="All Events" subtitle="Our Events" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className="active">
                <span onClick={() => router.push("/events")}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li key={index}>
                  <span onClick={() => router.push(`/events/${item.category}`)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {flattenEvents.slice(0, itemShow).map((event, index) => (
            <Div className="col-lg-4" key={index}>
              <Portfolio
                title={event.title}
                subtitle={`${event.date} - ${event.status}`}
                href={event.href}
                src={event.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {flattenEvents.length <= itemShow ? (
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
        </Div>
      </Div>
      <Spacing lg="70" md="50" />
    </>
  );
}
