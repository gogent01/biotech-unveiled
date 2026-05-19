import { type ReactNode, useRef, useState } from "preact/compat";
import chevronDownIcon from "../../assets/icons/chevron-down.svg";
import chevronUpIcon from "../../assets/icons/chevron-up.svg";

interface Props {
  openingTitle: string;
  closingTitle?: string;
  className?: string;
  children: ReactNode;
}

export default function Accordion(props: Props) {
  const { openingTitle, closingTitle, children, className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={className}>
      {!isOpen && (
        <button
          className="hover:text-primary -m-1.5 flex cursor-pointer items-center gap-2 p-1.5 transition-colors lg:gap-2.5 lg:text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {openingTitle}
          <img src={chevronDownIcon.src} alt="" class="h-6 lg:h-8.5" />
        </button>
      )}

      <div ref={contentRef} className={isOpen ? "visible" : "invisible h-0"}>
        {children}
        <button
          className="hover:text-primary -m-1.5 mt-3 flex cursor-pointer items-center gap-2 p-1.5 lg:mt-6 lg:gap-2.5 lg:text-2xl"
          onClick={() => {
            const isMobile = /Mobi/i.test(navigator.userAgent);
            if (!isMobile) {
              const accordionHeight = contentRef.current?.scrollHeight ?? 0;
              const body = document.querySelector("body")!;
              body.scrollBy(0, -(accordionHeight - 40));
            }

            setIsOpen(!isOpen);
          }}
        >
          {closingTitle ?? openingTitle}
          <img src={chevronUpIcon.src} alt="" class="h-6 lg:h-8.5" />
        </button>
      </div>
    </div>
  );
}
