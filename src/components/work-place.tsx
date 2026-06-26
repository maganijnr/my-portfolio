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
        {data.points && data.points.length > 0 && (
          <ul className="pl-4 mt-2 list-disc space-y-1 marker:text-[#272727]/40">
            {data.points.map((point, idx) => (
              <li key={idx} className="text-sm font-normal ml-4">
                {point}
              </li>
            ))}
          </ul>
        )}
        {data.sub_projects?.map((item, idx) => (
          <div key={idx} className="pl-4 mt-3">
            <p className="font-semibold text-sm">
              {idx + 1}. {item.name}
            </p>
            <p className="pl-2 text-sm font-normal">{item.description}</p>
            {item.points && item.points.length > 0 && (
              <ul className="pl-2 mt-1 list-disc space-y-1 marker:text-[#272727]/40">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-sm font-normal ml-4">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
