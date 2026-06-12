export const crmReveal = "crm-vt";
export const crmRevealHeading = "crm-vt crm-vt-heading";
export const crmRevealSoft = "crm-vt crm-vt-soft";
export const crmRevealScale = "crm-vt crm-vt-scale";
export const crmRevealPop = "crm-vt crm-vt-pop";
export const crmSlideLeft = "crm-vt crm-vt-left";
export const crmSlideRight = "crm-vt crm-vt-right";
export const crmLineGrowX = "crm-vt-line-x";
export const crmLineGrowY = "crm-vt-line-y";
export const crmSvgDraw = "crm-vt-svg-draw";

export function crmClass(
  ...classes: Array<string | false | null | undefined>
) {
  return classes.filter(Boolean).join(" ");
}

export function crmStagger(index: number) {
  const safeIndex = Math.min(Math.max(index + 1, 1), 12);
  return `crm-vt-stagger-${safeIndex}`;
}

export function crmRevealCard(index = 0) {
  return crmClass("crm-vt crm-vt-card", crmStagger(index));
}

export function crmRevealScaleCard(index = 0) {
  return crmClass(crmRevealScale, crmStagger(index));
}
