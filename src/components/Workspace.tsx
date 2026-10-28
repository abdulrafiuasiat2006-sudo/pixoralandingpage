import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import JSZip from 'jszip';
import {
  Grid,
  Minimize2,
  Maximize2,
  Crop,
  Upload,
  Download,
  ArrowLeft,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Lock,
  Unlock,
  Check,
  Sparkles,
  RefreshCw,
  Sliders,
  FileImage,
  Home,
} from 'lucide-react';
import { PixoraLogo } from './PixoraLogo';
import { ActiveTool, UserProfile, SplitResult } from '../types';
import heroImg from '../assets/images/hero_sample_landscape_1793173684746.jpg';
import portraitImg from '../assets/images/compressor_sample_portrait_1793173685857.jpg';
import stillLifeImg from '../assets/images/social_creative_composition_1793173686484.jpg';

interface WorkspaceProps {
  initialTool?: ActiveTool;
  user?: UserProfile | null;
}

export const Workspace: React.FC<WorkspaceProps> = ({
  initialTool,
  user,
}) => {
  const { tool: routeTool } = useParams<{ tool?: string }>();
  const navigate = useNavigate();

  const validTools: ActiveTool[] = ['splitter', 'compressor', 'resizer', 'cropper'];
  const resolvedInitialTool: ActiveTool =
    routeTool && validTools.includes(routeTool as ActiveTool)
      ? (routeTool as ActiveTool)
      : initialTool && validTools.includes(initialTool)
      ? initialTool
      : 'splitter';

  const [activeTool, setActiveTool] = useState<ActiveTool>(resolvedInitialTool);

  useEffect(() => {
    if (routeTool && validTools.includes(routeTool as ActiveTool)) {
      setActiveTool(routeTool as ActiveTool);
    }
  }, [routeTool]);

  const handleToolChange = (newTool: ActiveTool) => {
    setActiveTool(newTool);
    navigate(`/tools/${newTool}`);
  };

  const [imageSrc, setImageSrc] = useState<string>(heroImg);
  const [imageName, setImageName] = useState<string>('sample_alpine_sunrise.jpg');
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number }>({
    width: 1920,
    height: 1080,
  });
  const [originalFileSize, setOriginalFileSize] = useState<number>(3840000); // 3.8 MB default

  // Splitter State
  const [splitCols, setSplitCols] = useState<number>(3);
  const [splitRows, setSplitRows] = useState<number>(3);
  const [splitResults, setSplitResults] = useState<SplitResult[]>([]);
  const [isSplitting, setIsSplitting] = useState<boolean>(false);

  // Compressor State
  const [compressQuality, setCompressQuality] = useState<number>(80);
  const [compressFormat, setCompressFormat] = useState<'image/jpeg' | 'image/webp' | 'image/png'>('image/jpeg');
  const [compressedDataUrl, setCompressedDataUrl] = useState<string | null>(null);
  const [compressedBytes, setCompressedBytes] = useState<number | null>(null);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);

  // Resizer State
  const [resizeWidth, setResizeWidth] = useState<number>(1080);
  const [resizeHeight, setResizeHeight] = useState<number>(1080);
  const [lockAspect, setLockAspect] = useState<boolean>(true);
  const [scalePercent, setScalePercent] = useState<number>(100);

  // Cropper State
  const [cropAspect, setCropAspect] = useState<'free' | '1:1' | '4:5' | '16:9' | '9:16'>('1:1');
  const [cropZoom, setCropZoom] = useState<number>(1);
  const [cropRotation, setCropRotation] = useState<number>(0);
  const [cropOffsetX, setCropOffsetX] = useState<number>(0);
  const [cropOffsetY, setCropOffsetY] = useState<number>(0);
  const [showGridGuide, setShowGridGuide] = useState<boolean>(true);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageElementRef = useRef<HTMLImageElement>(null);

  // Measure loaded image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      setImageDimensions({ width: img.naturalWidth || 1920, height: img.naturalHeight || 1080 });
      setResizeWidth(img.naturalWidth || 1080);
      setResizeHeight(img.naturalHeight || 1080);
    };
  }, [imageSrc]);

  // Handle local file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageName(file.name);
      setOriginalFileSize(file.size);
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageSrc(event.target.result as string);
          setSplitResults([]);
          setCompressedDataUrl(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Sample image switcher
  const handleLoadSample = (sampleType: 'landscape' | 'portrait' | 'stillLife') => {
    if (sampleType === 'landscape') {
      setImageSrc(heroImg);
      setImageName('alpine_sunrise.jpg');
      setOriginalFileSize(3840000);
    } else if (sampleType === 'portrait') {
      setImageSrc(portraitImg);
      setImageName('editorial_portrait.jpg');
      setOriginalFileSize(4120000);
    } else {
      setImageSrc(stillLifeImg);
      setImageName('travertine_still_life.jpg');
      setOriginalFileSize(2950000);
    }
    setSplitResults([]);
    setCompressedDataUrl(null);
  };

  // --- TOOL 1: IMAGE SPLITTER ENGINE ---
  const handleExecuteSplit = () => {
    setIsSplitting(true);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      const tileWidth = Math.floor(img.width / splitCols);
      const tileHeight = Math.floor(img.height / splitRows);
      const tiles: SplitResult[] = [];

      for (let r = 0; r < splitRows; r++) {
        for (let c = 0; c < splitCols; c++) {
          const canvas = document.createElement('canvas');
          canvas.width = tileWidth;
          canvas.height = tileHeight;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(
              img,
              c * tileWidth,
              r * tileHeight,
              tileWidth,
              tileHeight,
              0,
              0,
              tileWidth,
              tileHeight
            );
            const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
            tiles.push({
              id: `tile-${r + 1}-${c + 1}`,
              row: r + 1,
              col: c + 1,
              dataUrl,
              width: tileWidth,
              height: tileHeight,
            });
          }
        }
      }
      setSplitResults(tiles);
      setIsSplitting(false);
    };
  };

  const handleDownloadSingleTile = (tile: SplitResult) => {
    const link = document.createElement('a');
    link.download = `pixora_tile_r${tile.row}_c${tile.col}.jpg`;
    link.href = tile.dataUrl;
    link.click();
  };

  const handleDownloadAllTilesZip = async () => {
    if (splitResults.length === 0) return;
    const zip = new JSZip();
    splitResults.forEach((tile) => {
      const base64Data = tile.dataUrl.replace(/^data:image\/jpeg;base64,/, '');
      zip.file(`pixora_tile_${tile.row}_${tile.col}.jpg`, base64Data, { base64: true });
    });
    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `pixora_split_${splitRows}x${splitCols}_grid.zip`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  // --- TOOL 2: IMAGE COMPRESSOR ENGINE ---
  const handleExecuteCompression = () => {
    setIsCompressing(true);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              setCompressedBytes(blob.size);
              const url = URL.createObjectURL(blob);
              setCompressedDataUrl(url);
            }
            setIsCompressing(false);
          },
          compressFormat,
          compressQuality / 100
        );
      }
    };
  };

  useEffect(() => {
    if (activeTool === 'compressor') {
      handleExecuteCompression();
    }
  }, [activeTool, compressQuality, compressFormat, imageSrc]);

  const handleDownloadCompressed = () => {
    if (!compressedDataUrl) return;
    const ext = compressFormat === 'image/webp' ? 'webp' : compressFormat === 'image/png' ? 'png' : 'jpg';
    const link = document.createElement('a');
    link.download = `pixora_compressed_${imageName.replace(/\.[^/.]+$/, '')}.${ext}`;
    link.href = compressedDataUrl;
    link.click();
  };

  // --- TOOL 3: IMAGE RESIZER ENGINE ---
  const handleWidthChange = (val: number) => {
    setResizeWidth(val);
    if (lockAspect && imageDimensions.width > 0) {
      const ratio = imageDimensions.height / imageDimensions.width;
      setResizeHeight(Math.round(val * ratio));
    }
  };

  const handleHeightChange = (val: number) => {
    setResizeHeight(val);
    if (lockAspect && imageDimensions.height > 0) {
      const ratio = imageDimensions.width / imageDimensions.height;
      setResizeWidth(Math.round(val * ratio));
    }
  };

  const handleApplyPreset = (w: number, h: number) => {
    setResizeWidth(w);
    setResizeHeight(h);
  };

  const handleDownloadResized = () => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = resizeWidth;
      canvas.height = resizeHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, resizeWidth, resizeHeight);
        const url = canvas.toDataURL('image/jpeg', 0.92);
        const link = document.createElement('a');
        link.download = `pixora_resized_${resizeWidth}x${resizeHeight}.jpg`;
        link.href = url;
        link.click();
      }
    };
  };

  // --- TOOL 4: IMAGE CROPPER ENGINE ---
  const handleDownloadCropped = () => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      // Calculate crop dimensions based on selected ratio
      let targetW = img.width;
      let targetH = img.height;

      if (cropAspect === '1:1') {
        const minSide = Math.min(img.width, img.height);
        targetW = minSide;
        targetH = minSide;
      } else if (cropAspect === '4:5') {
        targetW = Math.min(img.width, Math.floor(img.height * 0.8));
        targetH = Math.floor(targetW / 0.8);
      } else if (cropAspect === '16:9') {
        targetW = img.width;
        targetH = Math.floor(img.width * (9 / 16));
        if (targetH > img.height) {
          targetH = img.height;
          targetW = Math.floor(img.height * (16 / 9));
        }
      } else if (cropAspect === '9:16') {
        targetH = img.height;
        targetW = Math.floor(img.height * (9 / 16));
      }

      const canvas = document.createElement('canvas');
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((cropRotation * Math.PI) / 180);
        ctx.scale(cropZoom, cropZoom);

        // Center crop source
        const startX = (img.width - targetW) / 2;
        const startY = (img.height - targetH) / 2;

        ctx.drawImage(img, startX, startY, targetW, targetH, -targetW / 2, -targetH / 2, targetW, targetH);
        ctx.restore();

        const url = canvas.toDataURL('image/jpeg', 0.95);
        const link = document.createElement('a');
        link.download = `pixora_cropped_${targetW}x${targetH}.jpg`;
        link.href = url;
        link.click();
      }
    };
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#FAF8F3] flex flex-col">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Top Application Bar */}
      <header className="h-16 border-b border-white/10 px-4 sm:px-6 flex items-center justify-between gap-4 bg-[#141414] shrink-0">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition-colors py-1.5 px-2.5 rounded-md hover:bg-white/5"
            aria-label="Back to Website Home"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF7A1A]" />
            <span className="hidden sm:inline">Back to Website</span>
          </Link>
          <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
          <Link to="/" aria-label="PIXORA Home">
            <PixoraLogo variant="light" size="sm" />
          </Link>
        </div>

        {/* Workspace Tool Switcher Tabs */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => handleToolChange('splitter')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-colors cursor-pointer ${
              activeTool === 'splitter'
                ? 'bg-[#FF7A1A] text-white font-bold shadow'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Splitter</span>
          </button>

          <button
            onClick={() => handleToolChange('compressor')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-colors cursor-pointer ${
              activeTool === 'compressor'
                ? 'bg-[#FF7A1A] text-white font-bold shadow'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Compressor</span>
          </button>

          <button
            onClick={() => handleToolChange('resizer')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-colors cursor-pointer ${
              activeTool === 'resizer'
                ? 'bg-[#FF7A1A] text-white font-bold shadow'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Resizer</span>
          </button>

          <button
            onClick={() => handleToolChange('cropper')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-colors cursor-pointer ${
              activeTool === 'cropper'
                ? 'bg-[#FF7A1A] text-white font-bold shadow'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Crop className="w-3.5 h-3.5" />
            <span>Cropper</span>
          </button>
        </div>

        {/* Right side: File info and upload */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors border border-white/10 cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span className="hidden sm:inline">Upload Image</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Grid */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left / Center: Interactive Canvas Viewport */}
        <div className="flex-1 bg-[#0F0F0F] p-4 sm:p-6 flex flex-col justify-between overflow-y-auto">
          {/* Top Canvas Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-2 border-b border-white/5 text-xs">
            <div className="flex items-center gap-3 text-white/70">
              <span className="font-mono text-white/90">{imageName}</span>
              <span>·</span>
              <span className="font-mono">{imageDimensions.width} × {imageDimensions.height} px</span>
            </div>

            {/* Quick Demo Sample Picker */}
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-[11px]">Load Sample:</span>
              <button
                onClick={() => handleLoadSample('landscape')}
                className="px-2 py-0.5 bg-white/5 hover:bg-white/10 rounded text-[11px] text-white/80 cursor-pointer"
              >
                Alpine
              </button>
              <button
                onClick={() => handleLoadSample('portrait')}
                className="px-2 py-0.5 bg-white/5 hover:bg-white/10 rounded text-[11px] text-white/80 cursor-pointer"
              >
                Portrait
              </button>
              <button
                onClick={() => handleLoadSample('stillLife')}
                className="px-2 py-0.5 bg-white/5 hover:bg-white/10 rounded text-[11px] text-white/80 cursor-pointer"
              >
                Still Life
              </button>
            </div>
          </div>

          {/* Central Image Viewport */}
          <div className="flex-1 flex items-center justify-center p-2 min-h-[360px]">
            <div className="relative max-w-full max-h-[62vh] rounded-lg overflow-hidden border border-white/15 bg-black/40 flex items-center justify-center shadow-2xl">
              {/* Splitter Viewport Overlay */}
              {activeTool === 'splitter' && (
                <div className="relative">
                  <img
                    ref={imageElementRef}
                    src={imageSrc}
                    alt="Active canvas"
                    referrerPolicy="no-referrer"
                    className="max-h-[58vh] max-w-full object-contain block"
                  />
                  <div
                    className="absolute inset-0 p-1 pointer-events-none"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${splitCols}, minmax(0, 1fr))`,
                      gridTemplateRows: `repeat(${splitRows}, minmax(0, 1fr))`,
                      gap: '2px',
                    }}
                  >
                    {Array.from({ length: splitCols * splitRows }).map((_, idx) => (
                      <div
                        key={idx}
                        className="border border-[#FF7A1A]/90 bg-[#FF7A1A]/10 rounded-sm flex items-start justify-between p-1.5"
                      >
                        <span className="text-[10px] font-mono bg-[#1A1A1A]/90 text-white px-1.5 py-0.5 rounded shadow">
                          T_{idx + 1}
                        </span>
                        <span className="text-[9px] font-mono text-white/70">
                          {Math.round(imageDimensions.width / splitCols)}×{Math.round(imageDimensions.height / splitRows)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Compressor Viewport Overlay */}
              {activeTool === 'compressor' && (
                <div className="relative">
                  <img
                    src={compressedDataUrl || imageSrc}
                    alt="Compressed canvas"
                    referrerPolicy="no-referrer"
                    className="max-h-[58vh] max-w-full object-contain block"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#1A1A1A]/90 border border-white/10 px-3 py-1.5 rounded text-xs font-mono">
                    <span className="text-white/60">Quality: </span>
                    <span className="text-[#FF7A1A] font-bold">{compressQuality}%</span>
                    <span className="mx-2 text-white/30">|</span>
                    <span className="text-white/60">Format: </span>
                    <span className="text-white">{compressFormat.replace('image/', '').toUpperCase()}</span>
                  </div>
                </div>
              )}

              {/* Resizer Viewport Overlay */}
              {activeTool === 'resizer' && (
                <div className="relative p-4 flex items-center justify-center">
                  <div
                    style={{
                      aspectRatio: `${resizeWidth} / ${resizeHeight}`,
                      maxHeight: '52vh',
                      maxWidth: '100%',
                    }}
                    className="relative border-2 border-[#FF7A1A] rounded overflow-hidden shadow"
                  >
                    <img
                      src={imageSrc}
                      alt="Resizing preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-[#1A1A1A]/90 px-2 py-1 rounded text-xs font-mono text-white">
                      Target: {resizeWidth} × {resizeHeight} px
                    </div>
                  </div>
                </div>
              )}

              {/* Cropper Viewport Overlay */}
              {activeTool === 'cropper' && (
                <div className="relative overflow-hidden flex items-center justify-center p-4">
                  <div
                    className="relative border-2 border-white rounded overflow-hidden transition-all duration-200"
                    style={{
                      aspectRatio:
                        cropAspect === '1:1'
                          ? '1/1'
                          : cropAspect === '4:5'
                          ? '4/5'
                          : cropAspect === '16:9'
                          ? '16/9'
                          : cropAspect === '9:16'
                          ? '9/16'
                          : `${imageDimensions.width} / ${imageDimensions.height}`,
                      maxHeight: '52vh',
                      maxWidth: '100%',
                      transform: `rotate(${cropRotation}deg) scale(${cropZoom})`,
                    }}
                  >
                    <img
                      src={imageSrc}
                      alt="Cropping frame"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover block"
                    />
                    {showGridGuide && (
                      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                        <div className="border-r border-b border-white/40" />
                        <div className="border-r border-b border-white/40" />
                        <div className="border-b border-white/40" />
                        <div className="border-r border-b border-white/40" />
                        <div className="border-r border-b border-white/40" />
                        <div className="border-b border-white/40" />
                        <div className="border-r border-b border-white/40" />
                        <div className="border-r border-b border-white/40" />
                        <div />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Generated Tiles Preview Bar (if splitter executed) */}
          {activeTool === 'splitter' && splitResults.length > 0 && (
            <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#FF7A1A] font-bold">
                  Generated {splitResults.length} Slices Ready:
                </span>
                <button
                  onClick={handleDownloadAllTilesZip}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF7A1A] hover:bg-[#e66c14] text-white rounded text-xs font-bold cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download All as ZIP
                </button>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {splitResults.map((t) => (
                  <div
                    key={t.id}
                    className="relative shrink-0 w-20 h-20 bg-black/60 rounded border border-white/20 overflow-hidden group cursor-pointer"
                    onClick={() => handleDownloadSingleTile(t)}
                    title={`Click to download tile R${t.row} C${t.col}`}
                  >
                    <img src={t.dataUrl} alt={`Tile ${t.id}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-[10px]">
                      <Download className="w-3.5 h-3.5 text-[#FF7A1A] mb-1" />
                      <span>R{t.row}·C{t.col}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: Active Tool Controls */}
        <aside className="w-full lg:w-96 bg-[#171717] border-t lg:border-t-0 lg:border-l border-white/10 p-6 flex flex-col justify-between shrink-0 overflow-y-auto">
          {/* TOOL 1: SPLITTER CONTROLS */}
          {activeTool === 'splitter' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7A1A]">
                  Tool Settings
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Image Splitter</h3>
                <p className="text-xs text-white/70 mt-1">
                  Divide your image into tiles for Instagram carousels and mosaics.
                </p>
              </div>

              {/* Quick Grid Presets */}
              <div className="space-y-2">
                <label className="block text-xs font-mono text-white/60">QUICK PRESETS</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      setSplitCols(3);
                      setSplitRows(3);
                    }}
                    className={`py-2 px-1 text-xs rounded border text-center transition-colors cursor-pointer ${
                      splitCols === 3 && splitRows === 3
                        ? 'bg-[#FF7A1A] text-white border-[#FF7A1A] font-bold'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    3×3 Grid
                    <span className="block text-[10px] opacity-70">9 IG Tiles</span>
                  </button>
                  <button
                    onClick={() => {
                      setSplitCols(3);
                      setSplitRows(1);
                    }}
                    className={`py-2 px-1 text-xs rounded border text-center transition-colors cursor-pointer ${
                      splitCols === 3 && splitRows === 1
                        ? 'bg-[#FF7A1A] text-white border-[#FF7A1A] font-bold'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    3×1 Strip
                    <span className="block text-[10px] opacity-70">Panorama</span>
                  </button>
                  <button
                    onClick={() => {
                      setSplitCols(2);
                      setSplitRows(2);
                    }}
                    className={`py-2 px-1 text-xs rounded border text-center transition-colors cursor-pointer ${
                      splitCols === 2 && splitRows === 2
                        ? 'bg-[#FF7A1A] text-white border-[#FF7A1A] font-bold'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    2×2 Quad
                    <span className="block text-[10px] opacity-70">4 Slices</span>
                  </button>
                </div>
              </div>

              {/* Custom Sliders for Columns & Rows */}
              <div className="space-y-4 pt-3 border-t border-white/10">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/70">Columns (Vertical cuts):</span>
                    <span className="font-mono text-[#FF7A1A] font-bold">{splitCols}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={splitCols}
                    onChange={(e) => setSplitCols(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/20 rounded accent-[#FF7A1A] cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/70">Rows (Horizontal cuts):</span>
                    <span className="font-mono text-[#FF7A1A] font-bold">{splitRows}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={splitRows}
                    onChange={(e) => setSplitRows(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/20 rounded accent-[#FF7A1A] cursor-pointer"
                  />
                </div>
              </div>

              <div className="bg-black/30 p-3 rounded border border-white/5 text-xs font-mono space-y-1">
                <div className="flex justify-between text-white/60">
                  <span>Total Generated Tiles:</span>
                  <span className="text-white font-bold">{splitCols * splitRows}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Tile Resolution:</span>
                  <span className="text-[#FF7A1A]">
                    {Math.round(imageDimensions.width / splitCols)} × {Math.round(imageDimensions.height / splitRows)} px
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={handleExecuteSplit}
                  disabled={isSplitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors shadow-sm cursor-pointer"
                >
                  <Grid className="w-4 h-4" />
                  <span>{isSplitting ? 'Slicing Image...' : 'Slice Into Tiles'}</span>
                </button>

                {splitResults.length > 0 && (
                  <button
                    onClick={handleDownloadAllTilesZip}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors cursor-pointer border border-white/10"
                  >
                    <Download className="w-4 h-4 text-[#FF7A1A]" />
                    <span>Download All ({splitResults.length}) as ZIP</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* TOOL 2: COMPRESSOR CONTROLS */}
          {activeTool === 'compressor' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7A1A]">
                  Tool Settings
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Image Compressor</h3>
                <p className="text-xs text-white/70 mt-1">
                  Reduce image size while keeping clean perceptual sharpness.
                </p>
              </div>

              {/* Quality Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/70">Quality Factor:</span>
                  <span className="font-mono text-[#FF7A1A] font-bold">{compressQuality}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="98"
                  value={compressQuality}
                  onChange={(e) => setCompressQuality(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded accent-[#FF7A1A] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-white/40">
                  <span>Smallest Size</span>
                  <span>Balanced (80%)</span>
                  <span>Near Lossless</span>
                </div>
              </div>

              {/* Target Format */}
              <div className="space-y-2 pt-3 border-t border-white/10">
                <label className="block text-xs font-mono text-white/60">EXPORT FORMAT</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCompressFormat('image/jpeg')}
                    className={`py-2 px-1 text-xs rounded border text-center transition-colors cursor-pointer ${
                      compressFormat === 'image/jpeg'
                        ? 'bg-[#FF7A1A] text-white border-[#FF7A1A] font-bold'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    JPEG
                  </button>
                  <button
                    onClick={() => setCompressFormat('image/webp')}
                    className={`py-2 px-1 text-xs rounded border text-center transition-colors cursor-pointer ${
                      compressFormat === 'image/webp'
                        ? 'bg-[#FF7A1A] text-white border-[#FF7A1A] font-bold'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    WebP
                  </button>
                  <button
                    onClick={() => setCompressFormat('image/png')}
                    className={`py-2 px-1 text-xs rounded border text-center transition-colors cursor-pointer ${
                      compressFormat === 'image/png'
                        ? 'bg-[#FF7A1A] text-white border-[#FF7A1A] font-bold'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    PNG
                  </button>
                </div>
              </div>

              {/* Live Savings Box */}
              <div className="bg-black/40 p-4 rounded-lg border border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-white/50">LIVE REDUCTION METRICS</div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/70">Original Size:</span>
                  <span className="font-mono text-white">{(originalFileSize / 1024 / 1024).toFixed(2)} MB</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/70">Compressed Size:</span>
                  <span className="font-mono text-[#FF7A1A] font-bold">
                    {compressedBytes ? `${(compressedBytes / 1024).toFixed(1)} KB` : 'Computing...'}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-white/70">Net Savings:</span>
                  <span className="font-mono text-green-400 font-bold">
                    {compressedBytes
                      ? `-${Math.max(0, Math.round((1 - compressedBytes / originalFileSize) * 100))}%`
                      : '--'}
                  </span>
                </div>
              </div>

              <button
                onClick={handleDownloadCompressed}
                disabled={isCompressing || !compressedDataUrl}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Compressed File</span>
              </button>
            </div>
          )}

          {/* TOOL 3: RESIZER CONTROLS */}
          {activeTool === 'resizer' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7A1A]">
                  Tool Settings
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Image Resizer</h3>
                <p className="text-xs text-white/70 mt-1">
                  Scale image dimensions by pixels or standard platform presets.
                </p>
              </div>

              {/* Dimension Inputs */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-white/60">TARGET DIMENSIONS</label>
                  <button
                    onClick={() => setLockAspect(!lockAspect)}
                    className="flex items-center gap-1 text-[11px] text-white/70 hover:text-white"
                  >
                    {lockAspect ? (
                      <>
                        <Lock className="w-3.5 h-3.5 text-[#FF7A1A]" />
                        <span>Aspect Locked</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-3.5 h-3.5 text-white/50" />
                        <span>Free Aspect</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="block text-[11px] text-white/50 mb-1">Width (px)</span>
                    <input
                      type="number"
                      value={resizeWidth}
                      onChange={(e) => handleWidthChange(Number(e.target.value))}
                      className="w-full px-3 py-2 text-sm bg-black/40 border border-white/20 rounded text-white font-mono"
                    />
                  </div>
                  <div>
                    <span className="block text-[11px] text-white/50 mb-1">Height (px)</span>
                    <input
                      type="number"
                      value={resizeHeight}
                      onChange={(e) => handleHeightChange(Number(e.target.value))}
                      className="w-full px-3 py-2 text-sm bg-black/40 border border-white/20 rounded text-white font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Platform Presets */}
              <div className="space-y-2 pt-3 border-t border-white/10">
                <label className="block text-xs font-mono text-white/60">QUICK PLATFORM PRESETS</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => handleApplyPreset(1080, 1080)}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-left transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-white block">1080 × 1080</span>
                    <span className="text-[10px] text-white/60">Instagram Square</span>
                  </button>
                  <button
                    onClick={() => handleApplyPreset(1080, 1920)}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-left transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-white block">1080 × 1920</span>
                    <span className="text-[10px] text-white/60">Story / Reel / TikTok</span>
                  </button>
                  <button
                    onClick={() => handleApplyPreset(1280, 720)}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-left transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-white block">1280 × 720</span>
                    <span className="text-[10px] text-white/60">YouTube Thumbnail</span>
                  </button>
                  <button
                    onClick={() => handleApplyPreset(1920, 1080)}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-left transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-white block">1920 × 1080</span>
                    <span className="text-[10px] text-white/60">Web Full HD</span>
                  </button>
                </div>
              </div>

              <button
                onClick={handleDownloadResized}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Export Resized Image</span>
              </button>
            </div>
          )}

          {/* TOOL 4: CROPPER CONTROLS */}
          {activeTool === 'cropper' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7A1A]">
                  Tool Settings
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Image Cropper</h3>
                <p className="text-xs text-white/70 mt-1">
                  Adjust composition, framing ratios, zoom, and orientation.
                </p>
              </div>

              {/* Aspect Ratio Presets */}
              <div className="space-y-2">
                <label className="block text-xs font-mono text-white/60">ASPECT RATIO</label>
                <div className="grid grid-cols-4 gap-1.5">
                  {(['1:1', '4:5', '16:9', '9:16'] as const).map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => setCropAspect(ratio)}
                      className={`py-2 text-xs rounded border text-center transition-colors cursor-pointer ${
                        cropAspect === ratio
                          ? 'bg-[#FF7A1A] text-white border-[#FF7A1A] font-bold'
                          : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              {/* Zoom & Rotation */}
              <div className="space-y-4 pt-3 border-t border-white/10">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/70">Zoom Level:</span>
                    <span className="font-mono text-[#FF7A1A]">{cropZoom.toFixed(1)}×</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="2.5"
                    step="0.1"
                    value={cropZoom}
                    onChange={(e) => setCropZoom(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/20 rounded accent-[#FF7A1A] cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/70">Rotation:</span>
                  <button
                    onClick={() => setCropRotation((prev) => (prev + 90) % 360)}
                    className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-xs text-white cursor-pointer"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-[#FF7A1A]" />
                    <span>{cropRotation}° Rotate</span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/70">Rule of Thirds Guide:</span>
                  <input
                    type="checkbox"
                    checked={showGridGuide}
                    onChange={(e) => setShowGridGuide(e.target.checked)}
                    className="accent-[#FF7A1A] w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>

              <button
                onClick={handleDownloadCropped}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors shadow-sm cursor-pointer"
              >
                <Crop className="w-4 h-4" />
                <span>Crop & Export Image</span>
              </button>
            </div>
          )}

          {/* Privacy Footnote */}
          <div className="pt-6 border-t border-white/10 text-[11px] text-white/40 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span>Processing directly in browser memory</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Workspace;
