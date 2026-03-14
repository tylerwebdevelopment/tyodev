import { IconType } from "react-icons";

export interface IconLoadErrorProps{
  // FallBack can be either text or another icon
  returnText?: string | null | undefined;
  returnIcon?: IconType | null | undefined;
}
export const handleIconLoadError = ({returnText, returnIcon: Icon} : IconLoadErrorProps) => {
  if(!returnText || !Icon) return;
  if(returnText && !Icon) return returnText;
  if(!returnText && Icon) return Icon;
  if(returnText && Icon) return `${Icon} ${returnText}`;
}