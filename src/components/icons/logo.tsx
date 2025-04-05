export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full [background:linear-gradient(to_right,#ff00ff,#00ffff)]`}
      >
        <span className="text-xl font-bold text-white">S/</span>
      </div>
      <span className="hidden text-xl font-bold text-white sm:inline-block">
        ServiciosPro
      </span>
    </div>
  );
}
