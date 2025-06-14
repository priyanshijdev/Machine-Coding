###                                                                 🔹 Description of Tabs Component

A **Tabs Component** typically consists of:

#### 1. **Tab Headers (Tab Buttons)**

* These are clickable buttons or labels, usually displayed in a horizontal row.
* Each tab represents a different section or category of content.
* Clicking on a tab activates it and displays its associated content.

#### 2. **Active Tab Highlighting**

* The selected or active tab is visually highlighted (e.g., different color, underline).
* This helps users identify which tab is currently open.

#### 3. **Tab Content Area**

* Displays the content corresponding to the active tab.
* Only the content for the selected tab is shown; others are hidden.

---

### 🔧 Functional Behavior

* Clicking on a tab updates the **active tab state**, typically managed by `useState` in React.
* The UI re-renders to show content for the active tab only.
* Clean separation of **UI control (tabs)** and **content presentation**.

---

