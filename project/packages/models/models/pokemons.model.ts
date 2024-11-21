export interface Pokemon {
    name: string;
    url: string;
}

export interface ApiParams {
    limit: number;
    offset: number;
}

export interface ApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}