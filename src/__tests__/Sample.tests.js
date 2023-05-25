describe("A suite is just a function", () => {
    let a;
    let b;

    it("and so is a spec", () => {
        a = true;
        
        expect(a).toBe(true);
    });

    test("either test or it can be used", () => {
        a = false;
        b = "some string";

        // First two will pass and third fails, because the value used in test fallows JavaScript scope - if a parent value is change 
        // inside a spec it will change for all fallowing specs 
        expect(b).toContain("me"); // Contains "me"
    });

    it("there should only really be one expcet call but more can be made", () => {
        expect(a).toBeTruthy();
        expect(b).not.toBeFalsy();
    });

});