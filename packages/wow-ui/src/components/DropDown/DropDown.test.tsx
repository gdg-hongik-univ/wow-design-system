"use client";

import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { ReactNode } from "react";
import { useState } from "react";

import DropDown from "@/components/DropDown";
import DropDownOption from "@/components/DropDown/DropDownOption";

const dropdownId = "dropdown-id";

const options = [
  { value: "option1", text: "Option 1" },
  { value: "option2", text: "Option 2" },
  { value: "option3", text: "Option 3" },
];

const renderDropDown = (props = {}) =>
  render(
    <DropDown {...props} id={dropdownId}>
      {options.map((option) => (
        <DropDownOption
          key={option.value}
          text={option.text}
          value={option.value}
        />
      ))}
    </DropDown>
  );

describe("DropDown component", () => {
  it("should render the placeholder", () => {
    renderDropDown({ placeholder: "Please select" });
    expect(screen.getByText("Please select")).toBeInTheDocument();
  });

  it("should allow selection of an option", async () => {
    const dropdownId = "dropdown-id";
    renderDropDown({ id: dropdownId, placeholder: "Please select" });

    await userEvent.click(screen.getByText("Please select"));
    await userEvent.click(screen.getByText("Option 1"));

    await waitFor(() => {
      const option1 = document.querySelector(`#${dropdownId}-option-option1`);
      expect(option1).toHaveAttribute("aria-selected", "true");
    });
  });

  it("should render with default value", () => {
    renderDropDown({
      defaultValue: "option2",
      placeholder: "Please select",
    });

    const dropdownTrigger = screen.getByRole("combobox");
    expect(dropdownTrigger).toHaveTextContent("Option 2");
  });

  it("should render the trigger button", async () => {
    renderDropDown({ trigger: <button>Open Dropdown</button> });

    userEvent.click(screen.getByText("Open Dropdown"));

    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });
  });

  it("closes dropdown when clicking outside", async () => {
    renderDropDown({ placeholder: "Select an option" });
    await userEvent.click(screen.getByText("Select an option"));
    await userEvent.click(document.body);

    await waitFor(() => {
      const dropdown = screen.queryByRole("combobox");
      expect(dropdown).toHaveAttribute("aria-expanded", "false");
    });
  });
});

describe("external control and events", () => {
  it("should fire external onChange event and update controlled state", async () => {
    const ControlledDropDown = () => {
      const [selectedValue, setSelectedValue] = useState("");

      const handleChange = (value: {
        selectedValue: string;
        selectedText: ReactNode;
      }) => {
        setSelectedValue(value.selectedValue);
      };

      return (
        <DropDown
          id={dropdownId}
          placeholder="Please select"
          value={selectedValue}
          onChange={handleChange}
        >
          {options.map((option) => (
            <DropDownOption
              key={option.value}
              text={option.text}
              value={option.value}
            />
          ))}
        </DropDown>
      );
    };

    render(<ControlledDropDown />);

    await userEvent.click(screen.getByText("Please select"));
    await userEvent.click(screen.getByText("Option 2"));

    await waitFor(() => {
      const option2 = document.querySelector(`#${dropdownId}-option-option2`);
      expect(option2).toHaveAttribute("aria-selected", "true");
    });
  });

  it("should navigate options using keyboard and apply focus correctly", async () => {
    const ControlledDropDown = () => {
      const [selectedValue, setSelectedValue] = useState("");

      const handleChange = (value: {
        selectedValue: string;
        selectedText: ReactNode;
      }) => {
        setSelectedValue(value.selectedValue);
      };

      return (
        <DropDown
          id={dropdownId}
          placeholder="Please select"
          value={selectedValue}
          onChange={handleChange}
        >
          {options.map((option) => (
            <DropDownOption
              key={option.value}
              text={option.text}
              value={option.value}
            />
          ))}
        </DropDown>
      );
    };

    render(<ControlledDropDown />);
    await userEvent.click(screen.getByText("Please select"));

    await userEvent.keyboard("{ArrowDown}");
    await waitFor(() => {
      const dropdownTrigger = screen.getByRole("combobox");
      expect(dropdownTrigger).toHaveAttribute(
        "aria-activedescendant",
        `${dropdownId}-option-option1`
      );
    });

    await userEvent.keyboard("{ArrowDown}");
    await waitFor(() => {
      const dropdownTrigger = screen.getByRole("combobox");
      expect(dropdownTrigger).toHaveAttribute(
        "aria-activedescendant",
        `${dropdownId}-option-option2`
      );
    });

    await userEvent.keyboard("{ArrowDown}");
    await waitFor(() => {
      const dropdownTrigger = screen.getByRole("combobox");
      expect(dropdownTrigger).toHaveAttribute(
        "aria-activedescendant",
        `${dropdownId}-option-option3`
      );
    });

    await userEvent.keyboard("{ArrowUp}");
    await waitFor(() => {
      const dropdownTrigger = screen.getByRole("combobox");
      expect(dropdownTrigger).toHaveAttribute(
        "aria-activedescendant",
        `${dropdownId}-option-option2`
      );
    });

    await userEvent.keyboard("{Enter}");
    await waitFor(() => {
      const option2 = document.querySelector(`#${dropdownId}-option-option2`);
      expect(option2).toHaveAttribute("aria-selected", "true");

      const option1 = document.querySelector(`#${dropdownId}-option-option1`);
      const option3 = document.querySelector(`#${dropdownId}-option-option3`);
      expect(option1).toHaveAttribute("aria-selected", "false");
      expect(option3).toHaveAttribute("aria-selected", "false");
    });
  });
});
