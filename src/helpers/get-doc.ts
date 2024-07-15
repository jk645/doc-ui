import localforage from "localforage";
import Doc from "../interfaces/doc";
import { SAMPLE_DOC_01 } from "../sample-data/sample-doc-01";

export default async function getDoc(docId: string): Promise<Doc> {
  let doc: Doc|null = await localforage.getItem('doc');
  if (!doc) {
    // 1) Use "docId" and fetch from server
    // TODO...
    doc = SAMPLE_DOC_01;  // TEMP
    // 2) Cache locally
    await localforage.setItem('doc', doc);
  }
  return doc;
}
