import { promises as fs } from "fs";
import path from "path";

import packageJSON from "../wow-ui/package.json";

const COMPONENT_PATH = "./src/components";

type ExportsKey = string;
type ExportsValue =
  | {
      types: string;
      require: string;
      import: string;
    }
  | string;
type ExportsObject = { [key: ExportsKey]: ExportsValue };

type EntryFileKey = string;
type EntryFileValue = string;
type EntryFileObject = { [key: EntryFileKey]: EntryFileValue };

// 제외할 컴포넌트 목록
const excludedComponents = [
  "DropDownTrigger",
  "DropDownWrapper",
  "CollectionContext",
  "DropDownOptionList",
  "pickerComponents",
  "ToastContext",
  "ActionSheetOverlay",
];

// 추가할 컴포넌트 목록
const includedComponents = ["useToast"];

const getFilteredComponentFiles = async (directoryPath: string) => {
  const files = await fs.readdir(directoryPath, { recursive: true });

  return files.filter(
    (file) =>
      (file.endsWith(".tsx") &&
        !file.includes("test") &&
        !file.includes("stories") &&
        !excludedComponents.some((excluded) => file.includes(excluded))) ||
      includedComponents.some((included) => file.includes(included))
  );
};

const createPaths = (type: "entryFile" | "exports", file: string) => {
  const parsedPath = path.parse(file);
  const componentDirName = parsedPath.dir.split(path.sep)[0] ?? "";
  const componentName = parsedPath.name;
  const defaultComponent = componentName === "index";

  const typesPath = `./dist/components/${componentDirName}/${defaultComponent ? "index" : componentName}.d.ts`;
  const importPath = `./dist/${defaultComponent ? componentDirName : componentName}.js`;
  const requirePath = `./dist/${defaultComponent ? componentDirName : componentName}.cjs`;
  const componentPath = `./src/components/${componentDirName}${defaultComponent ? "" : `/${componentName}`}`;

  const entryFileKey = defaultComponent
    ? `./${componentDirName}`
    : `./${componentName}`;
  const exportsKey = defaultComponent ? componentDirName : componentName;
  const exportsValue = {
    types: typesPath,
    require: requirePath,
    import: importPath,
  };
  const entryFileValue = componentPath;

  return type === "entryFile"
    ? { key: exportsKey, value: entryFileValue }
    : { key: entryFileKey, value: exportsValue };
};

const createExportsObject = async (files: string[]): Promise<ExportsObject> => {
  const exports = files.reduce(
    (prev, file) => {
      const { key, value } = createPaths("exports", file);

      return { ...prev, [key]: value };
    },
    { "./styles.css": "./dist/styles.css" }
  );

  return exports;
};

const applyExportsToPackageJSON = async (exportsObject: ExportsObject) => {
  const PACKAGEJSON_PATH = "package.json";

  packageJSON.exports = Object.create(null);
  Object.assign(packageJSON.exports, exportsObject);

  await fs.writeFile(PACKAGEJSON_PATH, JSON.stringify(packageJSON));
};

const generateRollupEntryFileObject = (
  files: string[]
): { [key: EntryFileKey]: EntryFileValue } => {
  const entryFileObject = files
    .map((file) => {
      const { key, value } = createPaths("entryFile", file);

      return { key, value };
    })
    .reduce(
      (prev, { key, value }) => ({
        ...prev,
        [key]: value,
      }),
      {}
    );

  return entryFileObject;
};

const applyEntryFilesToRollupConfig = async (
  entryFileObject: EntryFileObject
) => {
  const ROLLUP_CONFIG_PATH = "rollup.config.js";

  const dirname = path.resolve();
  const rollupConfigPath = path.join(dirname, ROLLUP_CONFIG_PATH);
  let rollupConfigContent = await fs.readFile(rollupConfigPath, "utf-8");

  rollupConfigContent = rollupConfigContent.replace(
    /input:\s*{[^}]*}/m,
    `input: ${JSON.stringify(entryFileObject)}`
  );

  await fs.writeFile(ROLLUP_CONFIG_PATH, rollupConfigContent);
};

(async () => {
  const directoryPath = COMPONENT_PATH;
  const filteredComponentFiles = await getFilteredComponentFiles(directoryPath);
  const exportsObject = await createExportsObject(filteredComponentFiles);
  await applyExportsToPackageJSON(exportsObject);

  const entryFileObject = generateRollupEntryFileObject(filteredComponentFiles);
  applyEntryFilesToRollupConfig(entryFileObject);
})();
