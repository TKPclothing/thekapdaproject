type NavLinksProps = {
  title: string;
  pageLink: string;
  classTitle: string;
  onClick?: (selectedCategory: string) => void;
  target?: string;
};

export default function NavLinks({
  title,
  pageLink,
  classTitle,
  onClick,
  target,
}: NavLinksProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(title); // Pass the selected category (title) to the onClick event handler
    }
  };

  return (
    <li>
      <a
        href={pageLink}
        className={classTitle}
        onClick={handleClick}
        target={target}
      >
        {title}
      </a>
    </li>
  );
}
