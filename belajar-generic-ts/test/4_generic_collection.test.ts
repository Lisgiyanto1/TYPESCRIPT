

describe('Generic Collection', () => {
  it('should support Array Generic', () => {
    const t = new Array<string>();
    t.push("aan");
    t.push("budi");
    expect(t[0]).toBe("aan");

    console.info(t);
  });
  it('should support Set Generic', () => {
    const s = new Set<number>();
    s.add(1);
    expect(s.size).toBe(1);
    expect(s.has(1)).toBe(true);
    expect(s.has(2)).toBe(false);
    console.info(s);

  });
  it('should create Map Generic', () => {
    const m = new Map<number, string>();
    m.set(1, "aan");
    m.set(2, "budi");

    expect(m.get(1)).toBe('aan');
    expect(m.get(2)).toBe('budi');

    console.info(m.get(1));
    console.info(m.forEach);
    //foreach
    m.forEach((key, value) => {
      console.info(`Key: ${key}, Value: ${value}`);
    });
    //has
    expect(m.has(1)).toBe(true);
    expect(m.has(4)).toBe(false);
    //size 
    expect(m.size).toBe(2);

  });

  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (value === "Aan") {
          resolve("Hello " + value);
        } else {
          reject("Not Found");
        }
      }, 1000)
    }
    )
  }
  it('should create Promes Generic', async () => {
    const prom = await fetchData("Aan");
    expect(prom).toBe("Hello Aan");
    try {
      await fetchData("Aan");
    } catch (e) {
      expect(e).toBe("Not Found");
    }
  });
})
