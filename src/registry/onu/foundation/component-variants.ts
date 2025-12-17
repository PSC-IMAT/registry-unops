/**
 * Component UI Layer - Base Interface for Variants
 *
 * This file exports the ComponentVariants base interface that all components
 * (primitives, patterns, sections) must implement for consistent variant support.
 *
 * Variant Categories:
 * - size: Spatial dimension (sm, md, lg, xl)
 * - tone: Semantic color/intention (primary, secondary, accent, warning, danger, success)
 * - variant: Visual style variant (solid, outline, ghost, minimal)
 * - layout: Structural layout (horizontal, vertical, inline, block)
 * - className: Additional Tailwind CSS classes for customization
 */

/**
 * Size variant options for spacing and component dimensions
 */
export type SizeVariant = "sm" | "md" | "lg" | "xl";

/**
 * Tone variant options for semantic color and intention
 */
export type ToneVariant = "primary" | "secondary" | "accent" | "warning" | "danger" | "success";

/**
 * Visual style variant options
 */
export type StyleVariant = "solid" | "outline" | "ghost" | "minimal";

/**
 * Layout variant options for structural arrangement
 */
export type LayoutVariant = "horizontal" | "vertical" | "inline" | "block";

/**
 * Base interface for component variants
 *
 * All components (primitives, patterns, sections) must implement this interface
 * to ensure consistent variant handling across the component library.
 *
 * @example
 * interface ButtonProps extends ComponentVariants {
 *   children: React.ReactNode;
 *   onClick?: () => void;
 * }
 *
 * @example
 * interface CardProps extends ComponentVariants {
 *   title: string;
 *   description?: string;
 * }
 */
export interface ComponentVariants {
  /**
   * Size of the component
   * @default "md"
   */
  size?: SizeVariant;

  /**
   * Semantic tone/color intention
   * @default "primary"
   */
  tone?: ToneVariant;

  /**
   * Visual style variant
   * @default "solid"
   */
  variant?: StyleVariant;

  /**
   * Layout direction/arrangement
   * @default "vertical"
   */
  layout?: LayoutVariant;

  /**
   * Additional Tailwind CSS classes for customization
   * @remarks This allows content packs to customize components without modifying component code
   */
  className?: string;
}

/**
 * Type helper to ensure strict variant values
 * Use this type to create union types for variant values
 *
 * @example
 * type ButtonSize = StrictVariant<ComponentVariants['size']>;
 */
export type StrictVariant<T> = Exclude<T, undefined>;

/**
 * Utility function to merge component variant classes with custom classes
 * Combines component's default classes with custom className prop
 *
 * @param defaultClasses - Classes from component logic
 * @param customClasses - Classes from props.className
 * @returns Combined class string
 *
 * @example
 * const classes = mergeVariantClasses('bg-blue-500 p-4', 'rounded-lg');
 * // Result: "bg-blue-500 p-4 rounded-lg"
 */
export function mergeVariantClasses(
  defaultClasses: string,
  customClasses?: string
): string {
  return [defaultClasses, customClasses].filter(Boolean).join(" ");
}

/**
 * Variant validation helper
 * Ensures variant values are within allowed options
 *
 * @param variant - Variant value to validate
 * @param allowedValues - Array of allowed values
 * @returns true if variant is valid
 *
 * @example
 * isValidVariant('md', ['sm', 'md', 'lg']) // true
 */
export function isValidVariant<T>(variant: unknown, allowedValues: readonly T[]): variant is T {
  return allowedValues.includes(variant as T);
}

/**
 * Default variant configuration
 * Use this as a reference for component implementations
 */
export const DEFAULT_VARIANTS = {
  size: "md" as const,
  tone: "primary" as const,
  variant: "solid" as const,
  layout: "vertical" as const,
  className: "" as const,
} as const;
