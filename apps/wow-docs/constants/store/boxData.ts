import type { Item } from "@components/ImageCards";

export const boxUsage: Item[] = [
  {
    main: "Usage",
    sub: "텍스트 설정 때문에 상하단 여백 다르게 설정, 내부 텍스트는 너비 Fill로 맞추도록 설정",
    imageAlt:
      "box 컴포넌트의 위 아래 padding과 가로 길이를 시각적으로 설명하는 이미지",
    imageSrc: "/box/box_usage.svg",
    imageWidth: 908,
    imageHeight: 218,
  },
  {
    main: "",
    sub: "텍스트가 넘칠 시 아래로 박스가 늘어나며 글이 이어지도록 설정",
    imageAlt: "다양한 Box 컴포넌트가 나열되어 있는 이미지",
    imageSrc: "/box/various_box.svg",
    imageWidth: 907,
    imageHeight: 218,
  },
];

export const widthBoxItems: Item[] = [
  {
    main: "PC",
    sub: "그리드 너비에 맞게 박스 너비 조정하여 사용",
    imageAlt:
      "PC 화면의 중단점에 맞게 Box 사이즈를 조절하여 사용하는 예시를 나타내는 이미지",
    imageSrc: "/box/pc_box.svg",
    imageWidth: 907,
    imageHeight: 410,
  },
  {
    main: "Mobile",
    sub: "좌우 Margin에 맞게 정렬하여, 반응형으로 조정",
    imageAlt:
      "모바일 화면의 중단점에 맞게 Box 사이즈를 조절하여 사용하는 예시를 나타내는 이미지",
    imageSrc: "/box/mobile_box.svg",
    imageWidth: 390,
    imageHeight: 211,
  },
];
