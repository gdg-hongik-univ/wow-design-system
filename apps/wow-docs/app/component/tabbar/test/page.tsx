"use client";

import Space from "@components/Space";
import { useState } from "react";
import Switch from "wowds-ui/Switch";
import Tabs from "wowds-ui/Tabs";
import TabsContent from "wowds-ui/TabsContent";
import TabsItem from "wowds-ui/TabsItem";
import TabsList from "wowds-ui/TabsList";

type EventType = {
  applyTrueFalse?: boolean;
  liarsTrueFalse?: boolean;
  ageLimitTrueFalse?: boolean;
};

const Page = () => {
  const [, setFormValues] = useState<EventType | null>(null);
  const [, setMounted] = useState(false);

  const onApplyChange = () => {
    setFormValues((prev) => ({
      ...prev,
      applyTrueFalse: !prev?.applyTrueFalse,
    }));
  };

  return (
    <>
      <Space height={54} />
      <Tabs>
        <TabsList>
          <TabsItem value="tab1">행사 신청 폼</TabsItem>
          <TabsItem value="tab2">신청 인원</TabsItem>
          <TabsItem value="tab3">뒤풀이 인원</TabsItem>
        </TabsList>
        <TabsContent value="tab1">
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "200px",
            }}
          >
            <Switch defaultChecked label="Text" onClick={onApplyChange} />
            <Switch defaultChecked label="Text" />
            <Switch defaultChecked label="Text" />
            <Switch defaultChecked label="Text" onClick={onApplyChange} />
            <Switch defaultChecked label="Text" />
            <Switch defaultChecked label="Text" />
            <Switch defaultChecked label="아르" onClick={onApplyChange} />
            <Switch defaultChecked label="Text" />
            <Switch defaultChecked label="Text" />
            <Switch defaultChecked label="Text" onClick={onApplyChange} />
            <Switch defaultChecked label="Text" />
            <Switch defaultChecked label="Text" />
          </div>
        </TabsContent>
        <TabsContent value="tab2">올레</TabsContent>
      </Tabs>
      <Switch
        defaultChecked
        label="아르"
        onClick={() => setMounted((prev) => !prev)}
      />
    </>
  );
};

export default Page;
