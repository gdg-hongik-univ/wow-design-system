import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import url from "@rollup/plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { fileURLToPath } from "url";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { visualizer } from "rollup-plugin-visualizer";

const extensions = [".tsx", ".ts", ".js", ".jsx"];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.BABEL_ENV = "production";

export default {
  input: {
    Toast: "./src/components/Toast",
    ToastProvider: "./src/components/Toast/ToastProvider",
    useToast: "./src/components/Toast/useToast",
    TextField: "./src/components/TextField",
    TextButton: "./src/components/TextButton",
    Tag: "./src/components/Tag",
    Tabs: "./src/components/Tabs",
    TabsContent: "./src/components/Tabs/TabsContent",
    TabsItem: "./src/components/Tabs/TabsItem",
    TabsList: "./src/components/Tabs/TabsList",
    Table: "./src/components/Table/Table",
    Tbody: "./src/components/Table/Tbody",
    Td: "./src/components/Table/Td",
    Th: "./src/components/Table/Th",
    Thead: "./src/components/Table/Thead",
    Tr: "./src/components/Table/Tr",
    Switch: "./src/components/Switch",
    Stepper: "./src/components/Stepper",
    BlueSpinner: "./src/components/Spinner/BlueSpinner",
    RainbowSpinner: "./src/components/Spinner/RainbowSpinner",
    SearchBar: "./src/components/SearchBar",
    RadioButton: "./src/components/RadioGroup/RadioButton",
    RadioGroup: "./src/components/RadioGroup/RadioGroup",
    DateDropDown: "./src/components/Picker/DateDropDown",
    PickerGroup: "./src/components/Picker/PickerGroup",
    RangeDatePicker: "./src/components/Picker/RangeDatePicker",
    SingleDatePicker: "./src/components/Picker/SingleDatePicker",
    TimePicker: "./src/components/Picker/TimePicker",
    Pagination: "./src/components/Pagination",
    MultiGroup: "./src/components/MultiGroup",
    Header: "./src/components/Header",
    DropDownOption: "./src/components/DropDown/DropDownOption",
    DropDown: "./src/components/DropDown",
    Divider: "./src/components/Divider",
    Chip: "./src/components/Chip",
    Checkbox: "./src/components/Checkbox",
    Button: "./src/components/Button",
    Box: "./src/components/Box",
    Avatar: "./src/components/Avatar",
    ActionSheetBody: "./src/components/ActionSheet/ActionSheetBody",
    ActionSheetFooter: "./src/components/ActionSheet/ActionSheetFooter",
    ActionSheetHeader: "./src/components/ActionSheet/ActionSheetHeader",
    ActionSheet: "./src/components/ActionSheet",
  },
  output: [
    {
      format: "esm",
      dir: "dist",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].js",
    },
    {
      format: "cjs",
      dir: "dist",
      entryFileNames: "[name].cjs",
    },
  ],
  external: ["react/jsx-runtime", "lottie-react"],
  plugins: [
    alias({
      entries: [
        { find: "@", replacement: path.join(__dirname, "./src") },
        {
          find: "@styled-system",
          replacement: path.join(__dirname, "./styled-system"),
        },
      ],
    }),
    peerDepsExternal(),
    typescript({
      include: ["src/components/**/*"],
      exclude: [
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "**/*.test.ts",
        "**/*.test.tsx",
      ],
    }),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      extensions,
      include: ["src/**/*"],
      babelHelpers: "runtime",
    }),
    url(),
    terser(),
    json(),
    preserveDirectives.default(),
    visualizer(),
  ],
  onwarn: (warning) => {
    if (warning.code !== "MODULE_LEVEL_DIRECTIVE") {
      return;
    }
  },
};
