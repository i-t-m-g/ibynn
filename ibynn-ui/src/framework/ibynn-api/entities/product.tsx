export interface SearchInfo {
    organic_results_state: string;
    query_displayed: string;
    total_results: number;
    time_taken_displayed: number;
}

export interface DetectedExtensions {
    rating?: number;
    reviews?: number;
    price: number;
    currency: string;
}

export interface Top {
    detected_extensions: DetectedExtensions;
    extensions: any[];
}

export interface Bottom {
    extensions: any[];
    detected_extensions: DetectedExtensions;
}

export interface RichSnippet {
    top: Top;
    bottom: Bottom;
}

export interface Source {
    description: string;
    icon: string;
}

export interface AboutThisResult {
    source: Source;
    keywords: string[];
    languages: string[];
    regions: string[];
    related_keywords: string[];
}

export interface Result {
    position: number;
    title: string;
    link: string;
    displayed_link: string;
    thumbnail: string;
    snippet: string;
    snippet_highlighted_words: string[];
    rich_snippet: RichSnippet;
    about_this_result: AboutThisResult;
    about_page_link: string;
    cached_page_link: string;
    related_pages_link: string;
}

export interface Products {
    search_info: SearchInfo;
    results: Result[];
}

