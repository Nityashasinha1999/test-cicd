// | Option                  | Result                           |
// | ----------------------- | -------------------------------- |
// | Add test file           | Jest runs actual test ✅          |
// | Use `--passWithNoTests` | Skips error if no tests exist ⚠️ |
describe('Sanity check', () => {
    it('adds numbers correctly', () => {
      expect(1 + 2).toBe(3);
    });
  });
  