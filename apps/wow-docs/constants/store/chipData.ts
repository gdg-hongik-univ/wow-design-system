import type { Item } from "@components/ImageCards";

export const multiSelectChipItem: Item[] = [
  {
    main: "Multi-Select",
    sub: "가로, 세로 간격 모두 동일하게 통일, 칩 갯수에 따라 적절하게 레이아웃 활용",
    imageAlt: "다중 선택이 가능한 여러 개의 Chip 컴포넌트",
    imageSrc: "/component/chip/multi_select_chip.svg",
    imageWidth: 907,
    imageHeight: 256,
  },
];

export const filterChipItems: Item[] = [
  {
    main: "Filter",
    sub: "Group + Selection 컴포넌트를 결합하여 필터 기능 제작",
    imageAlt:
      "Filter 방식으로 동작하는 Chip 컴포넌트의 배치 사용 방법에 대한 이미지",
    imageSrc: "/component/chip/filter_chip.svg",
    imageWidth: 907,
    imageHeight: 179,
  },
  {
    main: "",
    sub: "그룹을 펼쳤을 때 드롭박스 사용 가능, 칩의 너비에 맞추기",
    imageAlt: "combination-2",
    imageSrc: "/component/chip/dropdown_chip.svg",
    imageWidth: 907,
    imageHeight: 230,
  },
];
