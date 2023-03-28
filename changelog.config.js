module.exports = {
  disableEmoji: true,
  format: "{type}: {scope} {subject}",
  list: ["feat", "fix", "refactor", "style", "chore", "test", "docs"],
  maxMessageLength: 100,
  minMessageLength: 1,
  questions: ["type", "scope", "subject", "body"],
  scopes: ["front", "back", "common"],
  types: {
    chore: {
      description: "Build process or auxiliary tool changes",
      value: "chore",
    },
    docs: {
      description: "Documentation only changes",
      value: "docs",
    },
    feat: {
      description: "A new feature",
      value: "feat",
    },
    fix: {
      description: "A bug fix",
      value: "fix",
    },
    refactor: {
      description: "A code change that neither fixes a bug or adds a feature",
      value: "refactor",
    },
    test: {
      description: "Adding missing tests",
      value: "test",
    },
    style: {
      description: "Changes that do not affect the meaning of the code",
      value: "style",
    },
  },
};
