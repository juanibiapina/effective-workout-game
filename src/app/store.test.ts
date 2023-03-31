import useStore from "./store";

describe("store", () => {
  test("increment action", () => {
    const increment = useStore.getState().increment;

    increment(1);
    expect(useStore.getState().count).toBe(1);

    increment(5);
    expect(useStore.getState().count).toBe(6);
  });

  test("decrement action", () => {
    const decrement = useStore.getState().decrement;

    decrement(1);
    expect(useStore.getState().count).toBe(5);

    decrement(3);
    expect(useStore.getState().count).toBe(2);
  });
});
