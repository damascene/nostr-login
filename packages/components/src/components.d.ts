/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Info, NlTheme } from "./types/index";
import { OptionType } from "./components/nl-select/nl-select";
export { Info, NlTheme } from "./types/index";
export { OptionType } from "./components/nl-select/nl-select";
export namespace Components {
    interface ButtonBase {
        "disabled": boolean;
        "nlTheme": NlTheme;
        "titleBtn": string;
    }
    interface NlAuth {
        "authUrl": string;
        "error": string;
        "isLoading": boolean;
        "isLoadingExtension": boolean;
        "isSignInWithExtension": boolean;
        "startScreen": string;
        "theme": 'default' | 'ocean' | 'lemonade' | 'purple';
    }
    interface NlBanner {
        "accounts": Info[];
        "isLoading": boolean;
        "isOpen": boolean;
        "listNotifies": string[];
        "nlTheme": 'default' | 'ocean' | 'lemonade' | 'purple';
        "notify": { confirm: number; url?: string; timeOut?: { link: string } } | null;
        "titleBanner": string;
        "userInfo": Info | null;
    }
    interface NlButton {
        "disabled": boolean;
        "nlTheme": NlTheme;
        "titleBtn": string;
    }
    interface NlChangeAccount {
        "accounts": Info[];
        "currentAccount": string;
        "darkMode": boolean;
        "theme": 'default' | 'ocean' | 'lemonade' | 'purple';
    }
    interface NlInfo {
    }
    interface NlInfoExtension {
    }
    interface NlLoading {
    }
    interface NlPreviouslyLogged {
        "description": string;
        "titlePage": string;
    }
    interface NlSelect {
        "darkMode": boolean;
        "options": OptionType[];
        "selected": number;
        "theme": 'default' | 'ocean' | 'lemonade' | 'purple';
    }
    interface NlSignin {
        "description": string;
        "titleLogin": string;
    }
    interface NlSigninBunkerUrl {
        "description": string;
        "titleLogin": string;
    }
    interface NlSigninReadOnly {
        "description": string;
        "titleLogin": string;
    }
    interface NlSignup {
        "bunkers": string;
        "description": string;
        "titleSignup": string;
    }
    interface NlWelcome {
        "description": string;
        "isSignInWithExtension": boolean;
        "titleWelcome": string;
    }
}
export interface NlAuthCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlAuthElement;
}
export interface NlBannerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlBannerElement;
}
export interface NlChangeAccountCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlChangeAccountElement;
}
export interface NlLoadingCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlLoadingElement;
}
export interface NlPreviouslyLoggedCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlPreviouslyLoggedElement;
}
export interface NlSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlSelectElement;
}
export interface NlSigninCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlSigninElement;
}
export interface NlSigninBunkerUrlCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlSigninBunkerUrlElement;
}
export interface NlSigninReadOnlyCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlSigninReadOnlyElement;
}
export interface NlSignupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlSignupElement;
}
export interface NlWelcomeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNlWelcomeElement;
}
declare global {
    interface HTMLButtonBaseElement extends Components.ButtonBase, HTMLStencilElement {
    }
    var HTMLButtonBaseElement: {
        prototype: HTMLButtonBaseElement;
        new (): HTMLButtonBaseElement;
    };
    interface HTMLNlAuthElementEventMap {
        "nlCloseModal": any;
        "handleChangeDarkMode": string;
    }
    interface HTMLNlAuthElement extends Components.NlAuth, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlAuthElementEventMap>(type: K, listener: (this: HTMLNlAuthElement, ev: NlAuthCustomEvent<HTMLNlAuthElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlAuthElementEventMap>(type: K, listener: (this: HTMLNlAuthElement, ev: NlAuthCustomEvent<HTMLNlAuthElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlAuthElement: {
        prototype: HTMLNlAuthElement;
        new (): HTMLNlAuthElement;
    };
    interface HTMLNlBannerElementEventMap {
        "handleRetryConfirmBanner": string;
        "handleNotifyConfirmBanner": string;
        "handleSetConfirmBanner": string;
        "handleLoginBanner": string;
        "handleLogoutBanner": string;
        "handleOpenWelcomeModal": string;
    }
    interface HTMLNlBannerElement extends Components.NlBanner, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlBannerElementEventMap>(type: K, listener: (this: HTMLNlBannerElement, ev: NlBannerCustomEvent<HTMLNlBannerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlBannerElementEventMap>(type: K, listener: (this: HTMLNlBannerElement, ev: NlBannerCustomEvent<HTMLNlBannerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlBannerElement: {
        prototype: HTMLNlBannerElement;
        new (): HTMLNlBannerElement;
    };
    interface HTMLNlButtonElement extends Components.NlButton, HTMLStencilElement {
    }
    var HTMLNlButtonElement: {
        prototype: HTMLNlButtonElement;
        new (): HTMLNlButtonElement;
    };
    interface HTMLNlChangeAccountElementEventMap {
        "handleOpenWelcomeModal": string;
        "handleSwitchAccount": Info;
    }
    interface HTMLNlChangeAccountElement extends Components.NlChangeAccount, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlChangeAccountElementEventMap>(type: K, listener: (this: HTMLNlChangeAccountElement, ev: NlChangeAccountCustomEvent<HTMLNlChangeAccountElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlChangeAccountElementEventMap>(type: K, listener: (this: HTMLNlChangeAccountElement, ev: NlChangeAccountCustomEvent<HTMLNlChangeAccountElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlChangeAccountElement: {
        prototype: HTMLNlChangeAccountElement;
        new (): HTMLNlChangeAccountElement;
    };
    interface HTMLNlInfoElement extends Components.NlInfo, HTMLStencilElement {
    }
    var HTMLNlInfoElement: {
        prototype: HTMLNlInfoElement;
        new (): HTMLNlInfoElement;
    };
    interface HTMLNlInfoExtensionElement extends Components.NlInfoExtension, HTMLStencilElement {
    }
    var HTMLNlInfoExtensionElement: {
        prototype: HTMLNlInfoExtensionElement;
        new (): HTMLNlInfoExtensionElement;
    };
    interface HTMLNlLoadingElementEventMap {
        "stopFetchHandler": boolean;
        "handleContinue": boolean;
    }
    interface HTMLNlLoadingElement extends Components.NlLoading, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlLoadingElementEventMap>(type: K, listener: (this: HTMLNlLoadingElement, ev: NlLoadingCustomEvent<HTMLNlLoadingElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlLoadingElementEventMap>(type: K, listener: (this: HTMLNlLoadingElement, ev: NlLoadingCustomEvent<HTMLNlLoadingElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlLoadingElement: {
        prototype: HTMLNlLoadingElement;
        new (): HTMLNlLoadingElement;
    };
    interface HTMLNlPreviouslyLoggedElementEventMap {
        "nlSwitchAccount": string;
        "nlLoginRecentAccount": string;
    }
    interface HTMLNlPreviouslyLoggedElement extends Components.NlPreviouslyLogged, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlPreviouslyLoggedElementEventMap>(type: K, listener: (this: HTMLNlPreviouslyLoggedElement, ev: NlPreviouslyLoggedCustomEvent<HTMLNlPreviouslyLoggedElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlPreviouslyLoggedElementEventMap>(type: K, listener: (this: HTMLNlPreviouslyLoggedElement, ev: NlPreviouslyLoggedCustomEvent<HTMLNlPreviouslyLoggedElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlPreviouslyLoggedElement: {
        prototype: HTMLNlPreviouslyLoggedElement;
        new (): HTMLNlPreviouslyLoggedElement;
    };
    interface HTMLNlSelectElementEventMap {
        "selectDomain": string;
    }
    interface HTMLNlSelectElement extends Components.NlSelect, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlSelectElementEventMap>(type: K, listener: (this: HTMLNlSelectElement, ev: NlSelectCustomEvent<HTMLNlSelectElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlSelectElementEventMap>(type: K, listener: (this: HTMLNlSelectElement, ev: NlSelectCustomEvent<HTMLNlSelectElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlSelectElement: {
        prototype: HTMLNlSelectElement;
        new (): HTMLNlSelectElement;
    };
    interface HTMLNlSigninElementEventMap {
        "nlLogin": string;
        "nlCheckLogin": string;
    }
    interface HTMLNlSigninElement extends Components.NlSignin, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlSigninElementEventMap>(type: K, listener: (this: HTMLNlSigninElement, ev: NlSigninCustomEvent<HTMLNlSigninElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlSigninElementEventMap>(type: K, listener: (this: HTMLNlSigninElement, ev: NlSigninCustomEvent<HTMLNlSigninElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlSigninElement: {
        prototype: HTMLNlSigninElement;
        new (): HTMLNlSigninElement;
    };
    interface HTMLNlSigninBunkerUrlElementEventMap {
        "nlLogin": string;
        "nlCheckLogin": string;
    }
    interface HTMLNlSigninBunkerUrlElement extends Components.NlSigninBunkerUrl, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlSigninBunkerUrlElementEventMap>(type: K, listener: (this: HTMLNlSigninBunkerUrlElement, ev: NlSigninBunkerUrlCustomEvent<HTMLNlSigninBunkerUrlElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlSigninBunkerUrlElementEventMap>(type: K, listener: (this: HTMLNlSigninBunkerUrlElement, ev: NlSigninBunkerUrlCustomEvent<HTMLNlSigninBunkerUrlElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlSigninBunkerUrlElement: {
        prototype: HTMLNlSigninBunkerUrlElement;
        new (): HTMLNlSigninBunkerUrlElement;
    };
    interface HTMLNlSigninReadOnlyElementEventMap {
        "nlLoginReadOnly": string;
        "nlCheckLogin": string;
    }
    interface HTMLNlSigninReadOnlyElement extends Components.NlSigninReadOnly, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlSigninReadOnlyElementEventMap>(type: K, listener: (this: HTMLNlSigninReadOnlyElement, ev: NlSigninReadOnlyCustomEvent<HTMLNlSigninReadOnlyElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlSigninReadOnlyElementEventMap>(type: K, listener: (this: HTMLNlSigninReadOnlyElement, ev: NlSigninReadOnlyCustomEvent<HTMLNlSigninReadOnlyElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlSigninReadOnlyElement: {
        prototype: HTMLNlSigninReadOnlyElement;
        new (): HTMLNlSigninReadOnlyElement;
    };
    interface HTMLNlSignupElementEventMap {
        "nlSignup": string;
        "nlCheckSignup": string;
        "fetchHandler": boolean;
    }
    interface HTMLNlSignupElement extends Components.NlSignup, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlSignupElementEventMap>(type: K, listener: (this: HTMLNlSignupElement, ev: NlSignupCustomEvent<HTMLNlSignupElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlSignupElementEventMap>(type: K, listener: (this: HTMLNlSignupElement, ev: NlSignupCustomEvent<HTMLNlSignupElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlSignupElement: {
        prototype: HTMLNlSignupElement;
        new (): HTMLNlSignupElement;
    };
    interface HTMLNlWelcomeElementEventMap {
        "nlLoginExtension": void;
    }
    interface HTMLNlWelcomeElement extends Components.NlWelcome, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNlWelcomeElementEventMap>(type: K, listener: (this: HTMLNlWelcomeElement, ev: NlWelcomeCustomEvent<HTMLNlWelcomeElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNlWelcomeElementEventMap>(type: K, listener: (this: HTMLNlWelcomeElement, ev: NlWelcomeCustomEvent<HTMLNlWelcomeElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNlWelcomeElement: {
        prototype: HTMLNlWelcomeElement;
        new (): HTMLNlWelcomeElement;
    };
    interface HTMLElementTagNameMap {
        "button-base": HTMLButtonBaseElement;
        "nl-auth": HTMLNlAuthElement;
        "nl-banner": HTMLNlBannerElement;
        "nl-button": HTMLNlButtonElement;
        "nl-change-account": HTMLNlChangeAccountElement;
        "nl-info": HTMLNlInfoElement;
        "nl-info-extension": HTMLNlInfoExtensionElement;
        "nl-loading": HTMLNlLoadingElement;
        "nl-previously-logged": HTMLNlPreviouslyLoggedElement;
        "nl-select": HTMLNlSelectElement;
        "nl-signin": HTMLNlSigninElement;
        "nl-signin-bunker-url": HTMLNlSigninBunkerUrlElement;
        "nl-signin-read-only": HTMLNlSigninReadOnlyElement;
        "nl-signup": HTMLNlSignupElement;
        "nl-welcome": HTMLNlWelcomeElement;
    }
}
declare namespace LocalJSX {
    interface ButtonBase {
        "disabled"?: boolean;
        "nlTheme"?: NlTheme;
        "titleBtn"?: string;
    }
    interface NlAuth {
        "authUrl"?: string;
        "error"?: string;
        "isLoading"?: boolean;
        "isLoadingExtension"?: boolean;
        "isSignInWithExtension"?: boolean;
        "onHandleChangeDarkMode"?: (event: NlAuthCustomEvent<string>) => void;
        "onNlCloseModal"?: (event: NlAuthCustomEvent<any>) => void;
        "startScreen"?: string;
        "theme"?: 'default' | 'ocean' | 'lemonade' | 'purple';
    }
    interface NlBanner {
        "accounts"?: Info[];
        "isLoading"?: boolean;
        "isOpen"?: boolean;
        "listNotifies"?: string[];
        "nlTheme"?: 'default' | 'ocean' | 'lemonade' | 'purple';
        "notify"?: { confirm: number; url?: string; timeOut?: { link: string } } | null;
        "onHandleLoginBanner"?: (event: NlBannerCustomEvent<string>) => void;
        "onHandleLogoutBanner"?: (event: NlBannerCustomEvent<string>) => void;
        "onHandleNotifyConfirmBanner"?: (event: NlBannerCustomEvent<string>) => void;
        "onHandleOpenWelcomeModal"?: (event: NlBannerCustomEvent<string>) => void;
        "onHandleRetryConfirmBanner"?: (event: NlBannerCustomEvent<string>) => void;
        "onHandleSetConfirmBanner"?: (event: NlBannerCustomEvent<string>) => void;
        "titleBanner"?: string;
        "userInfo"?: Info | null;
    }
    interface NlButton {
        "disabled"?: boolean;
        "nlTheme"?: NlTheme;
        "titleBtn"?: string;
    }
    interface NlChangeAccount {
        "accounts"?: Info[];
        "currentAccount"?: string;
        "darkMode"?: boolean;
        "onHandleOpenWelcomeModal"?: (event: NlChangeAccountCustomEvent<string>) => void;
        "onHandleSwitchAccount"?: (event: NlChangeAccountCustomEvent<Info>) => void;
        "theme"?: 'default' | 'ocean' | 'lemonade' | 'purple';
    }
    interface NlInfo {
    }
    interface NlInfoExtension {
    }
    interface NlLoading {
        "onHandleContinue"?: (event: NlLoadingCustomEvent<boolean>) => void;
        "onStopFetchHandler"?: (event: NlLoadingCustomEvent<boolean>) => void;
    }
    interface NlPreviouslyLogged {
        "description"?: string;
        "onNlLoginRecentAccount"?: (event: NlPreviouslyLoggedCustomEvent<string>) => void;
        "onNlSwitchAccount"?: (event: NlPreviouslyLoggedCustomEvent<string>) => void;
        "titlePage"?: string;
    }
    interface NlSelect {
        "darkMode"?: boolean;
        "onSelectDomain"?: (event: NlSelectCustomEvent<string>) => void;
        "options"?: OptionType[];
        "selected"?: number;
        "theme"?: 'default' | 'ocean' | 'lemonade' | 'purple';
    }
    interface NlSignin {
        "description"?: string;
        "onNlCheckLogin"?: (event: NlSigninCustomEvent<string>) => void;
        "onNlLogin"?: (event: NlSigninCustomEvent<string>) => void;
        "titleLogin"?: string;
    }
    interface NlSigninBunkerUrl {
        "description"?: string;
        "onNlCheckLogin"?: (event: NlSigninBunkerUrlCustomEvent<string>) => void;
        "onNlLogin"?: (event: NlSigninBunkerUrlCustomEvent<string>) => void;
        "titleLogin"?: string;
    }
    interface NlSigninReadOnly {
        "description"?: string;
        "onNlCheckLogin"?: (event: NlSigninReadOnlyCustomEvent<string>) => void;
        "onNlLoginReadOnly"?: (event: NlSigninReadOnlyCustomEvent<string>) => void;
        "titleLogin"?: string;
    }
    interface NlSignup {
        "bunkers"?: string;
        "description"?: string;
        "onFetchHandler"?: (event: NlSignupCustomEvent<boolean>) => void;
        "onNlCheckSignup"?: (event: NlSignupCustomEvent<string>) => void;
        "onNlSignup"?: (event: NlSignupCustomEvent<string>) => void;
        "titleSignup"?: string;
    }
    interface NlWelcome {
        "description"?: string;
        "isSignInWithExtension"?: boolean;
        "onNlLoginExtension"?: (event: NlWelcomeCustomEvent<void>) => void;
        "titleWelcome"?: string;
    }
    interface IntrinsicElements {
        "button-base": ButtonBase;
        "nl-auth": NlAuth;
        "nl-banner": NlBanner;
        "nl-button": NlButton;
        "nl-change-account": NlChangeAccount;
        "nl-info": NlInfo;
        "nl-info-extension": NlInfoExtension;
        "nl-loading": NlLoading;
        "nl-previously-logged": NlPreviouslyLogged;
        "nl-select": NlSelect;
        "nl-signin": NlSignin;
        "nl-signin-bunker-url": NlSigninBunkerUrl;
        "nl-signin-read-only": NlSigninReadOnly;
        "nl-signup": NlSignup;
        "nl-welcome": NlWelcome;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-base": LocalJSX.ButtonBase & JSXBase.HTMLAttributes<HTMLButtonBaseElement>;
            "nl-auth": LocalJSX.NlAuth & JSXBase.HTMLAttributes<HTMLNlAuthElement>;
            "nl-banner": LocalJSX.NlBanner & JSXBase.HTMLAttributes<HTMLNlBannerElement>;
            "nl-button": LocalJSX.NlButton & JSXBase.HTMLAttributes<HTMLNlButtonElement>;
            "nl-change-account": LocalJSX.NlChangeAccount & JSXBase.HTMLAttributes<HTMLNlChangeAccountElement>;
            "nl-info": LocalJSX.NlInfo & JSXBase.HTMLAttributes<HTMLNlInfoElement>;
            "nl-info-extension": LocalJSX.NlInfoExtension & JSXBase.HTMLAttributes<HTMLNlInfoExtensionElement>;
            "nl-loading": LocalJSX.NlLoading & JSXBase.HTMLAttributes<HTMLNlLoadingElement>;
            "nl-previously-logged": LocalJSX.NlPreviouslyLogged & JSXBase.HTMLAttributes<HTMLNlPreviouslyLoggedElement>;
            "nl-select": LocalJSX.NlSelect & JSXBase.HTMLAttributes<HTMLNlSelectElement>;
            "nl-signin": LocalJSX.NlSignin & JSXBase.HTMLAttributes<HTMLNlSigninElement>;
            "nl-signin-bunker-url": LocalJSX.NlSigninBunkerUrl & JSXBase.HTMLAttributes<HTMLNlSigninBunkerUrlElement>;
            "nl-signin-read-only": LocalJSX.NlSigninReadOnly & JSXBase.HTMLAttributes<HTMLNlSigninReadOnlyElement>;
            "nl-signup": LocalJSX.NlSignup & JSXBase.HTMLAttributes<HTMLNlSignupElement>;
            "nl-welcome": LocalJSX.NlWelcome & JSXBase.HTMLAttributes<HTMLNlWelcomeElement>;
        }
    }
}
