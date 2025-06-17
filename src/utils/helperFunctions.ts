export const idExtractorFromUrl = (url: string) => url.split('/').filter(Boolean).pop()
