/** @format */

export default class NodePool {
  private nodeArr: HTMLElement[] = [];
  public get() {
    if (this.nodeArr.length > 0) {
      return this.nodeArr.shift();
    }
  }
  public put(dom: HTMLElement) {
    this.nodeArr.push(dom);
  }
  public size() {
    return this.nodeArr.length;
  }
  public clear() {
    this.nodeArr = [];
  }
}
