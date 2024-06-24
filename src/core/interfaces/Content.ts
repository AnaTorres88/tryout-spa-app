export interface Content {
    en: Language,
    es: Language
}

interface Language {
    nav: string[];
    dropwdown: string[];
    users: {
        deleteBtn: string;
        detailBtn: string;
        tableHeadings: string[];
    },
    news: {
        title: string;
        button: string;
    }
}