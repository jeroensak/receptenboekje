"use client";

import React from "react";
import { Switch } from "@headlessui/react";

export const WakeLock = () => {
  const [enabled, setEnabled] = React.useState(false);
  const [wakeLockSupported, setWakeLockSupported] = React.useState(true);

  React.useEffect(() => {
    setWakeLockSupported("wakeLock" in navigator);
  }, []);

  const wakeLock = React.useRef<any>(null);

  React.useEffect(() => {
    if (enabled) {
      // @ts-ignore
      navigator.wakeLock
        .request("screen")
        .then((wl: any) => (wakeLock.current = wl));

      return () => wakeLock.current.release();
    } else wakeLock.current?.release?.();
  }, [enabled]);

  // if (!wakeLockSupported) return null;

  return (
    <div className="flex items-center justify-between p-2 my-6 bg-gray-200 rounded-md">
      <div className="w-2/3">
        <b>Kookstand</b> - houdt het scherm aan tijdens het koken.
      </div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-green-500" : "bg-gray-400"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
};
