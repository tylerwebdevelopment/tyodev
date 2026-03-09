"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";
import React from "react";
import { IconType } from "react-icons";
import { motion } from "motion/react";

export interface BrandCircleProps {
  icon: IconType;
  brandColor?: string;
  tooltipContent: string;
}
const BrandCircle: React.FC<BrandCircleProps> = ({
  icon: Icon,
  brandColor = "#fff",
  tooltipContent,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger className="card-brand-icon">
        <Icon fill={`${brandColor}`} />
        <TooltipContent
          side="top"
          align="center"
          asChild
          className="bg-primary-500 animate-none! transition-none! text-text-main"
        >
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1.}}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {tooltipContent}
          </motion.div>
        </TooltipContent>
      </TooltipTrigger>
    </Tooltip>
  );
};

export default BrandCircle;
