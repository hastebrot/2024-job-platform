import { createContext, useContext, useEffect, useRef, type CSSProperties } from "react";
import { classNames } from "../helpers/clsx";

export type StoryLayoutProps = {
  children?: React.ReactNode;
};

export const StoryLayout = ({ children }: StoryLayoutProps) => {
  return (
    <div
      className={classNames(
        "[text-rendering:optimizelegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]",
        "min-h-[100vh] supports-[-webkit-touch-callout:none]:min-h-[-webkit-fill-available]",
        "scale-[1] origin-top"
      )}
    >
      <main className="inline-grid grid-flow-row">{children}</main>
    </div>
  );
};

export type StoryLabelProps = {
  label?: React.ReactNode;
  width?: number;
  nowrapText?: boolean;
};

export const StoryLabel = (props: StoryLabelProps) => {
  return (
    <div
      style={
        {
          "--label-width": props.width,
        } as CSSProperties
      }
      className={classNames(
        "font-mono text-[10px] leading-normal",
        "pb-[5px] w-[calc(var(--label-width)*10px+1px)]",
        !props.nowrapText ? "[word-spacing:999px] break-keep" : "whitespace-nowrap"
      )}
    >
      {props.label}
    </div>
  );
};

export type StoryGridProps = {
  children?: React.ReactNode;
  label?: React.ReactNode;
  width?: number;
  height?: number | "auto";
};

export const StoryGrid = ({ children, ...props }: StoryGridProps) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <StoryLabel label={props.label} nowrapText />
      <div
        style={
          {
            "--grid-width": props.width ?? 10,
            "--grid-height": props.height ?? 10,
          } as React.CSSProperties
        }
        className={classNames(
          "w-[calc(var(--grid-width)*10px+1px)] h-[calc(var(--grid-height)*10px+1px)]",
          "[background-image:linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]",
          "[background-size:10px_10px]"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const StoryStateContext = createContext<StoryStateProps>({});

export const useStoryStateContext = (): StoryStateProps => {
  return useContext(StoryStateContext);
};

export type StoryStateProps = {
  children?: React.ReactNode;
  selector?: string;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  isFocusWithin?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
  isDropTarget?: boolean;
};

export const StoryState = ({ children, ...props }: StoryStateProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    props.selector = props.selector ?? ":scope > *";
    if (ref.current) {
      const nodes = ref.current.querySelectorAll(props.selector);
      for (const node of nodes) {
        if (props.isFocused) {
          node.setAttribute("data-focused", "true");
        }
        if (props.isFocusVisible) {
          node.setAttribute("data-focus-visible", "true");
        }
        if (props.isFocusWithin) {
          node.setAttribute("data-focus-within", "true");
        }
        if (props.isHovered) {
          node.setAttribute("data-hovered", "true");
        }
        if (props.isPressed) {
          node.setAttribute("data-pressed", "true");
        }
        if (props.isDropTarget) {
          node.setAttribute("data-drop-target", "true");
        }
      }
    }
  }, [ref.current]);

  return (
    <StoryStateContext.Provider value={{ ...props }}>
      <div ref={ref} className="[display:inherit]">
        {children}
      </div>
    </StoryStateContext.Provider>
  );
};
