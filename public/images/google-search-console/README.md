# Google Search Console Images

## How to Add Your Screenshots

1. **Take screenshots from your Google Search Console**
   - Performance Overview
   - Top Search Queries
   - Top Pages by Traffic
   - Device Breakdown (Mobile vs Desktop)

2. **Save your images in this folder** with these names:
   - `performance-overview.png` (or .jpg)
   - `top-queries.png`
   - `top-pages.png`
   - `device-breakdown.png`

3. **Update the carousel in `/app/page.tsx`**

   Replace the placeholder divs with actual images. For example:

   ```tsx
   // Replace this:
   <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
     <div className="text-center space-y-2">
       <p className="text-sm text-muted-foreground font-semibold">
         Add your Google Search Console screenshot here
       </p>
     </div>
   </div>

   // With this:
   <img
     src="/images/google-search-console/performance-overview.png"
     alt="Google Search Console Performance Overview"
     className="w-full h-full object-contain rounded-lg"
   />
   ```

## Tips for Great Screenshots

- Use high resolution images (at least 1920x1080)
- Crop to show the most important data
- Make sure text is readable
- Use light mode for better visibility on projectors
- Remove any sensitive church-specific information if needed

## Quick Edit Instructions

Find line ~777 in `/app/page.tsx` and replace each `<div className="aspect-video bg-muted...">` with an `<img>` tag pointing to your image.
