import Div from "../Div";

export default function VerticalLinks({ title, data, variant }) {
  return (
    <div
      className={`cs-hero_social_wrap cs-primary_font cs-primary_color ${
        variant ? variant : ""
      }`}
    >
      {title && <div className="cs-hero_social_title">{title}</div>}
      {data && (
        <ul className="cs-hero_social_links">
          {data.map((item, index) => (
            <li key={index}>
              <a target="_blank" href={item.links}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
