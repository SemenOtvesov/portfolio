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

export type Tprops = {
    imageType: 'image' | 'icon' | 'bikeImage';
    imageName: string;
};
export type TgetUrlPNGProps = Tprops & { sourseMod: boolean; svg?: never };
export type TgetUrlSVGProps = Tprops & { svg: boolean; sourseMod?: never };
