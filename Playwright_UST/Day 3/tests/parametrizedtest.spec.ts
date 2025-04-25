// paramterized 
import test from "@playwright/test";

test.describe.configure({ mode: 'parallel' });

[
    {name: 'Aaryan', msg: 'Hello'},
    {name: 'Kirti', msg: 'Hey'},
    {name: 'Arush', msg: 'Hola'},
    {name: 'Aaryan1', msg: 'Hello'},
    {name: 'Kirti1', msg: 'Hey'},
    {name: 'Arush1', msg: 'Hola'}
].forEach(({name, msg}) => {
    test(`testing with ${name}`, async ({page}) => {
        // await page.goto('');

    });
})