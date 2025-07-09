import { caseFilterType } from "@/sections/AllCases";

export interface IFilterCaseItem {
  value: caseFilterType;
  label: string;
}

interface FilterCasesTabsProps {
  filterList: IFilterCaseItem[];
  onFilterChange: (c: caseFilterType) => void;
  acviveTab: caseFilterType;
}

export function FilterCasesTabs({
  filterList,
  onFilterChange,
  acviveTab
}: FilterCasesTabsProps) {
  return (
    <div className="flex items-center gap-4 justify-center mb-6">
      {filterList.map((item) => (
        <button
          className={`${item.value === acviveTab ? "bg-black text-white hover:opacity-80" : "bg-white text-gray-900 hover:bg-gray-100"} inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg transition`}
          key={item.value}
          onClick={() => onFilterChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
