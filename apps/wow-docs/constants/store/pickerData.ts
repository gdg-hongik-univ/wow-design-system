import type { Item } from "@components/ImageCards";

export const timePickerItems: Item[] = [
  {
    main: "Time",
    sub: "배경에 따라 박스의 컬러 변경 가능, AM/PM 텍스트의 경우 타이포 다르게 설정",
    imageAlt: "배경에 따른 컬러 변경이 가능하다고 설명하는 이미지",
    imageSrc: "/component/picker/time-1.svg",
    imageWidth: 907,
    imageHeight: 148,
  },
  {
    main: "",
    sub: "드롭다운 컴포넌트와 조합하여 활용",
    imageAlt: "Dropdown 컴포넌트와 조합하여 활용할 수 있다고 설명하는 이미지",
    imageSrc: "/component/picker/time-2.svg",
    imageWidth: 907,
    imageHeight: 254,
  },
];

export const datePickerItems: Item[] = [
  {
    main: "PC",
    sub: "그리드의 너비에 맞게 고정하여 사용",
    imageAlt:
      "PC의 경우 그리드 너비(ex. 316px)에 맞게 고정하여 사용할 수 있다고 설명하는 이미지",
    imageSrc: "/component/picker/pc-1.svg",
    imageWidth: 907,
    imageHeight: 478,
  },
  {
    main: "Mobile",
    sub: "전체 그리드에 Fill로 너비 맞추기",
    imageAlt: "모바일의 경우 화면을 가득 채워 사용할 수 있다고 설명하는 이미지",
    imageSrc: "/component/picker/mobile-1.svg",
    imageWidth: 390,
    imageHeight: 483,
  },
];
