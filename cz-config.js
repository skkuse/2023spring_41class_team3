module.exports = {
  types: [
    { value: "feat", name: "feat: Add a new feature" },
    { value: "docs", name: "docs: Add or update documentation" },
    {
      value: "style",
      name: "style: Add or update code format (not updation production, UI,UX code)",
    },
    { value: "fix", name: "fix: Code change that neither fixes a bug nor adds a feature" },
    {
      value: "test",
      name: "test: Code change related with tests cases",
    },
    {
      value: "chore",
      name: "chore: Changes to the build process or auxiliary tools and libraries such as documentation generation",
    },
  ],

  scopes: [{ name: "front" }, { name: "back" }, { name: "common" }],
  subjectSeparator: ": ",
  skipQuestions: ["body", "footer"],
  subjectLimit: 100,
};
