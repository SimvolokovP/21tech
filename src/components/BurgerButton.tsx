type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <button
      className="md:hidden p-2 rounded-lg focus:outline-none"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div className="w-6 flex flex-col items-end gap-1.5">
        <span
          className={`block h-0.5 bg-black transition-all duration-300 ${
            isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
          }`}
        ></span>
        <span
          className={`block h-0.5 bg-black transition-all duration-300 ${
            isOpen ? "opacity-0" : "w-5"
          }`}
        ></span>
        <span
          className={`block h-0.5 bg-black transition-all duration-300 ${
            isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"
          }`}
        ></span>
      </div>
    </button>
  );
}
