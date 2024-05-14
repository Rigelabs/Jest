const compileAndroidCode = require("./exceptions");
const floatingAdd = require("./floatingnumber");
const lists = require("./lists");
const strings = require("./strings");
const sum = require("./sum");
const checkundefined = require("./undefined");


//This test used expect and toBe to test that two values were exactly identical. 
test('adds 1 + 2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3) //toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual
});

test("checks undefined value",()=>{
    expect(checkundefined("t")).toBeUndefined()
});

test('adding floating Numbers',()=>{
    expect(floatingAdd(2.0,3.0)).toBeCloseTo(5.00003)
});

test("there no, I , in team",()=>{
    expect(strings("team")).not.toMatch(/I/)
});

test("testing if list contain, milk",()=>{
    expect(lists()).toContain("milk")
});

test("checking compile exceptions",()=>{
    expect(()=>compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
    // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
})