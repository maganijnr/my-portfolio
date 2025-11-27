import { ExperienceType } from "@/types";
import React from "react";

export default function WorkPlace({
  data,
  isLast,
}: {
  data: ExperienceType;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-[#ebebeb] shrink-0 mt-1.5" />
        {!isLast && <div className="w-0.5 bg-[#ebebeb] flex-1 min-h-[20px]" />}
      </div>
      <div className="pb-10">
        <h3 className="font-semibold text-[#272727]">{data.position}</h3>
        <p className="text-sm mb-2">
          {data.name} ({data.duration})
        </p>
        {data.description && (
          <p className="text-sm font-normal pl-4">{data.description}</p>
        )}
        {data.sub_projects?.map((item, idx) => (
          <div key={idx} className="pl-4 mt-2">
            <p className="font-semibold text-sm">
              {idx + 1}. {item.name}
            </p>
            <p className="pl-2 text-sm font-normal">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
