/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_SITE_NAME: string
    readonly VITE_IMDB_KEY: string
    // more env variables...
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}