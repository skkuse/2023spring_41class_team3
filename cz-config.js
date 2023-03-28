module.exports = {
  types: [
    { value: "feat", name: "feat:\tAdd a new feature" },
    { value: "docs", name: "docs:\tAdd or update documentation" },
    {
      value: "style",
      name: "style:\tAdd or update code format (not updation production, UI,UX code)",
    },
    { value: "fix", name: "fix:\tCode change that neither fixes a bug nor adds a feature" },
    {
      value: "test",
      name: "test:\tCode change related with tests cases",
    },
    {
      value: "chore",
      name: "chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation",
    },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["body"],
  subjectLimit: 100,
};
