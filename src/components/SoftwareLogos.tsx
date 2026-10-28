import React from 'react';

interface SoftwareLogoProps {
  className?: string;
  size?: number | string;
  showName?: boolean;
}

/**
 * Autodesk AutoCAD Official Vector Logo
 * Features the signature faceted 3D folded origami 'A' emblem in AutoCAD crimson.
 */
export const AutoCADLogo: React.FC<SoftwareLogoProps> = ({ className = 'w-7 h-7', size }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Autodesk AutoCAD"
  >
    <rect width="64" height="64" rx="14" fill="#0A0A0A" />
    <g transform="translate(10, 10)">
      {/* Top Left Ridge */}
      <path d="M7 38L22 4L28 17L14 38H7Z" fill="#E51937" />
      {/* Right Main Arch */}
      <path d="M22 4L37 38H29L22 21L18 29L28 17L22 4Z" fill="#B51025" />
      {/* Crossbar & Facet Highlight */}
      <path d="M14 38L21 23L27 34L24 38H14Z" fill="#FF4B55" />
      {/* Deep Shadow Facet */}
      <path d="M22 21L29 38H37L22 4V21Z" fill="#7A0012" opacity="0.4" />
      {/* Base Footing Accent */}
      <path d="M7 38L14 38L11 43L6 43L7 38Z" fill="#B51025" />
      <path d="M29 38L37 38L39 43L31 43L29 38Z" fill="#E51937" />
    </g>
  </svg>
);

/**
 * Autodesk 3ds Max Official Vector Logo
 * Features the signature faceted 3D origami 'M' emblem in 3ds Max cyan/teal.
 */
export const ThreeDsMaxLogo: React.FC<SoftwareLogoProps> = ({ className = 'w-7 h-7', size }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Autodesk 3ds Max"
  >
    <rect width="64" height="64" rx="14" fill="#0A0A0A" />
    <g transform="translate(10, 11)">
      {/* Left Fold */}
      <path d="M6 36L12 6L21 21L14 36H6Z" fill="#0696D7" />
      {/* Center Peak & Valley */}
      <path d="M12 6L23 23L34 6L38 12L25 31L21 21L12 6Z" fill="#00C5CD" />
      {/* Right Fold */}
      <path d="M34 6L40 36H32L28 24L38 12L34 6Z" fill="#007DA3" />
      {/* Deep Shadow Facet */}
      <path d="M21 21L25 31L32 36H24L20 28L21 21Z" fill="#004A66" />
      {/* Base Footings */}
      <path d="M6 36L14 36L12 41L4 41L6 36Z" fill="#007DA3" />
      <path d="M32 36L40 36L42 41L34 41L32 36Z" fill="#0696D7" />
    </g>
  </svg>
);

/**
 * Chaos V-Ray Official Vector Logo
 * Features the signature Chaos red cube with the iconic black sphere and V-Ray emblem.
 */
export const VRayLogo: React.FC<SoftwareLogoProps> = ({ className = 'w-7 h-7', size }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Chaos V-Ray"
  >
    <rect width="64" height="64" rx="14" fill="#141416" />
    <g transform="translate(10, 10)">
      {/* Top Face of Isometric Cube */}
      <path d="M22 4L39 13.5L22 23L5 13.5L22 4Z" fill="#FF3B30" />
      {/* Left Face of Isometric Cube */}
      <path d="M5 13.5L22 23V42L5 32.5V13.5Z" fill="#D31D24" />
      {/* Right Face of Isometric Cube */}
      <path d="M22 23L39 13.5V32.5L22 42V23Z" fill="#9C0A10" />
      
      {/* Iconic V-Ray Cutout Corner / Inset */}
      <path d="M22 17L32 22.5V33.5L22 39L12 33.5V22.5L22 17Z" fill="#1A1A1E" />
      
      {/* Chaos 3D Sphere Inside */}
      <circle cx="22" cy="28" r="7.5" fill="url(#vraySphereGrad)" />
      {/* Specular Highlight on Sphere */}
      <ellipse cx="20" cy="25" rx="2.5" ry="1.6" fill="#FFFFFF" fillOpacity="0.8" />

      {/* Signature V-Ray Stylized Letter Mark */}
      <path
        d="M17 19.5L22 29L27 19.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </g>
    <defs>
      <radialGradient id="vraySphereGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#4A4A52" />
        <stop offset="50%" stopColor="#1E1E22" />
        <stop offset="100%" stopColor="#08080A" />
      </radialGradient>
    </defs>
  </svg>
);

/**
 * Adobe Photoshop Official App Icon
 * Features the signature rounded deep-navy tile with cyan border and official 'Ps' glyph.
 */
export const PhotoshopLogo: React.FC<SoftwareLogoProps> = ({ className = 'w-7 h-7', size }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Adobe Photoshop"
  >
    {/* Adobe App Container */}
    <rect width="64" height="64" rx="14" fill="#001E36" />
    <rect x="1" y="1" width="62" height="62" rx="13" stroke="#31A8FF" strokeWidth="1.5" strokeOpacity="0.45" />

    {/* Letter 'P' */}
    <path
      d="M17 44V20H26C29.866 20 33 22.4624 33 26.5C33 30.5376 29.866 33 26 33H21.5V44H17ZM21.5 29H25.5C27.5 29 29 27.9 29 26.5C29 25.1 27.5 24 25.5 24H21.5V29Z"
      fill="#31A8FF"
    />

    {/* Letter 's' */}
    <path
      d="M36 39.5C36.8 40.5 38.3 41.2 40.1 41.2C42.4 41.2 43.8 40 43.8 38.3C43.8 34.6 36.4 35.5 36.4 29.8C36.4 26.3 39.2 24 43.3 24C45.3 24 47 24.6 48 25.6L46.4 28.5C45.6 27.7 44.5 27.2 43.2 27.2C41.1 27.2 39.9 28.3 39.9 29.6C39.9 33.1 47.3 32.1 47.3 37.9C47.3 41.6 44.3 44 40 44C37.5 44 35.3 43.2 34 41.8L36 39.5Z"
      fill="#31A8FF"
    />
  </svg>
);

