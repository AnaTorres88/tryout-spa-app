export interface NewsItem {
    id:              number;
    title:           string;
    description:     string;
    keywords:        string[];
    snippet:         string;
    url:             string;
    image_url:       string;
    language:        string;
    published_at:    Date;
    source:          string;
    categories:      string[];
    relevance_score: number;
    locale:          string;
}
