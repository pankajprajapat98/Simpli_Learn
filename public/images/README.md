# Images Directory

Place your event images here:

- Speaker photos (speaker1.jpg, speaker2.jpg, speaker3.jpg)
- Event logo
- Background images
- Any other visual assets

## Recommended Image Specifications

- Speaker photos: 300x300px (square, high quality)
- Logo: SVG or high-res PNG
- Background images: 1920x1080px minimum

## Usage

Images can be referenced using Next.js Image component:

```tsx
import Image from 'next/image';

<Image 
  src="/images/speaker1.jpg" 
  alt="Speaker Name"
  width={300}
  height={300}
/>
```
