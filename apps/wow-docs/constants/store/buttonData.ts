import type { Item } from "@components/ImageCards";

export const widthButtonItems: Item[] = [
  {
    main: "PC",
    sub: "최대 너비, 고정 너비는 그리드 기준 4칸",
    imageAlt: "width-1",
    imageSrc: "/button/width-1.png",
    imageWidth: 907,
    imageHeight: 148,
  },
  {
    main: "Mobile",
    sub: "전체 그리드 혹은 박스 컴포넌트에 Fill로 너비 맞추기",
    imageAlt: "width-2",
    imageSrc: "/button/width-2.png",
    imageWidth: 390,
    imageHeight: 254,
  },
];

export const combinationButtonItems: Item[] = [
  {
    main: "L size",
    sub: "좌우 및 상하로 2개의 버튼 조합 가능",
    imageAlt: "combination-1",
    imageSrc: "/button/combination-1.png",
    imageWidth: 907,
    imageHeight: 352,
  },
  {
    main: "S size",
    sub: "Outline, Solid 버튼끼리 자유롭게 조합",
    imageAlt: "combination-2",
    imageSrc: "/button/combination-2.png",
    imageWidth: 907,
    imageHeight: 230,
  },
];

export const withIconButtonItems: Item[] = [
  {
    main: "L size",
    sub: "20*20 size 아이콘과 병치",
    imageAlt: "withIcon-1",
    imageSrc: "/button/withIcon-1.png",
    imageWidth: 907,
    imageHeight: 156,
  },
  {
    main: "S size",
    sub: "14*14 size 아이콘과 병치",
    imageAlt: "withIcon-2",
    imageSrc: "/button/withIcon-2.png",
    imageWidth: 907,
    imageHeight: 134,
  },
];

export const withSubjectButtonItems: Item[] = [
  {
    main: "L size",
    sub: "Subtext는 메인 텍스트 하단에 배치, Subtext는 Label3으로 지정",
    imageAlt: "withSubject-1",
    imageSrc: "/button/withSubject-1.png",
    imageWidth: 907,
    imageHeight: 156,
  },
];
