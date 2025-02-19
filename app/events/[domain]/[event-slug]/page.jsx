"use client";

// import { events } from "@/data/events";
import { useParams } from "next/navigation";
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import { events } from "@/constants";

// Helper function to convert title to slug
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim(); // Remove whitespace from ends
};

export default function EventDetailsPage() {
  const params = useParams();
  const { domain, "event-slug": eventSlug } = params;
  console.log(domain, eventSlug);
  // Find the event by checking the slugified title
  const event = Object.entries(events[domain] || {}).reduce(
    (found, [dateKey, eventData]) => {
      const eventSlugTitle = createSlug(eventData.title);
      return eventSlugTitle === eventSlug ? eventData : found;
    },
    null
  );

  if (!event) {
    return <div>Event not found</div>;
  }

  // Format date for display
  const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split("-");
    return `${day} ${new Date(`${month} 1, 2000`).toLocaleString("default", { month: "short" })} ${year}`;
  };

  return (
    <>
      <PageHeading
        title={event.title}
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText={`EVENTS / ${domain.toUpperCase()}`}
      />

      <Spacing lg="150" md="80" />

      <Div className="container">
        <Image
          src={event.src}
          alt={event.title}
          width={1200}
          height={600}
          className="cs-radius_15 w-100 "
        />

        <Spacing lg="90" md="40" />

        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title={event.title}
              subtitle={domain.charAt(0).toUpperCase() + domain.slice(1)}
            >
              <Spacing lg="40" md="20" />
              <p>{event.description}</p>
            </SectionHeading>
          </Div>

          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg="60" md="40" />
            <h2 className="cs-font_30 cs-font_26_sm cs-m0">Event Info -</h2>
            <Spacing lg="50" md="30" />

            <Div className="row">
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Date:
                </h3>
                <p className="cs-m0">{formatDate(event.date)}</p>
                <Spacing lg="30" md="30" />
              </Div>

              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Time:
                </h3>
                <p className="cs-m0">{`${event.fromTime} - ${event.toTime}`}</p>
                <Spacing lg="30" md="30" />
              </Div>

              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Venue:
                </h3>
                <p className="cs-m0">{event.venue}</p>
                <Spacing lg="30" md="30" />
              </Div>

              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Duration:
                </h3>
                <p className="cs-m0">{`${event.duration} hours`}</p>
                <Spacing lg="30" md="30" />
              </Div>

              <Div className="col-12">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Instructors:
                </h3>
                {event.instructors.map((instructor, index) => (
                  <p key={index} className="cs-m0">
                    {instructor.name} - {instructor.designation}
                  </p>
                ))}
                <Spacing lg="30" md="30" />
              </Div>

              <Div className="col-12">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Registration Deadline:
                </h3>
                <p className="cs-m0">
                  {formatDate(event.registrationDeadline)}
                </p>
                <Spacing lg="30" md="30" />
                <Button
                  btnLink={event.registrationLink}
                  btnText="Register Now"
                  variant="cs-type1"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="145" md="80" />

      {/* <Cta
        title="Join us for an amazing event!"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      /> */}
    </>
  );
}
