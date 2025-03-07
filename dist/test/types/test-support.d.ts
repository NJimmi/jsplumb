import { BrowserJsPlumbInstance, EventManager } from "@jsplumb/browser-ui";
import { Connection, Endpoint, Overlay } from "@jsplumb/core";
export interface EventHandlers<T = any> {
    before?: () => any;
    beforeMouseMove?: () => any;
    beforeMouseUp?: () => any;
    after?: (payload?: T) => any;
}
export declare class BrowserUITestSupport {
    private _jsPlumb;
    private ok;
    private equal;
    _divs: Array<string>;
    mottle: EventManager;
    _t(el: Document | Element, evt: string, x: number, y: number): void;
    constructor(_jsPlumb: BrowserJsPlumbInstance, ok: (b: boolean, m: string) => any, equal: (v1: any, v2: any, m?: string) => any);
    addDiv(id: string, parent?: Element, className?: string, x?: number, y?: number, w?: number, h?: number): Element;
    addDivs(ids: Array<string>, parent?: Element): void;
    assertEndpointCount(el: Element, count: number): void;
    _assertManagedEndpointCount(el: Element, count: number): void;
    _assertManagedConnectionCount(el: Element, count: number): void;
    _registerDiv(div: string): void;
    makeDragStartEvt(el: any): Event;
    getAttribute(el: Element, att: string): string;
    isTargetAttribute: string;
    isSourceAttribute: string;
    droppableClass: string;
    dragNodeBy(el: Element, x: number, y: number, events?: EventHandlers): void;
    dragNodeTo(el: Element, x: number, y: number, events?: EventHandlers): void;
    dragToGroup(el: Element, targetGroupId: string, events?: EventHandlers): void;
    aSyncDragNodeBy(el: Element, x: number, y: number, events?: EventHandlers): void;
    dragANodeAround(el: any, functionToAssertWhileDragging?: () => boolean, assertMessage?: string): void;
    dragConnection(d1: any, d2: any, mouseUpOnTarget?: boolean, events?: EventHandlers<Connection>): Connection;
    aSyncDragConnection(d1: any, d2: any, events?: EventHandlers<Connection>): void;
    dragAndAbortConnection(d1: any): void;
    dragAndAbort(d1: any): void;
    dragToDistantLand(d1: any): void;
    detachConnection(e: Endpoint, connIndex: number): void;
    detachConnectionByTarget(c: Connection): void;
    relocateTarget(conn: Connection, target: any, events?: EventHandlers): void;
    relocate(conn: Connection, idx: number, newEl: Element, events?: EventHandlers): void;
    relocateSource(conn: Connection, source: any, events?: EventHandlers): void;
    makeEvent(el: Element): any;
    getCanvas(epOrEl: any): any;
    getEndpointCanvas(ep: Endpoint): any;
    getConnectionCanvas(c: Connection): any;
    within(val: number, target: number, msg: string): void;
    assertManagedEndpointCount(el: Element, count: number): void;
    assertManagedConnectionCount(el: Element, count: number): void;
    fireEventOnEndpoint(ep: Endpoint, ...events: Array<string>): void;
    fireEventOnElement(e: Element, ...events: Array<string>): void;
    fireEventOnConnection(connection: Connection, ...events: Array<string>): void;
    clickOnConnection(connection: Connection): void;
    dblClickOnConnection(connection: Connection): void;
    tapOnConnection(connection: Connection): void;
    dblTapOnConnection(connection: Connection): void;
    clickOnElement(element: Element, clickCount?: number): void;
    dblClickOnElement(element: Element): void;
    tapOnElement(element: Element): void;
    dblTapOnElement(element: Element): void;
    getOverlayCanvas(overlay: Overlay): any;
    fireEventOnOverlay(connection: Connection, overlayId: string, event: string): void;
    clickOnOverlay(connection: Connection, overlayId: string): void;
    dblClickOnOverlay(connection: Connection, overlayId: string): void;
    tapOnOverlay(connection: Connection, overlayId: string): void;
    dblTapOnOverlay(connection: Connection, overlayId: string): void;
    cleanup(): void;
    makeContent(s: string): ChildNode;
    length(obj: any): number;
    head(obj: any): any;
    uuid(): string;
}
//# sourceMappingURL=test-support.d.ts.map