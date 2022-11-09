declare type VoidElementKeys = 'area' | 'base' | 'br' | 'col' | 'embed' | 'hr' | 'img' | 'input' | 'link' | 'meta' | 'param' | 'source' | 'track' | 'wbr';

declare const voidElements: Record<VoidElementKeys, true>;

export default voidElements;
