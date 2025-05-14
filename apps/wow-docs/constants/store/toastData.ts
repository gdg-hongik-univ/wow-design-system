import type { Item } from "@components/ImageCards";

export const usageItems: Item[] = [
  {
    main: "Usage",
    sub: "용도에 맞게 아이콘 및 텍스트를 활용",
    imageAlt: "메인 텍스트만 사용시 두 줄까지 기재 가능하다고 안내하는 이미지",
    imageSrc: "/component/toast/usage-1.svg",
    imageWidth: 912,
    imageHeight: 260,
  },
];

export const widthItems: Item[] = [
  {
    main: "PC",
    sub: "그리드 4칸 너비 고정, 상단 헤더 밑으로 띄우기",
    imageAlt: "헤더 24px 아래에 위치하도록 안내하는 이미지",
    imageSrc: "/component/toast/width-1.svg",
    imageWidth: 912,
    imageHeight: 160,
  },
  {
    main: "Mobile",
    sub: "그리드에 맞추기",
    imageAlt: "그리드를 가득 채워서 사용하도록 안내하는 이미지",
    imageSrc: "/component/toast/width-2.svg",
    imageWidth: 390,
    imageHeight: 149,
  },
];
