import type { ReactElement, ReactNode } from "react";

// blocks
import { beforeAfterCompare } from "@/app/demo/[name]/blocks/before-after-compare";
import { calloutAlert } from "@/app/demo/[name]/blocks/callout-alert";
import { chartNarrative } from "@/app/demo/[name]/blocks/chart-narrative";
import { credits } from "@/app/demo/[name]/blocks/credits";
import { dataSourcesDisclaimer } from "@/app/demo/[name]/blocks/data-sources-disclaimer";
import { downloadCenter } from "@/app/demo/[name]/blocks/download-center";
import { faq } from "@/app/demo/[name]/blocks/faq";
import { footerOnu } from "@/app/demo/[name]/blocks/footer-onu";
import { hero as heroBlock } from "@/app/demo/[name]/blocks/hero";
import { impactStats } from "@/app/demo/[name]/blocks/impact-stats";
import { keyFindings } from "@/app/demo/[name]/blocks/key-findings";
import { mapBlock } from "@/app/demo/[name]/blocks/map-block";
import { methodology } from "@/app/demo/[name]/blocks/methodology";
import { recommendations } from "@/app/demo/[name]/blocks/recommendations";
import { regionBreakdown } from "@/app/demo/[name]/blocks/region-breakdown";
import { sectionTabs } from "@/app/demo/[name]/blocks/section-tabs";
import { situationOverview } from "@/app/demo/[name]/blocks/situation-overview";
import { stickyToc } from "@/app/demo/[name]/blocks/sticky-toc";
import { timeline } from "@/app/demo/[name]/blocks/timeline";
import { damageHero } from "@/app/demo/[name]/blocks/damage-hero";
import { damageBottomNav } from "@/app/demo/[name]/blocks/damage-bottom-nav";
import { damageBaseline } from "@/app/demo/[name]/blocks/damage-baseline";
import { damageMonitoring } from "@/app/demo/[name]/blocks/damage-monitoring";
import { damageDashboard } from "@/app/demo/[name]/blocks/damage-dashboard";

// components
import { hero } from "@/app/demo/[name]/components/hero";

