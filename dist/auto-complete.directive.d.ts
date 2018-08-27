import { AfterViewInit, ComponentFactoryResolver, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms';
import { AutoCompleteFilter } from './auto-complete.filter';
/**
 * display auto-complete section with input and dropdown list when it is clicked
 */
export declare class NguiAutoCompleteDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private resolver;
    viewContainerRef: ViewContainerRef;
    private parentForm;
    outerInputElement: HTMLInputElement;
    autocomplete: boolean;
    autoCompletePlaceholder: string;
    source: any;
    pathToData: string;
    minChars: number;
    displayPropertyName: string;
    acceptUserInput: boolean;
    maxNumList: string;
    selectValueOf: string;
    loadingTemplate: any;
    listFormatter: any;
    loadingText: string;
    blankOptionText: string;
    noMatchFoundText: string;
    valueFormatter: any;
    tabToSelect: boolean;
    selectOnBlur: boolean;
    matchFormatted: boolean;
    autoSelectFirstItem: boolean;
    openOnFocus: boolean;
    closeOnFocusOut: boolean;
    reFocusAfterSelect: boolean;
    headerItemTemplate: any;
    ignoreAccents: boolean;
    filters: AutoCompleteFilter[];
    ngModel: string;
    form: FormGroup;
    formControlName: string;
    formControl: AbstractControl;
    extFormControl: AbstractControl;
    zIndex: string;
    isRtl: boolean;
    ngModelChange: EventEmitter<{}>;
    valueChanged: EventEmitter<{}>;
    customSelected: EventEmitter<{}>;
    private componentRef;
    private wrapperEl;
    private el;
    private acDropdownEl;
    private inputEl;
    private revertValue;
    private dropdownJustHidden;
    private scheduledBlurHandler;
    private documentClickListener;
    private filterClicked;
    constructor(resolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, parentForm: ControlContainer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    blurEventHandler: (e: any) => void;
    showAutoCompleteDropdown: (event?: any) => void;
    blurHandler(event: any): void;
    hideAutoCompleteDropdown: (event?: any) => void;
    styleAutoCompleteDropdown: () => void;
    setToStringFunction(item: any): any;
    selectNewValue: (item: any) => void;
    filterSelected: (text: string) => void;
    selectCustomValue: (text: string) => void;
    enterNewText: (value: any) => void;
    private keydownEventHandler;
    private inputEventHandler;
    private renderValue(item);
    private focusInput();
}
