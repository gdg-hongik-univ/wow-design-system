import { routePath } from "@constants/routePath";

export const foundationPageData = {
  title: "Foundation",
  description:
    "파운데이션은 가장 기초적인 디자인 요소로, 일관된 디자인을 위해 다음의 규칙에 맞게 사용합니다.",
  href: routePath.foundation.base,
};
export const componentPageData = {
  title: "Component",
  description:
    "컴포넌트는 기능을 수행할 수 있는 최소 단위로,일관된 UI와 효율적인 개발을 위해 사용합니다.",
  href: routePath.component.base,
};
export const foundationItems = [
  {
    title: "Color",
    description:
      "컬러는 사용자가 브랜드 아이덴티티와 기능을 인지하는 것을 돕는 시각적 요소입니다.",
    imageAlt: "foundation-color",
    imageSrc: "/foundation/foundation-color.png",
    href: routePath.foundation.color,
  },
  {
    title: "Typography",
    description:
      "타이포그래피는 가독성과 명료성에 영향을 주며, 화면 내 요소들 간 위계를 만듭니다.",
    imageAlt: "foundation-typography",
    imageSrc: "/foundation/foundation-typography.png",
    href: routePath.foundation.typography,
  },
  {
    title: "Grid",
    description:
      "그리드는 페이지의 일관성과 시각적 질서를 유지하기 위해 사용합니다.",
    imageAlt: "foundation-grid",
    imageSrc: "/foundation/foundation-grid.png",
    href: routePath.foundation.grid,
  },
  {
    title: "Icon",
    description:
      "아이콘은 간결한 표현을 통해 쉽고 빠르게 정보를 전달하는 것을 목표로 합니다.",
    imageAlt: "foundation-icon",
    imageSrc: "/foundation/foundation-icon.png",
    href: routePath.foundation.icon,
  },
  {
    title: "Spacing",
    description:
      "스페이싱은 일관된 간격으로 요소를 배치해 일관된 UI를 만드는 것을 목표로 합니다.",
    imageAlt: "foundation-spacing",
    imageSrc: "/foundation/foundation-spacing.png",
    href: routePath.foundation.spacing,
  },
  {
    title: "Graphic",
    description:
      "그래픽 이미지를 통해 와우 디자인 시스템의 브랜드 아이덴티티를 일관되게 전달합니다.",
    imageAlt: "foundation-graphic",
    imageSrc: "/foundation/foundation-graphic.png",
    href: routePath.foundation.graphic,
  },
];

export const componentItems = [
  {
    title: "Action Sheet",
    description:
      "사용자가 수행할 작업에 대한 정보와, 관련 기능을 선택할 수 있는 선택지를 제공하는 컴포넌트입니다.",
    imageAlt: "action-sheet",
    imageSrc: "/component/actionsheet.png",
    href: routePath.component.actionsheet,
  },
  {
    title: "Avatar",
    description: "유저의 프로필 사진을 표현하는 컴포넌트입니다.",
    imageAlt: "avatar",
    imageSrc: "/component/avatar.png",
    href: routePath.component.avatar,
  },
  {
    title: "Box",
    description: "내부 요소로 연관성 있는 정보들을 담는 컴포넌트입니다.",
    imageAlt: "box",
    imageSrc: "/component/box.png",
    href: routePath.component.box,
  },
  {
    title: "Button",
    description: "사용자가 설정한 동작을 수행하기 위해 누르는 컴포넌트입니다.",
    imageAlt: "button",
    imageSrc: "/component/button.png",
    href: routePath.component.button,
  },
  {
    title: "Checkbox",
    description:
      "사용자가 선택할 수 있는 여러 개의 항목 중 한 개 이상의 값을 선택할 때 사용하는 컴포넌트입니다.",
    imageAlt: "checkbox",
    imageSrc: "/component/checkbox.png",
    href: routePath.component.checkbox,
  },
  {
    title: "Chip",
    description:
      "사용자가 정보를 선택할 때 또는 필터링할 때 사용하는 컴포넌트입니다.",
    imageAlt: "chip",
    imageSrc: "/component/chip.png",
    href: routePath.component.chip,
  },
  {
    title: "Divider",
    description: "UI 요소 간의 구간을 나누는 컴포넌트입니다.",
    imageAlt: "divider",
    imageSrc: "/component/divider.png",
    href: routePath.component.divider,
  },
  {
    title: "Dropdown",
    description:
      "사용자가 선택할 수 있는 여러 항목 목록을 제공하는 컴포넌트입니다.",
    imageAlt: "dropdown",
    imageSrc: "/component/dropdown.png",
    href: routePath.component.dropdown,
  },
  {
    title: "Header",
    description: "화면의 최상단 영역에 대한 컴포넌트입니다.",
    imageAlt: "header",
    imageSrc: "/component/header.png",
    href: routePath.component.header,
  },
  {
    title: "Radio Button",
    description:
      "사용자가 선택할 수 있는 항목 중 하나만 선택할 수 있는 컴포넌트입니다.",
    imageAlt: "radio-button",
    imageSrc: "/component/radiobutton.png",
    href: routePath.component.radiobutton,
  },
  {
    title: "Search Bar",
    description:
      "원하는 정보를 검색할 때, 키워드를 입력할 때 사용하는 컴포넌트입니다.",
    imageAlt: "search-bar",
    imageSrc: "/component/searchbar.png",
    href: routePath.component.searchBar,
  },
  {
    title: "Switch",
    description: "사용자가 선택 옵션을 켜고 끌 수 있는 컴포넌트입니다.",
    imageAlt: "switch",
    imageSrc: "/component/switch.png",
    href: routePath.component.switch,
  },
  {
    title: "Tab Bar",
    description: "버튼을 눌러 섹션을 전환할 수 있는 컴포넌트입니다.",
    imageAlt: "tabBar",
    imageSrc: "/component/tabbar.png",
    href: routePath.component.tabBar,
  },
  {
    title: "Table",
    description:
      "데이터를 표 형식으로 표현하고 싶을 때 사용하는 컴포넌트입니다.",
    imageAlt: "table",
    imageSrc: "/component/table.png",
    href: routePath.component.table,
  },
  {
    title: "Tag",
    description: "콘텐츠를 분류할 때 사용하는 컴포넌트입니다.",
    imageAlt: "tag",
    imageSrc: "/component/tag.png",
    href: routePath.component.tag,
  },
  {
    title: "Toast",
    description:
      "사용자가 요청한 작업의 결과에 대해 빠르게 피드백을 주는 컴포넌트입니다.",
    imageAlt: "toast",
    imageSrc: "/component/toast.png",
    href: routePath.component.toast,
  },
  {
    title: "Pagination",
    description:
      "많은 콘텐츠를 여러 화면에 나누고 번호를 매겨 여러 페이지로 이동 가능하게 하는 컴포넌트입니다.",
    imageAlt: "pagination",
    imageSrc: "/component/pagination.png",
    href: routePath.component.pagination,
  },
  {
    title: "Picker",
    description: "사용자가 시간 날짜를 선택할 때 사용하는 컴포넌트입니다.",
    imageAlt: "pagination",
    imageSrc: "/component/picker.png",
    href: routePath.component.picker,
  },
  {
    title: "Stepper",
    description:
      "사용자에게 작업이 어느 정도 진행되었는지 보여줄 때 사용하는 컴포넌트입니다.",
    imageAlt: "stepper",
    imageSrc: "/component/stepper.png",
    href: routePath.component.stepper,
  },
];
