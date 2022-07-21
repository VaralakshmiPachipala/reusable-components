import React from "react";
import { Bookmark, BookmarkAddOutlined } from "@mui/icons-material";
import { Checkbox, CheckboxGroup } from "../components/Checkbox";

const CheckboxWrapper: React.FC = () => {
  return (
    <div className="App">
      {/* ------------ BREAK ------------ */}
      <h3>Some Additional / Accessibility props</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>inputProps</code>
      </div>
      <div style={{ display: "flex" }}>
        <Checkbox
          inputProps={{
            "data-testid": "checkbox",
            "aria-label": "Checkbox for Terms and Conditions",
          }}
        />
      </div>
      <hr />

      {/* ------------ BREAK ------------ */}
      <h3>Color </h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>primary</code> <code>secondary</code> <code>error</code>
        <code>info</code> <code>success</code> <code>warning</code>
        <code>default</code>
      </div>

      <div style={{ display: "flex" }}>
        <Checkbox color="primary" />
        <Checkbox color="secondary" />
        <Checkbox color="error" />
        <Checkbox color="info" />
        <Checkbox color="success" />
        <Checkbox color="warning" />
        <Checkbox color="default" />
      </div>
      <hr />

      {/* ------------ BREAK ------------ */}
      <h3>Checked </h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>true</code> <code>false</code>
      </div>
      <div style={{ display: "flex" }}>
        <Checkbox checked={true} />
        <Checkbox checked={false} />
      </div>
      <hr />

      {/* ------------ BREAK ------------ */}
      <h3>Default Checked </h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>true</code> <code>false</code>
      </div>
      <div style={{ display: "flex" }}>
        <Checkbox defaultChecked={true} />
        <Checkbox defaultChecked={false} />
      </div>
      <hr />

      {/* ------------ BREAK ------------ */}
      <h3>Disabled</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>true</code> <code>false</code>
      </div>
      <div style={{ display: "flex" }}>
        <Checkbox disabled />
        <Checkbox disabled={false} />
      </div>
      <hr />

      {/* ------------ BREAK ------------ */}
      <h3>Icon and Checked Icon</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>React.ReactNode</code>
        <code>
          <BookmarkAddOutlined />
          <Bookmark />
        </code>
      </div>
      <div style={{ display: "flex" }}>
        <Checkbox icon={<BookmarkAddOutlined />} checkedIcon={<Bookmark />} />
      </div>
      <hr />

      {/* ------------ BREAK ------------ */}
      <h3>Disable Ripple</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>ture</code>
        <code>false</code>
      </div>
      <div style={{ display: "flex" }}>
        <Checkbox disableRipple={true} />
        <Checkbox disableRipple={false} />
      </div>
      <hr />

      {/* ------------ BREAK ------------ */}
      <h3>Required</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>ture</code>
        <code>false</code>
      </div>
      <div style={{ display: "flex" }}>
        <Checkbox required={true} />
        <Checkbox required={false} />
      </div>
      <hr />

      {/* ------------ BREAK ------------ */}
      <h3>Size</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>medium</code>
        <code>small</code>
      </div>
      <div style={{ display: "flex" }}>
        <Checkbox size="medium" />
        <Checkbox size="small" />
      </div>
      <hr />

      {/* ------------ BREAK ------------ */}
      <h3>On Change Handler</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>func</code>
      </div>
      <div style={{ display: "flex" }}>
        <Checkbox
          onChange={(event) => {
            alert(event.target.checked);
          }}
        />
      </div>
      <hr />

      {/* ------------ BREAK ------------ */}
      <h3>Checkbox Group - Orientation</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <code>row</code>
        <code>column</code>
      </div>
      <div style={{ display: "flex" }}>
        <CheckboxGroup
          orientation="row"
          checkboxList={[
            { key: "1", label: "Row Item 1", disabled: true },
            { key: "2", label: "Row Item 2" },
            { key: "3", label: "Row Item 3" },
            { key: "4", label: "Row Item 4" },
            { key: "5", label: "Row Item 5" },
          ]}
        />
        <CheckboxGroup
          orientation="column"
          checkboxList={[
            { key: "1", label: "Column Item 1" },
            { key: "2", label: "Column Item 2" },
            { key: "3", label: "Column Item 3" },
            { key: "4", label: "Column Item 4" },
            { key: "5", label: "Column Item 5" },
          ]}
        />
      </div>
    </div>
  );
};

export { CheckboxWrapper };
