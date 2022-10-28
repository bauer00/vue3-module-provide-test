import type { InjectionKey } from "vue";

export const provideTestKey = Symbol("provide test") as InjectionKey<string>;

export const testPlugin = {
    install(app) {
        console.log("testPlugin::install()");
        app.provide(provideTestKey, "TEST");
    },
};
