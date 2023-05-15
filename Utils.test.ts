import {getStringInfo, toUppercase} from "../app/Utils";

describe('Utils test suite',function () {
    test('should return uppercase',function () {
         const result =toUppercase("abc");
         expect(result).toBe('ABC');
    })

    test('should return info for valid string',function () {

      const actual= getStringInfo('MY-String');
      expect(actual.lowercase).toBe('my-string');
      expect(actual.extraInfo).toEqual({});
      expect(actual.characters).toHaveLength(9) ;
      expect(actual.characters).toEqual(['M','Y','-','S','t','r','i','n','g']);
      expect(actual.characters).toContain<string>("M");
      expect(actual.characters).
      toEqual(expect.arrayContaining(['S','t','r','i','n','g','M','Y','-']));
      expect(actual.extraInfo).not.toBeUndefined();

    })



});