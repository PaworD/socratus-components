// Socratus Core 2021

/**
 * PdfService interface
 * @author Javlon Khalimjonov <khalimjonov2000@gmail.com>
 */
export interface IPdfService<T> {
    /**
     * This function is eligible to generate new pdf based on given PdfType
     * @author Javlon Khalimjonov <khalimjonov2000@gmail.com>
     */
    generate(): T
}

/**
 * Pdf Service generic class.
 *
 * Pass on required type to class to instantiate particular PdfService
 * @inheritDoc
 */
export class PdfService<T> implements IPdfService<T> {

    private readonly type: T

    constructor(type: T) {
        this.type = type
    }


    public generate(): T {
        return this.type
    }

}