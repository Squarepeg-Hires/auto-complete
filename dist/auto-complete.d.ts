import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutoCompleteFilter } from './auto-complete.filter';
/**
 * provides auto-complete related utility functions
 */
export declare class NguiAutoComplete {
    private http;
    source: string;
    pathToData: string;
    listFormatter: (arg: any) => string;
    constructor(http: HttpClient);
    filter(list: any[], keyword: string, matchFormatted: boolean, accentInsensitive: boolean, filters: AutoCompleteFilter[]): any[];
    getFormattedListItem(data: any): any;
    /**
     * return remote data from the given source and options, and data path
     */
    getRemoteData(keyword: string): Observable<any[]>;
}