// ui
import { accordion } from "@/app/demo/[name]/ui/accordion";
import { alert } from "@/app/demo/[name]/ui/alert";
import { alertDialog } from "@/app/demo/[name]/ui/alert-dialog";
import { aspectRatio } from "@/app/demo/[name]/ui/aspect-ratio";
import { avatar } from "@/app/demo/[name]/ui/avatar";
import { badge } from "@/app/demo/[name]/ui/badge";
import { breadcrumb } from "@/app/demo/[name]/ui/breadcrumb";
import { buttonGroup } from "@/app/demo/[name]/ui/button-group";
import { button } from "@/app/demo/[name]/ui/button";
import { calendar } from "@/app/demo/[name]/ui/calendar";
import { carousel } from "@/app/demo/[name]/ui/carousel";
import { card } from "@/app/demo/[name]/ui/card";
import { chart } from "@/app/demo/[name]/ui/chart";
import { checkbox } from "@/app/demo/[name]/ui/checkbox";
import { code } from "@/app/demo/[name]/ui/code";
import { collapsible } from "@/app/demo/[name]/ui/collapsible";
import { command } from "@/app/demo/[name]/ui/command";
import { contextMenu } from "@/app/demo/[name]/ui/context-menu";
import { dialog } from "@/app/demo/[name]/ui/dialog";
import { divider } from "@/app/demo/[name]/ui/divider";
import { drawer } from "@/app/demo/[name]/ui/drawer";
import { dropdownMenu } from "@/app/demo/[name]/ui/dropdown-menu";
import { empty } from "@/app/demo/[name]/ui/empty";
import { field } from "@/app/demo/[name]/ui/field";
import { form } from "@/app/demo/[name]/ui/form";
import { heading } from "@/app/demo/[name]/ui/heading";
import { hoverCard } from "@/app/demo/[name]/ui/hover-card";
import { image } from "@/app/demo/[name]/ui/image";
import { inputGroup } from "@/app/demo/[name]/ui/input-group";
import { inputOtp } from "@/app/demo/[name]/ui/input-otp";
import { input } from "@/app/demo/[name]/ui/input";
import { item } from "@/app/demo/[name]/ui/item";
import { kbd } from "@/app/demo/[name]/ui/kbd";
import { label } from "@/app/demo/[name]/ui/label";
import { link } from "@/app/demo/[name]/ui/link";
import { list } from "@/app/demo/[name]/ui/list";
import { menubar } from "@/app/demo/[name]/ui/menubar";
import { navigationMenu } from "@/app/demo/[name]/ui/navigation-menu";
import { pagination } from "@/app/demo/[name]/ui/pagination";
import { popover } from "@/app/demo/[name]/ui/popover";
import { progress } from "@/app/demo/[name]/ui/progress";
import { radioGroup } from "@/app/demo/[name]/ui/radio-group";
import { resizable } from "@/app/demo/[name]/ui/resizable";
import { scrollArea } from "@/app/demo/[name]/ui/scroll-area";
import { section } from "@/app/demo/[name]/ui/section";
import { select } from "@/app/demo/[name]/ui/select";
import { separator } from "@/app/demo/[name]/ui/separator";
import { sheet } from "@/app/demo/[name]/ui/sheet";
import { sidebar } from "@/app/demo/[name]/ui/sidebar";
import { skeleton } from "@/app/demo/[name]/ui/skeleton";
import { slider } from "@/app/demo/[name]/ui/slider";
import { sonner } from "@/app/demo/[name]/ui/sonner";
import { spinner } from "@/app/demo/[name]/ui/spinner";
import { switchComponent } from "@/app/demo/[name]/ui/switch";
import { table } from "@/app/demo/[name]/ui/table";
import { tabs } from "@/app/demo/[name]/ui/tabs";
import { text } from "@/app/demo/[name]/ui/text";
import { textarea } from "@/app/demo/[name]/ui/textarea";
import { toggle } from "@/app/demo/[name]/ui/toggle";
import { toggleGroup } from "@/app/demo/[name]/ui/toggle-group";
import { tooltip } from "@/app/demo/[name]/ui/tooltip";
import { video } from "@/app/demo/[name]/ui/video";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  "onu-before-after-compare": beforeAfterCompare,
  "onu-callout-alert": calloutAlert,
  "onu-chart-narrative": chartNarrative,
  "onu-credits": credits,
  "onu-data-sources-disclaimer": dataSourcesDisclaimer,
  "onu-download-center": downloadCenter,
  "onu-faq": faq,
  "onu-footer": footerOnu,
  "onu-hero": heroBlock,
  "onu-impact-stats": impactStats,
  "onu-key-findings": keyFindings,
  "onu-map-block": mapBlock,
  "onu-methodology": methodology,
  "onu-recommendations": recommendations,
  "onu-region-breakdown": regionBreakdown,
  "onu-section-tabs": sectionTabs,
  "onu-situation-overview": situationOverview,
  "onu-sticky-toc": stickyToc,
  "onu-timeline": timeline,
  // Damage Assessment blocks are available via dedicated pages (see /demo/* routes)

  // components
  hero,

  // ui
  accordion,
  alert,
  "alert-dialog": alertDialog,
  "aspect-ratio": aspectRatio,
  avatar,
  badge,
  breadcrumb,
  "button-group": buttonGroup,
  button,
  calendar,
  carousel,
  card,
  chart,
  checkbox,
  code,
  collapsible,
  command,
  "context-menu": contextMenu,
  dialog,
  divider,
  drawer,
  "dropdown-menu": dropdownMenu,
  empty,
  field,
  form,
  heading,
  "hover-card": hoverCard,
  image,
  "input-group": inputGroup,
  "input-otp": inputOtp,
  input,
  item,
  kbd,
  label,
  link,
  list,
  menubar,
  "navigation-menu": navigationMenu,
  pagination,
  popover,
  progress,
  "radio-group": radioGroup,
  resizable,
  "scroll-area": scrollArea,
  section,
  select,
  separator,
  sheet,
  sidebar,
  skeleton,
  slider,
  sonner,
  spinner,
  switch: switchComponent,
  table,
  tabs,
  text,
  textarea,
  toggle,
  "toggle-group": toggleGroup,
  tooltip,
  video,
};
