import PDFKitReferenceMock from "../node-signpdf/pdf-kit-reference-mock";

export interface Widget {
  Type: string,
  Subtype: string,
  FT: string,
  Rect: number[],
  V: PDFKitReferenceMock,
  T: object,
  F: number,
  P: PDFKitReferenceMock,
  AP?: string | undefined,
  DA?: String | undefined
}
