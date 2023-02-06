const fs = require("fs");

const import_object = {
    imports: {
        imported_func: (arg) => console.log(arg)
    },
};

const wasm_buffer = fs.readFileSync("./simple.wasm");
const mod = new WebAssembly.Module(wasm_buffer);
const instance = new WebAssembly.Instance(mod, import_object);

instance.exports.exported_func();
