describe('For Loop', () => {
  it('should support in typescript', () => {
    const names: string[] = ["Aan", "Kiam", "Sofiyan"];

    /* dapat for i, for of, for in */

    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    for (const name of names) {
      console.info(name);
    }

    for (const index in names) {
      console.info(names[index]);
    }
  });

  /* While Loop */
  it('should support while loop', () => {
    let counter: number = 0;
    while (counter < 10) {
      console.info(counter);
      counter++;
    }
  });
  /* do while */
  it('should support do while', () => {
    let nilai = 0;
    do {
      nilai++;
      console.info(nilai);
    } while (nilai < 10);
  })
  /* continue & break */
  it('should support continue & break', function () {
    let counter: number = 0;
    do {
      counter++;
      if (counter == 10) {
        break;
      }
      if (counter % 2 == 0) {
        continue;
      }
      console.info(counter);
    } while (true);

  });
})
