import { useState } from 'react';

interface PortraitAvatarProps {
  src: string;
  alt: string;
  caption: string;
}

export function PortraitAvatar({ src, alt, caption }: PortraitAvatarProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="flex flex-col h-full">
      <div className="relative flex-1 min-h-[260px] lg:min-h-[320px] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 p-6 text-center text-white">
            <span className="font-display text-5xl font-semibold tracking-tight text-slate-100">
              NM
            </span>
            <span className="mt-3 text-xs tracking-wider text-slate-300">
              {alt}
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-2.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}
