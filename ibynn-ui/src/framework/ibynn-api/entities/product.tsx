export class SearchInfo {
    organic_results_state?: string;
    query_displayed?: string;
    total_results?: number;
    time_taken_displayed?: number;
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

export class Result {
    position?: number;
    title?: string;
    link?: string;
    displayed_link?: string;
    thumbnail?: string;
    snippet?: string;
    snippet_highlighted_words?: string[];
    rich_snippet?: RichSnippet;
    about_this_result?: AboutThisResult;
    about_page_link?: string;
    cached_page_link?: string;
    related_pages_link?: string;
}

export class Products {
    search_info?: SearchInformation;
    search_metadata?: SearchMetadata;
    shopping_results: ShoppingResult[] = [];
}

export class ShoppingResult {
    position?: number;
    title?: string;
    link?: string;
    product_link?: string;
    product_id?: string;
    serpapi_product_api?: string;
    source?: string;
    price?: string;
    extracted_price?: number;
    rating?: number;
    reviews?: number;
    thumbnail?: string;
    tag?: string;
    delivery?: string;
    icon?: string;
    extensions?: string[];
    unit_price?: number;
    unit_price_displayed?: string;
}


export class SearchMetadata {
    id?: string;
    status?: string;
    json_endpoint?: string;
    created_at?: string;
    processed_at?: string;
    google_url?: string;
    raw_html_file?: string;
    total_time_taken?: number;
}


export interface SearchInformation {
    shopping_results_state: string;
    query_displayed: string;
    menu_items: MenuItem[];
}

export interface MenuItem {
    position: number;
    title: string;
    link: string;
    serpapi_link: string;
}




export interface RootObject {
    search_information: SearchInformation;
    search_metadata: SearchMetadata;
    shopping_results: ShoppingResult[];
}