/**
 * Autodesk Revit Official Vector Logo
 */
export const RevitLogo: React.FC<SoftwareLogoProps> = ({ className = 'w-7 h-7', size }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Autodesk Revit"
  >
    <rect width="64" height="64" rx="14" fill="#0A0A0A" />
    <g transform="translate(12, 11)">
      {/* Left Spine */}
      <path d="M6 38V4H18C26 4 31 8.5 31 16C31 21.5 27.5 25.5 22 27L33 40H23L14 28H6V38H6Z" fill="#0696D7" />
      <path d="M14 11H18C21.5 11 23.5 13 23.5 16C23.5 19 21.5 21 18 21H14V11Z" fill="#FFFFFF" />
      {/* 3D Fold highlight */}
      <path d="M18 4L26 12L22 27L14 28V11H18V4Z" fill="#005A9C" opacity="0.3" />
    </g>
  </svg>
);

/**
 * Trimble SketchUp Official Vector Logo
 */
export const SketchUpLogo: React.FC<SoftwareLogoProps> = ({ className = 'w-7 h-7', size }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Trimble SketchUp"
  >
    <rect width="64" height="64" rx="14" fill="#0A0A0A" />
    <g transform="translate(10, 10)">
      {/* Stepped 3D Red Cube */}
      <path d="M22 3L39 12.8V32.4L22 42.2L5 32.4V12.8L22 3Z" fill="#EA212D" />
      {/* Isometric facets */}
      <path d="M22 3L39 12.8L22 22.6L5 12.8L22 3Z" fill="#FF4757" />
      <path d="M22 22.6L39 12.8V32.4L22 42.2V22.6Z" fill="#C01620" />
      <path d="M5 12.8L22 22.6V42.2L5 32.4V12.8Z" fill="#DE1824" />
      {/* White Cutout Stairs */}
      <path d="M14 17L22 12.5L30 17V26L22 30.5L14 26V17Z" fill="#FFFFFF" />
    </g>
  </svg>
);

/**
 * Official WhatsApp Vector Icon
 */
export const WhatsAppIcon: React.FC<SoftwareLogoProps> = ({ className = 'w-4 h-4', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="WhatsApp"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/**
 * Universal Software Logo Renderer
 * Supports all variations of software names used across the site.
 */
export const SoftwareLogo: React.FC<{
  name: string;
  className?: string;
  size?: number | string;
}> = ({ name, className = 'w-7 h-7', size }) => {
  const normalized = name.toLowerCase().replace(/['\s._-]/g, '');

  // Combined 3ds Max + V-Ray + Photoshop course
  if ((normalized.includes('3dsmax') || normalized.includes('3dmax') || normalized.includes('max')) && (normalized.includes('vray') || normalized.includes('photoshop'))) {
    return (
      <div className="flex items-center -space-x-2" title="3D's Max · V-Ray · Photoshop">
        <ThreeDsMaxLogo className={className} size={size} />
        <VRayLogo className={className} size={size} />
        <PhotoshopLogo className={className} size={size} />
      </div>
    );
  }

  if (normalized.includes('autocad') || normalized === 'cad') {
    return <AutoCADLogo className={className} size={size} />;
  }
  if (normalized.includes('3dsmax') || normalized.includes('3dmax') || normalized.includes('max')) {
    return <ThreeDsMaxLogo className={className} size={size} />;
  }
  if (normalized.includes('vray')) {
    return <VRayLogo className={className} size={size} />;
  }
  if (normalized.includes('photoshop') || normalized.includes('ps')) {
    return <PhotoshopLogo className={className} size={size} />;
  }
  if (normalized.includes('revit')) {
    return <RevitLogo className={className} size={size} />;
  }
  if (normalized.includes('sketchup')) {
    return <SketchUpLogo className={className} size={size} />;
  }

  // Fallback badge with subtle dark styling
  return (
    <div
      className={`rounded-lg bg-stone-900 text-stone-200 border border-stone-700 font-bold text-xs flex items-center justify-center shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
};

export const SOFTWARE_BRAND_INFO = [
  {
    id: 'autocad-2d',
    name: 'AutoCAD 2D',
    vendor: 'Autodesk',
    version: '2024 / 2025 Edition',
    logo: AutoCADLogo,
    themeColor: '#E51937',
    badgeText: 'AutoCAD',
    tagline: 'Architectural Drafting & Submission Plans'
  },
  {
    id: '3ds-max',
    name: '3ds Max',
    vendor: 'Autodesk',
    version: '2024 / 2025 Edition',
    logo: ThreeDsMaxLogo,
    themeColor: '#0696D7',
    badgeText: '3ds Max',
    tagline: '3D Spatial Modeling & Custom Furniture'
  },
  {
    id: 'vray',
    name: 'V-Ray',
    vendor: 'Chaos Group',
    version: 'V-Ray 6 for 3ds Max',
    logo: VRayLogo,
    themeColor: '#FF3B30',
    badgeText: 'V-Ray',
    tagline: 'Photorealistic Lighting & PBR Materials'
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    vendor: 'Adobe',
    version: 'CC 2024 / 2025',
    logo: PhotoshopLogo,
    themeColor: '#31A8FF',
    badgeText: 'Photoshop',
    tagline: 'Render Post-Production & Mood Boards'
  }
];
