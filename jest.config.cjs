module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.js", // Use manual mock for image files
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: ["/node_modules/", "/utils/test-utils.js"],
};
