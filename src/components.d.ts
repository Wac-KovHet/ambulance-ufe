/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface XkovhetAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface XkovhetAmbulanceWlEditor {
        "ambulanceId": string;
    }
    interface XkovhetAmbulanceWlEmployeeEditor {
    }
    interface XkovhetAmbulanceWlEmployeeList {
    }
    interface XkovhetAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
    interface XkovhetFooter {
        "initialButtonText": string;
    }
    interface XkovhetNavigation {
    }
}
export interface XkovhetAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXkovhetAmbulanceWlEditorElement;
}
export interface XkovhetAmbulanceWlEmployeeEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXkovhetAmbulanceWlEmployeeEditorElement;
}
export interface XkovhetAmbulanceWlEmployeeListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXkovhetAmbulanceWlEmployeeListElement;
}
export interface XkovhetAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXkovhetAmbulanceWlListElement;
}
declare global {
    interface HTMLXkovhetAmbulanceWlAppElement extends Components.XkovhetAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLXkovhetAmbulanceWlAppElement: {
        prototype: HTMLXkovhetAmbulanceWlAppElement;
        new (): HTMLXkovhetAmbulanceWlAppElement;
    };
    interface HTMLXkovhetAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
        "employee-list": string;
    }
    interface HTMLXkovhetAmbulanceWlEditorElement extends Components.XkovhetAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXkovhetAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLXkovhetAmbulanceWlEditorElement, ev: XkovhetAmbulanceWlEditorCustomEvent<HTMLXkovhetAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXkovhetAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLXkovhetAmbulanceWlEditorElement, ev: XkovhetAmbulanceWlEditorCustomEvent<HTMLXkovhetAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXkovhetAmbulanceWlEditorElement: {
        prototype: HTMLXkovhetAmbulanceWlEditorElement;
        new (): HTMLXkovhetAmbulanceWlEditorElement;
    };
    interface HTMLXkovhetAmbulanceWlEmployeeEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLXkovhetAmbulanceWlEmployeeEditorElement extends Components.XkovhetAmbulanceWlEmployeeEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXkovhetAmbulanceWlEmployeeEditorElementEventMap>(type: K, listener: (this: HTMLXkovhetAmbulanceWlEmployeeEditorElement, ev: XkovhetAmbulanceWlEmployeeEditorCustomEvent<HTMLXkovhetAmbulanceWlEmployeeEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXkovhetAmbulanceWlEmployeeEditorElementEventMap>(type: K, listener: (this: HTMLXkovhetAmbulanceWlEmployeeEditorElement, ev: XkovhetAmbulanceWlEmployeeEditorCustomEvent<HTMLXkovhetAmbulanceWlEmployeeEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXkovhetAmbulanceWlEmployeeEditorElement: {
        prototype: HTMLXkovhetAmbulanceWlEmployeeEditorElement;
        new (): HTMLXkovhetAmbulanceWlEmployeeEditorElement;
    };
    interface HTMLXkovhetAmbulanceWlEmployeeListElementEventMap {
        "employee-clicked": string;
    }
    interface HTMLXkovhetAmbulanceWlEmployeeListElement extends Components.XkovhetAmbulanceWlEmployeeList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXkovhetAmbulanceWlEmployeeListElementEventMap>(type: K, listener: (this: HTMLXkovhetAmbulanceWlEmployeeListElement, ev: XkovhetAmbulanceWlEmployeeListCustomEvent<HTMLXkovhetAmbulanceWlEmployeeListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXkovhetAmbulanceWlEmployeeListElementEventMap>(type: K, listener: (this: HTMLXkovhetAmbulanceWlEmployeeListElement, ev: XkovhetAmbulanceWlEmployeeListCustomEvent<HTMLXkovhetAmbulanceWlEmployeeListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXkovhetAmbulanceWlEmployeeListElement: {
        prototype: HTMLXkovhetAmbulanceWlEmployeeListElement;
        new (): HTMLXkovhetAmbulanceWlEmployeeListElement;
    };
    interface HTMLXkovhetAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLXkovhetAmbulanceWlListElement extends Components.XkovhetAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXkovhetAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLXkovhetAmbulanceWlListElement, ev: XkovhetAmbulanceWlListCustomEvent<HTMLXkovhetAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXkovhetAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLXkovhetAmbulanceWlListElement, ev: XkovhetAmbulanceWlListCustomEvent<HTMLXkovhetAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXkovhetAmbulanceWlListElement: {
        prototype: HTMLXkovhetAmbulanceWlListElement;
        new (): HTMLXkovhetAmbulanceWlListElement;
    };
    interface HTMLXkovhetFooterElement extends Components.XkovhetFooter, HTMLStencilElement {
    }
    var HTMLXkovhetFooterElement: {
        prototype: HTMLXkovhetFooterElement;
        new (): HTMLXkovhetFooterElement;
    };
    interface HTMLXkovhetNavigationElement extends Components.XkovhetNavigation, HTMLStencilElement {
    }
    var HTMLXkovhetNavigationElement: {
        prototype: HTMLXkovhetNavigationElement;
        new (): HTMLXkovhetNavigationElement;
    };
    interface HTMLElementTagNameMap {
        "xkovhet-ambulance-wl-app": HTMLXkovhetAmbulanceWlAppElement;
        "xkovhet-ambulance-wl-editor": HTMLXkovhetAmbulanceWlEditorElement;
        "xkovhet-ambulance-wl-employee-editor": HTMLXkovhetAmbulanceWlEmployeeEditorElement;
        "xkovhet-ambulance-wl-employee-list": HTMLXkovhetAmbulanceWlEmployeeListElement;
        "xkovhet-ambulance-wl-list": HTMLXkovhetAmbulanceWlListElement;
        "xkovhet-footer": HTMLXkovhetFooterElement;
        "xkovhet-navigation": HTMLXkovhetNavigationElement;
    }
}
declare namespace LocalJSX {
    interface XkovhetAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface XkovhetAmbulanceWlEditor {
        "ambulanceId"?: string;
        "onEditor-closed"?: (event: XkovhetAmbulanceWlEditorCustomEvent<string>) => void;
        "onEmployee-list"?: (event: XkovhetAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface XkovhetAmbulanceWlEmployeeEditor {
        "onEditor-closed"?: (event: XkovhetAmbulanceWlEmployeeEditorCustomEvent<string>) => void;
    }
    interface XkovhetAmbulanceWlEmployeeList {
        "onEmployee-clicked"?: (event: XkovhetAmbulanceWlEmployeeListCustomEvent<string>) => void;
    }
    interface XkovhetAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: XkovhetAmbulanceWlListCustomEvent<string>) => void;
    }
    interface XkovhetFooter {
        "initialButtonText"?: string;
    }
    interface XkovhetNavigation {
    }
    interface IntrinsicElements {
        "xkovhet-ambulance-wl-app": XkovhetAmbulanceWlApp;
        "xkovhet-ambulance-wl-editor": XkovhetAmbulanceWlEditor;
        "xkovhet-ambulance-wl-employee-editor": XkovhetAmbulanceWlEmployeeEditor;
        "xkovhet-ambulance-wl-employee-list": XkovhetAmbulanceWlEmployeeList;
        "xkovhet-ambulance-wl-list": XkovhetAmbulanceWlList;
        "xkovhet-footer": XkovhetFooter;
        "xkovhet-navigation": XkovhetNavigation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "xkovhet-ambulance-wl-app": LocalJSX.XkovhetAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLXkovhetAmbulanceWlAppElement>;
            "xkovhet-ambulance-wl-editor": LocalJSX.XkovhetAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLXkovhetAmbulanceWlEditorElement>;
            "xkovhet-ambulance-wl-employee-editor": LocalJSX.XkovhetAmbulanceWlEmployeeEditor & JSXBase.HTMLAttributes<HTMLXkovhetAmbulanceWlEmployeeEditorElement>;
            "xkovhet-ambulance-wl-employee-list": LocalJSX.XkovhetAmbulanceWlEmployeeList & JSXBase.HTMLAttributes<HTMLXkovhetAmbulanceWlEmployeeListElement>;
            "xkovhet-ambulance-wl-list": LocalJSX.XkovhetAmbulanceWlList & JSXBase.HTMLAttributes<HTMLXkovhetAmbulanceWlListElement>;
            "xkovhet-footer": LocalJSX.XkovhetFooter & JSXBase.HTMLAttributes<HTMLXkovhetFooterElement>;
            "xkovhet-navigation": LocalJSX.XkovhetNavigation & JSXBase.HTMLAttributes<HTMLXkovhetNavigationElement>;
        }
    }
}
