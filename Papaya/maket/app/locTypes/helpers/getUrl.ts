export type TurlState = {
    pngUrl?: string;
    svgUrl?: string;
    webpUrl?: string;
};
export type TgetUrl = Promise<TurlState>;

export type TgetUrlParams = {
    pathPng?: string;
    pathSvg?: string;
    pathWebp?: string;
};

export type TpropsGetUrl = {
    imageType: 'image' | 'core/icon';
    imageName: string;
};
export type TgetUrlPNGProps = TpropsGetUrl & { sourseMod: boolean; svg?: never };
export type TgetUrlSVGProps = TpropsGetUrl & { svg: boolean; sourseMod?: never };
