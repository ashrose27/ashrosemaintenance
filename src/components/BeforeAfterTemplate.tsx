import { BeforeAfterSlider } from './BeforeAfterSlider';

export const BeforeAfterTemplate = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Project Transformation</h2>
      
      <BeforeAfterSlider
        beforeImage="https://i.imgur.com/YOUR_BEFORE_IMAGE_ID.jpg"
        afterImage="https://i.imgur.com/YOUR_AFTER_IMAGE_ID.jpg"
        className="w-full max-w-3xl mx-auto"
      />
      
      <p className="text-center mt-4 text-muted-foreground">
        Drag the slider to see the transformation
      </p>
    </div>
  );
};

// Usage example in your main page:
// <BeforeAfterTemplate />

// Steps to use:
// 1. Upload your before image to imgur.com
// 2. Copy the direct image link (ends with .jpg, .png, etc.)
// 3. Replace "YOUR_BEFORE_IMAGE_ID" with your actual imgur ID
// 4. Repeat for after image
// 5. Import and use the component where needed

// Example imgur URLs:
// https://i.imgur.com/abc123.jpg
// https://i.imgur.com/def456.png