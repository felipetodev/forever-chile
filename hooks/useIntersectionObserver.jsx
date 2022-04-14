import { useRef, useEffect, useState } from "react";

function useIntersectionObserver({
  elementRef,
  threshold = 0.1,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = false,
}) {
  const observer = useRef(null);
  const [entry, setEntry] = useState();
  const isClient = typeof window !== "undefined";
  const hasIOSupport = isClient && !!window.IntersectionObserver;
  const noUpdate = entry?.isIntersecting && freezeOnceVisible;

  const IOOptions = { threshold, root, rootMargin };

  const updateEntry = ([entryValue]) => {
    setEntry(entryValue);
  };

  useEffect(() => {
    const node = elementRef?.current;

    if (!hasIOSupport || noUpdate || !node) {
      return;
    }

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(updateEntry, IOOptions);

    const { current: currentObserver } = observer;
    currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [elementRef, threshold, root, rootMargin, noUpdate]);

  return [!!entry?.isIntersecting, entry];
}

export default useIntersectionObserver;
