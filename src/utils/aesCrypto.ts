import { AES, enc, mode, pad } from "crypto-js";

// const _key = "you are a pig!"; // 密钥
// const _iv = enc.Utf8.parse("789"); // 密钥偏移量

const _key = enc.Utf8.parse("1357924680ABCDEF"); //十六位十六进制数作为密钥
const _iv = enc.Utf8.parse("FEDCBA2468013579"); //十六位十六进制数作为密钥偏移量

console.log("_key:", _key);
console.log("_iv:", _iv);

// 解密
export const AES_Decrypt = (_str: string) => {
  // const _base64 = enc.Hex.parse(_str);
  // const _base64 = enc.Base64.parse(_str);
  const _srcs = _str;
  console.log("_srcs: ", _srcs);
  const decrypt = AES.decrypt(_srcs, _key, {
    iv: _iv,
    mode: mode.CFB,
    padding: pad.NoPadding
  });
  console.log("decrypt: ", decrypt);
  return decrypt.toString(enc.Utf8);
};

// 加密
export const AES_Encrypt = (_str: string) => {
  const _msg = enc.Utf8.parse(_str);
  const encrypted = AES.encrypt(_msg, _key, {
    iv: _iv,
    mode: mode.CFB,
    padding: pad.NoPadding
  });
  return enc.Base64.stringify(encrypted.ciphertext).toString();
};
