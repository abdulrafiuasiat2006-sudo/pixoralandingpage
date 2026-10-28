export type ActiveTool = 'splitter' | 'compressor' | 'resizer' | 'cropper';

export type PageRoute = 'landing' | 'workspace' | 'login' | 'register';

export interface UserProfile {
  email: string;
  name: string;
  isGuest?: boolean;
}

export interface SplitResult {
  id: string;
  row: number;
  col: number;
  dataUrl: string;
  width: number;
  height: number;
}
