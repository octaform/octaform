import fs from 'fs';
import { JSDOM } from 'jsdom';

export default {
  add(url) {
    global.document = new JSDOM('<!doctype html><html><body></body></html>');
    document.body.innerHTML = fs.readFileSync(url).toString();
  },
};
